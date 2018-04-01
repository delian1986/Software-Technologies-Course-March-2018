function solve(n,k) {
    let sequence = [];
    sequence[0] = 1;

    let sequenceLenght = n;
    let sumOfElelemts = k;
    let counter = 1;

    while (sequence.length < sequenceLenght) {
        let current = 0;
        let endElement=sequence.length-sumOfElelemts;
        if (endElement<0){
            endElement=0;
        }
        for (let i = sequence.length - 1; i >= endElement; i--) {

            current += sequence[i];
        }
        sequence[counter] = (current);
        counter++;
    }
    console.log(sequence.join(' '));
}

//solve(9, 5);
