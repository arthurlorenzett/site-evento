const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function requisitar(caminho, opcoes) {
  let resposta;

  try {
    resposta = await fetch(`${API_URL}${caminho}`, opcoes);
  } catch {
    throw new Error("Não foi possível conectar ao servidor. Verifique se o backend está rodando.");
  }

  // 204 significa sucesso sem conteúdo (usado no DELETE)
  if (resposta.status === 204) {
    return null;
  }

  const dados = await resposta.json().catch(() => null);

  if (!resposta.ok) {
    throw new Error(dados?.error ?? `O servidor respondeu com erro ${resposta.status}.`);
  }

  return dados;
}

export function listarInscricoes() {
  return requisitar("/inscricoes");
}

export function criarInscricao(inscricao) {
  return requisitar("/inscricoes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inscricao),
  });
}

export function removerInscricao(id) {
  return requisitar(`/inscricoes/${id}`, { method: "DELETE" });
}
