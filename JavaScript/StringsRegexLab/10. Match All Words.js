function solve(text){
    let regex=/[\w]+/g;
    let words=[];
    let match;

    while (match=regex.exec(text)) {
        words.push(match);
    }

    console.log(words.join("|"));
}

solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text')