function cirle(arg) {
    let result = 0;
    if (arg === Number(arg)) {
        result = Math.PI * arg * arg;
        console.log(result.toFixed(2));

    } else {
        let type = typeof arg;
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}