export const feedHome = () => {
  const feedTemplate = document.createElement('div');
  feedTemplate.className = 'feedGrid';
  const welcome = ` <div class ='topcontainer'></div>
                    <div class= "leftBar">izquierda</div>
                    <div class="feed">
                      <div class="newPosts"></div>
                      <div class="commandBar">
                        <p id="commandText"> Publicaciones</p>
                        <select name="typePost">
                        <option value="Todas" label="Todas"></option>
                        <option value="publicas" label="Publicas"></option>
                        <option value="privadas" label="Privadas"></option>
                        </select> 
                       </div> 
                      <div class="posts"></div>
                    </div>
                    <div class= "rightBar">derecha</div>
                    <div class= "copyright">fempage 2021</div>
                    `;
  feedTemplate.innerHTML = welcome;
  return feedTemplate;
};
