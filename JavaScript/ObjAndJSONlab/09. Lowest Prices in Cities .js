function lowestPricesInCities(text) {
    let map = new Map();

    for (let line of text) {
        let args = line.toString()
            .split(/\s*\|\s*/)
            .filter(w => w !== '');

        let town=args[0];
        let product= args[1];
        let price=Number(args[2]);

        if (!map.has(product)){
            map.set(product,new Map());
        }

        map.get(product).set(town,price);
    }

    for (let [product,towns] of map) {
        let minPrice=Number.MAX_VALUE;
        let minPriceTown='';

        for (let [town,price] of towns) {
            if (price<minPrice){
                minPrice=price;
                minPriceTown=town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);