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

let userPostbd = [];
export const selectUserPosts = () =>{
  let dataPosts = firebase
  .firestore()
  .collection('posts')
  .orderBy('timestamp', 'desc');
  dataPosts.where( "userId", "==", firebase.auth().currentUser.uid)
  .onSnapshot((querySnapShot) => {
  
    querySnapShot.forEach((doc) =>{
      userPostbd.push (doc.data());
    });
    console.log(userPostbd);
  });
  return userPostbd;
}

  export const showUserPosts = (userPostbd) => { 
    let posts = document.createElement('div');
    posts.className='currentUserPosts';
    const postnumber = userPostbd.length;
    for (let i=0; i < postnumber; i++){
      currentUserPosts = `
                    <div class='currentPost'>
                    <div class='postUserphoto'></div>
                    <div class='postInfo'>
                      <h2 class='postedUsername'>${userPostbd.userName}</h2>
                      <p class='postedTime'>${userPostbd[i].timestamp
                        .toDate()
                        .toDateString()}</p>
                    </div>
                    <p class='postedText'>${userPostbd[i].text}</p>
                    </div>`;
      posts.innerHTML += currentUserPosts;
      console.log('un post');
    };
    return showUserPosts;
  };
  

  

/*export const showUserPosts = () => {

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
};*/

