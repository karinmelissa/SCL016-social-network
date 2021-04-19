export const newpost = () => {
  const newpostTemplate = document.createElement('div');
  newpostTemplate.className = 'createPost';
  const createpost =  `<div class="userPost">
                      <div class="profileImage"><img class="profileImage"></div>
                      <textarea class="writtePost" placeholder="Escribe algo aqui..."></textarea>
                      </div>
                      <button class="postingButton">Publicar</button>`;
  newpostTemplate.innerHTML = createpost;
  return newpostTemplate;
};