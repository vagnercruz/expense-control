function validateFields() {
  const email = document.getElementById("email").value;
  const recoverPasswordButton = document.getElementById('recover-password-button');

  if (!email) {
    recoverPasswordButton.disabled = true;
  } else if (validateEmail(email)) {
    recoverPasswordButton.disabled = false;
  } else {
    recoverPasswordButton.disabled = true;
  }
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
