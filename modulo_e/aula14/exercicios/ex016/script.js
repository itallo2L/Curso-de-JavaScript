function contar() {
  //Selecionando os inputs e armazenando nas variáveis:
  var inicio = document.querySelector('input#txtinicio');
  var fim = document.querySelector('input#txtfim');
  var passo = document.querySelector('input#txtpasso');
  var resultado = document.querySelector('div#resultado');
  //Convertendo os valores das variáveis e adicionando em outras:
  var i = Number(inicio.value);
  var f = Number(fim.value);
  var p = Number(passo.value);
  //Validando se os dados foram devidamente preenchidos:
  if (inicio.value.length == 0 || fim.value.length == 0
    || passo.value.length == 0) {//Se inicio, fim ou passo forem vazios:
    resultado.innerHTML = 'Impossível contar!';
  } else {//Se não:
    resultado.innerHTML = 'Contando: <br>';
    if (p <= 0) {//Se p menor ou igual a 0:
      window.alert('Passo inválido! Considerando Passo 1');
      p = 1;
    }
    if (i < f) {//Se i for maior que f: 
      //Contagem crescente:
      for (var c = i; c <= f; c += p) {
        //\u{1F449} adiciona um emoji de mão:
        resultado.innerHTML += `${c} \u{1F449} `;
      }
    } else {//Se não:
      //Contagem decrescente:
      for (var c = i; c >= f; c -= p) {
        resultado.innerHTML += `${c} \u{1F449} `;
      }
    }
    //\u{1F449} adiciona um emoji de bandeira:
    resultado.innerHTML += `\u{1F3C1}`;
  }
}