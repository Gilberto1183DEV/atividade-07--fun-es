function encontrarPalavraMaisLonga(frase: string): string {
    const palavras = frase.split(' ');
    let palavraMaisLonga = "";

    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }
    return palavraMaisLonga;
}

console.log(encontrarPalavraMaisLonga("Tutorial de desenvolvimento da web")); // 'Desenvolvimento'
