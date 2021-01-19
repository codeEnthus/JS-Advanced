function aggregate(numbers) {
    let rowSum = numbers.reduce((a, b) => a + b, 0);
    let inverse = 0;
    for (const n of numbers) {
        inverse += 1 / n
    }
    console.log(rowSum);
    console.log(inverse);
    console.log(numbers.join(''));
}