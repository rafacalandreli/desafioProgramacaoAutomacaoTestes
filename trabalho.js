export function geradorDeTagsDeIdentificacao(nome) {
  return nome ? nome.toUpperCase() : "";
}

export function verificarSePodeSerAdotado(idade, porte) {
  let podeAdotar = false;
  if (idade === 1 && porte === "M") {
    podeAdotar = true;
  }
  return podeAdotar;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  const consumoEmGramas = 300;
  return consumoEmGramas * peso ;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  let tipoAtividade = "";
  switch (porte) {
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
  await new Promise(resolve => setTimeout(resolve, 100));
  return "Pipoca";
}
