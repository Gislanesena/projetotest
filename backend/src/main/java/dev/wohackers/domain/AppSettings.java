package dev.wohackers.domain;

public class AppSettings {
    private boolean notificacoes = true;
    private boolean autosave = true;

    public boolean isNotificacoes() { return notificacoes; }
    public void setNotificacoes(boolean notificacoes) { this.notificacoes = notificacoes; }
    public boolean isAutosave() { return autosave; }
    public void setAutosave(boolean autosave) { this.autosave = autosave; }
}
