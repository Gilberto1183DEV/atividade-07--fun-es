function inverterString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(inverterString("hello")); // "olleh"
console.log(inverterString("TypeScript")); // "tpircSepyT"

