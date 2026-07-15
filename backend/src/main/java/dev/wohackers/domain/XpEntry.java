package dev.wohackers.domain;

public class XpEntry {
    private String id;
    private String teamId;
    private String acao;
    private int xp;
    private String data;
    private String hora;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTeamId() { return teamId; }
    public void setTeamId(String teamId) { this.teamId = teamId; }
    public String getAcao() { return acao; }
    public void setAcao(String acao) { this.acao = acao; }
    public int getXp() { return xp; }
    public void setXp(int xp) { this.xp = xp; }
    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }
}
