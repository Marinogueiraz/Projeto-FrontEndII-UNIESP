function preencherTabela() {
    const mensagens = obterMensagens();

    const tabelaMensagens = $('#tabelaMensagens');

    mensagens.forEach(({ nome, email, mensagem }) => {
        const row = `<tr><td>${nome}</td><td>${email}</td><td>${mensagem}</td></tr>`;
        tabelaMensagens.append(row);
    });
}

$(document).ready(function() {
    preencherTabela();
});
