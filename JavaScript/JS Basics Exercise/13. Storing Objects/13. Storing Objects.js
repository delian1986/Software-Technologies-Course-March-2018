function solve(text) {
    let object = new Array();
    for (var i = 0; i < text.length; i++) {
        let args = text[i].split(' -> ');

        let name = args[0];
        let age = args[1];
        let grade = args[2];

        object.push({
            Name: name,
            Age: age,
            Grade: grade
        });
    }

    for (let student of object) {
        for (let key of Object.keys(student)) {
            console.log(`${key}: ${student[key]}`)
        }
    }
}

solve(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90']);