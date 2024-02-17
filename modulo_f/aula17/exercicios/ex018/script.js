//Selecionando o input id="txtnumero" e armazenando em numero:
let numero = document.querySelector('input#txtnumero');
let listaResultado = document.querySelector('select#lista');
let resultado = document.querySelector('div#resultado');
let vetor = [];

function isNumero(n) {
  //Se o número n estiver entre 1 e 100 retone true:
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {//Se não, retorne false:
    return false;
  }
}

function inLista(n, l) {
  /*Se o retorno de indexOf(Number(n)) for diferente de -1, ou seja, se o
  número for encontrado no vetor, retorne true:*/
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {//Se não, retorne false:
    return false; 
  }
}

function adicionar() {
  /*Se o retorno da função isNumero for verdadeiro e o 
  retorno da função inLista for falso, execute o código abaixo:*/
  if (isNumero(numero.value) && !inLista(numero.value, vetor)) {
    //Adicionano o valor no vetor:
    vetor.push(Number(numero.value));
    //Criando um option item:
    let item = document.createElement('option');
    //Escrevendo a mensagem de adição no option:
    item.text = `Valor ${numero.value} adicionado.`;
    //Adicionando o item filho:
    listaResultado.appendChild(item);
    //Limpando o resultado:
    resultado.innerHTML = '';
  } else {//Se não:
    window.alert('Valor inválido ou já encontrado na lista.');
  }
  numero.value = '';//Limpando o conteúdo do objeto numero
  numero.focus();//Retornando o foco do cursor no objeto numero
}

function finalizar() {
  if (vetor.length == 0) {
    window.alert('Adicione valores antes de finalizar!');
  } else {
    //Declarando as variáveis para imprimir as respostas
    let total = vetor.length;
    let maior = vetor[0];
    let menor = vetor[0];
    let soma = 0;
    let media = 0;
    for (let posicao in vetor) {//Para cada posicao no vetor:
      //Somando todos os valores:
      soma += vetor[posicao];
      /*Se o vetor na posicao for maior que o maior número, 
      o maior número atual vai para trás e o menor número 
      (que agora é o maior) para frente:*/
      if(vetor[posicao] > maior)
        maior = vetor[posicao];
      /*Se o vetor na posicao for menor que o menor número, 
      o menor número atual vai para trás e o maior número 
      (que agora é o menor) para frente:*/
      if (vetor[posicao] < menor)
        menor = vetor[posicao];
    }
    //Cálculo da média:
    media = soma / total;
    resultado.innerHTML = '';//Limpando o conteúdo do resultado
    //Imprimindo os resultados
    resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    resultado.innerHTML += `<p> .</p>`;
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
  }
}