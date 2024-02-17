function carregar() {
  // Armazenando as tags em variáveis
  var mensagem = window.document.querySelector('div#mensagem');
  var imagem = window.document.querySelector('img#imagem');
  // Configurando variáveis para usar a hora do sistema
  var data = new Date();
  var hora = data.getHours();
  // Mensagem que será exibida na tela
  mensagem.innerHTML = `Agora são ${hora} horas.`;
  // Condicionando as imagens e background-color conforme a hora do sistema
  if (hora >= 1 && hora < 12) {
    imagem.src = 'imagens/morning.png';
    document.body.style.background = '#B7AB85';
  } else if (hora >= 12 && hora <= 18) {
    imagem.src = 'imagens/afternoon.png';
    document.body.style.background = '#B65715';
  } else {
    imagem.src = 'imagens/night.png';
    document.body.style.background = '#273240';
  }
}