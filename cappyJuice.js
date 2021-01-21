function cappyJuice(array) {

    let fruits = {};
    let bottles = {};
    let result = array.map(x => x.split(' => ')).forEach(line => {
        let [fruit, quantity] = line;
        quantity = Number(quantity)
        if (!fruits[fruit]) {
            fruits[fruit] = quantity
            if (fruits[fruit] >= 1000) {
                count = Math.floor(quantity / 1000);
                bottles[fruit] = [];
                bottles[fruit].push(count)
            } else {
                fruits[fruit] = quantity
            }
        } else {
            fruits[fruit] += quantity
            if (fruits[fruit] >= 1000) {
                bottles[fruit] = Math.floor(fruits[fruit] / 1000)
            }
        }
    });
    for (const bottle in bottles) {
        console.log(`${bottle} => ${bottles[bottle]}`);
    }

}