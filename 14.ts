function calcularIdade(anoNascimento: number): number {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

console.log(calcularIdade(1990)); // 34 (para o ano atual de 2024)
