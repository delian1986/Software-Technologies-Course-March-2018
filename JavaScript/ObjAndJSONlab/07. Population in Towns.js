function populationInTowns(input) {
    let populationCounter=new Map();

    for (let i = 0; i < input.length; i++) {
        let args=input[i]
            .toString()
            .split(/<->/)
            .filter(w=>w!=='');
        // console.log(args);
        let town=args[0];
        let population=Number(args[1]);

        if (!populationCounter.has(town)){
            populationCounter.set(town,0);
        }
        populationCounter.set(town,populationCounter.get(town)+population);
    }

    let keys=Array.from(populationCounter.keys());
    keys.forEach(k=>console.log(`${k}: ${populationCounter.get(k)}`))

}

populationInTowns(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'
]);