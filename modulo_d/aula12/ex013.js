var agora = new Date();
var diaDaSemana = agora.getDay(); /*Chamando o método getDay que copia 
o dia da semana da máquina em que o programa está rodando
Esse método retorna um número referente ao dia da semana: 
  0 = Domingo
  1 = Segunda-feira
  2 = Terça-feira
  3 = Quarta-feira
  4 = Quinta-feira
  5 = Sexta-feira
  6 = Sábado
*/
switch (diaDaSemana) {
  case 0:
    console.log('Domingo');
    break
  case 1:
    console.log('Segunda-feira');
    break
  case 2:
    console.log('Terça-feira');
    break
  case 3:
    console.log('Quarta-feira');
    break
  case 4:
    console.log('Quinta-feira');
    break
  case 5:
    console.log('Sexta-feira');
    break
  case 6:
    console.log('Sábado');
    break
  default:
    console.log('[ERRO] Dia da semana inválido!');
    break
}