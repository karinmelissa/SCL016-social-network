const auth = firebase.auth();

// Register
export const signUpUser = () => {
  const signupForm = document.querySelector('#registerForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(signupForm);
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const passwordConfirmation = document.getElementById('confirm-password')
      .value;
    if (password !== passwordConfirmation) {
      document.querySelector('.error-control').textContent = 'Las contraseñas deben ser iguales';
    }
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        signupForm.reset();
        window.location.href = '#/home';
      })
      .catch(() => {
        document.querySelector('.error-control').textContent = 'Correo electronico invalido';
      });
  });
};
// login
export const signInUser = () => {
  const signInForm = document.querySelector('#loginForm');
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signing-email').value;
    const password = document.getElementById('signing-password').value;
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = '#/home';
      })
      .catch(() => {
        console.log('contraseña incorrecta');
        document.querySelector('.error-control').innerHTML = 'Contraseña incorrecta, <a class="link" id="register-button"> olvidaste tu contraseña?</a>';
      });
  });
};

// logout session from feed
export const close = (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location.href = './';
  });
};

// login with google
export const signInGoogle = (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    window.location.href = '#/home';
  });
};
