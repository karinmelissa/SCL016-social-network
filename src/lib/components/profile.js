import { auth } from "../functions/auth.js";
import { firestore } from "../functions/postsData.js";

export const profilePage =()=>{
  const profileTemplate = document.createElement('div');
  profileTemplate.className = 'userProfile';
  let database = firebase
  .firestore()
  .collection('userInfo')
  database.where( "userId", "==", firebase.auth().currentUser.uid)
  .get()
  .then((e) => {
    e.forEach((doc) => {
      let userInfo = doc.data();
      const profile = `<div class="userInfoContainer">
        <div class="profileImage"><a><img id = "userImage" class="profileImage" src="${userInfo.profilePicture}"></a></div>
        <h2 class="userName">${userInfo.userName} <button id='editProfileButton' class='editProfile'><i id='editProfileButton' class="far fa-edit"></i></button> </h2>
        <p class="userBio">${userInfo.userBio}</p>
        <div class="userLinks">
          <a class="userFriends">Amigas(13) </a>
          <a class="userRooms">Mis Salas(4)</a>
        </div>
    </div>`;
    profileTemplate.innerHTML = profile;
    });
  });

  return profileTemplate;
}
  

export const commandBarProfile = ()=>{
  let commandBarProfile = document.createElement('div');
  commandBarProfile.className = 'commandBarProfile'
  commandBarProfile.innerHTML = `
                      <p id="commandText"> Publicaciones</p>
                      <select name="typePost">
                      <option value="Todas" label="Todas"></option>
                      <option value="publicas" label="Publicas"></option>
                      <option value="privadas" label="Privadas"></option>
                      </select>`;
  return commandBarProfile;
}

/*export const uploadProfileImg = () => {
  let imageFile = document.getElementById('uploadImage')
  console.log(imageFile);
}*/
