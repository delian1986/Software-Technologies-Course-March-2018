function solve(args) {
    let obj={};

    for (var i = 0; i < args.length; i++) {
        let objPrp=args[i].split(' -> ');
        let key=objPrp[0];
        let value= objPrp[1];

        if(key=="age"||key=="grade"){
            value=Number(value);
        }
        obj[key]=value;
    }

    let json=JSON.stringify(obj);
    console.log(json);
}

