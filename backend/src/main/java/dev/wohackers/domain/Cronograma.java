package dev.wohackers.domain;

import java.util.ArrayList;
import java.util.List;

public class Cronograma {
    private List<String> steps = new ArrayList<>();
    private int currentIndex;
    private List<HistoryItem> history = new ArrayList<>();

    public List<String> getSteps() { return steps; }
    public void setSteps(List<String> steps) { this.steps = steps; }
    public int getCurrentIndex() { return currentIndex; }
    public void setCurrentIndex(int currentIndex) { this.currentIndex = currentIndex; }
    public List<HistoryItem> getHistory() { return history; }
    public void setHistory(List<HistoryItem> history) { this.history = history; }

    public static class HistoryItem {
        private String t;
        private String txt;

        public HistoryItem() {}
        public HistoryItem(String t, String txt) {
            this.t = t;
            this.txt = txt;
        }

        public String getT() { return t; }
        public void setT(String t) { this.t = t; }
        public String getTxt() { return txt; }
        public void setTxt(String txt) { this.txt = txt; }
    }
}
