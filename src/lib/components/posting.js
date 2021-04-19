export const newpost = () => {
  const newpostTemplate = document.createElement('div');
  newpostTemplate.className = 'createPost';
  const createpost =  `<div class="userPost">
                      <div class="profileImage"><img class="profileImage"></div>
                      <textarea class="writtePost" id="writtePost" placeholder="Escribe algo aqui..."></textarea>
                      </div>
                      <select name="typePost">
                        <option value="Todas" label="Todas"></option>
                        <option value="publicas" label="Publicas"></option>
                        <option value="privadas" label="Privadas"></option>
                      </select> 
                      <button class="postingButton">Publicar</button>`;
  newpostTemplate.innerHTML = createpost;
  return newpostTemplate;
};