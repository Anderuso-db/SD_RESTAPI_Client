const axios = require('axios');
const endpointFounder = 'https://localhost:44380/api/founder';
const head = {
    headers: { 'Content-Type': 'application/json' }
};
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function consultarFundadores(){

    try {
        let response = (await axios.get(`${endpointFounder}/ConsultarFundadores`, head));
        let fundadores = [];
        console.log('response status:',response.status + ' ' + response.statusText);
        if(response){
            response.data.forEach(element => {
                fundadores.push(element);
            });
            console.log(fundadores);
            return fundadores;
        }
        
    } catch (error) {
        console.log(error);
    }
}

async function consultarFundadorPorCodigo(code){
    try {
        let response = (await axios.get(`${endpointFounder}/ConsultarFundadorPorCodigo/${code}`, head));
        let fundador;

        console.log('response:',response.status + ' ' + response.statusText);
        if(response){
            fundador = response.data;
            console.log(fundador);
            return fundador;
        }
        
    } catch (error) {
        console.log(error);
    }
}

async function cadastrarFundador(codigo, nome, startups){
    let requestBody = {
        "Codigo": codigo,
        "Nome": nome,
        "Startups": startups
    };

    let response = (await axios.post(`${endpointFounder}/CadastrarFundador`, requestBody, head));
    console.log('response:',response.status + ' ' + response.statusText);
    console.log(response.data);
}

async function alterarFundador(codigo, nome, startups){
    let requestBody = {
        "Codigo": codigo,
        "Nome": nome,
        "Startups": startups
    };

    let response = (await axios.put(`${endpointFounder}/AlterarFundador`, requestBody, head)).data;
    console.log('response status:',response.status + ' ' + response.statusText);
    console.log(response.data);
}

async function excluirFundador(code){
    let response = (await axios.delete(`${endpointFounder}/ExcluirFundador/${code}`, head)).data;
    console.log(response);
}

//consultarFundadores();
//cadastrarFundador(998, "Fundador teste 1", "Nubank");
//consultarFundadorPorCodigo(1);
//alterarFundador(1, "Nubank", "Cristina");
excluirFundador(1);

