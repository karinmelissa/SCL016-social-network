const firestore = firebase.firestore();

export const savePost = () => {
  return firestore.collection('posts').add({
    userId: firebase.auth().currentUser.uid ,
    text: document.getElementById('writtePost').value ,
    //Agregar imagenes, etiquetas
    timestamp: firebase.firestore.FieldValue.serverTimestamp() , 
    //status :
  }).catch(function(error) {
    console.error('Error writing new message to database', error);
  });
}

export const showPosts = () =>{
  let posts = document.createElement("div");
  let dataPosts = firebase.firestore()
                  .collection('posts');
                  //.orderBy('timestamp', 'desc')
                  //.limit(12);
  dataPosts.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
      var post = change.doc.data();
      const posting = `
                    <p>${post.userId}</p>
                    <p>${post.text}</p>
                    <p>${post.timestamp}</p>`;
      posts.innerHTML += posting;
      console.log(post);
    })
  })
  return posts;
  //console.log(dataPosts);

}