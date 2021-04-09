export const homePage = () =>{
  const main = `<div id= 'info-container'>
                <button id='login-button'>Iniciar sesion</button>
                <button id='register-button'>Registrarse</button>
                </div> `
  return main
}

export const userLogin = () =>{
  const loginForm = `<form class= 'loginForm' id= 'loginForm'>
                  <input type="email" id="signing-email"  placeholder="Email" required>
                  <input type="password" id="signing-password" placeholder="Password" required>
                  <p class='error-control'></p>
                  <button type="submit">Log in</button>
                </form>
                <p>Aun no te unes?<a class='login-button' id='register-button'>Registrate!</a></p> `
  return loginForm;              
}

export const userRegister = () =>{
 const registerForm = `<form class= 'registerForm' id= 'registerForm'>
                      <input type="text" id="userName"  placeholder="Nombre de Usuario" required>
                      <input type="email" id="signup-email"  placeholder="Correo electrónico" required>
                      <input type="password" id="signup-password" placeholder="Contraseña" required>
                      <input type="password" id="confirm-password" placeholder="Confirmar Contraseña" required>
                      <p class='error-control'></p>
                      <button type="submit">Registrar</button>
                      </form> 
                      <p>Ya eres miembro?<a class='login-button' id='login-button'>Iniciar Sesion</a></p>`
  return registerForm                  
}