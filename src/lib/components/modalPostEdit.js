export const editPostModal = (id) => {
  const editpostTemplate = document.createElement('div');
  editpostTemplate.className = 'editPost';
  editpostTemplate.id = 'editPostModal';
  const editpost = `<div class="userPost">
                     <i id='closeEditPost' class="far fa-times-circle"></i>
                        <form id="editPostForm" action="submit">
                        <textarea class="writtePost" id="editPosttext">${id.text}</textarea>
                        <div class="commandPosting">
                        <select name="typePost" id="selectPrivacy">
                        <option value="public" label="Publica"></option>
                        <option value="private" label="Privada"></option>
                        </select> 
                        </div>
                        <input type="submit" value="Editar" class="editProfileButton">
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
    const closeModalButton = document.getElementById('closeEditPost');
    console.log(closeModalButton)
    closeModalButton.addEventListener('click', ()=>closeModal());
    const editPostForm = document.getElementById('editPostForm');
    editPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      database.update({
      text : document.getElementById('editPosttext').value
      //userName: document.getElementById('usernameChanged').value,
      })
      .then(function() {
        document.getElementById('editPost').style.display = 'none';
        window.location.reload();
      })
    })
  });
}
const closeModal = ()=>{
  console.log('entra aca')
  document.getElementById('editPostModal').style.display = 'none';
}