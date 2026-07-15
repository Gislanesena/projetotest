package dev.wohackers.store;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.wohackers.domain.AppSettings;
import dev.wohackers.domain.Cronograma;
import dev.wohackers.domain.Evaluation;
import dev.wohackers.domain.HackathonEvent;
import dev.wohackers.domain.Mentor;
import dev.wohackers.domain.Team;
import dev.wohackers.domain.TeamProject;
import dev.wohackers.domain.XpEntry;
import dev.wohackers.dto.StoreSnapshot;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantReadWriteLock;

@Component
public class AppStore {

    private final ObjectMapper objectMapper;
    private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();

    private List<HackathonEvent> events = new ArrayList<>();
    private List<Team> teams = new ArrayList<>();
    private List<Mentor> mentors = new ArrayList<>();
    private List<Evaluation> evaluations = new ArrayList<>();
    private List<XpEntry> xpLog = new ArrayList<>();
    private Map<String, TeamProject> teamProjects = new LinkedHashMap<>();
    private Cronograma cronograma = new Cronograma();
    private AppSettings settings = new AppSettings();
    private Map<String, Object> stats = new LinkedHashMap<>();
    private List<Map<String, Object>> chart = new ArrayList<>();
    private List<Map<String, Object>> rankEquipes = new ArrayList<>();
    private List<Map<String, Object>> rankEngajamento = new ArrayList<>();
    private List<Map<String, Object>> rankMentoras = new ArrayList<>();

