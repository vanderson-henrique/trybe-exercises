// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1){
    for (let j = 0; j < i; j += 1){
        if (numbers[i] < numbers[j]){
            let menorPosition = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = menorPosition;
        }
    }
}
console.log(`Números ordenados: ${numbers}`);