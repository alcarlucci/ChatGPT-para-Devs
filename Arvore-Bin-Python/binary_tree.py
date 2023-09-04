class Node:
    def __init__(self, data):
        self.data = data  # O valor armazenado no nó
        self.left = None  # O filho à esquerda (inicialmente vazio)
        self.right = None  # O filho à direita (inicialmente vazio)

class BinaryTree:
    def __init__(self):
        self.root = None  # O nó raiz da árvore (inicialmente vazio)

    def insert(self, data):
        # Função para inserir um valor na árvore
        if self.root is None:
            # Se a árvore estiver vazia, o novo valor se torna a raiz
            self.root = Node(data)
        else:
            # Caso contrário, chama uma função auxiliar para inserção recursiva
            self._insert_recursive(self.root, data)

    def _insert_recursive(self, current_node, data):
        # Função auxiliar para inserir recursivamente
        if data < current_node.data:
            if current_node.left is None:
                # Inserir à esquerda se a posição estiver vazia
                current_node.left = Node(data)
            else:
                # Caso contrário, continue descendo à esquerda
                self._insert_recursive(current_node.left, data)
        elif data > current_node.data:
            if current_node.right is None:
                # Inserir à direita se a posição estiver vazia
                current_node.right = Node(data)
            else:
                # Caso contrário, continue descendo à direita
                self._insert_recursive(current_node.right, data)

    def search(self, value):
        # Função para buscar um valor na árvore
        return self._search_recursive(self.root, value)

    def _search_recursive(self, current_node, value):
        # Função auxiliar para buscar recursivamente
        if current_node is None:
            # Se atingir um nó vazio, o valor não está na árvore
            return False
        elif value == current_node.data:
            # Se o valor for encontrado, retorna True
            return True
        elif value < current_node.data:
            # Se o valor for menor, continue buscando à esquerda
            return self._search_recursive(current_node.left, value)
        else:
            # Se o valor for maior, continue buscando à direita
            return self._search_recursive(current_node.right, value)
