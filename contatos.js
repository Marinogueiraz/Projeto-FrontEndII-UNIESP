function enviarMensagem() {
    const nome = $('#nome').val();
    const email = $('#email').val();
    const mensagem = $('#mensagem').val();

    const objMensagem = { nome, email, mensagem };

    inserirMensagem(objMensagem);

    alert('Mensagem Enviada!');
}
