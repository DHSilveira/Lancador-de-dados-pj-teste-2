// Função para gerar um número aleatório com base no tipo de dado
function rolarDado(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Função para rolar os dados
function rolar() {
    // Obter valores dos inputs
    let quantidadeDados = parseInt(document.getElementById('quantidade').value);
    let quantidadeLados = parseInt(document.getElementById('lados').value);
    let bonus = parseInt(document.getElementById('bônus').value);

    // Verifica se os valores inseridos são válidos
    if (isNaN(quantidadeDados) || isNaN(quantidadeLados) || isNaN(bonus) ||
        quantidadeDados < 1 || quantidadeLados < 1 || bonus < 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let somaDosLancamentos = 0;
    let resultados = [];

    // Realiza a quantidade de lançamentos especificada
    for (let i = 0; i < quantidadeDados; i++) {
        let resultadoDado = rolarDado(quantidadeLados);
        somaDosLancamentos += resultadoDado;
        resultados.push(resultadoDado);
    }

    // Adiciona o bônus à soma dos lançamentos
    let resultadoComBonus = somaDosLancamentos + bonus;

    // Atualiza os elementos HTML com os resultados
    document.getElementById('resultado').innerHTML = 
        `<label class="texto__paragrafo">Valores rolados: ${resultados.join(", ")}</label>`;
    document.getElementById('Soma').innerHTML = 
        `<label class="texto__paragrafo">Total: ${somaDosLancamentos} + ${bonus} = ${resultadoComBonus}</label>`;

    // Habilitar o botão de reiniciar
    document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');
    document.getElementById('btn-reiniciar').classList.add('container__botao');
}

// Função para reiniciar o formulário e os resultados
function reiniciar() {
    // Limpa os campos de entrada
    document.getElementById('quantidade').value = '';
    document.getElementById('lados').value = '';
    document.getElementById('bônus').value = '';

    // Redefine o texto dos resultados
    document.getElementById('resultado').innerHTML = 
        `<label class="texto__paragrafo">Valores rolados: nenhum até agora</label>`;
    document.getElementById('Soma').innerHTML = 
        `<label class="texto__paragrafo">Total: nenhum até agora</label>`;

    // Desabilitar o botão de reiniciar
    document.getElementById('btn-reiniciar').classList.remove('container__botao');
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
}
