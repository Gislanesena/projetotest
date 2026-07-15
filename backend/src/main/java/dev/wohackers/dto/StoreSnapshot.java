package dev.wohackers.dto;

import dev.wohackers.domain.AppSettings;
import dev.wohackers.domain.Cronograma;
import dev.wohackers.domain.Evaluation;
import dev.wohackers.domain.HackathonEvent;
import dev.wohackers.domain.Mentor;
import dev.wohackers.domain.Team;
import dev.wohackers.domain.TeamProject;
import dev.wohackers.domain.XpEntry;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class StoreSnapshot {
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

    public List<HackathonEvent> getEvents() { return events; }
    public void setEvents(List<HackathonEvent> events) { this.events = events; }
    public List<Team> getTeams() { return teams; }
    public void setTeams(List<Team> teams) { this.teams = teams; }
    public List<Mentor> getMentors() { return mentors; }
    public void setMentors(List<Mentor> mentors) { this.mentors = mentors; }
    public List<Evaluation> getEvaluations() { return evaluations; }
    public void setEvaluations(List<Evaluation> evaluations) { this.evaluations = evaluations; }
    public List<XpEntry> getXpLog() { return xpLog; }
    public void setXpLog(List<XpEntry> xpLog) { this.xpLog = xpLog; }
    public Map<String, TeamProject> getTeamProjects() { return teamProjects; }
    public void setTeamProjects(Map<String, TeamProject> teamProjects) { this.teamProjects = teamProjects; }
    public Cronograma getCronograma() { return cronograma; }
    public void setCronograma(Cronograma cronograma) { this.cronograma = cronograma; }
    public AppSettings getSettings() { return settings; }
    public void setSettings(AppSettings settings) { this.settings = settings; }
    public Map<String, Object> getStats() { return stats; }
    public void setStats(Map<String, Object> stats) { this.stats = stats; }
    public List<Map<String, Object>> getChart() { return chart; }
    public void setChart(List<Map<String, Object>> chart) { this.chart = chart; }
    public List<Map<String, Object>> getRankEquipes() { return rankEquipes; }
    public void setRankEquipes(List<Map<String, Object>> rankEquipes) { this.rankEquipes = rankEquipes; }
    public List<Map<String, Object>> getRankEngajamento() { return rankEngajamento; }
    public void setRankEngajamento(List<Map<String, Object>> rankEngajamento) { this.rankEngajamento = rankEngajamento; }
    public List<Map<String, Object>> getRankMentoras() { return rankMentoras; }
    public void setRankMentoras(List<Map<String, Object>> rankMentoras) { this.rankMentoras = rankMentoras; }
}
