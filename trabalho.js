function validarString(valor, nomeCampo) {
  if (typeof valor !== 'string') {
    throw new TypeError(`${nomeCampo} deve ser uma string.`);
  }
}

function validarNumero(valor, nomeCampo, positivo = false) {
  if (typeof valor !== 'number' || isNaN(valor)) {
    throw new TypeError(`${nomeCampo} deve ser um número.`);
  }
  if (positivo && valor <= 0) {
    throw new RangeError(`${nomeCampo} deve ser um número positivo.`);
  }
}


export function geradorDeTagsDeIdentificacao(nome) {
  validarString(nome, 'Nome');
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  validarNumero(idade, 'Idade');
  validarString(porte, 'Porte');
  let podeAdotar = false;
  if (idade === 1 && porte === "M") {
    podeAdotar = true;
  }
  return podeAdotar;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  const consumoEmGramas = 300;
  validarString(nome, 'Nome');
  validarNumero(idade, 'Idade');
  validarNumero(peso, 'Peso', true);
  
	let consumoTotal = peso * consumoEmGramas;
  return consumoTotal ;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  let tipoAtividade = "";
  validarString(porte, 'Porte');
  const portePadronizado = porte.toLowerCase();
  
  switch (portePadronizado) {
    case "pequeno":
      tipoAtividade = "brincar dentro de casa";
      break;
    case "medio":
      tipoAtividade = "caminhada no quarteirao";
      break;
    case "grande":
      tipoAtividade = "correr no parque";
      break;
    default:
      return "atividade desconhecida";
  }
  return tipoAtividade;
}

export async function buscarDadoAsync() {
  const delay = 100;
  await new Promise(resolve => setTimeout(resolve, delay));
  return "Pipoca";
}
