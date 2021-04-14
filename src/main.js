import { startFunction } from './index.js';
import { feedHome } from './lib/components/feed.js';
import { close } from './lib/functions/auth.js';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('root').appendChild(feedHome());
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', close);
    /* const createFeed = document.createRange().createContextualFragment(feedHome());
    const logoutButton = createFeed.getElementById('logout-button');
    document.getElementById('root').appendChild(createFeed);
    logoutButton.addEventListener('click', console.log('hola'));
    fs.collection("posts")
      .get()
      .then((snapshot) => {
        setupPosts(snapshot.docs);
        loginCheck(user);
      }); */
  } else {
    document.getElementById('root').appendChild(startFunction());
    /* setupPosts([]);
    loginCheck(user); */
  }
});
