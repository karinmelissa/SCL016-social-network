import { footer } from "../components/footer.js";
import { commandBarProfile, profilePage } from "../components/profile.js";
import { topMenu } from "../components/topMenu.js";
import { close } from "../functions/auth.js";
import { showUserPosts } from "../functions/postsData.js";
import { openModal } from "../components/modalProfile.js"

export const profileBuilt = () =>{
  const rootContainer = document.getElementById('root');
  rootContainer.appendChild(topMenu());
  const profileContainer = document.createElement('div');
  profileContainer.className = 'profileGrid';
  rootContainer.appendChild(profileContainer);
  profileContainer.appendChild(profilePage());
  profileContainer.appendChild(commandBarProfile());
  profileContainer.appendChild(showUserPosts());
  rootContainer.appendChild(footer());

  const openMenu = document.querySelector('#openMenu');
  openMenu.addEventListener('click', openMenuFunction);
  const logoutButton = document.getElementById('logout-button');
  logoutButton.addEventListener('click', close);

  /*
  //Esta tirando null :c
  const showModal = document.getElementById('editProfileButton');
  console.log(showModal);
  //Aca lo toma pero no me quiene reconocer el nodeChild uwu
  const editProfile = document.getElementsByClassName('editProfile') ;
  console.log(editProfile);
  console.log(editProfile[0]);
  //Pork nada funciona? :c
  editProfile.addEventListener('click', openModal); */
}

let showMenu = true;
const openMenuFunction = () => {
  if (showMenu === true){
    document.getElementById('menu').style.display='block';
    showMenu = false;
  }
  else {
    document.getElementById('menu').style.display='none';
    showMenu = true;
  } 
};

const showModal = document.getElementById('editProfileButton');
console.log(showModal);