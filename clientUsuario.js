const axios = require('axios');
const endpointUsuario = 'https://localhost:44380/api/usuario';
const head = {
    headers: { 'Content-Type': 'application/json' }
};
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function consultarUsuarios(){

    try {
        let response = (await axios.get(`${endpointUsuario}/ConsultarUsuarios`, head));
        let usuarios = [];
        console.log('response:',response.status + ' ' + response.statusText);
        if(response){
            response.data.forEach(element => {
                usuarios.push(element);
            });
            console.log(usuarios);
            return usuarios;
        }
        
    } catch (error) {
        console.log(error);
    }
}

async function consultarUsuarioPorCodigo(code){
    try {
        let response = (await axios.get(`${endpointUsuario}/ConsultarUsuarioPorCodigo/${code}`, head));
        let usuario;
        console.log('response:',response.status + ' ' + response.statusText);
        if(response){
            usuario = response.data;
            console.log(usuario);
            return usuario;
        }
        
    } catch (error) {
        console.log(error);
    }
}

async function cadastrarUsuario(codigo, nome, founders){
    let requestBody = {
        "Codigo": codigo,
        "Nome": nome,
        "Founders": founders
    };

    let response = (await axios.post(`${endpointUsuario}/CadastrarUsuario`, requestBody, head));
    console.log(response);
}

async function alterarUsuario(codigo, nome, founders){
    let requestBody = {
        "Codigo": codigo,
        "Nome": nome,
        "Founders": founders
    };

    let response = (await axios.put(`${endpointUsuario}/AlterarUsuario`, requestBody, head));
    console.log(response);
}

async function excluirUsuario(code){
    let response = (await axios.delete(`${endpointUsuario}/ExcluirFundador/${code}`, head)).data;  
    console.log(response);
}

consultarUsuarios();
//cadastrarUsuario(998, "usuario teste 1", "fundador brabo");
//consultarUsuarioPorCodigo(998);
//alterarUsuario(1, "Nubank", "Cristina");
//excluirUsuario(1);

