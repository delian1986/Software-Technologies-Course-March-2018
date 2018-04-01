function solve(arr) {
    //arr=arr.map();
    let sumOfEvens=[];
    for (let i = 0; i < arr.length; i++) {
        if (i%2==0)     {
            sumOfEvens.push(arr[i]);
        }
    }
    console.log(sumOfEvens.join(' '));
}

//solve(['20', '30', '40']);