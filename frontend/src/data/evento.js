export const evento = {
  nome: "Mutirão Dev",
  ano: 2027,
  diaDaSemana: "Sábado",
  data: "13 de março de 2027",
  horario: "das 9h às 18h",
  local: "Galpão Cultural da Vila",
  endereco: "Rua das Oficinas, 120, Porto Alegre (RS)",
  sobre: [
    "O Mutirão Dev reúne, em um sábado, pessoas que constroem software no dia a dia para trocar o que aprenderam fazendo. São quatro palestras curtas, com tempo para perguntas, sobre APIs, testes, bancos de dados e começo de carreira.",
    "A ideia vem do mutirão: cada pessoa traz um pedaço do trabalho, e todo mundo sai com mais do que trouxe. O evento é pensado tanto para quem procura o primeiro emprego quanto para quem já trabalha na área.",
    "Os ingressos têm duas categorias, estudante e profissional. Na inscrição, escolha a que combina com o seu momento.",
  ],
};

export const palestrantes = [
  {
    horario: "9h30",
    nome: "Helena Prado",
    cargo: "Engenheira de software backend",
    palestra: "APIs que não quebram quem usa",
  },
  {
    horario: "11h",
    nome: "Rafael Monteiro",
    cargo: "Líder técnico de qualidade",
    palestra: "Testes automatizados sem drama",
  },
  {
    horario: "14h",
    nome: "Juliana Ayres",
    cargo: "Desenvolvedora e mentora de iniciantes",
    palestra: "Do primeiro emprego ao primeiro code review",
  },
  {
    horario: "15h30",
    nome: "Tiago Nakamura",
    cargo: "Especialista em bancos de dados",
    palestra: "SQLite em produção: quando o simples basta",
  },
];

export const tiposIngresso = [
  { valor: "estudante", titulo: "Estudante", descricao: "Para quem está estudando." },
  { valor: "profissional", titulo: "Profissional", descricao: "Para quem já trabalha na área." },
];
