// All the variables that activate the program
let array = [];
let finalScore = 0;
let scramble = false;
let specialChars = /[^A-Z a-z0-9]/;
let upperCase = false;    
let lowerCase = false;
let hasNums = false;
let hasSyms = false;

// makes buttons function
let passCheck = document.getElementById('go');
let passScramble = document.getElementById('scramble');
let passKey = document.getElementById('goMake');


// main function for check password
function checkPass() {
    let password = document.getElementById('pwd').value;

    setArray(password);
    console.log("password obtained")
    checkSym();
    console.log("Checked upper and lower case")
    checkCase();
    console.log("check symbols ran")

// --------------------- change the path of how this works --------------------
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
            
        }

    }


// checks for nums
function checkNums() {
    for (let i = 0; i < array.length; i++) {
        if (Number.isFinite(array[i])) {
            hasNums = true;
        }
    }
}

// looks for symbols
function checkSym() {
    for (let i = 0; i < array.length; i++) {
        // for (let j = 0; j < specialChars.length; j++) {
            if (specialChars.test(array[i])) {
                console.log(`${array[i]} is a special character`)
                hasSyms = true;
            // }
        }

    }
}


// evaluates the strength
function strength() {

}

// main function for make password
function makePass() {

}

function makeArray() {

}

passCheck.onclick = function () {
    checkPass();
}

passScramble.onclick = function () {
    makePass();
    scramble = true;
}

passScramble.onclick = function () {
    makePass();
    scramble = false;
}
