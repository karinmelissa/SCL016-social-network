import services from '../route.js';

const init = () => {
  //services.userVerification();
  services.initRouter();
};

window.addEventListener('load', init);
