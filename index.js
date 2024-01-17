const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/";

let password1 = document.getElementById("password1-el");
let password2 = document.getElementById("password2-el");
let generatePassword = document.getElementById("generatePassword");

generatePassword.addEventListener("click", function () {
  let randomPasswordOne = ""
  let randomPasswordTwo = "" 

  for (let i = 0; i < 8; i++) {
  randomPasswordOne += characters[Math.floor(Math.random() * characters.length)]
  randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
  }
  
  password1.textContent = randomPasswordOne
  password2.textContent = randomPasswordTwo
});

