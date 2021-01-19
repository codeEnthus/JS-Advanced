function sumNumber(num, num2) {
    let first = Number(num);
    let second = Number(num2);

    let sum = 0;

    for (let i = first; i <= second; i++) {
        sum += i;
    }
    console.log(sum);
}