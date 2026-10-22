const motorista = {
    idade: 18,
    temCNH:true,
    temCarro: false

}
console.log(motorista)
motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista)


//01 - Dados de um produto/Crie um objeto chamado produto com as propriedades nome, marca, preco e disponivel. Exiba separadamente o nome e o preço do produto no console

const produtos= {
    nome:"bolsa",
    marca: "versace",
    preço:10.000,
    disponivel: false,



}

console.log(produtos)
produtos.nome= "bolsa";
produtos.preço= true;

console.log(produtos.nome)
console.log(produtos.preço)


//laço de repetição//
// for(let contador= 0; contador <= 100; contador++)
//     console.log(contador)


// Atividade-02 Receba um número inteiro em uma variável e exiba sua tabuada de multiplicação de 1 a 10.

let numero= 7;
for(let contador= 1; contador <=10; contador++ ) {    
console.log(`${contador} x ${numero}= ${contador * numero}`)

    
}

let contador= 1;
let numerowhile=12;
while(contador <= 10 ){
  console.log(contador * numerowhile);
  contador++;
}

//Atividade 3 - Contagem Regressiva-Exiba os números pares de 20 até 0, em ordem decrescente.




