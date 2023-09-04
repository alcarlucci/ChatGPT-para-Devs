package controller;

import java.util.List;

import model.TarefaModel;
import view.TarefaView;

public class TarefaController {
    private TarefaModel modelo;
    private TarefaView visao;

    public TarefaController(TarefaModel modelo, TarefaView visao) {
        this.modelo = modelo;
        this.visao = visao;
    }

    public void adicionarTarefa(String tarefa) {
        modelo.adicionarTarefa(tarefa);
    }

    public void removerTarefa(int indice) {
        modelo.removerTarefa(indice);
    }

    public void atualizarVisao() {
        List<String> tarefas = modelo.getTarefas();
        visao.mostrarTarefas(tarefas);
    }
}
