function verificar() {
  var data = new Date();
  var ano = data.getFullYear(); // Vai puxar o ano por completo do sistema
  //Ano registrado no formulário:
  var anoFormulario = document.querySelector('input#txtano'); 
  var resposta = document.querySelector('div#resposta');
  /*Se o tamanho da variável anoFormulario for igual à 0 
  ou o número do anoFormulario for maior que a variável ano, 
  mostre a mensagem de erro*/
  if (anoFormulario.value == 0 || Number(anoFormulario.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    //Armazenando os inputs masculinos e femininos pelo nome:
    var sexo = document.getElementsByName('radsex');
    //Cálculo da idade:
    var idade = ano - Number(anoFormulario.value);  
    /*Declarando a variável genero vazia 
    porque o valor vai depender da resposta do usuário*/
    var genero = '';
    /*As duas declarações a seguir seriam o mesmo que criar 
    a tag <img id="foto"> no documento HTML*/
    //Declarando a variável img recebendo uma tag img como valor:
    var img = document.createElement('img');
    //Atribuindo id="foto" na variável:
    img.setAttribute('id', 'foto');
    if (sexo[0].checked) {/*Se o sexo masculino for marcado 
    o gereno recebe 'Homem'*/
      genero = 'Homem';
      if (idade >= 0 && idade < 10) { //Criança
        img.setAttribute('src', 'imagens/baby_boy.png');
      } else if (idade < 21) { //Jovem
        img.setAttribute('src', 'imagens/young_man.png');
      } else if (idade < 50) { //Adulto
        img.setAttribute('src', 'imagens/adult_man.png');
      } else { //Idoso
        img.setAttribute('src', 'imagens/old_man.png');
      }
    } else if (sexo[1].checked) {/*Se não, se o sexo feminino for marcado 
      o gereno recebe 'Mulher'*/
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) { //Criança
        img.setAttribute('src', 'imagens/baby_girl.png');
      } else if (idade < 21) { //Jovem
        img.setAttribute('src', 'imagens/young_woman.png');
      } else if (idade <50) { //Adulta
        img.setAttribute('src', 'imagens/adult_woman.png');
      } else { //Idosa
        img.setAttribute('src', 'imagens/old_woman.png');
      }
    }
    //Centralizando o texto armazenado na variável resposta:
    resposta.style.textAlign = 'center';
    //Mudando o texto da variável resposta:
    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    //Adicionando o elemento img:
    resposta.appendChild(img);
  }
}