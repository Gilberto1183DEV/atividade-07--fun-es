interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

function filtrarCarrosPorAno(carros: Carro[], anoLimite: number): Carro[] {
    return carros.filter(carro => carro.ano > anoLimite);
}

const carros: Carro[] = [
    { marca: "BMW", modelo: "X5", ano: 2022 },
    { marca: "Audi", modelo: "A4", ano: 2017 },
    { marca: "Mercedes", modelo: "C-Class", ano: 2020 },
    { marca: "Volkswagen", modelo: "Golf", ano: 2018 }
];

console.log(filtrarCarrosPorAno(carros, 2019));
// Resultado esperado: [{ marca: 'BMW', modelo: 'X5', ano: 2022 }, { marca: 'Mercedes', modelo: 'C-Class', ano: 2020 }]
