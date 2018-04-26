function solve(args){
    let concStr="";
    for (let i = 0; i < args.length; i++) {
        concStr+=args[i];
    }
    concStr=concStr.split('').reverse().join("");
    console.log(concStr);
    
}
solve(['I', 'am', 'student']);