// aqui exportaras las funciones que necesites
//import { parse } from '@babel/core';
import { homePage } from './components/homePage.js';
import { userLogin } from './components/homePage.js';



export const myFunction = () => {
  const container = document.createElement('div');
  container.id = 'info-container';
  container.innerHTML = homePage();
  console.log('Hola mundo!');
  
  return container
};

const hola = () =>{
  console.log('Hiciste click');
  //myFragment.getElementById('login-button').style.display = 'none';
  //myFragment.getElementById('register-button').style.display = 'none';
  //document.getElementById('info-container').innerHTML = userLogin();
};

const myFragment = document.createRange().createContextualFragment(homePage());
//let myFragment = new DOMParser().parseFromString(homePage () , 'text/html').documentElement;
  console.log(myFragment);
  const loginButton = myFragment.getElementById('login-button');
  console.log(loginButton);
  loginButton.addEventListener('click', hola);





