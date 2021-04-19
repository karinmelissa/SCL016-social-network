export const topMenu = () => {
  const menuTemplate = document.createElement('div');
  menuTemplate.className = 'topMenu';
  const menu = `  <img src="./images/logoFeed.png">
                  <div class="searchBar">
                      <input class="searchInput" type="search" placeholder="buscar"> 
                      <button type="submit"><i class="fa fa-search"></i></button>
                  </div>
                  <div class="burgerMenu">
                    <input id="openMenu" type="checkbox">
                    <i class="fas fa-bars"></i>
                    <i class="fas fa-times"></i>
                    <div id='menu' class="menu">
                    <button>Mi perfil</button>
                    <button>Mis salas <span id="countRooms">(0)</span></button>
                    <button id='logout-button'>Cerrar sesión</button>
                    </div>
                    </div>
                  `;
  menuTemplate.innerHTML = menu;
  return menuTemplate;
};