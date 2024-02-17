/*Declarando o objeto amigo com os atributos nome, 
sexo, peso e a função engordar:*/
let s = 'JavaScript';
upper
console.log(s.toUpperCase);

let amigo = {
  nome:'José',
   sexo:'Masculino',
    peso:85.4,
     engordar(p = 0){//Função recebe p, se não receber o p vale 0
      console.log('Engordou');
      this.peso += p;//Aumentando o atributo peso
    }
  }
  amigo.engordar(2);//Chamando a função engordar com o valor 2 como parâmetro
  console.log(`${amigo.nome} pesa ${amigo.peso}kg.`);