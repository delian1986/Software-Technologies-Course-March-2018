function solve(arr) {
    let equalCounter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length ; j++) {
            if (arr[i][j] == arr[i + 1][j]) {
                equalCounter++;
            }
            if (arr[i][j] == arr[i][j + 1]) {
                equalCounter++;
            }
            if (i == arr.length - 2 && arr[i + 1][j] == arr[i + 1][j + 1]) {
                equalCounter++;
            }
        }
    }
    console.log(equalCounter);
}

solve([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2],]
);
