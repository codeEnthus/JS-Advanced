function stars(n) {
    if (!n){
        n = 5;
    }
    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n))

    }
}