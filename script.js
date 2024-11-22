document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Preenche as células com os dados do formulário
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = data;
    novaLinha.insertCell(2).textContent = `R$ ${parseFloat(preco).toFixed(2)}`;
    novaLinha.insertCell(3).textContent = descricao;

    // Cria o botão de exclusão
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('delete');
    btnExcluir.addEventListener('click', function() {
        tabela.deleteRow(novaLinha.rowIndex - 1); // Exclui a linha da tabela
    });
    
    // Adiciona o botão de exclusão na última célula
    novaLinha.insertCell(4).appendChild(btnExcluir);

    // Limpa os campos do formulário após adicionar
    document.getElementById('cadastroForm').reset();
});