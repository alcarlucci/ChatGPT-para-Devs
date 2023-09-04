# Prompts

1. Crie exemplos de classe e instâncias aplicando e explicando todos os conceitos de Programação Orientada a Objetos. Utilize a linguagem JavaScript para os códigos de exemplo. Adicione comentários explicativos nos códigos.

2. Me de um exemplo prático simples em JavaScript para os conceitos explicados acima.

3. Como criar o projeto JavaScript do exemplo prático acima no VSCode?

4. Como ficaria organizada a estrutura de diretórios para o exemplo anterior em JavaScrip?

## Conceitos de Programação Orientada a Objetos (POO)

Exemplos de classe e instâncias em JavaScript, explicando cada conceito de Programação Orientada a Objetos (POO) à medida que avançamos.

### Conceito 1: Classe

Uma classe é um modelo que define atributos (propriedades) e métodos (ações) que os objetos criarão com base nesse modelo.

```javascript
// Definindo uma classe chamada "Pessoa"
class Pessoa {
  // O construtor é um método especial chamado quando um objeto é criado
  constructor(nome, idade) {
    this.nome = nome; // Atributo "nome"
    this.idade = idade; // Atributo "idade"
  }

  // Método para exibir informações da pessoa
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

### Conceito 2: Instância

Uma instância é um objeto criado a partir de uma classe. Cada instância possui seus próprios valores para os atributos e pode chamar os métodos da classe.

```javascript
// Criando instâncias da classe Pessoa
const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

// Chamando o método "apresentar" em cada instância
pessoa1.apresentar(); // Saída: "Olá, meu nome é João e tenho 30 anos."
pessoa2.apresentar(); // Saída: "Olá, meu nome é Maria e tenho 25 anos."
```

### Conceito 3: Encapsulamento

O encapsulamento é o conceito de proteger os atributos de uma classe, tornando-os privados ou acessíveis apenas por métodos da classe.

```javascript
class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular; // Atributo público
    let _saldo = saldo; // Atributo privado (usando convenção com um sublinhado)

    // Método público para obter o saldo
    this.getSaldo = function () {
      return _saldo;
    };

    // Método público para depositar dinheiro
    this.depositar = function (valor) {
      if (valor > 0) {
        _saldo += valor;
        console.log(`Depósito de $${valor} realizado com sucesso.`);
      } else {
        console.log("Valor inválido para depósito.");
      }
    };
  }

  // Método público para exibir informações da conta
  mostrarInfo() {
    console.log(`Titular: ${this.titular}, Saldo: $${this.getSaldo()}`);
  }
}

// Criando uma instância da classe ContaBancaria
const minhaConta = new ContaBancaria("João", 1000);

// Acessando e alterando o saldo usando métodos públicos
console.log(minhaConta.getSaldo()); // Saída: 1000
minhaConta.depositar(500); // Saída: Depósito de $500 realizado com sucesso.
console.log(minhaConta.getSaldo()); // Saída: 1500

// Tentando acessar o saldo diretamente (não é recomendado)
console.log(minhaConta._saldo); // Saída: undefined (o atributo é privado)
```

### Conceito 4: Herança

A herança permite que uma classe herde atributos e métodos de outra classe, estabelecendo uma relação "é um".

```javascript
// Classe base
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log("O animal emite um som.");
  }
}

// Classe derivada (herda de Animal)
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da classe base
    this.raca = raca;
  }

  // Sobrescreve o método emitirSom
  emitirSom() {
    console.log("O cachorro late.");
  }
}

// Criando instâncias das classes
const animalGenerico = new Animal("Animal");
const meuCachorro = new Cachorro("Fido", "Golden Retriever");

// Chamando métodos
animalGenerico.emitirSom(); // Saída: "O animal emite um som."
meuCachorro.emitirSom(); // Saída: "O cachorro late."
```

Estes são alguns dos conceitos fundamentais da Programação Orientada a Objetos em JavaScript. Cada conceito ajuda a organizar e estruturar o código de forma mais eficiente e orientada a objetos.
