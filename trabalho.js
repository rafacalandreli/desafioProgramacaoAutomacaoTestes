export function geradorDeTagsDeIdentificacao(nome) {
  return nome ? nome.toUpperCase() : "";
}

export function verificarSePodeSerAdotado(idade, porte) {
  if(idade === 1 && porte === 'M') {
        return true;
  }
  return false;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
    const qtdDiaria = peso * 300;
    return qtdDiaria;
}
  
export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100); 
  });
}


  
