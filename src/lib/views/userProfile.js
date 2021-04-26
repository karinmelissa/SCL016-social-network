import { footer } from "../components/footer.js";
import { profilePost } from "../components/post.js";
import { profilePage } from "../components/profile.js";
import { topMenu } from "../components/topMenu.js";
import { close } from "../functions/auth.js";
import { showUserPosts } from "../functions/postsData.js";

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

  const userImage = document.getElementById('userImage');
  userImage.addEventListener('click', uploadProfileImg());
}

let showMenu = true;
const openMenuFunction = (e) => {
  if (showMenu === true){
    document.getElementById('menu').style.display='block';
    showMenu = false;
  }
  else {
    document.getElementById('menu').style.display='none';
    showMenu = true;
  } 
};


