const firestore = firebase.firestore();

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



/*export const showUserPosts =  userPost => {
  const userPosts = document.createElement('div');
  userPosts.className = 'userPosts';
  let userPostsTemplate = `  <div class='currentPost'>
                        <div class='postUserphoto'></div>
                        <div class='postInfo'>
                        <h2 class='postedUsername'>nombreUsuario</h2>
                        <p class='postedTime'>Fecha</p>
                        </div>
                        <p class='postedText'>texto</p>
                        </div>`;
console.log(userPostsTemplate);
userPosts.innerHTML += userPostsTemplate;
return userPostsTemplate;
};*/

export const showUserPosts = () => {
  const userPosts = document.createElement('div');
  userPosts.className = 'userPosts';
  let dataPosts = firebase
  .firestore()
  .collection('posts')
  .orderBy('timestamp', 'desc');
  dataPosts.where( "userId", "==", firebase.auth().currentUser.uid)
  .get()
  .then((querySnapShot) => {
    querySnapShot.forEach((doc) => {
      var arrayUserPosts = doc.data();
    //console.log (`${doc.id} => ${doc.data().text}`);
    console.log(arrayUserPosts);
     const userPostsTemplate = `  <div class='currentPost'>
                            <div class='postUserphoto'></div>
                            <div class='postInfo'>
                            <h2 class='postedUsername'>${arrayUserPosts.userName}</h2>
                            <p class='postedTime'>${arrayUserPosts.timestamp}</p>
                            </div>
                            <p class='postedText'>${arrayUserPosts.text}</p>
                            </div>`;
    console.log(userPostsTemplate);
    userPosts.innerHTML += userPostsTemplate;
  });  
  })
  .catch(err => console.log(err));
}

