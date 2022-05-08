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
            console.log('RESPONSE CONSULTA FUNDADORES: \n\n');
            console.log(fundadores);
            console.log('\n\n');
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
            console.log('RESPONSE CONSULTA FUNDADOR POR CÓDIGO: \n\n');
            console.log(fundador);
            console.log('\n\n')
            return fundador;
        }
        
    } catch (error) {
        console.log(error);
    }
}

async function cadastrarFundador(codigo, nome, startups){
    try{
        let requestBody = {
            "Codigo": codigo,
            "Nome": nome,
            "Startups": startups
        };
    
        let response = (await axios.post(`${endpointFounder}/CadastrarFundador`, requestBody, head));
        console.log('response:',response.status + ' ' + response.statusText);
        console.log('RESPONDE CADASTRO FUNDADOR: \n\n' + response.data + '\n\n');
    } catch(error) {
        console.log(error);
    }
    
}

async function alterarFundador(codigo, nome, startups){
    try{
        let requestBody = {
            "Codigo": codigo,
            "Nome": nome,
            "Startups": startups
        };
    
        let response = (await axios.put(`${endpointFounder}/AlterarFundador`, requestBody, head));
        console.log('RESPONSE STATUS:',response.status + ' ' + response.statusText);
        console.log('RESPONSE ALTERAÇÃO FUNDADOR: \n\n' + response.data + '\n\n');
    } catch(error){
        console.log(error);
    }
}

async function excluirFundador(code){
    let response = (await axios.delete(`${endpointFounder}/ExcluirFundador/${code}`, head)).data;
    console.log('RESPONSE EXCLUSÃO FUNDADOR: \n\n' + response);
}

consultarFundadores();
//consultarFundadorPorCodigo(1);
//cadastrarFundador(998, "Fundador teste 1", "Nubank");
//alterarFundador(1, "Nubank", "Cristina");
//excluirFundador(1);