function solve(lines) {

    for (var i = 0; i < lines.length-1; i++) {
        if(lines[i]==='Stop'){
            break;
        }
        else{
            console.log(lines[i]);
        }
    }
}

solve(['3', '6', '5', '4', 'Stop', '10', '12']);