function advinheNumero(): void {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativa: number | null = null;
    let tentativas = 0;

    while (tentativa !== numeroAleatorio) {
        tentativa = parseInt(prompt('Adivinhe o número entre 1 e 100:') || '0', 10);
        tentativas++;
        if (tentativa < numeroAleatorio) {
            console.log('O número é maior.');
        } else if (tentativa > numeroAleatorio) {
            console.log('O número é menor.');
        } else {
            console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
        }
    }
}

advinheNumero(); // Utilize em ambiente com suporte a prompt()
