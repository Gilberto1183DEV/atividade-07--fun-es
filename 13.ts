interface Aluno {
    nome: string;
    nota: number;
}

function calcularMediaAlunos(alunos: Aluno[]): number {
    const soma = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return soma / alunos.length;
}

const alunos: Aluno[] = [
    { nome: "Ana", nota: 8 },
    { nome: "Beto", nota: 9 },
    { nome: "Carlos", nota: 7 }
];

console.log(calcularMediaAlunos(alunos)); // 8
