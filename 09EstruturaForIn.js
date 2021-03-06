/*Estrutura for/in 
  para percorrer array ou objeto
*/

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] //usando array

for (let i in notas) { //usar let para deixar a variavel local
    console.log(i, notas[i])
}
/* 0 6.7
   1 7.4
   2 9.8
   3 8.1
   4 7.7 
*/

const pessoa = {   //usando object
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) { //usar let para deixar a variavel local
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
/*nome = Ana
  sobrenome = Silva
  idade = 29
  peso = 64
*/