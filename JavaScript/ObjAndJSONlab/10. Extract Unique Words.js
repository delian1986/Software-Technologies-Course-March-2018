function extractUniqueWords(text) {

    let unique= new Set();

    for (let line of text) {
        let words=line.toString().split(/\W/).filter(w=>w!=='');

        for (let word of words) {
            unique.add(word.toLowerCase());
        }
    }

    console.log(Array.from(unique.values()).join(', '));
}

extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. \n' +
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. \n' +
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. \n' +
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. \n' +
'Morbi in ipsum varius, pharetra diam vel, mattis arcu. \n' +
'Integer ac turpis commodo, varius nulla sed, elementum lectus. \n' +
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.\n'])