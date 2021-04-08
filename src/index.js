import { homePage, userLogin, userRegister } from './lib/components/homePage.js';
import { signInUser, signUpUser } from './lib/functions/auth.js';

export const myFunction = () => {
  const myFragment = document.createRange().createContextualFragment(homePage());
  const loginButton = myFragment.getElementById('login-button');
  const registerButton = myFragment.getElementById('register-button');
  const rootCall = document.getElementById('root');
  rootCall.appendChild(myFragment);
  loginButton.addEventListener('click', login);
  registerButton.addEventListener('click', register );
  return myFragment
};

const login = () =>{
  document.getElementById('info-container').innerHTML = userLogin();
  signInUser();
  const registerButton = document.getElementById('register-button');
  registerButton.addEventListener('click', register );
};

const register = () =>{
  document.getElementById('info-container').innerHTML = userRegister();
  signUpUser();
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', login);
};







