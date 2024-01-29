function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();
  
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "./imagem/fotomanha.png";
    document.body.style.backgroundColor = '#9cd6ff'
  } else if (hora >= 12 && hora < 18) {
    img.src = "./imagem/fototarde.png";
    document.body.style.backgroundColor = '#c97b50'
    
  } else {
    img.src = "./imagem/fotonoite.png";
    document.body.style.backgroundColor = '#124247'
  }

}
