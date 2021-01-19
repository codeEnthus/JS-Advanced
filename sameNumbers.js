function sameNumbers(num) {

    let number = num.toString();
    let areEqual;
    for (let i = 0; i < number.length; i++) {
        let currentNum = number[i];
        for (let j = 1; j < number.length; j++) {
            if (currentNum === number[j]) {
                areEqual = true;
            } else {
                areEqual = false;
                break;
            }
        }
    }
    let sum = 0;
    for (let n of number) {
        n = Number(n)
        sum += n
    }

    if (areEqual) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
}