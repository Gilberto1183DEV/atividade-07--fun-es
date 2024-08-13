function filtrarStringsLongas(array: string[]): string[] {
    return array.filter(str => str.length > 5);
}

console.log(filtrarStringsLongas(["Hello", "World", "JavaScript", "TS", "CSS"])); // ['JavaScript']
