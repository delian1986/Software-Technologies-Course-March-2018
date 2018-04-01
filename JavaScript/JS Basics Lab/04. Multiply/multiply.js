function solve(nums) {
    let arr=nums[0].split(' ').map(Number);
    let a = Number(arr[0]);
    let b = Number(arr[1]);
    let c = Number(arr[2]);

    if (a + b == c) {
        if(a>b){
        [a,b]=[b,a];
        }
        return `${a} + ${b} = ${c}`;
    }else if (b + c == a) {
        if(b>c){
            [b,c]=[c,b];
        }
        return `${b} + ${c} = ${a}`;
    }else if (a + c == b) {
        if(a>c){
            [a,c]=[c,a];
        }
        return `${a} + ${c} = ${b}`;
    }else {
        return 'No';
    }
}

// nums =['8 15 7'];
// console.log(solve(nums));