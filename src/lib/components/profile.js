import { auth } from "../functions/auth.js";

export const profilePage =()=>{
  const profileTemplate = document.createElement('div');
  profileTemplate.className = 'userProfile';
  const profile = `<div class="userInfoContainer">
        <div class="profileImage"><img class="profileImage"></div>
        <h2 class="userName">${auth.currentUser.displayName} <i class="far fa-edit"></i> </h2>
        <p class="userBio">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
        <div class="userLinks">
          <a class="userFriends">Amigas(13) </a>
          <a class="userRooms">Mis Salas(4)</a>
        </div>
    </div>`;
  profileTemplate.innerHTML = profile;
  return profileTemplate;
}
