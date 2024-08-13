interface Pessoa {
    nome: string;
    idade: number;
}

function encontrarPessoaMaisVelha(pessoas: Pessoa[]): string {
    return pessoas.reduce((maisVelho, pessoa) => pessoa.idade > maisVelho.idade ? pessoa : maisVelho).nome;
}

const pessoas: Pessoa[] = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 42 },
