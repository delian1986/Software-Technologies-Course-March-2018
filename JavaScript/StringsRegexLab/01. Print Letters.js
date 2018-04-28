function solve(args){
    let word=args.split('');

    for (let i = 0; i < word.length; i++) {
        console.log(`str[${i}] -> ${word[i]}`);
        
    }
}
solve('Hello World');