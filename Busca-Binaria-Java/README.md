# Prompts

1. Explique o algoritmo de Busca Binária.

2. De um exemplo prático simples de Busca Binária, utilizando a linguagem Java. Adicione comentários explicativos nos códigos. Detalhe como o código deverá ser organizado em diretórios e arquivos.

## Algoritmo de Busca Binária

A busca binária é um algoritmo eficiente para encontrar um elemento em uma lista ordenada. Ele funciona dividindo repetidamente a lista pela metade e comparando o elemento que está sendo buscado com o elemento no meio da lista. Aqui está uma explicação passo a passo do algoritmo de busca binária:

1. **Pré-requisito**: A lista em que você está buscando deve estar ordenada. A busca binária não funciona em listas desordenadas.

2. **Inicialização**: Determine o elemento que você está procurando, chamado de "elemento alvo", e defina dois índices: um índice "esquerda" para o início da lista e um índice "direita" para o final da lista.

3. **Loop Principal**: Enquanto o índice "esquerda" for menor ou igual ao índice "direita", continue o loop.

4. **Calculando o índice médio**: Calcule o índice médio da lista, que é dado por `meio = (esquerda + direita) // 2`, onde `//` representa a divisão inteira. Isso encontra o ponto médio da lista.

5. **Comparação**: Compare o elemento alvo com o elemento na posição "meio" da lista.

   - Se o elemento alvo for igual ao elemento no índice "meio", você encontrou o elemento e pode retornar o índice "meio".

   - Se o elemento alvo for menor que o elemento no índice "meio", isso significa que o elemento alvo deve estar à esquerda do meio. Nesse caso, atualize o índice "direita" para "meio - 1" e continue o loop.

   - Se o elemento alvo for maior que o elemento no índice "meio", isso significa que o elemento alvo deve estar à direita do meio. Nesse caso, atualize o índice "esquerda" para "meio + 1" e continue o loop.

6. **Fim do Loop**: Se o loop terminar e você não encontrou o elemento alvo, isso significa que o elemento não está na lista, e você pode retornar um valor especial (como -1) para indicar que a busca não teve sucesso.

A busca binária é eficiente porque a cada iteração, ela reduz pela metade o tamanho da parte da lista onde o elemento alvo pode estar. Isso contrasta com a busca linear, que pode percorrer toda a lista linearmente. Em uma lista grande, a busca binária geralmente é muito mais rápida do que a busca linear, tornando-a uma escolha valiosa para a pesquisa em listas ordenadas. No entanto, é importante notar que a busca binária só funciona em listas ordenadas.
