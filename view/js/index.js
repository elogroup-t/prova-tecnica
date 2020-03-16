'use strict';
//desabilita o comportamento padrão de enviar o formulario com a tecla 'enter'
document.addEventListener('keypress', function (e) {
  if (e.key=== 'Enter') {
    e.preventDefault();
  }
});

function scriptForm() {
  let name = document.getElementById("inpName").value;
  const regexNome = /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i;

  if (!name.match(regexNome)) {
    alert('Preencha o campo de nome corretamente');
    return false;
  }

  let tel = document.getElementById('inpTel').value;
  const regexTel = /^[1-9]{2} - [0-9]{8}$/; //começa em ^[1-9] pq ddd não começa com '0'
  if (!tel.match(regexTel)) {
    alert("Preencha o campo de telefone com o formato ** - ********")
    return false;
  }

  let sel = document.getElementById('sel').value;
  if (sel == "") {
    alert("Selecione alguma opção de como nos conheceu!")
    return false;
  }
  let isRadioYesChecked = document.getElementById('yes').checked;
  let isRadioNoChecked = document.getElementById('no').checked;
  if (!isRadioYesChecked && !isRadioNoChecked) {
    alert('Marque se possui alguma rede social!')
    return false;
  }

  //esconde o input submit da tela
  document.getElementById("sub-button").style.display = 'none'
  return true;
}

function hiddenSub(bol) {
  if (bol) {
    //esconde as divs dos <i> e da <label>
    document.querySelector('.icon-div').style.display = 'none';
    document.querySelector('.qual').style.display = 'none';
  } else {
    //mostra as divs dos <i> e da <label>
    document.querySelector('.icon-div').style.display = 'block';
    document.querySelector('.qual').style.display = 'block';
  }
}


