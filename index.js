const fiboValue = document.getElementById("fibo-value");
const inverterValue = document.getElementById("inverter-value");

function somar() {
    let k = 0;
    let soma = 0;
    let indice = 13;
    while (k < indice) {
        k++;
        soma = soma + k;
    }
    alert("Valor da soma é: " + soma);
}

function fibonacci() {
    let valor = fiboValue.value;
    let fibo = [0, 1];
    while (fibo.at(-1) < valor) {
        nextNumber = fibo.at(-2) + fibo.at(-1);
        fibo.push(nextNumber);
    }
    if (fibo.at(-1) == valor) {
        alert("Valor pertence a sequência de Fibonacci");
    } else {
        alert("Valor não pertence a sequência de Fibonacci");
    }
}

async function getDataFaturamento() {
    const dados = [{dia:1,valor:22174.1664},{dia:2,valor:24537.6698},{dia:3,valor:26139.6134},{dia:4,valor:0},{dia:5,valor:0},{dia:6,valor:26742.6612},{dia:7,valor:0},{dia:8,valor:42889.2258},{dia:9,valor:46251.174},{dia:10,valor:11191.4722},{dia:11,valor:0},{dia:12,valor:0},{dia:13,valor:3847.4823},{dia:14,valor:373.7838},{dia:15,valor:2659.7563},{dia:16,valor:48924.2448},{dia:17,valor:18419.2614},{dia:18,valor:0},{dia:19,valor:0},{dia:20,valor:35240.1826},{dia:21,valor:43829.1667},{dia:22,valor:18235.6852},{dia:23,valor:4355.0662},{dia:24,valor:13327.1025},{dia:25,valor:0},{dia:26,valor:0},{dia:27,valor:25681.8318},{dia:28,valor:1718.1221},{dia:29,valor:13220.495},{dia:30,valor:8414.61}];
    localStorage.setItem('dados', JSON.stringify(dados));
}

function faturamento() {
    localStorage.clear();
    getDataFaturamento();
    let dados = JSON.parse(localStorage.getItem('dados'));
    dados = dados.filter(obj => obj.valor !== 0);

    let maiorValor = 0;
    for (let i = 1; i < dados.length; i++) {
        if (dados[i].valor > maiorValor) {
            maiorValor = dados[i].valor;
        }
    }

    let menorValor = maiorValor;
    for (let i = 1; i < dados.length; i++) {
        if (dados[i].valor < menorValor) {
            menorValor = dados[i].valor;
        }
    }

    let totalFaturamento = 0;
    for (let i = 0; i < dados.length; i++) {
        totalFaturamento += dados[i].valor;
    }
    let mediaMensal = totalFaturamento / dados.length;

    let qtdDiasSuperior = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor > mediaMensal){
            qtdDiasSuperior++;
        }
    }

    alert("O menor valor de faturamento ocorrido em um dia do mês foi: " + menorValor);
    alert("O maior valor de faturamento ocorrido em um dia do mês foi: " + maiorValor);
    alert("O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi: " + qtdDiasSuperior);
}

async function getDataPercentual() {
    const dados = [{estado:"SP", valor:67836.43},{estado:"RJ", valor:36678.66},{estado:"MG", valor:29229.88},{estado:"ES", valor:27165.48},{estado:"Outros", valor:19849.53}]
    localStorage.setItem('dados', JSON.stringify(dados));
}

function percentual() {
    localStorage.clear();
    getDataPercentual();
    let dados = JSON.parse(localStorage.getItem('dados'));
    
    let valorTotal = 0;
    for (let i = 0; i < dados.length; i++) {
        valorTotal = valorTotal + dados[i].valor;
    }
    
    let percentualEstado = 0;
    for (let i = 0; i < dados.length; i++) {
        percentualEstado = (dados[i].valor / valorTotal) * 100;
        alert("O percentual de representação de " + dados[i].estado + " é de: " + percentualEstado.toFixed(2) + "%");
    }
}

function inverter() {
    let palavra = inverterValue.value;
    let arrayPalavra = palavra.split("");

    let arrayInvertida = [];
    for (let i = arrayPalavra.length; i >= 0; i--) {
        arrayInvertida.push(arrayPalavra[i]);
    }

    let palavraInvertida = arrayInvertida.join("");
    alert("A palavra " + palavra + " invertida fica: " + palavraInvertida)
}