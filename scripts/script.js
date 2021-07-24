let contador = 0;

function selecionarItem(elemento){

    const elementoMarcado = document.querySelector(".comida .verdinho");
    
    if(elementoMarcado !== null){
        contador--;
        elementoMarcado.classList.remove("verdinho");
    }

    contador++;
    elemento.classList.add("verdinho");

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
    
    if(contador === 3){
        const elemento = document.querySelector(".concluir-selecao");
        elemento.innerHTML = "<p>Fechar pedido</p>";
        elemento.classList.add("concluir-compra");
    }
}