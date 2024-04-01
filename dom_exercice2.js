/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */
/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

// username
const usernameLabel = document.createElement('label');
usernameLabel.textContent = "Username";
usernameLabel.setAttribute('for', 'username');
usernameLabel.classList.add('text-sm', 'font-medium', 'mb-1');

document.getElementById('username').insertAdjacentElement('beforeBegin', usernameLabel);

// password
const passwordLabel = document.createElement('label');
passwordLabel.textContent = "Password";
passwordLabel.setAttribute('for', 'password');
passwordLabel.classList.add('text-sm', 'font-medium', 'mb-1');

document.getElementById('password').insertAdjacentElement('beforeBegin', passwordLabel);

// confirm password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = "Confirm Password";
confirmPasswordLabel.setAttribute('for', 'confirmPassword');
confirmPasswordLabel.classList.add('text-sm', 'font-medium', 'mb-1');

document.getElementById('confirmPassword').insertAdjacentElement('beforeBegin', confirmPasswordLabel);


// document.getElementById('password').insertAdjacentElement('beforeBegin', '<label for="password">Password</label>');
// document.getElementById('confirmPassword').insertAdjacentElement('beforeBegin', '<label for="confirmPassword">Confirm Password</label>');



/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
const spanLabel = document.createElement('span');
spanLabel.textContent = "Required";
spanLabel.classList.add('text-sm', 'font-medium', 'mb-1', 'text-red-500');

const checkInput = (event) => {
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
    // if (event.target.value === '') {
    //     if (!errorElement.length) {
    //         event.target.insertAdjacentElement('afterEnd', spanLabel);
    //     }
    // } else {
    //     errorElement.forEach(el => el.remove());  // Remove existing error span
    // }
    if (event.target.value === '' && !errorElement.length) {
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-sm font-medium mb-1 text-red-500">Required</span>');
    }
}

document.getElementById('username').addEventListener('blur', checkInput);
document.getElementById('password').addEventListener('blur', checkInput);
document.getElementById('confirmPassword').addEventListener('blur', checkInput);


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

function validateConfirmPassword(confirmPasswordElement, passwordElement, errorElementId = 'confirmPasswordErro') {
  let errorElement = document.getElementById(errorElementId);
  confirmPasswordElement.addEventListener('input', (event) => {
    const password = passwordElement.value;
    const confirmPassword = event.target.value;

    // Si le mot de passe et la confirmation correspondent, supprimez l'élément d'erreur
    if (confirmPassword === password) {
      if (errorElement) {
        errorElement.remove();
      }
      return;
    }

    // Si une erreur existe déjà, ne la recréez pas
    if (confirmPassword !== password) {
      if (!errorElement) {
        errorElement = document.createElement('span');
      }
      errorElement.id = errorElementId;
      errorElement.classList.add('text-sm', 'font-medium', 'mb-1', 'text-red-500');
      confirmPasswordElement.insertAdjacentElement('afterend', errorElement);
    }

    // Mise à jour du texte de l'élément d'erreur
    errorElement.textContent = 'Mot de passe non identique';
  });
}

// Exemple d'utilisation
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordInput = document.getElementById('password');
validateConfirmPassword(confirmPasswordInput, passwordInput);


/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