    public AppStore(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @PostConstruct
    public void seed() {
        lock.writeLock().lock();
        try {
            events = new ArrayList<>(List.of(
                    event("ev1", "Hackathon Solana", "🟣", "2026-08-15", "Web3 & Blockchain",
                            "Hackathon focado em soluções descentralizadas sobre a rede Solana.",
                            "Criar aplicações reais que usem blockchain para resolver problemas do dia a dia.",
                            "Equipes de até 5 pessoas. Código deve ser produzido durante o evento.",
                            "edital-solana-2026.pdf", "andamento"),
                    event("ev2", "Hackathon AWS", "☁️", "2026-09-05", "Cloud & Serverless",
                            "Construção de soluções cloud-native usando serviços AWS.",
                            "Reduzir custo operacional de pequenas empresas com arquitetura serverless.",
                            "Uso obrigatório de ao menos 2 serviços AWS.",
                            "edital-aws-2026.pdf", "planejamento"),
                    event("ev3", "Hackathon Microsoft", "🔷", "2026-06-20", "IA & Produtividade",
                            "Soluções de produtividade usando IA no ecossistema Microsoft.",
                            "Automatizar tarefas repetitivas em ambientes corporativos.",
                            "Uso do Azure OpenAI é recomendado.",
                            "edital-microsoft-2026.pdf", "encerrado"),
                    event("ev4", "Hackathon Campus Party", "⚡", "2026-10-10", "Tech for Good",
                            "Tecnologia aplicada a causas sociais e ambientais.",
                            "Impacto social mensurável através de tecnologia acessível.",
                            "Times mistos entre universidades parceiras.",
                            "", "planejamento")
            ));

            teams = new ArrayList<>(List.of(
                    team("tm1", "ev1", "ByteGirls", "bytegirls", "senha123", "Time focado em soluções DeFi para inclusão financeira.", "#9d5cff"),
                    team("tm2", "ev1", "Phoenix", "phoenix", "senha123", "Marketplace NFT para artistas independentes.", "#b794f6"),
                    team("tm3", "ev1", "Neural", "neural", "senha123", "IA aplicada à triagem de contratos inteligentes.", "#7c3aed"),
                    team("tm4", "ev3", "404", "time404", "senha123", "Assistente virtual corporativo com Azure OpenAI.", "#4c1d95"),
                    team("tm5", "ev3", "Alpha", "alpha", "1234equipe", "Automação de relatórios internos com IA generativa.", "#c4b5fd")
            ));

            mentors = new ArrayList<>(List.of(
                    mentor("mt1", "Fernanda Reis", "fernanda@wohackers.dev", "mentora1", "1234mentora",
                            "Arquitetura de Software", "Nubank", "Staff Engineer",
                            "15 anos de experiência em sistemas distribuídos e mentoria de comunidades tech.",
                            List.of("ev1", "ev3")),
                    mentor("mt2", "Bianca Costa", "bianca@wohackers.dev", "bianca.costa", "senha123",
                            "Produto & UX", "Mercado Livre", "Head de Design",
                            "Especialista em produto digital e experiência do usuário para times early-stage.",
                            List.of("ev1")),
                    mentor("mt3", "Ana Beatriz", "ana.beatriz@wohackers.dev", "ana.beatriz", "senha123",
                            "IA & Machine Learning", "Google", "ML Engineer",
                            "Pesquisadora e mentora voluntária focada em IA aplicada a negócios.",
                            List.of("ev3"))
            ));

            evaluations = new ArrayList<>();
            xpLog = new ArrayList<>();
            teamProjects = new LinkedHashMap<>();

            cronograma = new Cronograma();
            cronograma.setSteps(new ArrayList<>(List.of(
                    "Credenciamento", "Café da manhã", "Abertura Oficial", "Apresentação do Desafio", "Formação das Equipes",
                    "Início do Desenvolvimento", "Primeira Mentoria", "Almoço", "Segunda Mentoria", "Checkpoint",
                    "Coffee Break", "Última Mentoria", "Encerramento do Desenvolvimento", "Preparação do Pitch",
                    "Apresentações", "Avaliação Final", "Premiação"
            )));
            cronograma.setCurrentIndex(2);
            cronograma.setHistory(new ArrayList<>(List.of(
                    new Cronograma.HistoryItem("09:00", "Evento iniciado"),
                    new Cronograma.HistoryItem("09:12", "Credenciamento encerrado"),
                    new Cronograma.HistoryItem("09:30", "Café da manhã encerrado")
            )));

            settings = new AppSettings();
            chart = new ArrayList<>(List.of(
                    Map.of("l", "Solana", "v", 34),
                    Map.of("l", "AWS", "v", 52),
                    Map.of("l", "Microsoft", "v", 28),
                    Map.of("l", "Campus Party", "v", 61),
                    Map.of("l", "Etherium", "v", 19)
            ));
            rankEquipes = new ArrayList<>(List.of(
                    Map.of("n", "ByteGirls", "v", "482 pts"),
                    Map.of("n", "Phoenix", "v", "451 pts"),
                    Map.of("n", "Neural", "v", "417 pts"),
                    Map.of("n", "404", "v", "388 pts"),
                    Map.of("n", "Alpha", "v", "350 pts")
            ));
            rankEngajamento = new ArrayList<>(List.of(
                    Map.of("n", "Carla Nunes", "v", "980 XP"),
                    Map.of("n", "Mariana Alves", "v", "910 XP"),
                    Map.of("n", "Julia Prado", "v", "860 XP")
            ));
            rankMentoras = new ArrayList<>(List.of(
                    Map.of("n", "Fernanda Reis", "v", "32 avaliações"),
                    Map.of("n", "Bianca Costa", "v", "27 avaliações"),
                    Map.of("n", "Ana Beatriz", "v", "21 avaliações")
            ));
            refreshStats();
        } finally {
            lock.writeLock().unlock();
        }
    }

    public StoreSnapshot snapshot() {
        lock.readLock().lock();
        try {
            return objectMapper.convertValue(buildSnapshotUnlocked(), StoreSnapshot.class);
        } finally {
            lock.readLock().unlock();
        }
    }

    public void replace(StoreSnapshot incoming) {
        lock.writeLock().lock();
        try {
            StoreSnapshot copy = objectMapper.convertValue(incoming, StoreSnapshot.class);
            this.events = copy.getEvents() != null ? new ArrayList<>(copy.getEvents()) : new ArrayList<>();
            this.teams = copy.getTeams() != null ? new ArrayList<>(copy.getTeams()) : new ArrayList<>();
            this.mentors = copy.getMentors() != null ? new ArrayList<>(copy.getMentors()) : new ArrayList<>();
            this.evaluations = copy.getEvaluations() != null ? new ArrayList<>(copy.getEvaluations()) : new ArrayList<>();
            this.xpLog = copy.getXpLog() != null ? new ArrayList<>(copy.getXpLog()) : new ArrayList<>();
            this.teamProjects = copy.getTeamProjects() != null ? new LinkedHashMap<>(copy.getTeamProjects()) : new LinkedHashMap<>();
            this.cronograma = copy.getCronograma() != null ? copy.getCronograma() : new Cronograma();
            this.settings = copy.getSettings() != null ? copy.getSettings() : new AppSettings();
            if (copy.getChart() != null) this.chart = new ArrayList<>(copy.getChart());
            if (copy.getRankEquipes() != null) this.rankEquipes = new ArrayList<>(copy.getRankEquipes());
            if (copy.getRankEngajamento() != null) this.rankEngajamento = new ArrayList<>(copy.getRankEngajamento());
            if (copy.getRankMentoras() != null) this.rankMentoras = new ArrayList<>(copy.getRankMentoras());
            refreshStats();
        } finally {
            lock.writeLock().unlock();
        }
    }

    public Team findTeamByUsuario(String usuario) {
        lock.readLock().lock();
        try {
            return teams.stream()
                    .filter(t -> t.getUsuario() != null && t.getUsuario().equalsIgnoreCase(usuario))
                    .findFirst().orElse(null);
        } finally {
            lock.readLock().unlock();
        }
    }

    public Mentor findMentorByUsuario(String usuario) {
        lock.readLock().lock();
        try {
            return mentors.stream()
                    .filter(m -> m.getUsuario() != null && m.getUsuario().equalsIgnoreCase(usuario))
                    .findFirst().orElse(null);
        } finally {
            lock.readLock().unlock();
        }
    }

    public TeamProject ensureTeamProject(String teamId) {
        lock.writeLock().lock();
        try {
            return teamProjects.computeIfAbsent(teamId, id -> {
                Team team = teams.stream().filter(t -> t.getId().equals(id)).findFirst().orElse(null);
                TeamProject project = new TeamProject();
                String nome = team != null ? team.getNome() : "Meu Projeto";
                project.getInfo().setNome(nome);
                project.setDocumentacao("# " + nome + "\n\n> Escreva aqui a documentação técnica do projeto.\n\n## Sobre\n\nDescreva o projeto.\n");
                return project;
            });
        } finally {
            lock.writeLock().unlock();
        }
    }

    private StoreSnapshot buildSnapshotUnlocked() {
        StoreSnapshot snap = new StoreSnapshot();
        snap.setEvents(events);
        snap.setTeams(teams);
        snap.setMentors(mentors);
        snap.setEvaluations(evaluations);
        snap.setXpLog(xpLog);
        snap.setTeamProjects(teamProjects);
        snap.setCronograma(cronograma);
        snap.setSettings(settings);
        snap.setStats(stats);
        snap.setChart(chart);
        snap.setRankEquipes(rankEquipes);
        snap.setRankEngajamento(rankEngajamento);
        snap.setRankMentoras(rankMentoras);
        return snap;
    }

    private void refreshStats() {
        Map<String, Object> s = new LinkedHashMap<>();
        s.put("eventos", events.size());
        s.put("equipes", teams.size());
        s.put("participantes", 76);
        s.put("mentoras", mentors.size());
        s.put("documentos", 132);
        s.put("avaliacoes", evaluations.size());
        s.put("concluidos", 22);
        s.put("andamento", 11);
        this.stats = s;
    }

    private static HackathonEvent event(String id, String nome, String emoji, String data, String tema,
                                        String descricao, String problema, String regras, String edital, String status) {
        HackathonEvent e = new HackathonEvent();
        e.setId(id); e.setNome(nome); e.setEmoji(emoji); e.setData(data); e.setTema(tema);
        e.setDescricao(descricao); e.setProblema(problema); e.setRegras(regras); e.setEdital(edital); e.setStatus(status);
        return e;
    }

    private static Team team(String id, String eventId, String nome, String usuario, String senha, String descricao, String cor) {
        Team t = new Team();
        t.setId(id); t.setEventId(eventId); t.setNome(nome); t.setUsuario(usuario);
        t.setSenha(senha); t.setDescricao(descricao); t.setCor(cor);
        return t;
    }

    private static Mentor mentor(String id, String nome, String email, String usuario, String senha,
                                 String especialidade, String empresa, String cargo, String bio, List<String> eventIds) {
        Mentor m = new Mentor();
        m.setId(id); m.setNome(nome); m.setEmail(email); m.setUsuario(usuario); m.setSenha(senha);
        m.setEspecialidade(especialidade); m.setEmpresa(empresa); m.setCargo(cargo); m.setBio(bio);
        m.setEventIds(new ArrayList<>(eventIds));
        return m;
    }
}
