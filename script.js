var textInput = document.querySelector("#input_texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g,"açe").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultCripto + '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">copiar</buttons>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g,"i").replace(/açe/g,"a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input_texto">' + resultDescripto + '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">copiar</buttons>'
}

function copiar(){
    var textocop = document.getElementById('input_texto');

    textocop.select();
    document.execCommand('copy');
    alert("texto copiado");
}
