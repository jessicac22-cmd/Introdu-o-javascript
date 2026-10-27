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

let number= 0

while(number >= 0){

  console.log(`while: ${number}`);
  number-= 2
}

let number2= 0
do{
console.log(`do while:$ {number2}`)
number2-=2
}while(number2 > 0);



///04 - Contagem Regressiva -Exiba os números inteiros de 10 até 1 e, em seguida, a mensagem "Fim da contagem".

let number3= 10;

do{
  console.log(` do while: ${number3}`)
  number3--;

}while(number3 >= 1)
  console.log("fim da contagem")

  //listas//
  const frutas= ["Maça", " goiaba", "banana", "uva", "laranja", "melancia"]
  
  frutas[0]="perâ";
  console.log(frutas)


  console.log(frutas[0])
  console.log(frutas[2])

  console.log(frutas.length); 


  frutas.push("Manga", "melancia");


  console.log(frutas)
  
  frutas.pop()
  console.log(frutas)
  frutas.sort()

  console.log(frutas)

  //funções//

function somar(numero1, numero2){
  console.log(`A soma dos numeros é ${numero1 +numero2}`)
return numero1+ numero2;
}

const soma=somar(1,1);
//console.log(soma)//
console.log(somar(6,7));
function dividir(numero1, numero2){
  console.log(`${numero1} / ${numero2}= ${numero1/numero2}`)
}

dividir(100,2);



///EXERCÍCIOS//01 — Adicionando elementos-Crie uma lista chamada jogos com 3 jogos. Adicione mais 2 jogos ao final da lista e exiba o resultado no console.//

const jogos=["roblox", "the last of us", "Gta san andreas"]

console.log(jogos)
jogos.push("life is strange","avakin life")



//02 — Removendo o último item-Crie uma lista chamada materiais com 5 materiais escolares. Remova o último elemento e exiba a lista atualizada. Em seguida, exiba quantos elementos restaram.

const materiais escolares=["Lapis de colorir","Caneta","Caderno","Borracha","Corretivo"]
