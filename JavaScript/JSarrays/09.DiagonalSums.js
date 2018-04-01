function solve(arr) {
    let mainDiagonal=0;
    let secondDiagonal=0;
    let second=arr.length-1;

    for (let row = 0; row < arr.length; row++,second--) {
        mainDiagonal+=arr[row][row];
        secondDiagonal+=arr[second][row];
    }
    let res=[];
    res.push(mainDiagonal);
    res.push(secondDiagonal);
    console.log(res.join(' '));
}

// solve([[3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]]
//
// );