const API_BASE_URL = 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com';

function obterMensagens() {
    try {
        const response = $.ajax({
            url: `${API_BASE_URL}/mensagens`,
            method: 'GET',
            dataType: 'json',
            async: false
        });

        return response.responseJSON || [];
    } catch (error) {
        console.error('Erro ao obter mensagens:', error);
        return [];
    }
}

function inserirMensagem(obj) {
    $.ajax({
        url: `${API_BASE_URL}/mensagens`,
        method: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json',
        contentType: 'application/json'
    });
}

function validarUsuario(objLoginSenha) {
    try {
        const response = $.ajax({
            url: `${API_BASE_URL}/usuarios/validar`,
            method: 'POST',
            dataType: 'json',
            async: false,
            headers: { 'Access-Control-Allow-Origin': '*' },
            contentType: 'application/json',
            data: JSON.stringify(objLoginSenha)
        });

        return response.responseJSON || false;
    } catch (error) {
        console.error('Erro ao validar usuário:', error);
        return false;
    }
}
