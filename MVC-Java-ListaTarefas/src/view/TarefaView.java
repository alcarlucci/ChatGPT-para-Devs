package view;

import java.util.List;

public class TarefaView {
    public void mostrarTarefas(List<String> tarefas) {
        System.out.println("Lista de Tarefas:");
        for (int i = 0; i < tarefas.size(); i++) {
            System.out.println((i + 1) + ". " + tarefas.get(i));
        }
    }
}
