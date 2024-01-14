saldo = parseInt(prompt("Informe a quantidade de peças inicial do estoque: "))

window.document.write("Saldo inicial: " + saldo + "<br>")

while (true){
tipo = parseInt(prompt("Informe o tipo de Entrada: [1 Para entrada/ 2 Para saída]"))
quantidade = parseInt(prompt("Informe a quantidade: "))

if (tipo == 1) { 
saldo = saldo + quantidade;
window.document.write("Entrada de peças no estoque: " + quantidade + "<br>")
}

if (tipo == 2){
    if (saldo >= quantidade){
        saldo = saldo - quantidade;
        window.document.write("Saída de peças no estoque: " + quantidade + "<br>")
    }

    else {
        window.document.write("Saldo insuficiente" + "<br>")
        window.alert("Saldo insuficiente")
    }
}

window.document.write("Quantidade Final de peças no estoque:" + saldo + "<br>")

encerrar = prompt("Deseja finalizar? [S/N]")
if (encerrar == 's'){
    break
}
}

window.document.write("Sistema Finalizado" + "<br>") 
