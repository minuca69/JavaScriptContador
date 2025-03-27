let contador = 0;

function aumentar() {
    contador++;
    atualizarValor();
}

function zerar(){
    contador = 0; 
    atualizarValor();
}

function diminuir() {
    if (contador > 0) { 
        contador--;
        atualizarValor();
    }
}

function atualizarValor() {
    document.getElementById("valor").innerText = contador;
}
