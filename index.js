// All the variables that activate the program
let array = [];
let finalScore = 0;
let specialChars = /[^A-Z a-z 0-9]/;
let upperCase = false;    
let lowerCase = false;
let hasNums = false;
let hasSyms = false;
var scrambler = true;
let phrase;

// makes buttons function
let passCheck = document.getElementById('go');
let passScramble = document.getElementById('scramble');
let passKey = document.getElementById('goMake');

// onclicks
passCheck.onclick = function () {
    checkPass();
}

passScramble.onclick = function () {
    scrambler = true;
    makePass();
    
}

passKey.onclick = function () {
  scrambler = false; 
  makePass();

}
// ---------------------------- START OF CHECKPASS ----------------------------

// main function for check password
function checkPass() {
    let password = document.getElementById('pwd').value;

    setArray(password);

    // Checks for any special characters
    checkSym();
    // Checks for numbers
    checkNums();
    // Checks upper and lower case
    checkCase();
    // gauges strength and gives an answer to user
    strength();

}

// sets string into an array
function setArray(pass) {
    array.length = pass.length;
    for (let i = 0; i < pass.length; i++) {
        array.push(pass.charAt(i));
        array.shift();
    }

}

// checks for uppercase and lowercase
function checkCase() {
    for (let i = 0; i < array.length; i++) {

            if (array[i] == array[i].toUpperCase()) {
                upperCase = true;
            }
            else {
                lowerCase = true;
            }
            array.splice(i,1);
        }

    }


// checks for nums
function checkNums() {
    for (let i = 0; i <= array.length; i++) {
        if (!isNaN(array[i])) {
            hasNums = true;
            array.splice(i,1);
            i--;
        }
    }
}

// looks for symbols
function checkSym() {
    for (let i = 0; i < array.length; i++) {
            if (specialChars.test(array[i])) {
                console.log(`${array[i]} is a special character`)
                hasSyms = true;
                array.splice(i,1);
               
        }

    }
}


// evaluates the strength
function strength() {
    finalScore = 0;

    // Weak is 0-1
    // Medium is 2-3
    // Strong is 4 

    if (upperCase){
        finalScore++;
    }   
    
    if (lowerCase){
        finalScore++;
    }
    
    if (hasNums){
        finalScore++;
    }
    
    if (hasSyms){
        finalScore++;
    }

    let finalColor = document.getElementById('demonstrate');
    finalColor.className = "";
    
    switch(finalScore){
        case 1:
            finalColor.innerHTML = "WEAK";
            finalColor.classList.add("red");
            break;
        case 2:
            finalColor.innerHTML = "Medium";
            finalColor.classList.add("yellow");
            break;
        case 3:
            finalColor.innerHTML = "Medium";
            finalColor.classList.add("yellow");
            break;
        case 4:
            finalColor.innerHTML = "Strong";
            finalColor.classList.add("green");
            break;
        default:
            finalColor.innerHTML = "WEAK";
            finalColor.classList.add("red");
            break;
        }   

        finalColor.classList.add("center");
        finalColor.classList.add("strengthShows");
        upperCase = false;    
        lowerCase = false;
        hasNums = false;
        hasSyms = false;

}

//  ---------------------------- END OF CHECKPASS ----------------------------

// ---------------------------- START OF MAKEPASS ----------------------------

// main function for make password
function makePass() {
    if(scrambler){
        makeRandPass();
        console.log(`${scramble} is true`)
    }
    else{
        scrambledPass();
        console.log('scrambled pass running')
    }

    let newPassword = array.toString();
    
    newPassword = newPassword.replace(/,/g, "");

    document.getElementById('newPass').classList.add('strengthShows');
    document.getElementById('newPass').classList.add('blue');
    
    document.getElementById('newPass').innerHTML= `<p if="newPass" class="strengthShows blue"> ${newPassword} </p>`;
    
    array.length = 0;
}

function makeRandPass() {

    for(let i = 0; i < 8; i++) {
        let char = String.fromCharCode(Math.random() * 126 + 33);
        array.push(char);
    }
}

function scrambledPass () {
    let phrase = document.getElementById('wordPhrase').value;

    setArray(phrase);
    for(let i = 0; i < 3; i++) {
    let char = String.fromCharCode(Math.random() * 64 + 33);
    array.push(char);
    }
}

// ---------------------------- END OF MAKEPASS ----------------------------