// aqui exportaras las funciones que necesites
import { homePage } from './components/homePage.js';
import { userLogin } from './components/homePage.js';

export const myFunction = () => {
  const container = document.createElement('div');
  container.id = 'info-container';
  container.innerHTML = homePage();
  // aqui tu codigo
  console.log('Hola mundo!');
  return container
};


const hola = () =>{
  document.getElementById('login-button').style.display = 'none';
  document.getElementById('register-button').style.display = 'none';
  document.getElementById('info-container').innerHTML = userLogin();

}

//document.getElementById('login-button').addEventListener('click', hola());