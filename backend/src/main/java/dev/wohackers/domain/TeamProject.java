package dev.wohackers.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class TeamProject {
    private ProjectInfo info = new ProjectInfo();
    private Desenvolvimento desenvolvimento = new Desenvolvimento();
    private String documentacao = "";
    private Arquitetura arquitetura = new Arquitetura();
    private Backlog backlog = new Backlog();
    private Pitch pitch = new Pitch();
    private List<Anexo> anexos = new ArrayList<>();
    private List<Participant> participants = new ArrayList<>();
    private List<HistoryEntry> history = new ArrayList<>();
    private XpFlags xpFlags = new XpFlags();

    public ProjectInfo getInfo() { return info; }
    public void setInfo(ProjectInfo info) { this.info = info; }
    public Desenvolvimento getDesenvolvimento() { return desenvolvimento; }
    public void setDesenvolvimento(Desenvolvimento desenvolvimento) { this.desenvolvimento = desenvolvimento; }
    public String getDocumentacao() { return documentacao; }
    public void setDocumentacao(String documentacao) { this.documentacao = documentacao; }
    public Arquitetura getArquitetura() { return arquitetura; }
    public void setArquitetura(Arquitetura arquitetura) { this.arquitetura = arquitetura; }
    public Backlog getBacklog() { return backlog; }
    public void setBacklog(Backlog backlog) { this.backlog = backlog; }
    public Pitch getPitch() { return pitch; }
    public void setPitch(Pitch pitch) { this.pitch = pitch; }
    public List<Anexo> getAnexos() { return anexos; }
    public void setAnexos(List<Anexo> anexos) { this.anexos = anexos; }
    public List<Participant> getParticipants() { return participants; }
    public void setParticipants(List<Participant> participants) { this.participants = participants; }
    public List<HistoryEntry> getHistory() { return history; }
    public void setHistory(List<HistoryEntry> history) { this.history = history; }
    public XpFlags getXpFlags() { return xpFlags; }
    public void setXpFlags(XpFlags xpFlags) { this.xpFlags = xpFlags; }

    public static class ProjectInfo {
        private String nome = "";
        private String slogan = "";
        private String problema = "";
        private String solucao = "";
        private String objetivos = "";
        private String publico = "";
        private String mercado = "";
        private String diferencial = "";
        private String pitchCurto = "";

        public String getNome() { return nome; }
        public void setNome(String nome) { this.nome = nome; }
        public String getSlogan() { return slogan; }
        public void setSlogan(String slogan) { this.slogan = slogan; }
        public String getProblema() { return problema; }
        public void setProblema(String problema) { this.problema = problema; }
        public String getSolucao() { return solucao; }
        public void setSolucao(String solucao) { this.solucao = solucao; }
        public String getObjetivos() { return objetivos; }
        public void setObjetivos(String objetivos) { this.objetivos = objetivos; }
        public String getPublico() { return publico; }
        public void setPublico(String publico) { this.publico = publico; }
        public String getMercado() { return mercado; }
        public void setMercado(String mercado) { this.mercado = mercado; }
        public String getDiferencial() { return diferencial; }
        public void setDiferencial(String diferencial) { this.diferencial = diferencial; }
        public String getPitchCurto() { return pitchCurto; }
        public void setPitchCurto(String pitchCurto) { this.pitchCurto = pitchCurto; }
    }

    public static class Desenvolvimento {
        private String texto = "";
        private String repo = "";
        private List<Map<String, Object>> tarefas = new ArrayList<>();
        private List<Map<String, Object>> links = new ArrayList<>();

        public String getTexto() { return texto; }
        public void setTexto(String texto) { this.texto = texto; }
        public String getRepo() { return repo; }
        public void setRepo(String repo) { this.repo = repo; }
        public List<Map<String, Object>> getTarefas() { return tarefas; }
        public void setTarefas(List<Map<String, Object>> tarefas) { this.tarefas = tarefas; }
        public List<Map<String, Object>> getLinks() { return links; }
        public void setLinks(List<Map<String, Object>> links) { this.links = links; }
    }

    public static class Arquitetura {
        private String tecnologias = "";
        private String frameworks = "";
        private String banco = "";
        private String cloud = "";
        private String apis = "";
        private String bibliotecas = "";
        private String ferramentas = "";
        private String descricao = "";
        private String fluxograma = "";

        public String getTecnologias() { return tecnologias; }
        public void setTecnologias(String tecnologias) { this.tecnologias = tecnologias; }
        public String getFrameworks() { return frameworks; }
        public void setFrameworks(String frameworks) { this.frameworks = frameworks; }
        public String getBanco() { return banco; }
        public void setBanco(String banco) { this.banco = banco; }
        public String getCloud() { return cloud; }
        public void setCloud(String cloud) { this.cloud = cloud; }
        public String getApis() { return apis; }
        public void setApis(String apis) { this.apis = apis; }
        public String getBibliotecas() { return bibliotecas; }
        public void setBibliotecas(String bibliotecas) { this.bibliotecas = bibliotecas; }
        public String getFerramentas() { return ferramentas; }
        public void setFerramentas(String ferramentas) { this.ferramentas = ferramentas; }
        public String getDescricao() { return descricao; }
        public void setDescricao(String descricao) { this.descricao = descricao; }
        public String getFluxograma() { return fluxograma; }
        public void setFluxograma(String fluxograma) { this.fluxograma = fluxograma; }
    }

    public static class Backlog {
        private List<Map<String, Object>> todo = new ArrayList<>();
        private List<Map<String, Object>> doing = new ArrayList<>();
        private List<Map<String, Object>> done = new ArrayList<>();

        public List<Map<String, Object>> getTodo() { return todo; }
        public void setTodo(List<Map<String, Object>> todo) { this.todo = todo; }
        public List<Map<String, Object>> getDoing() { return doing; }
        public void setDoing(List<Map<String, Object>> doing) { this.doing = doing; }
        public List<Map<String, Object>> getDone() { return done; }
        public void setDone(List<Map<String, Object>> done) { this.done = done; }
    }

    public static class Pitch {
        private String problema = "";
        private String solucao = "";
        private String mercado = "";
        private String modelo = "";
        private String diferencial = "";
        private String roadmap = "";
        private String impacto = "";

        public String getProblema() { return problema; }
        public void setProblema(String problema) { this.problema = problema; }
        public String getSolucao() { return solucao; }
        public void setSolucao(String solucao) { this.solucao = solucao; }
        public String getMercado() { return mercado; }
        public void setMercado(String mercado) { this.mercado = mercado; }
        public String getModelo() { return modelo; }
        public void setModelo(String modelo) { this.modelo = modelo; }
        public String getDiferencial() { return diferencial; }
        public void setDiferencial(String diferencial) { this.diferencial = diferencial; }
        public String getRoadmap() { return roadmap; }
        public void setRoadmap(String roadmap) { this.roadmap = roadmap; }
        public String getImpacto() { return impacto; }
        public void setImpacto(String impacto) { this.impacto = impacto; }
    }

    public static class Anexo {
        private String id;
        private String nome;
        private String tamanho;
        private String kind;
        private String dataUrl;

        public String getId() { return id; }
        public void setId(String id) { this.id = id; }
        public String getNome() { return nome; }
        public void setNome(String nome) { this.nome = nome; }
        public String getTamanho() { return tamanho; }
        public void setTamanho(String tamanho) { this.tamanho = tamanho; }
        public String getKind() { return kind; }
        public void setKind(String kind) { this.kind = kind; }
        public String getDataUrl() { return dataUrl; }
        public void setDataUrl(String dataUrl) { this.dataUrl = dataUrl; }
    }

    public static class Participant {
        private String nome;
        private String pin;

        public String getNome() { return nome; }
        public void setNome(String nome) { this.nome = nome; }
        public String getPin() { return pin; }
        public void setPin(String pin) { this.pin = pin; }
    }

    public static class HistoryEntry {
        private String participante;
        private String data;
        private String hora;
        private String campo;
        private String anterior;
        private String novo;
        private String tipo;

        public String getParticipante() { return participante; }
        public void setParticipante(String participante) { this.participante = participante; }
        public String getData() { return data; }
        public void setData(String data) { this.data = data; }
        public String getHora() { return hora; }
        public void setHora(String hora) { this.hora = hora; }
        public String getCampo() { return campo; }
        public void setCampo(String campo) { this.campo = campo; }
        public String getAnterior() { return anterior; }
        public void setAnterior(String anterior) { this.anterior = anterior; }
        public String getNovo() { return novo; }
        public void setNovo(String novo) { this.novo = novo; }
        public String getTipo() { return tipo; }
        public void setTipo(String tipo) { this.tipo = tipo; }
    }

    public static class XpFlags {
        private boolean docCreated;
        private boolean readme;
        private boolean backlogDone;
        private boolean pitchDone;

        public boolean isDocCreated() { return docCreated; }
        public void setDocCreated(boolean docCreated) { this.docCreated = docCreated; }
        public boolean isReadme() { return readme; }
        public void setReadme(boolean readme) { this.readme = readme; }
        public boolean isBacklogDone() { return backlogDone; }
        public void setBacklogDone(boolean backlogDone) { this.backlogDone = backlogDone; }
        public boolean isPitchDone() { return pitchDone; }
        public void setPitchDone(boolean pitchDone) { this.pitchDone = pitchDone; }
    }
}
