// aqui exportaras las funciones que necesites
import  homePage  from './components/homePage.js';
//import { userLogin } from './components/homePage.js';

export const myFunction = () => {
  const welcomePage = document.createElement('div');
  welcomePage.id = 'welcome-page';
  welcomePage.appendChild(homePage());
  // aqui tu codigo
  console.log('Hola mundo!');
  return welcomePage
};
