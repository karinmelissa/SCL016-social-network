import { initRouter } from './route.js';
<<<<<<< HEAD
/* import { startFunction } from './index.js';
import { feedHome } from './lib/components/feed.js';
import { close } from './lib/functions/auth.js'; */
//  initRouter();
/* firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('root').appendChild(feedHome());
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', close);
  } else {
    document.getElementById('root').appendChild(startFunction());
  }
}); */
const init = () => {
  // initFirebase();
  // observer();
  // templateCSS();
  // templateHome();
  initRouter();
  // templateSignUp();
};
=======

const init = () => {
  initRouter();
};

>>>>>>> 7f39b30e9e31427fd6e284ca54d47515870d39c2
window.addEventListener('load', init);
