import { feedHome } from './lib/components/feed.js';
import { userLogin , userRegister ,homePage } from './lib/components/homePage.js';
import { signInUser , signUpUser , close } from './lib/functions/auth.js';


const changeRouter = (hash) => {
  if(hash === ''){
    return showTemplate(hash);
  }
  else if (hash === '#/login'){
    return showTemplate(hash);
  }
  else if (hash === '#/register'){
    return showTemplate(hash);
  }
  else if (hash === '#/home'){
    return showTemplate(hash);
  }
}

export const showTemplate = (hash) => {
  const rootContainer = document.getElementById('root');
  rootContainer.innerHTML = '';

  switch (hash) {
    case '':
      //if ese si el usuario esta logeado redirigir al feed(?)
      rootContainer.innerHTML = homePage();
    break;
    case '#/login':
      rootContainer.innerHTML = userLogin();
      signInUser(); 
    break;
    case '#/register':
      rootContainer.innerHTML = userRegister();
      signUpUser();
    break;
    case '#/home':
      rootContainer.appendChild(feedHome());
      const logoutButton = document.getElementById('logout-button');
      logoutButton.addEventListener('click', close);
    break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));

  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    }
  }
}