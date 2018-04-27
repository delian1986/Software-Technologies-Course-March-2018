function solve(text) {
    let regex = /\b([0-9]{1,2})\-([A-Z][a-z]{2})\-([0-9]{4})\b/g;
    let dates=[],m;

    for (let str of text) {
        while (m=regex.exec(str)){
            dates.push(`${m[0]} (Day: ${m[1]}, Month: ${m[2]}, Year: ${m[3]})`);
        }
    }
        console.log(dates.join('\n'));
}

