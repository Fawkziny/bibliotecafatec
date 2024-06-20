function salvarLocacao() {
    // Capturar os valores dos campos do formulário
    var livro = document.getElementById('livro').value;
    var aluno = document.getElementById('aluno').value;
    var dataLocacao = document.getElementById('data_locacao').value;

    // Montar o texto da locação
    var textoLocacao = `Livro: ${livro}, Aluno: ${aluno}, Data de Locação: ${dataLocacao}`;

    // Exibir o texto da locação na div resultadoLocacao
    document.getElementById('resultadoLocacao').innerHTML = `<p>${textoLocacao}</p>`;
}
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const formLivro = document.getElementById('formLivro');

        formLivro.addEventListener('submit', function(event) {
            event.preventDefault();

            const titulo = document.getElementById('titulo').value;
            const autor = document.getElementById('autor').value;
            const genero = document.getElementById('genero').value;
            const ano = document.getElementById('ano').value;

            // Gerar um ID único para o livro
            const id = Date.now(); // Usando o timestamp como ID simples para exemplo

            const novoLivro = {
                id: id,
                titulo: titulo,
                autor: autor,
                genero: genero,
                ano: ano
            };

            // Obtém os livros cadastrados do localStorage
            let livros = JSON.parse(localStorage.getItem('livros')) || [];

            // Adiciona o novo livro ao array de livros
            livros.push(novoLivro);

            // Atualiza o localStorage com os livros atualizados
            localStorage.setItem('livros', JSON.stringify(livros));

            // Limpa o formulário após o cadastro
            formLivro.reset();

            // Informa ao usuário que o livro foi cadastrado
            alert('Livro cadastrado com sucesso!');
        });
    });
</script>
