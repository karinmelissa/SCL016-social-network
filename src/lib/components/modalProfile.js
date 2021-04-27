export const modalProfile =()=>{
  const editProfileTemplate = document.createElement('div');
  editProfileTemplate.className = 'modalProfile';
  const editProfile = `<div class="profileModal">
                        <h2 class="profileEdit">Editar perfil</h2>
                        <form id="editProfileForm" action="submit">
                          <label for="img">Imagen: </label>
                          <input type="file" id="profileImage" name="img" accept="image/*">
                          <label for="username">Nombre:</label>
                          <input type="text" id="usernameChanged" name="usernameChanged"><br>
                          <label for="userBio">Sobre mi: </label>
                          <textarea type="tex" id="bioChanged" class="bioChanged"name="bioChanged"></textarea>
                          <input type="submit" value="Submit" class="editProfileButton">
                        </form>
                      </div>`;
  editProfileTemplate.innerHTML = editProfile;
  return editProfileTemplate;
}

export const openModal = () => {
  const rootContainer = document.getElementById('root');
  rootContainer.appendChild(modalProfile());
  const editProfileForm = document.getElementById('editProfileForm');
  editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let database = firebase
    .firestore()
    .collection('userInfo')
  database.where( "userId", "==", firebase.auth().currentUser.uid)
  .update({
    userBio : document.getElementById('bioChanged').value ,
    userName: document.getElementById('usernameChanged').value,
  })
    //let nombre = document.getElementById('usernameChanged').value;
    //let file = document.getElementById ('profileImage').value;
    //let storageRef = storage.ref(/imgProfile/ + file.name);

    //user.updateProfile({ 
    //displayName: nombre,
    //photoURL: storageRef
  .then(function() {
    console.log('datos actualizados');
  }).catch(function(error) {
    // An error happened.
  });
  });
}

const closeModal = () =>{

}