function solve(args) {
    let names = [];

    for (let i = 0; i < args.length; i++) {
        let username = "";
        let user = args[i].split("@");
        let domain = user[1].split(".");
        let temp="";

        for (let j = 0; j < domain.length; j++) {
            let firstChar = domain[j];
            temp += firstChar[0];
        }
        username += user[0] + "."+ temp;
        names.push(username);
    }

    console.log(names.join(", "));
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);