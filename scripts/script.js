let contador = 0;
let comida;
let bebida;
let sobremesa;
let total = 0;
let precoComida;
let precoBebida;
let precoSobremesa;


function selecionarItem(elemento){

    const elementoMarcado = document.querySelector(".comida .verdinho");
    
    if(elementoMarcado !== null){
        contador--;
        elementoMarcado.classList.remove("verdinho");
    }

    contador++;
    elemento.classList.add("verdinho");

    
    const precoComida1 = document.querySelector(".comida .verdinho .fmtH4");
    const p = Number(parseFloat((precoComida1.innerHTML).replace(',', '.')));
    total += p;
    

    if(contador === 3){
        const elemento = document.querySelector(".concluir-selecao");
        elemento.innerHTML = "<p>Fechar pedido</p>";
        elemento.classList.add("concluir-compra");
    }
}

function selecionarItemBebida(elemento){

    const elementoMarcado = document.querySelector(".bebida .verdinho");

    if(elementoMarcado !== null){
        contador--;
        elementoMarcado.classList.remove("verdinho");
    }

    contador++;
    elemento.classList.add("verdinho");

    
    const precoBebida1 = document.querySelector(".bebida .verdinho .fmtH4");
    const p = Number(parseFloat((precoBebida1.innerHTML).replace(',', '.')));
    total += p;
    if(contador === 3){
        const elemento = document.querySelector(".concluir-selecao");
        elemento.innerHTML = "<p>Fechar pedido</p>";
        elemento.classList.add("concluir-compra");
    }
}

function selecionarItemSobremesa(elemento){
    const elementoMarcado = document.querySelector(".sobremesa .verdinho");
    
    if(elementoMarcado !== null){
        contador--;
        elementoMarcado.classList.remove("verdinho");
    }

    contador++;
    elemento.classList.add("verdinho");

    const precoBebida1 = document.querySelector(".sobremesa .verdinho .fmtH4");
    const p = Number(parseFloat((precoBebida1.innerHTML).replace(',', '.')));
    total += p;

    if(contador === 3){
        const elemento = document.querySelector(".concluir-selecao");
        elemento.innerHTML = "<p>Fechar pedido</p>";
        elemento.classList.add("concluir-compra");
    }
}