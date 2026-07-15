package dev.wohackers.dto;

import jakarta.validation.constraints.NotBlank;

public class IdentifyRequest {
    @NotBlank
    private String nome;
    @NotBlank
    private String pin;

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getPin() { return pin; }
    public void setPin(String pin) { this.pin = pin; }
}
