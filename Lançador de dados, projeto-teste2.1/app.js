let quantidadeDados = 1;
let bonus = 0;

function rolarDado(max) {
    return Math.floor(Math.random() * max) + 1;
}

function rolar(quantidadeLados) {
    let somaDosLancamentos = 0;
    let resultados = [];

    for (let i = 0; i < quantidadeDados; i++) {
        let resultadoDado = rolarDado(quantidadeLados);
        somaDosLancamentos += resultadoDado;
        resultados.push(resultadoDado);
    }

    let resultadoComBonus = somaDosLancamentos + bonus;

    document.getElementById('resultado').innerHTML = 
        `<label class="texto__paragrafo">Valores rolados: ${resultados.join(", ")}</label>`;
    document.getElementById('Soma').innerHTML = 
        `<label class="texto__paragrafo">Total: ${somaDosLancamentos} + ${bonus} = ${resultadoComBonus}</label>`;

    document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');
    document.getElementById('btn-reiniciar').classList.add('container__botao');
}

function alterarQuantidade(valor) {
    quantidadeDados = Math.max(1, quantidadeDados + valor);
    document.getElementById('quantidade-dados').innerHTML = 
        `<label class="texto__paragrafo">Quantidade de dados: ${quantidadeDados}</label>`;
}

function alterarBonus(valor) {
    bonus += valor;
    document.getElementById('bonus-dados').innerHTML = 
        `<label class="texto__paragrafo">Bônus: ${bonus}</label>`;
}

function reiniciar() {
    quantidadeDados = 1;
    bonus = 0;

    document.getElementById('quantidade-dados').innerHTML = 
        `<label class="texto__paragrafo">Quantidade de dados: 1</label>`;
    document.getElementById('bonus-dados').innerHTML = 
        `<label class="texto__paragrafo">Bônus: 0</label>`;
    document.getElementById('resultado').innerHTML = 
        `<label class="texto__paragrafo">Valores rolados: nenhum até agora</label>`;
    document.getElementById('Soma').innerHTML = 
        `<label class="texto__paragrafo">Total: nenhum até agora</label>`;

    document.getElementById('btn-reiniciar').classList.remove('container__botao');
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
}
