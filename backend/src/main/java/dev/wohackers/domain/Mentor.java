package dev.wohackers.domain;

import java.util.ArrayList;
import java.util.List;

public class Mentor {
    private String id;
    private String nome;
    private String email;
    private String usuario;
    private String senha;
    private String especialidade;
    private String empresa;
    private String cargo;
    private String bio;
    private List<String> eventIds = new ArrayList<>();

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getUsuario() { return usuario; }
    public void setUsuario(String usuario) { this.usuario = usuario; }
    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
    public String getEspecialidade() { return especialidade; }
    public void setEspecialidade(String especialidade) { this.especialidade = especialidade; }
    public String getEmpresa() { return empresa; }
    public void setEmpresa(String empresa) { this.empresa = empresa; }
    public String getCargo() { return cargo; }
    public void setCargo(String cargo) { this.cargo = cargo; }
    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }
    public List<String> getEventIds() { return eventIds; }
    public void setEventIds(List<String> eventIds) { this.eventIds = eventIds; }
}
