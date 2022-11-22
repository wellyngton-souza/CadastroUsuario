var body = document.getElementById('body');
body.style.cssText =
    'background-color: rgb(245, 245, 245);' +
    'margin: 0;' +
    'padding: 0;';
var navbar = document.getElementById('navbar');
navbar.style.cssText =
    'display: flex;' +
    'background-color: rgb(215, 24, 253);' +
    'justify-content: space-around;'+
    'align-items: center;'+
    'flex-flow: column wrap;';
var centerText = document.getElementById('centerText');
centerText.style.cssText =
    'display: flex;' +
    'flex-direction: column;' +
    'align-items: center;'+
    'justify-content: center;';
    
function ativarPesquisa() {
    var barra = document.getElementById('barra');
    if (barra.style.visibility != 'visible')
    {
        barra.style.visibility = 'visible';
    }
    else {
        barra.style.visibility = 'hidden';
    }
}

function tema_escuro() {
    var check = document.getElementById('check');
    var body = document.getElementById('body');
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var navbar = document.getElementById('navbar');
    var label = document.getElementById('label');
    var texbox = document.getElementById('texbox');
    if (check.checked)
    {
        body.style.backgroundColor = 'rgb(40,40,40)';
        body.style.color = 'white';
        button1.style.color = 'white';
        button2.style.color = 'white';
        button3.style.color = 'white';
        navbar.style.backgroundColor = 'rgb(93, 0, 112)';
        label.style.border = 'solid 0.15rem';
        label.style.padding = '0.5rem 1rem';
        label.style.borderLeft = 'transparent';
        label.style.borderRight = 'transparent';
        label.style.borderTop = 'transparent';
        texbox.style.color = 'white';
    }
    else {
        body.style.backgroundColor = 'rgb(245,245,245)';
        body.style.color = 'black';
        button1.style.color = 'black';
        button2.style.color = 'black';
        button3.style.color = 'black';
        navbar.style.backgroundColor = 'rgb(215, 24, 253)';
        label.style.border = 'none';
        texbox.style.color = 'black';
    }
}