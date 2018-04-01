function solve(arr) {
    let num = Number(arr[0]);
    var res = '';

    function isSimetric(iTostring) {
        for(let i = 0; i<iTostring.length/2;i++){
            if(iTostring[i]!=iTostring[iTostring.length-i-1]){
                return false;
            }
            else{
                return true;
            }
        }
    }

    for (let i = 1; i <= num; i++) {
        if (isSimetric(i.toString())) {
            res+=i + " ";
        }
    }
    return res;
}


//75/100
