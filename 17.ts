function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number): number {
    const lucro = valorCusto * (margemLucro / 100);
    return valorCusto + lucro + valorFrete;
}

console.log(calcularPrecoProduto(100, 20, 15)); // 135
