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

{/* <script type="text/babel"> */}
  async function showYoutube(el){       
  let removed = false
  for(let child of el.children){
      if(child.classList.contains('sign-video')){
          el.classList.remove('selected')
          console.log(child.classList)
          el.removeChild(child)
          removed = true
      }
  }
  if(!removed){
      el.classList.add('selected')
      let yt_id = el.attributes['youtube_id'].nodeValue
      let youtubeElement = document.createElement('div')
      youtubeElement.classList.add('sign-video')
      youtubeElement.setAttribute("display", "inline-block");
      youtubeEmbedUrl = `https://www.youtube.com/embed/${yt_id}?autoplay=1&loop=1&rel=0&controls=0&mute=1&playsinline=0&playlist=${yt_id}`
      fetch(youtubeEmbedUrl, {mode:'no-cors'}).then(res => {
          const iframe = document.createElement("iframe");
          iframe.setAttribute("src", youtubeEmbedUrl);
          iframe.allowFullscreen = true;
          youtubeElement.appendChild(iframe)
      })
      el.appendChild(youtubeElement)

  }
}


import React from 'react';
import * as ReactDOM from 'react-dom';

  'use strict';


  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

  class Sign extends React.Component {
    constructor(props) {
      super(props)
      this.state = { youtubeShowing: false }
      this.showYt = this.showYt.bind(this)
      this.youtube_id = props.sign.youtube_id
    }

    async showYt() {
      // await fetch(`https://www.youtube.com/embed/${this.youtube_id}?autoplay=1&loop=1&rel=0&controls=0&mute=1&playsinline=0&playlist=${this.youtube_id}`, {mode:'no-cors'})
      this.setState({youtubeShowing: !this.state.youtubeShowing})
      // console.log('lol show yt', this.state.youtubeShowing, this.youtube_id)
      
    }

    render() {
      const { sign } = this.props
      console.log('render,', sign)
      const yt = this.state.youtubeShowing 
      console.log(yt)
      return (
        <div className="sign" onClick={() => this.showYt()} id={sign.id} youtube_id={sign.youtube_id}>
          <div className="sign-phrase">
              <span>{sign.phrase}</span>
          </div>
          
          {yt && <YoutubeEmbed embedId={sign.youtube_id} />}
       </div>
      )
    }
  }
  
  class SignList extends React.Component {
    constructor(props) {
      super(props);
      window.worker.onmessage = (ev) => {
      console.log('react',ev.data)
      if(ev.data == 'ready'){
        window.updateSearch()
      } 
      if(ev.data.type === 'signs') {
        let div = document.getElementById('results')
        // console.log('fyrir json parse')
        let signs = ev.data.signs || [];
        if(!signs.length){return}
        if(!signs[0].phrase){return}
        if(signs.length){
          this.setState({signs:signs})
        //   div.innerHTML = signs.map(sign => {
        //     return `<div class="sign" onclick="showYoutube(this)" id="${sign.id}" youtube_id="${sign.youtube_id}">
        //                 <div class="sign-phrase">
        //                     <span>${sign.phrase}</span>
        //                     <span class="addToListIcon" onclick="addToList(${sign.id})">
        //                 </div>
        //             </div>`
        // }).join('')
        }
      }
      if(ev.data.type === 'user-collections'){
        console.log(ev.data.user_collections)
        document.querySelector('.user-collections').innerHTML = ev.data.user_collections.map(collection => {
          return `<div class="row sign collection-row">
          <span class="collection-name">${collection.name}</span>
          <span class="collection-count">91</span>
        </div>`
        }).join('')
      }

      }
      this.state = { liked: false,signs:[] };
    }
  
    render() {
      if (this.state.liked) {
        return 'lol';
      }
  
      return (<div id="signs">
        <button onClick={() => this.setState({ liked: true })}>Like</button>
        {this.state.signs.map(sign => {
          return <Sign sign={sign} key={sign.id}/>
        })}
        </div>
      )
      // return e(
      //   'button',
      //   { onClick: () => this.setState({ liked: true }) },
      //   'Like'
      // );
    }
  }
  
  // const domContainer = document.querySelector('#app');
  // const root = ReactDOM.createRoot(domContainer);
  import { createRoot } from 'react-dom/client';
  const container = document.getElementById('app');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<SignList/>);
  {/* </script> */}