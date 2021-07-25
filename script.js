let number = Math.floor((Math.random() * 10 )) + 1;
let card = document.getElementById('card');
let guess = document.querySelector('input');
let btn = document.querySelector('button');
let correct = document.querySelector('#correct');
let incorrect = document.querySelector('#incorrect');
let reload = document.getElementById('reload');
let flipcard = document.querySelector('.flip-card');
let flipcardBack = document.querySelector('.flip-card-back');

card.innerHTML = number;

function result () {
    if (guess.value !== "" && (guess.value >= 1 && guess.value <= 10) ) {
        if (guess.value === card.innerHTML)
            {
                console.log(guess.value + " = " + card.innerHTML);
                correct.removeAttribute('hidden');
                flipcardBack.style.backgroundColor = "green";
            }
        else
        {
            console.log(guess.value + " != " + card.innerHTML)
            console.log(incorrect)
            incorrect.removeAttribute('hidden');
            flipcardBack.style.backgroundColor = "red";
        }
        flip()
        btn.setAttribute('disabled', 'disabled');
    }
    else alert("Enter a valid number")
}

function flip () {
        flipcard.attributes.class.value += " flip-card-rotate";
        console.log(flipcard)
}



reload.onclick = function (e) {
    // location.reload();
    guess.value = "";
    flipcard.attributes.class.value = "flip-card";
    correct.setAttribute('hidden', 'hidden');
    incorrect.setAttribute('hidden', 'hidden');
    btn.removeAttribute("disabled");  
}

