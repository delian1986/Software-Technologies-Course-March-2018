function solve(text) {
    let regex= /[,;().\s]+/;
    text.split(regex).forEach(s=>console.log(s));
}

solve('let sum = 4 * 4,b = "wow";');