function imprimirQuadro(lista: string[]): void {
    const borda = "*".repeat(Math.max(...lista.map(str => str.length)) + 4);
    console.log(borda);
    for (const item of lista) {
        console.log(`* ${item.padEnd(borda.length - 4)} *`);
    }
    console.log(borda);
}

imprimirQuadro(["Hello", "World", "in", "a", "frame"]);
// Resultado esperado:
// *********
// * Hello  *
// * World  *
// * in     *
// * a      *
// * frame  *
// *********
