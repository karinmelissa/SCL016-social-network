// aqui exportaras las funciones que necesites
//import { parse } from '@babel/core';
import { homePage, userLogin, userRegister } from './lib/components/homePage.js';
import { signInUser, signUpUser } from './lib/functions/auth.js';

export const myFunction = () => {
  const myFragment = document.createRange().createContextualFragment(homePage());
  console.log(myFragment);
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
};

const register = () =>{
  document.getElementById('info-container').innerHTML = userRegister();
  /*document.getElementById('login-button').style.display = 'none';
  document.getElementById('register-button').style.display = 'none';


  const myRegisterForm = document.createRange().createContextualFragment(userRegister());
  const container = document.getElementById('info-container');
  container.appendChild(myRegisterForm);
  //console.log(myRegisterForm);*/
  signUpUser();

};







