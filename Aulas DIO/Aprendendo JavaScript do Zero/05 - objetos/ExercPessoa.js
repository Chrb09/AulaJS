/* 2) Crie uma classe para representar pessoas.
 Para cada pessoa teremos os atributos nome, peso e altura.
 As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
 Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
 do seu IMC;*/

class pessoa {
  nome;
  peso;
  altura;
  IMC;
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.IMC = peso / (altura * altura);
  }
  descrever() {
    console.log(
      "Meu nome é " + this.nome + " e meu IMC é " + this.IMC.toFixed(2)
    );
  }
}

const José = new pessoa("José", 70, 1.75);
José.descrever();
