// aqui exportaras las funciones que necesites
//import { parse } from '@babel/core';
import { homePage, userLogin, userRegister } from './lib/components/homePage.js';


export const myFunction = () => {
  //const container = document.createElement('div');
  //container.id = 'info-container';
  //container.innerHTML = homePage();
  //console.log('Hola mundo!');
  const myFragment = document.createRange().createContextualFragment(homePage());
//let myFragment = new DOMParser().parseFromString(homePage () , 'text/html').documentElement;
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
  //document.getElementById('login-button').style.display = 'none';
  //document.getElementById('register-button').style.display = 'none';
  document.getElementById('info-container').innerHTML = userLogin();
};

const register = () =>{
  //document.getElementById('login-button').style.display = 'none';
  //document.getElementById('register-button').style.display = 'none';
  document.getElementById('info-container').innerHTML = userRegister();
};







