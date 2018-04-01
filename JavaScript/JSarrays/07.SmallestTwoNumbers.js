function solve(arr) {
    arr.sort((a,b)=>a-b);
    console.log(arr.splice(0,2).join(' '));
}


//solve([10, 10, 10, 10]);