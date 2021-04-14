import {
  homePage,
  userLogin,
  userRegister,
} from './lib/components/homePage.js';
import { signInUser, signUpUser, signInGoogle } from './lib/functions/auth.js';
import {homeFragment} from './index.js';

export const changeRoute = (hash) => {
  if (hash === '#/'){
    return showTemplate(hash);
  } else { 
    return showTemplate(hash);
  }
}

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = 'primera pagina';

  switch (hash){
    case '#/':
    containerRoot.appendChild(homePage());
    break;
    case '#login':
    containerRoot.appendChild(userLogin());
    break;
    case '#register':
      containerRoot.getElementById('info-container').innerHTML = userRegister();
    break  
  }

}