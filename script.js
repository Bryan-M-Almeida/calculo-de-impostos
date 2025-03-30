document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores de entrada
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const categoriaProduto = document.getElementById('categoriaProduto').value;

    if (!valorVenda || valorVenda <= 0) {
        alert('Por favor, insira um valor de venda válido.');
        return;
    }

    // Definindo as alíquotas de imposto para cada categoria
    let aliquota = 0;
    switch(categoriaProduto) {
        case 'alimentacao':
            aliquota = 0.05; // 5% para alimentos
            break;
        case 'roupas':
            aliquota = 0.10; // 10% para roupas
            break;
        case 'eletronicos':
            aliquota = 0.20; // 20% para eletrônicos
            break;
        case 'moveis':
            aliquota = 0.15; // 15% para móveis
            break;
    }

    // Calculando o imposto devido e o valor total
    const impostoDevido = valorVenda * aliquota;
    const valorTotal = valorVenda + impostoDevido;

    // Exibindo os resultados
    document.getElementById('impostoDevido').textContent = `Imposto Devido: R$ ${impostoDevido.toFixed(2)}`;
    document.getElementById('valorTotal').textContent = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
});
