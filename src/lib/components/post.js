import { showPosts } from "../functions/postsData.js";
import { likePost } from "../functions/postInteractions.js";

export const commandBar = ()=>{
  let commandBar = document.createElement('div');
  commandBar.className = 'commandBar'
  commandBar.innerHTML = `
                      <p id="commandText"> Publicaciones</p>
                      <select name="typePost">
                      <option value="Todas" label="Todas"></option>
                      <option value="publicas" label="Publicas"></option>
                      <option value="privadas" label="Privadas"></option>
                      </select>`;
  return commandBar;
}

export const post = ()=>{
  let data = showPosts();
  let posts = document.createElement('div');
  posts.className='posts';
  data.onSnapshot(function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
      let postId = change.doc.id;
      let post = change.doc.data();
      let userPhoto =  firebase
      .firestore()
      .collection('userInfo')
      .where( "userId", "==", post.userId)
      .get()
      .then((e) => {
      e.forEach((doc) => {
        const posting = `
                    <div class='postContainer' value="${postId}">
                    <div class='post'>
                    <div class='postUserphoto'><img class='postUserphoto'src="${doc.data().profilePicture}"></div>
                    <div class='postInfo'>
                      <h2 class='postedUsername'>${post.userName}</h2>
                      <p class='postedTime'>${post.timestamp
                        .toDate()
                        .toDateString()}</p>
                    </div>
                    <p class='postedText'>${post.text}</p>
                    </div>
                    <div class="postButtons">
                    <button id="like" class="likeButton" value="${postId}"><i id="fa-heart"class="fas fa-heart"></i></button>
                    <button id="dislike" class="dislikeButton"><i class="fas fa-frown"></i></button>
                    <button id="comment" class="commentButton"><i class="far fa-comments"></i>Comentar</i></button>
                    </div>
                    </div>`;
      posts.innerHTML += posting;
      });
      const likeButton = document.querySelectorAll('#like');
      likeButton.forEach(item => {item.addEventListener( 'click',()=>likePost(item.value))})
    });
    });
  });
  return posts;
}
