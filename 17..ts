function verificarPropriedade(obj: object, propriedade: string): boolean {
    return propriedade in obj;
}

const objTeste = { nome: "João", idade: 30 };
console.log(verificarPropriedade(objTeste, "nome")); // true
console.log(verificarPropriedade(objTeste, "endereco")); // false
