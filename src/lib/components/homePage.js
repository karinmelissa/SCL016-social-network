const homePage = () =>{
  const container = document.createElement('div');
  container.id = 'info-container';
  const userButtons = `<button id='login-button'>Iniciar sesion</button>
                <button id='register-button'>Registrarse</button>`;
  container.innerHTML = userButtons;
  console.log(document.getElementById('login-button'))
  return container
}

const userLogin = () =>{
  const loginForm = document.getElementById('info-container');
  const form = `<form>
                  <input type="text" id="signup-email"  placeholder="Email" required>
                  <input type="password" id="signup-password" placeholder="Password" required>
                  <button type="submit">Log in</button>
                </form>`;
  loginForm.innerHTML = form ;
  return loginForm;              
}

const hola = () =>{
  document.getElementById('login-button').style.display = 'none';
  document.getElementById('register-button').style.display = 'none';
  document.getElementById('info-container').innerHTML = userLogin();

}
console.log(document.getElementById('login-button'))
//document.getElementById('login-button').addEventListener('click', hola());

export default homePage;



