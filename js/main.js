/**********************************************
 *            ARRAY DE TAXAS                 *
 * ********************************************/

let taxas = {
    dolar_americano: {
        real_brasileiro: 5.07,
        dolar_americano: 1,
        euro: 0.93,
        libra_esterlina: 0.80,
        dolar_australiano: 1.51
    },
    real_brasileiro: {
        real_brasileiro: 1,
        dolar_americano: 0.20,
        euro: 0.18,
        libra_esterlina: 0.16,
        dolar_australiano: 0.30
    },
    euro: {
        real_brasileiro: 5.46,
        dolar_americano: 1.08,
        euro: 1,
        libra_esterlina: 0.86,
        dolar_australiano: 1.63
    },
    libra_esterlina: {
        real_brasileiro: 6.36,
        dolar_americano: 1.25,
        euro: 1.16,
        libra_esterlina: 1,
        dolar_australiano: 1.90
    },
    dolar_australiano: {
        real_brasileiro: 3.36,
        dolar_americano: 0.66,
        euro: 0.61,
        libra_esterlina: 0.53,
        dolar_australiano: 1
    }
}

let simbolos = {
    real_brasileiro: "BRL",
    dolar_americano: "USD",
    euro: "EUR",
    libra_esterlina:"GBP",
    dolar_australiano: "AUD"
}

/**********************************************
 *                 CONVERSÃO                  *
 * ********************************************/

function conversor() {
    let valor = document.querySelector("#valor-origem").value;
    let origem = document.querySelector("#moeda-origem").value;
    let destino = document.querySelector("#moeda-destino").value;

    if(!isNaN(valor) && valor != ""){
        var cotacao = parseFloat(taxas[origem][destino]);
        var valor_convertido = parseFloat(valor) * cotacao;

        document.querySelector("#valor-convertido").innerHTML = valor_convertido.toFixed(2) + " " + simbolos[destino];
        document.querySelector("#cotacao").innerHTML = cotacao + " " + simbolos[destino];
    
    } else{
        document.querySelector("#valor-convertido").innerHTML = "0.00";
        document.querySelector("#cotacao").innerHTML = "0.00";
    }

}
