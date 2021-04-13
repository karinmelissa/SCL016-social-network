import { startFunction } from './index.js';
import { feedHome } from './lib/components/feed.js';

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  if (user) {
    console.log("signin " + user.email);
    const createFeed = document.createRange().createContextualFragment(feedHome());
    const logoutButton = createFeed.getElementById('logout-button');
    document.getElementById('root').appendChild(createFeed);
    logoutButton.addEventListener('click', console.log('hola'));
    /*fs.collection("posts")
      .get()
      .then((snapshot) => {
        setupPosts(snapshot.docs);
        loginCheck(user);
      });*/
  } else {
    document.getElementById('root').appendChild(startFunction());
    /*setupPosts([]);
    loginCheck(user);*/
  }
});

