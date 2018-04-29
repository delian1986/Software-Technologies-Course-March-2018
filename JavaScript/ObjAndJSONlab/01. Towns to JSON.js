function townsToJSON(text) {
    let args='';
    let townObj=[];
    for (let i = 1; i < text.length; i++) {
        args=text[i].toString().split(/\s*\|\s*/).filter(e => e !== '');
        let obj={Town:args[0],Latitude:Number(args[1]),
            Longitude:Number(args[2])};
        townObj.push(obj);
    }
    console.log(JSON.stringify(townObj));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);