function solve(args) {
    let products = [];
    let price=0;

    for (let i = 0; i < args.length; i++) {
        let order = args[i].toString();
        if (i % 2 == 0) {
            products.push(order);
        }else{
            price+=Number(order);
        }
    }

    console.log(`You purchased ${products.join(", ")} for a total sum of ${price}`);

}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);

