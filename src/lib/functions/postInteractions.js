export const isLiked = (likes) => {
  for (let i = 0; i < likes.length; i += 1) {
    if (likes[i] === firebase.auth().currentUser.displayName) {
      return true;
    }
  }
  return false;
};

export const likePost = (postId,likeButton)=>{
  firebase
  .firestore()
  .collection('posts')
  .doc(postId)
  .get()
  .then(doc => {
    let userName = firebase.auth().currentUser.displayName
    let findUserLike = isLiked(doc.data().postLikes);
    if(findUserLike == true){
      firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .update(
        { postLikes: firebase.firestore.FieldValue.arrayRemove(userName),
        })
        likeButton.style.background = '#7EB3DD';
    }else{
      firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .update(
        { postLikes: firebase.firestore.FieldValue.arrayUnion(userName),
        });
        likeButton.style.background = '#797ad4';
      }
    })
  //cambiar clase apra cambiar de color
}
export const showLikes = (postId,button)=>{
  firebase
  .firestore()
  .collection('posts')
  .doc(postId)
  .get()
  .then(doc => {
    let likes = doc.data().postLikes
    for (let i = 0; i < likes.length; i += 1) {
      if (likes[i] === firebase.auth().currentUser.displayName) {
        button.style.background = '#797ad4';
      }
      else{
        button.style.background = '#7EB3DD';
      }
    }
  })
}