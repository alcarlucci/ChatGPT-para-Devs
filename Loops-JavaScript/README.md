# Prompt

1. Quais são as estruturas de repetição disponíveis na linguagem JavaScript? Dê exemplos para cada uma delas.

## Resultados

JavaScript oferece várias estruturas de repetição para executar um bloco de código repetidamente enquanto uma determinada condição for verdadeira. As estruturas de repetição disponíveis em JavaScript são:

1. **for**: O loop `for` permite executar um bloco de código um número específico de vezes com base em uma condição.

   Exemplo:

   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   ```

   Isso imprimirá os números de 0 a 4.

2. **while**: O loop `while` executa um bloco de código enquanto uma condição específica for verdadeira.

   Exemplo:

   ```javascript
   let contador = 0;
   while (contador < 5) {
       console.log(contador);
       contador++;
   }
   ```

   Isso também imprimirá os números de 0 a 4.

3. **do...while**: O loop `do...while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa após a primeira execução.

   Exemplo:

   ```javascript
   let contador = 0;
   do {
       console.log(contador);
       contador++;
   } while (contador < 5);
   ```

   Isso também imprimirá os números de 0 a 4.

4. **for...in**: O loop `for...in` é usado para iterar sobre as propriedades de um objeto.

   Exemplo:

   ```javascript
   const pessoa = {
       nome: "João",
       idade: 30,
       cidade: "São Paulo"
   };

   for (const propriedade in pessoa) {
       console.log(propriedade + ": " + pessoa[propriedade]);
   }
   ```

   Isso imprimirá todas as propriedades e seus valores do objeto `pessoa`.

5. **for...of**: O loop `for...of` é usado para iterar sobre os elementos de uma estrutura de dados iterável, como um array ou uma string.

   Exemplo:

   ```javascript
   const frutas = ["maçã", "banana", "laranja"];

   for (const fruta of frutas) {
       console.log(fruta);
   }
   ```

   Isso imprimirá todas as frutas no array `frutas`.

Estas são as principais estruturas de repetição disponíveis em JavaScript. Cada uma delas tem sua própria finalidade e é útil em diferentes cenários, dependendo das necessidades do seu código.
