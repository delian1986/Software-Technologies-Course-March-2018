function solve(args){
        let result= [];

    while(true){
        let start=args.indexOf('(');
        let end=args.indexOf(')');
        if (start<0) {
            break;
        }
        let text=args.substring(start+1,end);
        let textForReplace=args.substring(start,end+1);
        result.push(text);
        args=args.replace(textForReplace,"");
    }
    console.log(result.join(', '));
    

}
solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');