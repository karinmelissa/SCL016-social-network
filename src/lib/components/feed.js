export const feedHome = () =>{
  const container = document.getElementById('root')
  const feedTemplate = `<h1>Bienvenida!</h1> `
  container.innerHTML = feedTemplate
  return container
}
