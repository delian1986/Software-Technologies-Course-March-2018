function solve(arr) {
    let matrix = [];
    let temp = [];
    let numOfElemts = Number(arr[0]);

    for (let k = 1; k <= numOfElemts; k++) {
        temp.push(arr[k]);
    }
    matrix.push(temp);
    temp = [];

    let endElement=arr.length-numOfElemts;
    for (let j = arr.length - 1; j >= endElement; j--) {
        temp.unshift(arr[j]);
    }
    matrix.push(temp);


    for (const matrix1 of matrix) {
        console.log(matrix1.join(' '));
    }


}

//solve([1, 6, 7, 8, 9]);