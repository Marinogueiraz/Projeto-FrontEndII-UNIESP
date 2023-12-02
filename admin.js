// admin.js

function fazerLogin() {
    const email = $('#email').val();
    const senha = $('#senha').val();

    const objLoginSenha = { email, senha };

    const resultadoValidacao = validarUsuario(objLoginSenha);

    if (resultadoValidacao) {
        window.location.href = 'mensagem.html';
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }
}
