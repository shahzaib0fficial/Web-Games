const visibleString = ["mother", "father", "baby", "child", "teenager", "grandmother", "student", "teacher", "business", "person", "sales" , "clerk", "woman", "man" ,"lion", "tiger", "bear", "dog", "cat", "cricket", "bird", "wolf","table", "truck", "book", "pencil", "iPad", "computer", "coat", "boots"];
const invisibleString = ["ohr", "ahr", "ay", "hl", "engr", "rnmte", "tdn", "ece", "uies", "esn", "ae" , "lr", "oa", "a" ,"in", "ie", "er", "o", "a", "rce", "id", "of","al", "rc", "ok", "ecl", "pd", "optr", "ot", "ot"];

let scores = document.getElementById("scores");
let points = localStorage.getItem("points") || 0;

let wordNumber = localStorage.getItem("wordNumber") || 0;
game();

var inputCount;

function game(){
    let div1 = document.querySelector('#div1');
    div1.style.display = 'block';
scores.innerHTML = points;

let lengthOfWord = visibleString[wordNumber].length;

// Creating variables and input fields
inputCount = -1;

for(let i = lengthOfWord; i >= 1; i--){
    if(i%2 != 0){
        eval('var ' + 'character' + i + '=' + 'visibleString[wordNumber][i-1]' + ';');
        eval('var ' + 'label' + i + '=' + `document.createElement('label')` + ';');
    }
    else{
        eval('var ' + 'input' + i + '=' + `document.createElement('input')` + ';');
        eval('input' + i).type = 'text';
        eval('input' + i).className = 'inputs';
        eval('input' + i).maxLength = '1';
        inputCount++;   
    }
}

// printing variable and input feilds on screen
let character = "character";
let label = "label";
let input = "input";
let characterNumber = 1;
let inputNumber = 2;

for(let i = 1; i <= lengthOfWord; i++){
    if(i%2 !=0){
        let e = eval(character + characterNumber);
        eval(label + characterNumber).innerHTML = e;
        div1.appendChild(eval(label + characterNumber));
        characterNumber += 2;
    }
    else{
        div1.appendChild(eval(input + inputNumber));
        inputNumber+=2
    }
}


// input focusing section
input2.focus();

let h = 2;
for(i = -1; i< inputCount-1; i++){
    let focusHere;
    focusHere = eval('input' + (h+2));
    eval('input' + h).onkeyup = function() {myMethod(this.value, focusHere)};
    h = h+2;
}

// checking section
let last = (inputCount+1)*2;
let lastInput = eval('input' + last);

let lengthOfInvisbleString = invisibleString[wordNumber].length;
for(i = 1; i <= lengthOfInvisbleString; i += 2){
    eval('var ' + 'check' + i + '=' + 'invisibleString[wordNumber][i]' + ';');
}
lastInput.addEventListener('input', ()=>{
    let correct = -1;
    let correctIncorrect = document.querySelector("#correctIncorrect");
    for(i = 0; i <= inputCount ; i++){
        let inputedValue = document.getElementsByClassName("inputs")[i].value;
        if(inputedValue == invisibleString[wordNumber][i]){
            correct++;
        }
    }
    if(correct == inputCount){
        correctIncorrect.innerText = "Correct!!!"
        wordNumber++;
        points += 30;
        scores.innerHTML = points;
        localStorage.setItem("points" , points);
        localStorage.setItem("wordNumber" , wordNumber);
        next();
    }
    else{
        minus = eval("input" + (inputCount*2+2)).value;
        if(minus.length > 0){
            points -= 5;
            scores.innerHTML = points;
            correctIncorrect.innerText = "Incorrect";
            localStorage.setItem("points" , points);
        }
    }
});
}

function next(){
    let div1 = document.getElementById('div1');
    div1.innerHTML = "";
    game();
}

function myMethod(from , here){
    if(from.length == 1){
        here.focus();
    }
}