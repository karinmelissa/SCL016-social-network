import { footer } from '../components/footer.js';
import { commandBar, post } from '../components/post.js';
import { newpost } from '../components/posting.js';
import { topMenu } from '../components/topMenu.js';
import { leftSideBar, rightSideBar } from '../components/userSideBar.js';
import { close } from '../functions/auth.js';
import { savePost, showPosts } from '../functions/postsData.js';

export const feedBuilt =() =>{
  const rootContainer = document.getElementById('root');
  const feedContainer = document.createElement('div');
  feedContainer.className = 'feedGrid';
  rootContainer.appendChild(topMenu());

  rootContainer.appendChild(feedContainer);
  feedContainer.appendChild(leftSideBar())
  feedContainer.appendChild(newpost());
  //feedContainer.appendChild(showPosts());
  feedContainer.appendChild(commandBar());
  feedContainer.appendChild(post());
  feedContainer.appendChild(rightSideBar());
  rootContainer.appendChild(footer());

  const openMenu = document.querySelector('#openMenu');
  openMenu.addEventListener('click', openMenuFunction);
               
  const logoutButton = document.getElementById('logout-button');
  logoutButton.addEventListener('click', close);

  const createPost = document.querySelector('.postingButton');
  createPost.addEventListener('click', savePost); 
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
