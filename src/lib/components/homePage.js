export const homePage = () =>{
  const main = `<div id= 'info-container'>
                <button id='login-button'>Iniciar sesion</button>
                <button id='register-button'>Registrarse</button>
                </div>
                `
  return main
}

export const userLogin = () =>{
  const loginForm = `<form class= 'loginForm' id= 'loginForm'>
                  <input type="text" id="signing-email"  placeholder="Email" required>
                  <input type="password" id="signing-password" placeholder="Password" required>
                  <button type="submit">Log in</button>
                </form>
                `
  return loginForm;              
}

export const userRegister = () =>{
 const registerForm = `<form class= 'registerForm' id= 'registerForm'>
                      <input type="text" id="userName"  placeholder="Nombre de Usuario" required>
                      <input type="text" id="signup-email"  placeholder="Correo electrónico" required>
                      <input type="password" id="signup-password" placeholder="Contraseña" required>
                      <input type="password" id="confirm-password" placeholder="Confirmar Contraseña" required>
                      <button type="submit">Registrar</button>
                      </form>
                      `
  return registerForm                  
}

//document.getElementById('login-button').addEventListener('click',userLogin());

