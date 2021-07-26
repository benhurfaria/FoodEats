let contador = 0;
let comida;
let bebida;
let sobremesa;
let total = 0;
let precoComida = 0;
let precoBebida = 0;
let precoSobremesa = 0;


function selecionarItem(elemento){

    const elementoMarcado = document.querySelector(".comida .verdinho");
    
    if(elementoMarcado !== null){
        contador--;
        comida = "";
        total -= precoComida;
        elementoMarcado.classList.remove("verdinho");
    }

    contador++;
    elemento.classList.add("verdinho");

    
    const precoComida1 = document.querySelector(".comida .verdinho .fmtH4");
    precoComida = Number(parseFloat((precoComida1.innerHTML).replace(',', '.')));
    total += precoComida;
    
    const elementoMarcadoComida2 = document.querySelector(".comida .verdinho .fmtH1");
    comida = elementoMarcadoComida2.innerHTML;

    if(contador === 3){
        const elementoComida = document.querySelector(".concluir-selecao");
        montadorString(elementoComida);
        elementoComida.classList.add("concluir-compra");
    }
}

function selecionarItemBebida(elemento){

    const elementoMarcado = document.querySelector(".bebida .verdinho");

    if(elementoMarcado !== null){
        contador--;
        bebida = "";
        total -= precoBebida;
        elementoMarcado.classList.remove("verdinho");
    }

    contador++;
    elemento.classList.add("verdinho");

    
    const precoBebida1 = document.querySelector(".bebida .verdinho .fmtH4");
    precoBebida = Number(parseFloat((precoBebida1.innerHTML).replace(',', '.')));
    total += precoBebida;

    const elementoMarcadoBebida2 = document.querySelector(".bebida .verdinho .fmtH1");
    bebida = elementoMarcadoBebida2.innerHTML;

    if(contador === 3){
        const elementoBebida = document.querySelector(".concluir-selecao");
        montadorString(elementoBebida);
        elementoBebida.classList.add("concluir-compra");
    }
}

function selecionarItemSobremesa(elemento){
    const elementoMarcado = document.querySelector(".sobremesa .verdinho");
    
    if(elementoMarcado !== null){
        contador--;
        sobremesa = "";
        total -= precoSobremesa
        elementoMarcado.classList.remove("verdinho");
    }

    contador++;
    elemento.classList.add("verdinho");

    const precoSobremesa1 = document.querySelector(".sobremesa .verdinho .fmtH4");
    precoSobremesa = Number(parseFloat((precoSobremesa1.innerHTML).replace(',', '.')));
    total += precoSobremesa;

    const elementoMarcadoSobremesa2 = document.querySelector(".sobremesa .verdinho .fmtH1");
    sobremesa = elementoMarcadoSobremesa2.innerHTML;

    if(contador === 3){
        const elementoSobremesa = document.querySelector(".concluir-selecao");
        montadorString(elementoSobremesa);
        elementoSobremesa.classList.add("concluir-compra");
    }
}

function montadorString(elemento){
    let minhaString = `Olá, gostaria de fazer o pedido:\n - Prato: ${comida} \n - Bebida: ${bebida} \n - Sobremesa: ${sobremesa} \n Total: R$ ${total.toFixed(2)}`;
                            

    let transformarTexto = encodeURIComponent(minhaString);
    elemento.innerHTML = `<a href="https://wa.me/5562993822865?text=${transformarTexto}" target="_blank"><p>Fechar pedido</p></a>`;
}
