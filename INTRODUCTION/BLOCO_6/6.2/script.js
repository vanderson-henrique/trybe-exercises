let estados = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}

for (let chave in estados){
    let option = document.createElement('option');
    let select = document.querySelector('#estado');
    select.appendChild(option);
    option.textContent = estados[chave];
    option.value = chave;
}

new window.JustValidate('.form-curriculo', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 40,
      },
      email: {
        required: true,
        email: true,
        maxLength: 50,
      },
      cpf: {
        required: true,
        maxLength: 11,
      },
      endereço: {
        required: true,
        maxLength: 28,
      },
      cidade: {
        required: true
      },
      estado: {
        required: true
      },
      resumo: {
        required: true,
        maxLength: 1000,
      },
      cargo: {
        required: true,
        maxLength: 40,
      },
      desc: {
        required: true,
        maxLength: 500,
      },
      dataInicio: {
        required: true
      },
    },

    messages: {
        required: 'Campo de preenchimento obrigatório.'
    },
    focusWrongField: true,
    submitHandler: function (form, values, ajax) {
      console.log(values)
    },
    invalidFormCallback: function (errors) {
      console.log(errors);
    },
    
  });





/*function validacoes(event) {
    event.preventDefault();

    // verificação nome

    let nomeDigitado = document.querySelector('#nome').value;
    if (nomeDigitado === ""){
        alert('Campo nome preenchimento obrigatório!');
    }

    let emailDigitado = document.querySelector('#email').value;
    if (emailDigitado === ""){
        alert('Campo e-mail preenchimento obrigatório!');
    }

    let cpfDigitado = document.querySelector('#cpf').value;
    if (cpfDigitado === ""){
        alert('Campo CPF preenchimento obrigatório!');
    }
    
    let endereçoDigitado = document.querySelector('#endereço').value;
    if (endereçoDigitado === ""){
        alert('Campo endereço preenchimento obrigatório!');
    }

    let cidadeDigitado = document.querySelector('#cidade').value;
    if (cidadeDigitado === ""){
        alert('Campo cidade preenchimento obrigatório!');
    }

    let resumoDigitado = document.querySelector('#resumo').value;
    if (resumoDigitado === ""){
        alert('Campo Resumo do currículo preenchimento obrigatório!');
    }

    let cargoDigitado = document.querySelector('#cargo').value;
    if (cargoDigitado === ""){
        alert('Campo cargo preenchimento obrigatório!');
    }

    let descCargoDigitado = document.querySelector('#desc-cargo').value;
    if (descCargoDigitado === ""){
        alert('Campo Descrição do cargo preenchimento obrigatório!');
    }

    let estado;
    let estadosSelecionados = document.querySelectorAll('option');

    if (estadosSelecionados[0].selected == true){
        alert('Selecione o seu estado!');
    }

    for (let index = 0; index < 28; index += 1){
        if (estadosSelecionados[index].selected == true){
            estado = estadosSelecionados[index].textContent;
        }
    }

    let tipoMoradia = document.querySelector('.form-tipo').childNodes;
    let moradiaselecionada;
    if (tipoMoradia[3].checked == true){
         moradiaselecionada = tipoMoradia[3].value;
    }

    if (tipoMoradia[9].checked == true){
        moradiaselecionada = tipoMoradia[9].value;
    }
    
    let curriculo = document.createElement('div');
    let body = document.querySelector('body');
    body.appendChild(curriculo);
    curriculo.innerHTML = `Nome: ${nomeDigitado}, E-mail: ${emailDigitado}, CPF: ${cpfDigitado}, Endereço: ${endereçoDigitado}, Cidade: ${cidadeDigitado}, Estado: ${estado}, Tipo de moradia: ${moradiaselecionada}, Resumo do currículo: ${resumoDigitado}, Último cargo: ${cargoDigitado}, Descrição do cargo: ${descCargoDigitado}, Data de início: ${dataDigitada}. `



}

let botaoEnviar = document.querySelector('#enviar');
botaoEnviar.addEventListener('click', validacoes);
*/