function calcularDesconto(valor: number, percentualDesconto: number): number {
    return valor - (valor * (percentualDesconto / 100));
}

console.log(calcularDesconto(100, 15)); // 85
