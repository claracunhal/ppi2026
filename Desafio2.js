//AULA 03/06 - DESAFIO 2

//QUESTÃO 1

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const medias = [];

alunos.map((alunos) => {
  const soma = alunos.notas.reduce((acumulador, nota) => acumulador + nota, 0);

  medias.push({
    nome: alunos.nome,
    media: (soma / alunos.notas.length).toFixed(2),
  });
});

const aprovados = medias.filter((alunos) => alunos.media >= 7);

aprovados.sort((a, b) => b.media - a.media);

console.log(aprovados);

//QUESTÃO 2

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

const buscarfilmes =(genero, criterio) => {
    let resultado = [...filmes].filter((filme) => filme.genero === genero
    );
}

if (criterio === "ano"){
  resultado.sort(
    (a,b) => b.ano - a.ano
  );
};

if (criterio === "titulo") {
  resultado.sort(
    (a,b) => a.titulo.localeCompare(b.titulo)
  );
}

const lista = [];
resultado.map((filme) => {
  lista.push(
    filme.titulo + "(" + filme.ano + ")" + "-" + filme.genero
  );
}

