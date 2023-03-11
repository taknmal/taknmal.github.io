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