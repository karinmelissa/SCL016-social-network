export const likePost = (postId)=>{
  console.log(postId)
  let post = firebase
  .firestore()
  .collection('posts')
  .doc(postId)
  .get()
  .then((doc) => {
    //Estamos capturando la base de dato de los post
    //Tenemos que agregar los likes y contabilizarlos
    let postData = doc.data();
    console.log(postData);
  }
    //doc.data().postLikes.add(firebase.auth().currentUser.displayName),
   )
}