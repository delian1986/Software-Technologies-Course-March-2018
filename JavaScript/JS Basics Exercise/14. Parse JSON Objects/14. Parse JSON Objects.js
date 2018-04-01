function solve(args) {

    for (let i=0; i<args.length;i++) {
        let tokens = JSON.parse(args[i]);
        console.log(`Name: ${tokens.name}`);
        console.log(`Age: ${tokens.age}`);
        console.log(`Date: ${tokens.date}`);

    }

}

solve(['{"name":"Gosho","age":10,"date":"19/06/2005"}'], ['{"name":"Tosho","age":11,"date":"04/04/2005"}']);