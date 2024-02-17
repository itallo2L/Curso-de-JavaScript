//Função com um parâmetro:
function parImpar(n) {//Declarando a função com o parâmetro n
  if (n%2 == 0) {//Se o resto da divisão de n por 2 for igual à 0:
      return 'Par!';
  } else {//Se não:
      return 'Ímpar!';
  }
}
console.log(`O número é ${parImpar(245)}`); //Imprimindo o resultado