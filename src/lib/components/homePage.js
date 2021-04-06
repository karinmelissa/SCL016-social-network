export const homePage = () =>{
  const main = `<button id='login-button'>Iniciar sesion</button>
                <button id='register-button'>Registrarse</button>
                `
  //document.getElementById('login-button').addEventListener('click',userLogin());
  return main
}

export const userLogin = () =>{
  const form = `<form>
                  <input type="text" id="signup-email"  placeholder="Email" required>
                  <input type="password" id="signup-password" placeholder="Password" required>
                  <button type="submit">Log in</button>
                </form>
                `
  return form;              
}




