function solve(name,email,phone,data) {
    data.forEach(line=>{
        line = line.replace(/<![a-zA-Z]+!>/g, name);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });

}

let data=['Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
let name='Pesho';
let email='pesho@softuni.bg';
let phone='90-60-90';
solve(name,email,phone,data);