function solve(arr) {
    arr=arr.map(Number);
    arr=arr.sort((a,b)=>b-a);

    for (var i = 0; i <=2; i++) {
        if(arr[i]==undefined){
            break;
        }
        console.log(arr[i]);
    }
}

solve(['10', '30']);