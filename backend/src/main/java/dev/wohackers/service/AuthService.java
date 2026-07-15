package dev.wohackers.service;

import dev.wohackers.domain.Mentor;
import dev.wohackers.domain.Role;
import dev.wohackers.domain.Team;
import dev.wohackers.domain.TeamProject;
import dev.wohackers.dto.AuthResponse;
import dev.wohackers.dto.IdentifyRequest;
import dev.wohackers.dto.LoginRequest;
import dev.wohackers.security.Session;
import dev.wohackers.store.AppStore;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class AuthService {

    private static final String ADMIN_USER = "adminwo";
    private static final String ADMIN_PASS = "wohackeei9";
    private static final Set<String> FORBIDDEN_PINS = Set.of("1234", "4321", "0000", "1111", "9999");

    private final AppStore store;
    private final Map<String, Session> sessions = new ConcurrentHashMap<>();

    public AuthService(AppStore store) {
        this.store = store;
    }

    public AuthResponse login(LoginRequest request) {
        String user = request.getUsername().trim();
        String pass = request.getPassword();

        if (ADMIN_USER.equalsIgnoreCase(user) && ADMIN_PASS.equals(pass)) {
            return openSession(user, Role.admin, "Admin WoHackers", null, null, false);
        }

        Team team = store.findTeamByUsuario(user);
        if (team != null && pass.equals(team.getSenha())) {
            return openSession(user, Role.equipe, "Equipe " + team.getNome(), team.getId(), null, true);
        }

        Mentor mentor = store.findMentorByUsuario(user);
        if (mentor != null && pass.equals(mentor.getSenha())) {
            return openSession(user, Role.mentora, mentor.getNome(), null, mentor.getId(), false);
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário ou senha inválidos.");
    }

    public AuthResponse identify(String token, IdentifyRequest request) {
        Session session = require(token);
        if (session.getRole() != Role.equipe || session.getTeamId() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Identificação disponível apenas para equipes.");
        }

        String nome = request.getNome().trim();
        String pin = request.getPin().trim();
        if (!pin.matches("\\d{4}")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O PIN deve ter exatamente 4 dígitos numéricos.");
        }
        if (FORBIDDEN_PINS.contains(pin)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Esse PIN é muito óbvio, escolha outro (não pode ser 1234, 4321, 0000, 1111 ou 9999).");
        }
        if (nome.isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Informe seu nome.");
        }

        TeamProject project = store.ensureTeamProject(session.getTeamId());
        List<TeamProject.Participant> participants = project.getParticipants();
        TeamProject.Participant existing = participants.stream()
                .filter(p -> p.getNome() != null && p.getNome().equalsIgnoreCase(nome))
                .findFirst().orElse(null);

        if (existing != null) {
            if (!pin.equals(existing.getPin())) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
                        "PIN incorreto para este nome. Se não é você, use outro nome.");
            }
        } else {
            TeamProject.Participant created = new TeamProject.Participant();
            created.setNome(nome);
            created.setPin(pin);
            participants.add(created);
        }

        session.setCurrentParticipant(nome);
        return toResponse(session, false);
    }

    public void logout(String token) {
        if (token != null) sessions.remove(token);
    }

    public Session require(String token) {
        if (token == null || token.isBlank()) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Não autenticado.");
        }
        Session session = sessions.get(token);
        if (session == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Sessão inválida ou expirada.");
        }
        return session;
    }

    public AuthResponse me(String token) {
        return toResponse(require(token), false);
    }

    private AuthResponse openSession(String username, Role role, String name, String teamId, String mentorId, boolean needsIdentification) {
        String token = UUID.randomUUID().toString().replace("-", "");
        Session session = new Session(token, username, role, name, teamId, mentorId);
        sessions.put(token, session);
        return toResponse(session, needsIdentification);
    }

    private AuthResponse toResponse(Session session, boolean needsIdentification) {
        AuthResponse res = new AuthResponse();
        res.setToken(session.getToken());
        res.setUsername(session.getUsername());
        res.setRole(session.getRole());
        res.setName(session.getName());
        res.setTeamId(session.getTeamId());
        res.setMentorId(session.getMentorId());
        res.setCurrentParticipant(session.getCurrentParticipant());
        res.setNeedsIdentification(needsIdentification && session.getCurrentParticipant() == null);
        return res;
    }
}
