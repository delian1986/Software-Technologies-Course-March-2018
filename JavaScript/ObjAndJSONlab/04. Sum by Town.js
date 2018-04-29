function sumByTown(input) {
    let towns = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let income = Number(input[i + 1]);

        if (!towns[town]) {
            towns[town] = 0;
        }
        towns[town]+=income;
    }
    console.log(JSON.stringify(towns));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);