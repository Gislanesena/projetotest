package dev.wohackers.domain;

import java.util.LinkedHashMap;
import java.util.Map;

public class Evaluation {
    private String id;
    private String teamId;
    private String eventId;
    private String mentorId;
    private String mentorNome;
    private String data;
    private String hora;
    private Map<String, CriterionScore> scores = new LinkedHashMap<>();

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTeamId() { return teamId; }
    public void setTeamId(String teamId) { this.teamId = teamId; }
    public String getEventId() { return eventId; }
    public void setEventId(String eventId) { this.eventId = eventId; }
    public String getMentorId() { return mentorId; }
    public void setMentorId(String mentorId) { this.mentorId = mentorId; }
    public String getMentorNome() { return mentorNome; }
    public void setMentorNome(String mentorNome) { this.mentorNome = mentorNome; }
    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }
    public Map<String, CriterionScore> getScores() { return scores; }
    public void setScores(Map<String, CriterionScore> scores) { this.scores = scores; }

    public static class CriterionScore {
        private int nota;
        private String comentario;

        public int getNota() { return nota; }
        public void setNota(int nota) { this.nota = nota; }
        public String getComentario() { return comentario; }
        public void setComentario(String comentario) { this.comentario = comentario; }
    }
}
