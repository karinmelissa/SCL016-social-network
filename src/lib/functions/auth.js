//export const auth = firebase.auth();

// Register
export const signUpUser = () => {
  const signupForm = document.querySelector('#registerForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const passwordConfirmation = document.getElementById('confirm-password')
      .value;
    if (password !== passwordConfirmation) {
      document.querySelector('.error-control').textContent = 'Las contraseñas deben ser iguales';
    }
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        firebase.firestore().collection('userInfo')
        .add({
          userId: firebase.auth().currentUser.uid,
          userEmail : email ,
          userName : name,
          userBio: 'Hola, mi nombre es ' + name,
          profilePicture : "Upload profile picture"
        })
        userCredential.user.updateProfile({
          displayName: name,
        });
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
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        window.location.href = '#/home';
      })
      .catch(() => {
        document.querySelector('.error-control').innerHTML = 'Contraseña incorrecta, <a class="link" id="register-button"> olvidaste tu contraseña?</a>';
      });
  });
};

// logout session from feed
export const close = (e) => {
  e.preventDefault();
  firebase.auth().signOut().then(() => {
    window.location.hash = '';
  });
};

// login with google
export const signInGoogle = (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result);
    window.location.href = '#/home';
  });
};
