function solve(nums) {
    let num1=nums[0];
    let num2=nums[1];

    if(num1<=num2){
        return num1*num2;
    }else{
        return num1/num2;
    }
}