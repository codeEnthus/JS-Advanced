function divisor(num, num2) {
    let maxDivisor = 0;

    for (let i = 1; i < 10; i++){
        if (num % i == 0 && num2 % i == 0){
            maxDivisor = i
        }
    }
    console.log(maxDivisor)
}