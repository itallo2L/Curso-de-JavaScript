let valores = [8, 1, 7, 4, 2, 9];
//for padrão:
for (let posicao = 0; posicao < valores.length; posicao++) {
  console.log(`A posição ${posicao} tem o valor: ${valores[posicao]};`);
}

let values = [8, 1, 7, 4, 2, 9];
//for in: 
for (let position in values) {//para cada position dentro de values:
  console.log(`The position ${position} has the value: ${values[position]};`);
}