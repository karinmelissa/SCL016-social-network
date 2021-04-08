export const signUpUser = () =>{
  const signupForm = document.querySelector('#registerForm');
  signupForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log(signupForm);
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  console.log(email,password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // clear the form
      signupForm.reset();
  })
  });
}

export const signInUser = ()=>{
  const signInForm = document.querySelector('#loginForm');
  signInForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(signInForm);
    const email = document.getElementById("signing-email").value;
    const password = document.getElementById("signing-password").value;
    console.log(email,password);
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      // clear the form
      signInForm.reset();
      // close the modal
      alert('Hola');
    });


  });

}

