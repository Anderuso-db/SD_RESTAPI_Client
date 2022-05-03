const axios = require('axios');
const endpointStartup = 'https://localhost:44380/api/startup';
const head = {
    headers: { 'Content-Type': 'application/json' }
};
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function consultarStartups(){

    try {
        let response = (await axios.get(`${endpointStartup}/ConsultarStartups`, head));
        let startups = [];
        console.log('response:',response.status + ' ' + response.statusText);
        if(response){
            response.data.forEach(element => {
                startups.push(element);
            });
            console.log(startups);
            return startups;
        }
        
    } catch (error) {
        console.log(error);
    }
}

async function consultarStartupPorCodigo(code){
    try {
        let response = (await axios.get(`${endpointStartup}/ConsultarStartupPorCodigo/${code}`, head));
        let startup;
        console.log('response:',response.status + ' ' + response.statusText);
        if(response){
            startup = response.data;
            console.log(startup);
            return startup;
        }
        
    } catch (error) {
        console.log(error);
    }
}

async function cadastrarStartup(codigo, nome, founders){
    let requestBody = {
        "Codigo": codigo,
        "Nome": nome,
        "Founders": founders
    };

    let response = (await axios.post(`${endpointStartup}/CadastrarStartup`, requestBody, head));
    console.log(response);
}

async function alterarStartup(codigo, nome, founders){
    let requestBody = {
        "Codigo": codigo,
        "Nome": nome,
        "Founders": founders
    };

    let response = (await axios.put(`${endpointStartup}/AlterarStartup`, requestBody, head));
    console.log(response);
}

async function excluirStartup(code){
    let response = (await axios.delete(`${endpointStartup}/ExcluirStartup/${code}`, head)).data;
    console.log(response);
}


//consultarStartups();
//cadastrarStartup(998, "startup teste 1", "fundador brabo");
//consultarStartupPorCodigo(998);
//alterarStartup(1, "Nubank", "Cristina");
//excluirStartup(1);

