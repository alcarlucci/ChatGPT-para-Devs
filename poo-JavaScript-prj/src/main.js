// Definindo uma classe base chamada "Animal"
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerBarulho() {
      console.log(`${this.nome} faz um som.`);
    }
  }
  
  // Definindo uma classe derivada (subclasse) chamada "Cachorro" que herda de "Animal"
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome); // Chama o construtor da classe base (Animal)
      this.raca = raca;
    }
  
    // Sobrescrevendo o método fazerBarulho da classe base
    fazerBarulho() {
      console.log(`${this.nome} (raça ${this.raca}) late.`);
    }
  
    // Novo método específico da classe Cachorro
    abanarRabo() {
      console.log(`${this.nome} abana o rabo.`);
    }
  }
  
  // Criando instâncias das classes
  const animalGenerico = new Animal("Animal");
  const meuCachorro1 = new Cachorro("Fido", "Golden Retriever");
  const meuCachorro2 = new Cachorro("Lele", "Salsicha")
  
  // Chamando métodos
  animalGenerico.fazerBarulho(); // Saída: "Bicho faz um som."
  meuCachorro1.fazerBarulho(); // Saída: "Fido (raça Golden Retriever) late."
  meuCachorro1.abanarRabo(); // Saída: "Fido abana o rabo."
  meuCachorro2.fazerBarulho(); // Saída: "Fido (raça Golden Retriever) late."
  meuCachorro2.abanarRabo(); // Saída: "Fido abana o rabo."
  