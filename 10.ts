function calcularImpostoRenda(salario: number): number {
    let imposto = 0;
    if (salario > 4664.68) {
        imposto = salario * 0.275;
    } else if (salario > 3751.05) {
        imposto = salario * 0.225;
    } else if (salario > 2826.65) {
        imposto = salario * 0.15;
    } else if (salario > 1903.98) {
        imposto = salario * 0.075;
    }
    return imposto;
}

console.log(calcularImpostoRenda(5000)); // 1375
console.log(calcularImpostoRenda(2000)); // 150
