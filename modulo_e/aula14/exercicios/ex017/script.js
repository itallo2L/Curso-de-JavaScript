function calcular() {
  let numero = document.querySelector('input#txtnumero');
  let tabuada = document.querySelector('select#seltabuada');
  if (numero.value.length == 0) {//Se o tamanho do numero for igual à zero:
    window.alert('Por favor, digite um número!');
  } else {
    let n = Number(numero.value);//Convertendo o numero e adicionando em n
    tabuada.innerHTML = '';//Limpando o select
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option');//Criando o elemento option
      item.text = `${n} x ${c} = ${n * c}`; //Imprimindo o resultado
      item.value = `tab${c}`; //Valor do option
      tabuada.appendChild(item); //Adicionando o elemento filho item
    }
  }
}