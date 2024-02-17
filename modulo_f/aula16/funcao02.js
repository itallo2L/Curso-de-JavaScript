//Função com mais de um parâmetro:
function soma(n1=0, n2=0) {/*Declarando a função com os parâmetros n1 e n2 valendo 0,
assim caso eles não sejam declarados não retornarão NaN (Not a Number)*/
			return n1 + n2;
}
console.log(soma(5, 5));