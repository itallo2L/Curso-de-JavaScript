var agora = new Date(); // viável do tipo Date
var hora = agora.getHours(); /*chamando o método getHours que copia 
as horas da máquina etual*/
console.log(`Agora são exatamente ${hora} horas`);
if (hora < 12) { // Se a hora for menor que 12
  console.log('Bom Dia!');
} else if (hora <= 18) { // Se não, Se a hora for menor ou igual a 18
  console.log('Boa Tarde!');
} else { // Se não
  console.log('Boa Noite!');
}