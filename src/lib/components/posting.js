export const newpost = () => {
  const newpostTemplate = document.createElement('div');
  newpostTemplate.className = 'createPost';
  const createpost = `<div class="userPost">
                      <div class="profileImage"><img class="profileImage" src="${firebase.auth().currentUser.photoURL}"></div>
                      <textarea class="writtePost" id="writtePost" placeholder="Escribe algo aqui..." required></textarea>
                      </div>
                      <div class="commandPosting">
                      <select name="typePost" id="selectPrivacy">
                        <option value="public" label="Publica"></option>
                        <option value="private" label="Privada"></option>
                      </select> 
                      <button class="postingButton">Publicar</button>
                      </div>`;
  newpostTemplate.innerHTML = createpost;
  return newpostTemplate;
};
