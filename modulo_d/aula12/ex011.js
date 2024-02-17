var idade = 20;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) { // Se a idade for menor que 16
  console.log(`Não vota.`);
} else if (idade < 18 || idade > 65) { /*Se não, se a idade for menor que 
  18 ou maior que 65*/
  console.log(`Voto opcional`);
} else { //Se não
  console.log(`Voto obrigatório`);
}