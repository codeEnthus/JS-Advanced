function mathOperations(num, num2, str) {
    let result = 0;
    switch (str) {
        case '+': result = num + num2; break;
        case '-': result = num - num2; break;
        case '/': result = num / num2; break;
        case '*': result = num * num2; break;
        case '%': result = num % num2; break
        case '**': result = num ** num2; break;
    }
    console.log(result);
}