import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { initBackend } from 'absurd-sql/dist/indexeddb-main-thread';
__webpack_public_path__ = '/';
import './style.css';
import './signfts.txt';
import './signftsdata.txt';
import './signftstableftsdata.txt';
import './sw.js'
import './app.js'

// main.js
var PromiseWorker = require('promise-worker');
var worker = new Worker('worker.js');
var promiseWorker;

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./icons/', true, /\.(jpg|jpeg|png)$/));
requireAll(require.context('./', true, /\.(webmanifest)$/));
function init() {
  let worker = new Worker(new URL('./index.worker.js', import.meta.url));
  promiseWorker = new PromiseWorker(worker);

  // This is only required because Safari doesn't support nested
  // workers. This installs a handler that will proxy creating web
  // workers through the main thread
  initBackend(worker);
  window.worker = worker;
  window.promiseWorker = promiseWorker;
     
}

init();

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

  const TaknmalNavBar = () => {
    return (
      <footer>
            <nav>
              <Link className="nav-item" to="/"><span className="material-symbols-outlined">home</span><span className="nav-text">Heim</span></Link>
              <Link className="nav-item" to="/allsigns"><span className="material-symbols-outlined">sign_language</span><span className="nav-text">Öll tákn</span></Link>
              <Link className="nav-item" to="/collections"><span className="material-symbols-outlined">list</span><span className="nav-text">Táknasöfn</span></Link>
              <Link className="nav-item" to="/settings"><span className="material-symbols-outlined">account_box</span><span className="nav-text">Stillingar</span></Link>
           </nav>
      </footer>
    )
  }

  class TaknmalSearchHeader extends React.Component {
      constructor(props){
          super(props)
          this.state = { currentQuery: '' }
      }

      componentDidMount(){
          this.updateSearch()
      }

      updateSearch(query) {
          console.log(query)
          let searchValue = query || ''
          window.worker.postMessage({type:'searchValue',searchValue:searchValue})
      }
      render() {
          return (
              <header>
                  <span className="heading">Íslenskt táknmál</span>
                  <div className="sign-search all-signs">
                  <input type="search" name="" id="search-input" placeholder="Search for a sign" onInput={e => this.updateSearch(e.target.value)} onChange={e => this.updateSearch(e.target.value)}/>
                  {/* <input type="search" name="" id="search-input" placeholder="Search for a sign" /> */}
                  </div>
              </header>
          )
      }
  }

  // const TaknmalSearchHeader = () => {
  //     return (
  //         <header>
  //             <span className="heading">Íslenskt táknmál</span>
  //             <div className="sign-search all-signs">
  //             {/* <input type="search" name="" id="search-input" placeholder="Search for a sign" onInput="updateSearch()" onChange="updateSearch()"/> */}
  //             <input type="search" name="" id="search-input" placeholder="Search for a sign" />
  //             </div>
  //         </header>
  //     )
  // }

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
      // console.log('render,', sign)
      const yt = this.state.youtubeShowing 
      // console.log(yt)
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
      this.signListDomElement = React.createRef()
      window.worker.onmessage = (ev) => {
      // console.log('react',ev.data)
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
          this.signListDomElement.current.scrollTop = 0
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
      this.state = { signs:[] };
    }

    render() {
  
      return (<div id="signs" ref={this.signListDomElement}>
        {this.state.signs.map(sign => {
          return <Sign sign={sign} key={sign.id}/>
        })}
        </div>
      )
    }
  }
  
  // const App = () => {
  //   return (
      
  //     <article className="container">
  //         <TaknmalSearchHeader/>
  //         <SignList/>
  //         <TaknmalNavBar/>
  //     </article>
  //   )
  // }

  const HomePage = () => {
      return (
          <article className="container">
              <header>
                  <span className="heading">Íslenskt táknmál</span>
              </header>
              <div>
                  <h1>Home</h1>
              </div>
              <TaknmalNavBar/>
          </article>

      )
  }

  const AllSignsPage = () => {
      return (
          <article className="container">
              <TaknmalSearchHeader/>
              <SignList/>
              <TaknmalNavBar/>
           </article>
      )
  }

  const SettingsPage = () => {
      return (
          <article className="container">
              <header>
                  <span className="heading">Íslenskt táknmál</span>
              </header>
              <div>
                  <h1>Settings</h1>
              </div>
              <TaknmalNavBar/>
          </article>

      )
  }

  const CollectionsPage = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
      window.promiseWorker.postMessage({
        type:'exec',
        command:`select collection.id as collection_id,
                  collection.name as collection_name,
                  user.name as user_name
                  from collection join user on user.id = collection.user_id where user.id = 2`
      }).then(collections => setCollections(collections))
      // fetchUsers().then((users) => setUsers(users));
    }, []);
      return (
          <article className="container">
              <header>
                  <span className="heading">Íslenskt táknmál</span>
              </header>
              <div>
                  <h1>Collections</h1>
                  {collections.map(collection => {
                    return <div>{collection.collection_id} {collection.collection_name} {collection.user_name}</div>
                  })}
              </div>
              <TaknmalNavBar/>
          </article>

      )
  }

  const App = () => {
      return (
        <HashRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/allsigns" element={<AllSignsPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>

          {/* <TaknmalNavBar/> */}
        </HashRouter>
      //   <article className="container">
      //       <TaknmalSearchHeader/>
      //       <SignList/>
      //       <TaknmalNavBar/>
      //   </article>
      )
    }

  const domContainer = document.querySelector('#app');
  const root = ReactDOM.createRoot(domContainer);
  console.log('render')
  root.render(<App/>);