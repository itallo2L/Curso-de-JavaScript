let numero = [5, 8, 2, 9, 3];
numero.push(1); //Vai adicionar o número 1 após a última posição do array
numero.sort(); //Organiza o array em ordem crescente
console.log(numero);
console.log(`O vetor tem ${numero.length} posições.`);
console.log(`O primeiro valor do vetor é: ${numero[0]}`);
/*Retorna o índice do número escolhido, nesse caso o número 4, 
que não existe no vetor, quando o indexOf não encontra 
o número escolhido ele retorna -1:*/
let posicao = numero.indexOf(4); 
if (posicao == -1 ) {//Se a posicao for igual à -1
    console.log(`O valor não foi encontrado!`);
} else {
  console.log(`O valor está na posiçãp ${posicao}`);
}