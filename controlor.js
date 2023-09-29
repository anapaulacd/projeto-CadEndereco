'use restrict'; //Modo restrito
//Limpar formulário
const LimparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
}
//Verifica se CEP é válido
 const eNumero = (numero) => /^[0-9]+$/.test(numero);
 const cepValido = (cep) => cep.length == 8 && eNumero(cep);

 //preenche campos do formulário 
 const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logadoro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;  
 }
 // Função para consumo de API utilizando a função do tipo assincrona
 const pesquisarcep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 }
