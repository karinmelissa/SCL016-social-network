export const editPostModal = (id) => {
  console.log('entra a la template' + id);
  const editpostTemplate = document.createElement('div');
  editpostTemplate.className = 'editPost';
  const editpost = `<div class="userPost">
                        <form id="editPostForm" action="submit">
                        <div class="profileImage"><img class="profileImage" src=" "></div>
                        <textarea class="writtePost" id="editPosttext">${id.text}</textarea>
                        <div class="commandPosting">
                        <select name="typePost" id="selectPrivacy">
                        <option value="public" label="Publica"></option>
                        <option value="private" label="Privada"></option>
                        </select> 
                        </div>
                        <input type="submit" value="Submit" class="editProfileButton">
                        </form>
                    </div>`;
  editpostTemplate.innerHTML = editpost;
  return editpostTemplate;
};

export const editPost = (id) =>{
  const rootContainer = document.getElementById('root');
  let database = firebase
  .firestore()
  .collection('posts')
  .doc(id);
  database.get()
  .then( doc => { rootContainer.appendChild(editPostModal(doc.data()));
    const editPostForm = document.getElementById('editPostForm');
    editPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      database.update({
      text : document.getElementById('editPosttext').value
      //userName: document.getElementById('usernameChanged').value,
      })
    })
  });
}