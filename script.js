let isChanged = false;
const errorParagraph = document.createElement("p");
errorParagraph.id = "error";

const isPasswordValid = () => {
  const password = document.getElementById("password")
  const passwordConfirm = document.getElementById("password-confirm")

  if (password.value === passwordConfirm.value) {
    if (isChanged) {
      console.log('Changing stuff')
      const needToDelete = document.getElementById('error')
      needToDelete.remove()
      password.style.border = "rgba(0, 0, 0, 0.2) solid 2px"
      passwordConfirm.style.border = "rgba(0, 0, 0, 0.2) solid 2px"
    }
    return " "
  } else {
    isChanged = true;
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm")
    const newContent = document.createTextNode('*Passwords do not match')
    errorParagraph.appendChild(newContent);
    password.after(errorParagraph)
    password.style.border = "2px solid red"
    passwordConfirm.style.border = "2px solid red"
  }
}