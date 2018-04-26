function solve(text,patterns) {
    let string='-';
    for (let i = 0; i < patterns.length; i++) {
        let pattern=patterns[i];
        text=text.split(pattern);
        
        text=text.join(string.repeat(pattern.length));

    }
    console.log(text);
}
let text='roses are red, violets are blue';
let patterns=([', violets are', 'red']);
solve(text,patterns);