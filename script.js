async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

async function mostrarTotalVendas() {
    const data = await fetchData('http://127.0.0.1:5000/total_vendas');
    if (data) {
        document.getElementById('totalVendas').innerText = 'Total de Vendas: ' + data.total_vendas;
    } else {
        document.getElementById('totalVendas').innerText = 'Erro ao carregar os dados';
    }
}

async function mostrarMediaVendas() {
    const data = await fetchData('http://127.0.0.1:5000/media_vendas');
    if (data) {
        document.getElementById('mediaTV').innerText = 'Média de Vendas de TV: ' + data.media_tv.toFixed(2);
        document.getElementById('mediaRadio').innerText = 'Média de Vendas de Rádio: ' + data.media_radio.toFixed(2);
        document.getElementById('mediaJornal').innerText = 'Média de Vendas de Jornal: ' + data.media_jornal.toFixed(2);
    } else {
        document.getElementById('mediaTV').innerText = 'Erro ao carregar os dados';
        document.getElementById('mediaRadio').innerText = 'Erro ao carregar os dados';
        document.getElementById('mediaJornal').innerText = 'Erro ao carregar os dados';
    }
}