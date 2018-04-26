function solve([pattern,text]){
    let word=pattern;
    let sentace=text;

    let lastIndex=-1;
    let counter=0;

    while (true) {
        lastIndex=sentace.indexOf(word,lastIndex);
        if (lastIndex<0){
            break;
        }
        lastIndex++;
        counter++;
    }
    console.log(counter);

}
let pattern='ma';
let text='Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.';

solve([pattern,text]);