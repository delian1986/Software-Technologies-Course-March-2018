function solve(arr) {
    let objects= arr.map(JSON.parse);
    let sum={};

    for (let obj of objects) {
        if(obj.town in sum){
            sum[obj.town]+=obj.income;
        }else{
            sum[obj.town]=obj.income;
        }
    }
    let towns=Object.keys(sum).sort();

    for (let town of towns) {
        console.log(`${town} -> ${sum[town]}`);
    }
}

console.log(solve(['{"town":"Sofia","income":200}']));

