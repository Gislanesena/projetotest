package dev.wohackers.security;

import dev.wohackers.domain.Role;

public class Session {
    private final String token;
    private final String username;
    private final Role role;
    private final String name;
    private final String teamId;
    private final String mentorId;
    private String currentParticipant;

    public Session(String token, String username, Role role, String name, String teamId, String mentorId) {
        this.token = token;
        this.username = username;
        this.role = role;
        this.name = name;
        this.teamId = teamId;
        this.mentorId = mentorId;
    }

    public String getToken() { return token; }
    public String getUsername() { return username; }
    public Role getRole() { return role; }
    public String getName() { return name; }
    public String getTeamId() { return teamId; }
    public String getMentorId() { return mentorId; }
    public String getCurrentParticipant() { return currentParticipant; }
    public void setCurrentParticipant(String currentParticipant) { this.currentParticipant = currentParticipant; }
}
