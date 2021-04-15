export const topMenu = () => {
  const menuTemplate = document.createElement('div');
  menuTemplate.className = 'topMenu';
  const menu = `  <img src="../images/logoFeed.png">
                  </div>
                  `;
  menuTemplate.innerHTML = menu;
  return menuTemplate;
};