function solve(arr) {
    let resArr=[];
    let resArrLength=arr[0];
    for (var i = 1; i < arr.length; i++) {
        let args=arr[i].split(' - ');
        let index=args[0];
        let value=args[1];
        resArr[index]=value;
    }

    for (var i = 0; i < resArrLength; i++) {
        if(resArr[i]==undefined){
            console.log(0)
        }else{
            console.log(resArr[i]);
        }
    }
}
solve(['5','0 - 5','1 - 6','2 - 7']);