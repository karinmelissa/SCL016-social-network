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

export const showUserPosts = () => {

  let dataPosts = firebase
    .firestore()
    .collection('posts');
  let userPost = [];
  dataPosts.where("userId", "==", firebase.auth().currentUser.uid)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      userPost.push(doc.data())
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
    });
  });
  console.log(userPost);

  //.limit(12);
};

