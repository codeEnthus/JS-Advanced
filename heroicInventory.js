unction heroesTask(array) {
    let heroes = {};
    let result = [];
    let heroesArr = array.map(x => x.split(' / '))
        .forEach(line => {
            let [name, level,items] = line;
            level = Number(level);
            items = items ? items.split(', ') : []

            result.push(heroes = { name: name, level: level, items: items })
        });
    console.log(JSON.stringify(result));
}