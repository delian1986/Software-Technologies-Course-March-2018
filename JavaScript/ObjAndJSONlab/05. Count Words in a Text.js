function countWordsInAText(text) {
    let words=text.toString().split(/\W/).filter(a=>a!=='');

    let wordsCount={};

    for (let word of words) {
        if (!wordsCount[word]){
            wordsCount[word]=0;
        }
        wordsCount[word]++;
    }

    console.log(JSON.stringify(wordsCount));
}

countWordsInAText([ 'JS devs use Node.js for server-side JS.-- JS for devs' ]);