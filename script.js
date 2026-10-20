//console.log() mostra uma informação no console 
console.log("Olá, mundo! bibidi bobidi bu");
console.log(2* "7");

 console.log(typeof "Ola, mundo!") // string
 console.log(typeof 13)// number
 console.log(typeof 20.6)// number
 console.log(typeof true)//boolean
 console.log(typeof false)//boolean

 //váriavel
 //const não pode ter seu valor alterado durante o programa
 const nome="Abel";
 console.log(nome);

//let pode ter seu valor duarnte o programa
 let idade =17;
console.log(idade);
console.log("Olá " + nome +", que tem "+ idade + " anos.")

 idade= 18;
 console.log(idade);
 console.log(`Olá ${nome}, que tem ${idade} anos.`)
 //nome, peso
 let nome2 = "faye";
 console.log(nome2);
 let peso = 58
 console.log(peso)
console.log(`A ${nome2}, pesa ${peso} a mais do que os irmão`);

nome2 = "jenny";
console.log(nome2)
peso = 60
console.log(peso)
console.log(`A ${nome2}, pesa ${peso} a mais do que a irmã`);

//metodos de string
const texto= "dont call me gaga"
//conta quantos caracteres a string tem
console.log(texto.length)
// altera todas as letras para maísculo
console.log(texto.toUpperCase())
//console.log(texto.toLowerCase()) altera todas as letras para minúsculo

const nome_completo= "Jéssica cirino da silva"
console.log(nome_completo.includes("cirino"))//true
console.log( 10>5)//true
console.log( 10<5)//false
console.log( 10>= 10)//true
console.log( 10<= 5)//false
console.log("10"== 10)//true
console.log("10"=== 10)//false
console.log(10!== 5)//true

const idadePessoa=17

console.log(idadePessoa>= 18) //false
console.log(idadePessoa>= 16)//true

const nome_completo2 = "Diana cristina de medeiros"
console.log(nome_completo2=="Diana cristina de medeios")//false

console.log(nome_completo2=="Diana cristina de medeiros")//true

//coletamos a idade da pessoa
let pessoaidade= 14;
//verificar se a idade é maior ou igual a 18
if(pessoaidade>=18){
    //se maior ou igual a 18 então ela é maior de idade
console.log("já pode ser preso haaahahh!")
} else{
    //senão, então ela é menor de idade
    console.log("Não vai pra balada!👄")
}
//coletamos a idade da pessoa
let idadevotação= 16
//verificar se a pessoa é maior que 70
if(idadevotação> 70){
    console.log("Você não é obrigado a votar😒")
}else if(idadevotação>= 18){
    // senão se a idade da pessoa for maior ou igual a 18
    console.log("Vai votar sim!")
}else if(idadevotação>=16){
    // senão se a idade da pessoa for maior ou igual a 16
    console.log("você não é obrigado a votar, mas queira pode!")
} else{
    // senão for nenhuma das alternativas anteriores
    console.log("Você não pode votar")
}

//atividade1  — Aprovação escolar
//Receba a média final de um aluno. Se a média for **maior ou igual a 7**, informe "Aprovado". Caso contrário, informe "Reprovado".
let mediaaluno=10;

if(mediaaluno>=7){
    console.log("Você foi aprovado!")
}else if(mediaaluno<=7){
console.log("Você foi reprovado!")
}

//atividade2 -Comparação de dois números//Receba dois números e informe qual deles é o **maior**. Se os dois forem iguais, informe que houve **empate*
let numero1 = 12;
let numero2 = 10;

if (numero1 > numero2) {
    console.log(`O maior número é o primeiro: ${numero1}`);
} else if (numero2 > numero1) {
    console.log(`O maior número é o segundo: ${numero2}`);
} else {
    console.log("Houve um empate!");
}


//atividade 3 -Receba uma senha e verifique se ela é igual a senai123. Se for igual, exiba "Acesso autorizado". Caso contrário, exiba "Senha incorreta".
let senhaSenai = "senai123"
if (senhaSenai === "senai123") {
 console.log("Senha correta")
} else if (senhaSenai="senai142") {
    console.log("Senha incorreta")
}

 //04 — Classificação de temperatura-Receba uma temperatura em graus Celsius e classifique-a:

let graus = 29

if (graus < 16) {
    console.log("Frio");
} else if (graus >= 16 && graus <= 25) {
    console.log("Moderado");
} else {
    console.log("Quente");
}

//05 — Classificação de nota-Receba uma nota de 0 a 10 e apresente:
let nota=10
if(nota>=9){
    console.log("excelente")
}else if(nota>=7){
console.log("bom")
} else if(nota>=5){
    console.log("regular")

} else{
    console.log("Insuficiente")
}

// 06 — Dia da semana-Receba um número inteiro de 1 a 7 e exiba o dia da semana correspondente. Considere **1 como domingo** e **7 como sábado**. Para qualquer outro número, exiba "Dia inválido".

const data = 7

if (data ==1){
    console.log("segunda")
    
}else if(data==2){
    console.log("terça")
}else if(data==3){
    console.log("quarta")
}else if(data==4){
    console.log("quinta")
}else if(data==5){
    console.log("sexta")
}else if(data==6){
    console.log("sábado")
}else if(data==7){
    console.log("domingo")
}




 























