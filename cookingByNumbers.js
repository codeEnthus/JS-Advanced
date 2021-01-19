function cookingByNum(number, ...commands) {
    let startNum = Number(number);

    for (const command of commands) {
        if (command === 'chop') {
            startNum /= 2;
        } else if (command === 'dice') {
            startNum = Math.sqrt(startNum)
        } else if (command === 'spice') {
            startNum += 1;
        } else if (command === 'bake') {
            startNum *= 3;
        } else if (command === 'fillet') {
            startNum -= startNum * 0.20;
        }
        console.log(startNum);
    }

}