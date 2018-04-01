function solve(nums) {
    // let num1=nums[0];
    // let num2=nums[1];
    // let num3=nums[2];
    let counter=0;
    let zero=0;

    for (var i = 0; i < nums.length; i++) {
        if(Number(nums[i])<0){
            counter++;
        }
        if(nums[i]==0){
            zero++;
            break;
        }
    }

    if(counter%2==1 && zero==0){
        return 'Negative';
    }else{
        return 'Positive';
    }
}

console.log(solve(['2', '3', '-1']));