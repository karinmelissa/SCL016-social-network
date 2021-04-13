 import { close } from '../functions/auth.js';

/*const getUser = () =>{
  console.log(thisUser);
  thisUser  ?  thisUser  : 'No hay user';
}*/

export const feedHome = () => {
  
  const feedTemplate = document.createElement('div');
  const welcome = `<h1>Bienvenida!</h1>
  <button class='login-button' id='logout-button'>Cerrar sesion</button>`;
  feedTemplate.innerHTML = welcome;
  
  return feedTemplate;
};

/* const logoutFragment = document.createRange().createContextualFragment(feedHome());
const logoutButton = logoutFragment.getElementById('logout-button');
console.log(logoutButton);
logoutButton.addEventListener('click', close); */


