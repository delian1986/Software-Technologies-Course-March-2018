function solve(text) {
    text=text.join(',');
    let words = text.split(/\W+/);
    words=words.filter(w=>w.length>0);
    let result = [];

    for (var i = 0; i < words.length; i++) {
        let word = words[i];
        if (word == word.toLocaleUpperCase()) {
            result.push(word);
        }
    }
    return result.join(', ');

}

console.log(solve(['We start by HTML, CSS, JavaScript, JSON and REST. Later we touch some PHP, MySQL and SQL. Later we play with C#, EF, SQL Server and ASP.NET MVC. Finally, we touch some Java, Hibernate and Spring.MVC.']));
