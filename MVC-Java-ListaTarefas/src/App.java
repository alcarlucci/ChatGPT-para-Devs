import controller.TarefaController;
import model.TarefaModel;
import view.TarefaView;

public class App {
    public static void main(String[] args) throws Exception {
        TarefaModel modelo = new TarefaModel();
        TarefaView visao = new TarefaView();
        TarefaController controlador = new TarefaController(modelo, visao);

        // Adicionar Tarefas
        System.out.println("\n->Incluindo tarefas...\n");
        controlador.adicionarTarefa("Fazer compras");
        controlador.adicionarTarefa("Estudar Java");
        controlador.adicionarTarefa("Lavar o carro");

        controlador.atualizarVisao();

        // Remover a segunda tarefa (índice 1)
        System.out.println("\n->Removendo tarefas...\n");
        controlador.removerTarefa(1);

        controlador.atualizarVisao();
    }
}
