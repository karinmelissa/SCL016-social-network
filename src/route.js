import { feedHome } from './lib/components/feed.js';
import {
  userLogin,
  userRegister,
  homePage,
} from './lib/components/homePage.js';
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

export const showTemplate = (hash) => {
  console.log('entra a templates');
  rootContainer.innerHTML = '';

  switch (hash) {
    case "":
      rootContainer.innerHTML = homePage();
      break;
    case "#/login":
      rootContainer.innerHTML = userLogin();
      signInUser();
      const googlebutton = document.getElementById("loginWithGoogle");
      googlebutton.addEventListener("click", signInGoogle);
      break;
    case "#/register":
      rootContainer.innerHTML = userRegister();
      signUpUser();
      break;
    case "#/home":
      rootContainer.appendChild(feedHome());
      const feedContainer = document.querySelector('.topcontainer');
      feedContainer.appendChild(topMenu());
      const openMenu = document.querySelector('#openMenu');
      openMenu.addEventListener('click', openMenuFunction);
      const logoutButton = document.getElementById('logout-button');
      logoutButton.addEventListener('click', close);
      break;
  }
};

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

// open menu from topMenu feedpage
let showMenu = true;
const openMenuFunction = (e) => {
  if (showMenu === true){
    document.getElementById('menu').style.display='block';
    showMenu = false;
  }
  else {
    document.getElementById('menu').style.display='none';
    showMenu = true;
  } 
  };

