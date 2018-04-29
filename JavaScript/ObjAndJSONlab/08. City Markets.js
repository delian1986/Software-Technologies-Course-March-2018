function cityMarkets(sales) {

    let salesMap=new Map();
    for (let line of sales) {
        let args = line.toString().split(/\s*->\s*/g).filter(w => w !== '');
        let sale = args[2].toString().split(/\s*:\s*/g).filter(w => w !== "");

        let town = args[0];
        let product = args[1];
        let amount = Number(sale[0]);
        let price = Number(sale[1]);

        if (!salesMap.has(town)){
            salesMap.set(town,new Map());
        }

        if (!salesMap.get(town).has(product)){
            salesMap.get(town).set(product,0);
        }

        salesMap.get(town).set(product,salesMap
            .get(town).get(product)+(amount*price));
    }

    for (let [town,sales] of salesMap) {
        console.log(`Town - ${town}`);
        for (let [product,income] of sales) {
            console.log(`$$$${product} : ${income}`);
        }
    }

}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);