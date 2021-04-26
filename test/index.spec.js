import MockFirebase from 'mock-cloud-firestore';

import { savePost, showPosts } from '../src/lib/functions/postsData.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
          user_id1: {
          privacy: "public",
          text: 'Hola squad',
          timestamp: '20 de abril de 2021 a las 09:17:33 UTC-4',
          userId: 'HBUVPRVvkAdHVRfP68xtc3YiIGl2',
          userName: 'Valeria',
        },
          user_id2: {
          privacy: "public",
          text: 'Ojala resulte este test',
          timestamp: '20 de abril de 2021 a las 09:20:33 UTC-4',
          userId: 'HBUVPRVvkAdHVRfP68xtc3YiIGl3',
          userName: 'Karin',
        },
      }
    }
  }
}
global.firebase = new MockFirebase(fixtureData, { isNativeSnapshotListenerEnabled: true});


describe ('agrega notas', () =>{
  it ('deberia agregar un post', (done) => {
    return savePost ('Hola Mundo').then((data) =>{
      console.log(data);
      expect (data).toBe ('Hola Mundo');
  
    })
  });
});

