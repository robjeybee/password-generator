const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/";
const copyPassword1 = document.getElementById("copy-password1")
const copyPassword2 = document.getElementById("copy-password2")
let password1 = document.getElementById("password1-el");
let password2 = document.getElementById("password2-el");
let generatePassword = document.getElementById("generatePassword");
let resetBtn = document.getElementById("reset-btn");

generatePassword.addEventListener("click", function() {
  let randomPasswordOne = ""
  let randomPasswordTwo = "" 

  for (let i = 0; i < 15; i++) {
  randomPasswordOne += characters[Math.floor(Math.random() * characters.length)]
  randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
  }
  
  password1.textContent = randomPasswordOne
  password2.textContent = randomPasswordTwo

  copyPassword1.innerHTML = "Copy to clipboard"
  copyPassword2.innerHTML = "Copy to clipboard"
  
});

copyPassword1.addEventListener("click", async function() {
  const passwordToCopy = password1.textContent
  copyPassword1.innerHTML = "Copied!"

  try {
    await navigator.clipboard.writeText(passwordToCopy)
    console.log("Password 1 copied to clipboard")
  } catch (err) {
    console.log("Unable to copy password to clipboard")
  }
 
 
});

copyPassword2.addEventListener("click", async function() {
  const passwordToCopy = password2.textContent
    copyPassword2.innerHTML = "Copied!"
    try {
    await navigator.clipboard.writeText(passwordToCopy)
    console.log("Password 2 copied to clipboard")
  } catch (err) {
    console.log("Unable to copy password to clipboard")
  }

});

resetBtn.addEventListener("click", () => {
  console.log("button clicked")
  window.location.reload()
})

