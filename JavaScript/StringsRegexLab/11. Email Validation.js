function solve(email){
    let regex=/\b[a-zA-Z0-9]+@[a-z]+\.[a-z]+\b/;
    let match;
    if (match=regex.exec(email)) {
        console.log("Valid");
        
    }else{
        console.log("Invalid");
    }
}

solve('valid@email.bg');