export const profilePage = () => {
  const profileTemplate = document.createElement('div');
  profileTemplate.className = 'profileGrid';
  const profile = ` <h1>Mi perfil</h1>
                  `;
  profileTemplate.innerHTML = profile;
  return profileTemplate;
};