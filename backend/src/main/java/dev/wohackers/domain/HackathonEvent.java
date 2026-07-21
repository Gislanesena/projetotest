package dev.wohackers.domain;

public class HackathonEvent {
    private String id;
    private String nome;
    private String emoji;
    private String data;
    private String tema;
    private String descricao;
    private String problema;
    private String regras;
    private String edital;
    private String editalDataUrl;
    private String status;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEmoji() { return emoji; }
    public void setEmoji(String emoji) { this.emoji = emoji; }
    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
    public String getTema() { return tema; }
    public void setTema(String tema) { this.tema = tema; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public String getProblema() { return problema; }
    public void setProblema(String problema) { this.problema = problema; }
    public String getRegras() { return regras; }
    public void setRegras(String regras) { this.regras = regras; }
    public String getEdital() { return edital; }
    public void setEdital(String edital) { this.edital = edital; }
    public String getEditalDataUrl() { return editalDataUrl; }
    public void setEditalDataUrl(String editalDataUrl) { this.editalDataUrl = editalDataUrl; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
