const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/";

let password1 = document.getElementById("password1-el");
let password2 = document.getElementById("password2-el");
let generatePassword = document.getElementById("generatePassword");

generatePassword.addEventListener("click", function () {
  let randomPasswordOne = Math.floor(Math.random() * characters.length);
  let randomPasswordTwo = Math.floor(Math.random() * characters.length);
  password1.textContent = characters[randomPasswordOne];
  password2.textContent = characters[randomPasswordTwo];
});
