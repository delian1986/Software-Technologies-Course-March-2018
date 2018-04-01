function solve(arr) {
    let biggest=Number.MIN_VALUE;

    for (let row = 0; row < arr.length; row++) {
        let currentRow = arr[row];
        for (let col = 0; col < currentRow.length; col++) {
            if (Number(currentRow[col])>biggest){
                biggest=currentRow[col];
            }
        }
    }

    console.log(biggest);
}
