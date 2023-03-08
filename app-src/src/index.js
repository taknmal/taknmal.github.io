import { initBackend } from 'absurd-sql/dist/indexeddb-main-thread';
__webpack_public_path__ = '/';
import './style.css';
import './signfts.txt';
import './signftsdata.txt';
import './signftstableftsdata.txt';
import './sw.js'


function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./icons/', true, /\.(jpg|jpeg|png)$/));
requireAll(require.context('./', true, /\.(webmanifest)$/));
function init() {
  let worker = new Worker(new URL('./index.worker.js', import.meta.url));
  // This is only required because Safari doesn't support nested
  // workers. This installs a handler that will proxy creating web
  // workers through the main thread
  initBackend(worker);
  window.worker = worker;
  // worker.onmessage = (ev) => {
  //   console.log(ev.data)
  //   if(ev.data == 'ready'){
  //     window.updateSearch()
  //   } 
  //   if(ev.data.type === 'signs') {
  //     let div = document.getElementById('results')
  //     // console.log('fyrir json parse')
  //     let signs = ev.data.signs || [];
  //     if(!signs.length){return}
  //     if(!signs[0].phrase){return}
  //     if(signs.length){
  //       div.innerHTML = signs.map(sign => {
  //         return `<div class="sign" onclick="showYoutube(this)" id="${sign.id}" youtube_id="${sign.youtube_id}">
  //                     <div class="sign-phrase">
  //                         <span>${sign.phrase}</span>
  //                         <span class="addToListIcon" onclick="addToList(${sign.id})">
  //                     </div>
  //                 </div>`
  //     }).join('')
  //     }
  //   }
  //   if(ev.data.type === 'user-collections'){
  //     console.log(ev.data.user_collections)
  //     document.querySelector('.user-collections').innerHTML = ev.data.user_collections.map(collection => {
  //       return `<div class="row sign collection-row">
  //       <span class="collection-name">${collection.name}</span>
  //       <span class="collection-count">91</span>
  //     </div>`
  //     }).join('')
  //   }

  //   }

    
}

init();
