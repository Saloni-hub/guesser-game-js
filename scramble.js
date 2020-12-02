const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let sWords = ['python','java','css','php','c#','html','javascript','reactjs'
,'angular','swift','android','sql','database'];
const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    // console.log(ranNum);

    let newsWords = sWords[ranNum];
    // console.log(newsWords.split(""));
    return newsWords;
}
const scrambleWords = (arr) => {
    for(let i= arr.length-1;i>0;i--) {
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i+1));
        // console.log(i);
        // console.log(j);
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

let play=false;
let newWords = "";
let randWords = "";
btn.addEventListener('click',function() {
    if(!play) {
        play = true;
        btn.innerHTML = "guess"
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.innerHTML = `Guess the Word: ${randWords}`;
    } else {
        let words = guess.value;
        if(newWords === words) {
            // console.log('correct'); 
            play=false;
            msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
            btn.innerHTML = "start Again";
            guess.classList.toggle('hidden');
            guess.value="";
        } else {
            console.log('Incorrect');
            msg.innerHTML = `Sorry. It's not Correct. Plz try again
                        ${randWords}`;
        }
    }
})