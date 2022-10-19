const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 10

password1El = document.getElementById("password1-el")
password2El = document.getElementById("password2-el")


function generatePasswords() {
    
    function getRandomCharacter1() {
    let randomChar1 = Math.floor(Math.random() * characters.length)
    return characters[randomChar1]
}

function generateRandomPassword1() {
    let randomPassword1 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter1()         
    }
    return randomPassword1
}

const generatedPasswordOne = generateRandomPassword1()

function getRandomCharacter2() {
    let randomChar2 = Math.floor(Math.random() * characters.length)
    return characters[randomChar2]
}

function generateRandomPassword2() {
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword2 += getRandomCharacter2()         
    }
    return randomPassword2
}

const generatedPasswordtwo = generateRandomPassword2()

password1El.textContent = "PW1: " + generatedPasswordOne
password2El.textContent = "PW2: " + generatedPasswordtwo

}





