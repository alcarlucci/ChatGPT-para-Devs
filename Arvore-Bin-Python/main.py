from binary_tree import BinaryTree

# Criar uma árvore binária vazia
tree = BinaryTree()

# Inserir valores na árvore
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(2)
tree.insert(7)

# Buscar valores na árvore
print("Buscar o número '7':")
print(tree.search(7))  # Deve imprimir True

print("Buscar o número '12':")
print(tree.search(12))  # Deve imprimir False
