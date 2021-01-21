function storeCat(array) {


    let firstChars = array.map(x => x[0])
    let filtered = firstChars.filter((el, index) => firstChars.indexOf(el) === index).sort((a, b) => a.localeCompare(b))
    let store = {};
    let storeArr = [];
    let data = array.map(y => y.split(' : '))
        .forEach((info, i) => {
            let [product, price] = info;
            price = Number(price);
            store[product] = price;
            i++;
        });
    let sorted = Object.keys(store)
        .sort((a, b) => a.localeCompare(b));

    for (const ch of filtered) {
        console.log(ch);
        for (const item of sorted) {
            if (ch === item[0]) {
                console.log(`   ${item}: ${store[item]}`);
            }
        }
    }
}