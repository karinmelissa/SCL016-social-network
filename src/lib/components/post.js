import { showPosts } from "../functions/postsData.js";

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
      var post = change.doc.data();
      const posting = `
                    <div class='post'>
                    <div class='postUserphoto'></div>
                    <div class='postInfo'>
                      <h2 class='postedUsername'>${post.userName}</h2>
                      <p class='postedTime'>${post.timestamp
                        .toDate()
                        .toDateString()}</p>
                    </div>
                    <p class='postedText'>${post.text}</p>
                    </div>`;
      // Faltan los botones de mg, :( y comentar, historia de usuario 4
      posts.innerHTML += posting;
    });
  });
  return posts;
}
