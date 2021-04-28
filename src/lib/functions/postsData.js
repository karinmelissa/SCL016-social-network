import { editPost }  from '../components/modalPostEdit.js'
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
                                <i id ='editPost' class="fas fa-ellipsis-h">
                                <div id='menuEdit' class="menuEdit">
                                    <button id = 'editpost' value='${doc.id}'>Editar</button></a>
                                    <button id ='deletepost' value='${doc.id}'>Borrar</button>
                                 </div>
                                 </i>
                                </h2>
                                </div>
                                <p class='postedTime'>${arrayUserPosts.timestamp
                                  .toDate()
                                  .toDateString()}</p>
                                <p class='postedText'>${arrayUserPosts.text}</p>
                                </div>`;
    userPosts.innerHTML += userPostsTemplate;
    
  });  
    const clickEdit = document.querySelectorAll('#editpost');
    console.log(clickEdit);
    clickEdit.forEach(item => {item.addEventListener('click', () => editPost (item.value))});
    const clickDelete = document.querySelectorAll('#deletepost');
    console.log(clickDelete);
    clickDelete.forEach(item => {item.addEventListener('click', () => deletePost (item.value))});
    const openMenuEdit = document.querySelectorAll('#editPost');
    console.log(openMenuEdit);
    openMenuEdit.forEach(item => {item.addEventListener('click', function () {
    if (showMenuEditcontrol === true){
      item.childNodes[1].style.display='block';
      showMenuEditcontrol = false;
    }
    else {
      item.childNodes[1].style.display='none';
      showMenuEditcontrol = true;
    }
    }
    )});
    
  })
  .catch(err => console.log(err));
  return userPosts;
};
let showMenuEditcontrol = true;

  /**/

//edit and delete post

const deletePost= (id) => {
    firebase.firestore().collection("posts").doc(id).delete().then(() => {
    console.log("Document successfully deleted! " + id);
}).catch((error) => {
  console.error("Error removing document: ", error);
}
)}

