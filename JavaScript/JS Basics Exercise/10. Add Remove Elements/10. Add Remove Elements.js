function solve(text) {
    let array=[];

    for (var i = 0; i < text.length; i++) {
        let args=text[i].split(' ');
        let command=args[0];
        let value=args[1];

        if(command=='add'){
            array.push(value);
        }else {
            array.splice(value,1);
        }
    }

    for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
    }
}

solve(['add 3','add 5','remove 1','add 2','remove 10']);