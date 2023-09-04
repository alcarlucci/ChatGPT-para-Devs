package model;

import java.util.ArrayList;
import java.util.List;

public class TarefaModel {
    private List<String> tarefas = new ArrayList<>();

    public void adicionarTarefa(String tarefa) {
        tarefas.add(tarefa);
    }

    public void removerTarefa(int indice) {
        if (indice >= 0 && indice < tarefas.size()) {
            tarefas.remove(indice);
        }
    }

    public List<String> getTarefas() {
        return tarefas;
    }
}
