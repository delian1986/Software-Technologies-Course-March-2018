function countWordsWithMaps(text) {
    let words = text
        .toString()
        .toLowerCase()
        .split(/\W/)
        .filter(w => w !== '');

    let wordCounter=new Map();

    for (let word of words) {
        if (!wordCounter.has(word)){
            wordCounter.set(word,0);
        }
        wordCounter.set(word,wordCounter.get(word)+1);
    }

    let sorted=Array.from(wordCounter.keys()).sort();
    sorted.forEach(w=>
    console.log(`'${w}' -> ${wordCounter.get(w)} times`));
}

countWordsWithMaps('Far too slow, you\'re far too slow.');