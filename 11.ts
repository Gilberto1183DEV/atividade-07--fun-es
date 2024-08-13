function calcularMediaArredondada(numeros: number[]): number {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    return Math.round(media);
}

console.log(calcularMediaArredondada([5, 10, 15])); // 10
