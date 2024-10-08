// Função para calcular o custo total da viagem
function calcularCustoViagem() {
    // Obtém os valores dos campos de entrada
    let distancia = parseFloat(document.getElementById('distancia').value);
    let velocidadeMedia = parseFloat(document.getElementById('velocidadeMedia').value);
    let eficiencia = parseFloat(document.getElementById('eficiencia').value);
    let precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
    let valorPedagio = parseFloat(document.getElementById('valorPedagio').value);
    let quantidadePedagio = parseInt(document.getElementById('quantidadePedagio').value);
    let lanches = parseFloat(document.getElementById('lanches').value);
    
    // Verifica se os campos são números válidos
    if (isNaN(distancia) || isNaN(velocidadeMedia) || isNaN(eficiencia) || isNaN(precoCombustivel) || isNaN(valorPedagio) || isNaN(quantidadePedagio) || isNaN(lanches)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }
    
    // Cálculo do tempo da viagem
    let tempoViagem = distancia / velocidadeMedia

    // Cálculo do consumo de combustível
    let consumoCombustivel = distancia / eficiencia;
    
    // Cálculo do custo do combustível
    let custoCombustivel = consumoCombustivel * precoCombustivel;
    
    // Cálculo do custo total dos pedágios
    let custoPedagios = valorPedagio * quantidadePedagio;

    // Cálculo do custo total da viagem
    let custoTotalViagem = custoCombustivel + custoPedagios + lanches;
    
    // Exibe o resultado no elemento <p> com o id "resultado"
    document.getElementById('resultado').innerText = `O custo total da viagem é de R$ ${custoTotalViagem.toFixed(2)} Tempo da viagem ${tempoViagem.toFixed(0)} horas`;
}
