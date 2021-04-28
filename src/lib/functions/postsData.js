export const firestore = firebase.firestore();

export const savePost = () => {
  const createdPost = document.getElementById('writtePost').value;
  if (createdPost !== '') {
    return firestore
      .collection('posts')
      .add({
        userId: firebase.auth().currentUser.uid,
        userName: firebase.auth().currentUser.displayName,
        text: createdPost,
        privacy: document.getElementById('selectPrivacy').value,
        // Agregar imagenes, etiquetas
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .catch(function (error) {
        console.error('Error writing new message to database', error);
      });
  }
};

export const showPosts = () => {
  let dataPosts = firebase
    .firestore()
    .collection('posts')
    .orderBy('timestamp', 'desc');
  //.limit(12);
  return dataPosts;
};

export const showUserPosts = () => {
  const userPosts = document.createElement('div');
  userPosts.className = 'profileFeed';
  let dataPosts = firebase
  .firestore()
  .collection('posts')
  .orderBy('timestamp', 'desc');
  dataPosts.where( "userId", "==", firebase.auth().currentUser.uid)
  .get()
  .then((querySnapShot) => {
    querySnapShot.forEach((doc) => {
      var arrayUserPosts = doc.data();
     const userPostsTemplate = `<div class='post'>
                                <div class='postUserphoto'></div>
                                <div class='postInfo'>
                                <h2 class='postedUsername'>${arrayUserPosts.userName}
                                <i class="fas fa-ellipsis-h"></i>
                                </h2>
                                <p class='postedTime'>${arrayUserPosts.timestamp
                                  .toDate()
                                  .toDateString()}</p>
                                </div>
                                <p class='postedText'>${arrayUserPosts.text}</p>
                                </div>`;
    userPosts.innerHTML += userPostsTemplate;
  });  
  })
  .catch(err => console.log(err));
  return userPosts;
}

//edit profile
const editarProfile = () => {
  

}