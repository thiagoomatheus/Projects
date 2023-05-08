let range = document.querySelector("#escolha-plano input[type= range]");
let valorRange = 2;
let pageview = document.querySelector("#pageview p");
let tipoPlano = document.querySelector("#periodo-plano");
let preco = 0;
let periodo = "mês";
let precoPeriodo = document.querySelector("#preco-periodo")
const simboloMoeda = "R$";

let planos = [];

function CadastraPlano(nomePlano,pageview,precoMensal) {
    this.nomePlano = nomePlano;
    this.pageview = pageview;
    this.precoMensal = precoMensal;
}

function addPlano(nomePlano) {
    planos.push(nomePlano);
}

let plano1 = new CadastraPlano("plano1","10K",8.00);

addPlano(plano1)

let plano2 = new CadastraPlano("plano2","50K",12.00);

addPlano(plano2)

let plano3 = new CadastraPlano("plano3","100K",16.00);

addPlano(plano3)

let plano4 = new CadastraPlano("plano4","500K",24.00);

addPlano(plano4)

let plano5 = new CadastraPlano("plano5","1M",36.00);

addPlano(plano5)

inserePlano(valorRange)
inserePrecoEPeriodo()

range.addEventListener("input", function () {
    valorRange = parseInt(range.value);
    marcaProgressoRange(valorRange);
    inserePlano(valorRange);
    inserePrecoEPeriodo()
})

function inserePlano(input) {

    if (input === 0) {
        pageview.textContent = `${planos[input].pageview} PAGEVIEWS`;
    }
    else if (input === 1) {
        pageview.textContent = `${planos[input].pageview} PAGEVIEWS`;
    }
    else if (input === 2) {
        pageview.textContent = `${planos[input].pageview} PAGEVIEWS`;
    }
    else if (input === 3) {
        pageview.textContent = `${planos[input].pageview} PAGEVIEWS`;
    }
    else if (input === 4)  {
        pageview.textContent = `${planos[input].pageview} PAGEVIEWS`;
    }
}

function inserePrecoEPeriodo() {

    retornaPreco(valorRange);
    retornaPeriodo();
    
    precoPeriodo.innerHTML = `<span id= "preco">${simboloMoeda} ${preco.toFixed(2)}</span> <span id= "periodo">/ ${periodo}</span>`;
    
    tipoPlano.addEventListener("click", function () { 
        
        retornaPreco(valorRange);
        retornaPeriodo();
    
        precoPeriodo.textContent = `${simboloMoeda} ${preco.toFixed(2)} / ${periodo}`;

        precoPeriodo.innerHTML = `<span id= "preco">${simboloMoeda} ${preco.toFixed(2)}</span> <span id= "periodo">/ ${periodo}</span>`;
     
    })
        
}

function marcaProgressoRange(input) {
    if (input === 0) {
        range.style.cssText = "background: var(--Light-Grayish-Blue)";
    }
    else if (input === 1) {
        range.style.cssText = "background: linear-gradient(to left, var(--Light-Grayish-Blue) 75%, var(--Strong-Cyan) 1px)";
    }
    else if (input === 2) {
        range.style.cssText = "background: linear-gradient(to left, var(--Light-Grayish-Blue) 50%, var(--Strong-Cyan) 1px)";
    }
    else if (input === 3) {
        range.style.cssText = "background: linear-gradient(to left, var(--Light-Grayish-Blue) 25%, var(--Strong-Cyan) 1px";
    }
    else {
        range.style.cssText = "background: var(--Strong-Cyan)";
    }
}

function retornaPreco(input) {

    if (tipoPlano.checked !== true) {

        if (input === 0) {
            preco = planos[input].precoMensal;
        }
        else if (input === 1) {
            preco = planos[input].precoMensal;
        }
        else if (input === 2) {
            preco = planos[input].precoMensal;
        }
        else if (input === 3) {
            preco = planos[input].precoMensal;
        }
        else if (input === 4) {
            preco = planos[input].precoMensal;
        }
    }

    else {

        if (input === 0) {
            preco = parseFloat(((planos[input].precoMensal * 12.00) - ((planos[input].precoMensal * 12.00) * 0.25)));
        }
        else if (input === 1) {
            preco = parseFloat(((planos[input].precoMensal * 12.00) - ((planos[input].precoMensal * 12.00) * 0.25)));
        }
        else if (input === 2) {
            preco = parseFloat(((planos[input].precoMensal * 12.00) - ((planos[input].precoMensal * 12.00) * 0.25)));
        }
        else if (input === 3) {
            preco = parseFloat(((planos[input].precoMensal * 12.00) - ((planos[input].precoMensal * 12.00) * 0.25)));
        }
        else if (input === 4) {
            preco = parseFloat(((planos[input].precoMensal * 12.00) - ((planos[input].precoMensal * 12.00) * 0.25)));
        }
    }
}

function retornaPeriodo() {
    if (tipoPlano.checked === true) {
        periodo = "ano";
    }

    if (tipoPlano.checked !== true) {
        periodo = "mês";
    }
}