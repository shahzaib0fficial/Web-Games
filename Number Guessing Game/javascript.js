
let actual_number;

let play=document.querySelector('#play');

let wrong_right= document.querySelector('#wrong_right');

let test= document.getElementById('test');

let game= document.querySelector('#game');

let guess= document.querySelector('#guess');

let count;


function test_guess(){
let play_button= document.querySelector('#play_button');

let guessed_number= document.querySelector('#guessed_number').value;


game.style.display= 'block';

if(count>0){
    if(guessed_number>actual_number){
        wrong_right.innerHTML="Your Guess Number is Greater Than Actual Number";
        guess.innerHTML="Guess Again";
    }
    else if(guessed_number==actual_number){
        wrong_right.innerHTML= "Congrats!!! Your Guess Number is Correct!";
        test.style.display='none';
        game.style.display='none';
        play_button.innerHTML="Play Again";
        play.style.display="block";
    }
    else if(guessed_number<actual_number){
        wrong_right.innerHTML= "Your Guess Number is Smaller Than Actual Number";
        guess.innerHTML="Guess Again";
    }
    else{
        wrong_right.innerHTML= "You Enter Something Invalid";
        guess.innerHTML="Guess Again";
    }
    count--;
}
else {
    wrong_right.innerHTML="You Lost!!";
    test.style.display='none';
    game.style.display='none';
    play_button.innerHTML="Play Again";
    play.style.display="block";
}
}

function play_game(){
    play.style.display='none';
    game.style.display='block';
    test.style.display='block';
    guess.innerHTML="Guess";
    actual_number= Math.floor(Math.random()*100);
    wrong_right.innerHTML="";
    document.querySelector('#limit').style.display="block";
    document.querySelector('#instructions_list').style.display="block";
    count= 9;
}