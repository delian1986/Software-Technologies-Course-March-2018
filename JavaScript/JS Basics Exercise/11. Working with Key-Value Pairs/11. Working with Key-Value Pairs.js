function solve(text) {
    let kvp={};

    for (var i = 0; i < text.length-1; i++) {
        let args= text[i].split(' ');
        let key=args[0];
        let value=args[1];

        kvp[key]=value;
    }
    if(kvp[text[text.length - 1]]==undefined){
        console.log('None');
    }else {

    console.log(kvp[text[text.length - 1]]);
    }
}
solve(['key value','key eulav','test tset','key']);