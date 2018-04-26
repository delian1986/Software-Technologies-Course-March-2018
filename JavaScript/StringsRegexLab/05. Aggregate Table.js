function solve(args){
    let towns=[];
    let sumOfIncomes;

    for (let i = 1; i < args.length; i++) {
       let line=args[i].toString().split('|').trim();
       
    }
    console.log(towns.join(','));
    console.log(sumOfIncomes);
    
    
}

solve(['| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275']
);