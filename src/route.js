import { feedHome } from './lib/components/feed.js';
import {
  userLogin,
  userRegister,
  homePage,
} from './lib/components/homePage.js';
<<<<<<< HEAD
import { signInUser, signUpUser, close } from './lib/functions/auth.js';

const changeRouter = (hash) => {
  if (hash === '') {
    return showTemplate(hash);
  } else if (hash === '#/login') {
    return showTemplate(hash);
  } else if (hash === '#/register') {
    return showTemplate(hash);
  } else if (hash === '#/home') {
    return showTemplate(hash);
  }
};
=======
import { topMenu } from './lib/components/topMenu.js';
import {
  signInUser,
  signUpUser,
  signInGoogle,
  close,
} from './lib/functions/auth.js';

let userFound;
// verifica si el usuario esta registrado
export const userVerification = () => {
  console.log('ingresa a verificar');
  firebase.auth().onAuthStateChanged((user) => {
    user ? (userFound = true) : (userFound = false);
    console.log(userFound);
    if (userFound === true) {
      console.log('esta logeado');
      window.location.hash = '#/home';
    }
  });
  return userFound;
};

const rootContainer = document.getElementById('root');
>>>>>>> 7f39b30e9e31427fd6e284ca54d47515870d39c2

export const showTemplate = (hash) => {
  console.log('entra a templates');
  rootContainer.innerHTML = '';

  switch (hash) {
    case '':
      rootContainer.innerHTML = homePage();
      break;
    case '#/login':
      rootContainer.innerHTML = userLogin();
      signInUser();
<<<<<<< HEAD
=======
      const googlebutton = document.getElementById('loginWithGoogle');
      googlebutton.addEventListener('click', signInGoogle);
>>>>>>> 7f39b30e9e31427fd6e284ca54d47515870d39c2
      break;
    case '#/register':
      rootContainer.innerHTML = userRegister();
      signUpUser();
      break;
    case '#/home':
      rootContainer.appendChild(feedHome());
      const feedContainer = document.querySelector('.menuContainer');
      feedContainer.appendChild(topMenu()); 
      const logoutButton = document.getElementById('logout-button');
      logoutButton.addEventListener('click', close);
      break;
  }
};
<<<<<<< HEAD
=======

const changeRouter = (hash) => {
  console.log('entra a changeRouter');
  userVerification();
  if (hash === '') {
    return showTemplate(hash);
  } else if (hash === '#/login') {
    return showTemplate(hash);
  } else if (hash === '#/register') {
    return showTemplate(hash);
  } else if (hash === '#/home') {
    return showTemplate(hash);
  }
};
>>>>>>> 7f39b30e9e31427fd6e284ca54d47515870d39c2

export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));
  console.log(window.location.hash);
  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    };
  }
};
