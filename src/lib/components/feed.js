export const feedHome = () => {
  const feedTemplate = document.createElement('div');
  feedTemplate.id = 'feed';
  const welcome = `<h1>Bienvenida!</h1>
  <button class='login-button' id='logout-button'>Cerrar sesion</button>`;
  feedTemplate.innerHTML = welcome;

  return feedTemplate;
};
