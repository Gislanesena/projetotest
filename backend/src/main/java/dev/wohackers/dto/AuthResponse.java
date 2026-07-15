package dev.wohackers.dto;

import dev.wohackers.domain.Role;

public class AuthResponse {
    private String token;
    private String username;
    private Role role;
    private String name;
    private String teamId;
    private String mentorId;
    private String currentParticipant;
    private boolean needsIdentification;

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getTeamId() { return teamId; }
    public void setTeamId(String teamId) { this.teamId = teamId; }
    public String getMentorId() { return mentorId; }
    public void setMentorId(String mentorId) { this.mentorId = mentorId; }
    public String getCurrentParticipant() { return currentParticipant; }
    public void setCurrentParticipant(String currentParticipant) { this.currentParticipant = currentParticipant; }
    public boolean isNeedsIdentification() { return needsIdentification; }
    public void setNeedsIdentification(boolean needsIdentification) { this.needsIdentification = needsIdentification; }
}
