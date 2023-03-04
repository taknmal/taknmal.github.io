/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/absurd-sql/dist/indexeddb-main-thread.js":
/*!***************************************************************!*\
  !*** ./node_modules/absurd-sql/dist/indexeddb-main-thread.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initBackend\": () => (/* binding */ initBackend)\n/* harmony export */ });\n// The reason for this strange abstraction is because we can't rely on\n// nested worker support (Safari doesn't support it). We need to proxy\n// creating a child worker through the main thread, and this requires\n// a bit of glue code. We don't want to duplicate this code in each\n// backend that needs it, so this module abstracts it out. It has to\n// have a strange shape because we don't want to eagerly bundle the\n// backend code, so users of this code need to pass an `() =>\n// import('worker.js')` expression to get the worker module to run.\n\nfunction isWorker() {\n  return (\n    typeof WorkerGlobalScope !== 'undefined' &&\n    self instanceof WorkerGlobalScope\n  );\n}\n\nfunction makeStartWorkerFromMain(getModule) {\n  return (argBuffer, resultBuffer, parentWorker) => {\n    if (isWorker()) {\n      throw new Error(\n        '`startWorkerFromMain` should only be called from the main thread'\n      );\n    }\n\n    if (typeof Worker === 'undefined') {\n      // We're on the main thread? Weird: it doesn't have workers\n      throw new Error(\n        'Web workers not available. sqlite3 requires web workers to work.'\n      );\n    }\n\n    getModule().then(({ default: BackendWorker }) => {\n      let worker = new BackendWorker();\n\n      worker.postMessage({ type: 'init', buffers: [argBuffer, resultBuffer] });\n\n      worker.addEventListener('message', msg => {\n        // Forward any messages to the worker that's supposed\n        // to be the parent\n        parentWorker.postMessage(msg.data);\n      });\n    });\n  };\n}\n\nfunction makeInitBackend(spawnEventName, getModule) {\n  const startWorkerFromMain = makeStartWorkerFromMain(getModule);\n\n  return worker => {\n    worker.addEventListener('message', e => {\n      switch (e.data.type) {\n        case spawnEventName:\n          startWorkerFromMain(e.data.argBuffer, e.data.resultBuffer, worker);\n          break;\n      }\n    });\n  };\n}\n\n// Use the generic main thread module to create our indexeddb worker\n// proxy\nconst initBackend = makeInitBackend('__absurd:spawn-idb-worker', () =>\n  __webpack_require__.e(/*! import() */ \"vendors-node_modules_absurd-sql_dist_indexeddb-main-thread-worker-e59fee74_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./indexeddb-main-thread-worker-e59fee74.js */ \"./node_modules/absurd-sql/dist/indexeddb-main-thread-worker-e59fee74.js\"))\n);\n\n\n\n\n//# sourceURL=webpack://absurd-example-project/./node_modules/absurd-sql/dist/indexeddb-main-thread.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"style.css\");\n\n//# sourceURL=webpack://absurd-example-project/./src/style.css?");

/***/ }),

/***/ "./src/icons/android-chrome-192x192 copy.png":
/*!***************************************************!*\
  !*** ./src/icons/android-chrome-192x192 copy.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/android-chrome-192x192 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/android-chrome-192x192_copy.png?");

/***/ }),

/***/ "./src/icons/android-chrome-192x192.png":
/*!**********************************************!*\
  !*** ./src/icons/android-chrome-192x192.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/android-chrome-192x192.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/android-chrome-192x192.png?");

/***/ }),

/***/ "./src/icons/android-chrome-512x512.png":
/*!**********************************************!*\
  !*** ./src/icons/android-chrome-512x512.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/android-chrome-512x512.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/android-chrome-512x512.png?");

/***/ }),

/***/ "./src/icons/apple-icon-180 copy.png":
/*!*******************************************!*\
  !*** ./src/icons/apple-icon-180 copy.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-icon-180 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-icon-180_copy.png?");

/***/ }),

/***/ "./src/icons/apple-icon-180.png":
/*!**************************************!*\
  !*** ./src/icons/apple-icon-180.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-icon-180.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-icon-180.png?");

/***/ }),

/***/ "./src/icons/apple-splash-1125-2436 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1125-2436 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1125-2436 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1125-2436_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1125-2436.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1125-2436.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1125-2436.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1125-2436.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1136-640 copy.jpg":
/*!**************************************************!*\
  !*** ./src/icons/apple-splash-1136-640 copy.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1136-640 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1136-640_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1136-640.jpg":
/*!*********************************************!*\
  !*** ./src/icons/apple-splash-1136-640.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1136-640.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1136-640.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1170-2532 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1170-2532 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1170-2532 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1170-2532_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1170-2532.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1170-2532.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1170-2532.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1170-2532.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1179-2556 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1179-2556 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1179-2556 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1179-2556_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1179-2556.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1179-2556.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1179-2556.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1179-2556.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1242-2208 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1242-2208 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1242-2208 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1242-2208_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1242-2208.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1242-2208.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1242-2208.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1242-2208.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1242-2688 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1242-2688 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1242-2688 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1242-2688_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1242-2688.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1242-2688.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1242-2688.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1242-2688.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1284-2778 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1284-2778 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1284-2778 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1284-2778_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1284-2778.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1284-2778.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1284-2778.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1284-2778.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1290-2796 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1290-2796 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1290-2796 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1290-2796_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1290-2796.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1290-2796.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1290-2796.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1290-2796.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1334-750 copy.jpg":
/*!**************************************************!*\
  !*** ./src/icons/apple-splash-1334-750 copy.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1334-750 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1334-750_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1334-750.jpg":
/*!*********************************************!*\
  !*** ./src/icons/apple-splash-1334-750.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1334-750.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1334-750.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1536-2048 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1536-2048 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1536-2048 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1536-2048_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1536-2048.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1536-2048.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1536-2048.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1536-2048.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1620-2160 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1620-2160 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1620-2160 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1620-2160_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1620-2160.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1620-2160.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1620-2160.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1620-2160.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1668-2224 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1668-2224 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1668-2224 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1668-2224_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1668-2224.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1668-2224.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1668-2224.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1668-2224.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1668-2388 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-1668-2388 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1668-2388 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1668-2388_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1668-2388.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-1668-2388.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1668-2388.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1668-2388.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1792-828 copy.jpg":
/*!**************************************************!*\
  !*** ./src/icons/apple-splash-1792-828 copy.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1792-828 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1792-828_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-1792-828.jpg":
/*!*********************************************!*\
  !*** ./src/icons/apple-splash-1792-828.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-1792-828.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-1792-828.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2048-1536 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2048-1536 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2048-1536 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2048-1536_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2048-1536.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2048-1536.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2048-1536.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2048-1536.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2048-2732 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2048-2732 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2048-2732 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2048-2732_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2048-2732.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2048-2732.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2048-2732.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2048-2732.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2160-1620 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2160-1620 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2160-1620 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2160-1620_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2160-1620.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2160-1620.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2160-1620.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2160-1620.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2208-1242 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2208-1242 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2208-1242 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2208-1242_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2208-1242.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2208-1242.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2208-1242.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2208-1242.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2224-1668 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2224-1668 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2224-1668 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2224-1668_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2224-1668.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2224-1668.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2224-1668.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2224-1668.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2388-1668 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2388-1668 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2388-1668 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2388-1668_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2388-1668.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2388-1668.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2388-1668.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2388-1668.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2436-1125 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2436-1125 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2436-1125 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2436-1125_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2436-1125.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2436-1125.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2436-1125.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2436-1125.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2532-1170 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2532-1170 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2532-1170 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2532-1170_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2532-1170.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2532-1170.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2532-1170.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2532-1170.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2556-1179 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2556-1179 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2556-1179 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2556-1179_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2556-1179.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2556-1179.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2556-1179.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2556-1179.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2688-1242 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2688-1242 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2688-1242 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2688-1242_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2688-1242.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2688-1242.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2688-1242.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2688-1242.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2732-2048 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2732-2048 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2732-2048 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2732-2048_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2732-2048.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2732-2048.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2732-2048.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2732-2048.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2778-1284 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2778-1284 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2778-1284 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2778-1284_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2778-1284.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2778-1284.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2778-1284.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2778-1284.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2796-1290 copy.jpg":
/*!***************************************************!*\
  !*** ./src/icons/apple-splash-2796-1290 copy.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2796-1290 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2796-1290_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-2796-1290.jpg":
/*!**********************************************!*\
  !*** ./src/icons/apple-splash-2796-1290.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-2796-1290.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-2796-1290.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-640-1136 copy.jpg":
/*!**************************************************!*\
  !*** ./src/icons/apple-splash-640-1136 copy.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-640-1136 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-640-1136_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-640-1136.jpg":
/*!*********************************************!*\
  !*** ./src/icons/apple-splash-640-1136.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-640-1136.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-640-1136.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-750-1334 copy.jpg":
/*!**************************************************!*\
  !*** ./src/icons/apple-splash-750-1334 copy.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-750-1334 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-750-1334_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-750-1334.jpg":
/*!*********************************************!*\
  !*** ./src/icons/apple-splash-750-1334.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-750-1334.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-750-1334.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-828-1792 copy.jpg":
/*!**************************************************!*\
  !*** ./src/icons/apple-splash-828-1792 copy.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-828-1792 copy.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-828-1792_copy.jpg?");

/***/ }),

/***/ "./src/icons/apple-splash-828-1792.jpg":
/*!*********************************************!*\
  !*** ./src/icons/apple-splash-828-1792.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-splash-828-1792.jpg\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-splash-828-1792.jpg?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-114x114 copy.png":
/*!*****************************************************!*\
  !*** ./src/icons/apple-touch-icon-114x114 copy.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-114x114 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-114x114_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-114x114.png":
/*!************************************************!*\
  !*** ./src/icons/apple-touch-icon-114x114.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-114x114.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-114x114.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-120x120 copy.png":
/*!*****************************************************!*\
  !*** ./src/icons/apple-touch-icon-120x120 copy.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-120x120 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-120x120_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-120x120.png":
/*!************************************************!*\
  !*** ./src/icons/apple-touch-icon-120x120.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-120x120.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-120x120.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-144x144 copy.png":
/*!*****************************************************!*\
  !*** ./src/icons/apple-touch-icon-144x144 copy.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-144x144 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-144x144_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-144x144.png":
/*!************************************************!*\
  !*** ./src/icons/apple-touch-icon-144x144.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-144x144.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-144x144.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-152x152 copy.png":
/*!*****************************************************!*\
  !*** ./src/icons/apple-touch-icon-152x152 copy.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-152x152 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-152x152_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-152x152.png":
/*!************************************************!*\
  !*** ./src/icons/apple-touch-icon-152x152.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-152x152.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-152x152.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-167x167 copy.png":
/*!*****************************************************!*\
  !*** ./src/icons/apple-touch-icon-167x167 copy.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-167x167 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-167x167_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-167x167.png":
/*!************************************************!*\
  !*** ./src/icons/apple-touch-icon-167x167.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-167x167.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-167x167.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-180x180 copy.png":
/*!*****************************************************!*\
  !*** ./src/icons/apple-touch-icon-180x180 copy.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-180x180 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-180x180_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-180x180.png":
/*!************************************************!*\
  !*** ./src/icons/apple-touch-icon-180x180.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-180x180.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-180x180.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-57x57 copy.png":
/*!***************************************************!*\
  !*** ./src/icons/apple-touch-icon-57x57 copy.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-57x57 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-57x57_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-57x57.png":
/*!**********************************************!*\
  !*** ./src/icons/apple-touch-icon-57x57.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-57x57.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-57x57.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-60x60 copy.png":
/*!***************************************************!*\
  !*** ./src/icons/apple-touch-icon-60x60 copy.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-60x60 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-60x60_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-60x60.png":
/*!**********************************************!*\
  !*** ./src/icons/apple-touch-icon-60x60.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-60x60.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-60x60.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-72x72 copy.png":
/*!***************************************************!*\
  !*** ./src/icons/apple-touch-icon-72x72 copy.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-72x72 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-72x72_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-72x72.png":
/*!**********************************************!*\
  !*** ./src/icons/apple-touch-icon-72x72.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-72x72.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-72x72.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-76x76 copy.png":
/*!***************************************************!*\
  !*** ./src/icons/apple-touch-icon-76x76 copy.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-76x76 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-76x76_copy.png?");

/***/ }),

/***/ "./src/icons/apple-touch-icon-76x76.png":
/*!**********************************************!*\
  !*** ./src/icons/apple-touch-icon-76x76.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/apple-touch-icon-76x76.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/apple-touch-icon-76x76.png?");

/***/ }),

/***/ "./src/icons/favicon-128x128 copy.png":
/*!********************************************!*\
  !*** ./src/icons/favicon-128x128 copy.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-128x128 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-128x128_copy.png?");

/***/ }),

/***/ "./src/icons/favicon-128x128.png":
/*!***************************************!*\
  !*** ./src/icons/favicon-128x128.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-128x128.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-128x128.png?");

/***/ }),

/***/ "./src/icons/favicon-16x16 copy.png":
/*!******************************************!*\
  !*** ./src/icons/favicon-16x16 copy.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-16x16 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-16x16_copy.png?");

/***/ }),

/***/ "./src/icons/favicon-16x16.png":
/*!*************************************!*\
  !*** ./src/icons/favicon-16x16.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-16x16.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-16x16.png?");

/***/ }),

/***/ "./src/icons/favicon-196x196 copy.png":
/*!********************************************!*\
  !*** ./src/icons/favicon-196x196 copy.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-196x196 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-196x196_copy.png?");

/***/ }),

/***/ "./src/icons/favicon-196x196.png":
/*!***************************************!*\
  !*** ./src/icons/favicon-196x196.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-196x196.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-196x196.png?");

/***/ }),

/***/ "./src/icons/favicon-32x32 copy.png":
/*!******************************************!*\
  !*** ./src/icons/favicon-32x32 copy.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-32x32 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-32x32_copy.png?");

/***/ }),

/***/ "./src/icons/favicon-32x32.png":
/*!*************************************!*\
  !*** ./src/icons/favicon-32x32.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-32x32.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-32x32.png?");

/***/ }),

/***/ "./src/icons/favicon-96x96 copy.png":
/*!******************************************!*\
  !*** ./src/icons/favicon-96x96 copy.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-96x96 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-96x96_copy.png?");

/***/ }),

/***/ "./src/icons/favicon-96x96.png":
/*!*************************************!*\
  !*** ./src/icons/favicon-96x96.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/favicon-96x96.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/favicon-96x96.png?");

/***/ }),

/***/ "./src/icons/manifest-icon-192.maskable copy.png":
/*!*******************************************************!*\
  !*** ./src/icons/manifest-icon-192.maskable copy.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/manifest-icon-192.maskable copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/manifest-icon-192.maskable_copy.png?");

/***/ }),

/***/ "./src/icons/manifest-icon-192.maskable.png":
/*!**************************************************!*\
  !*** ./src/icons/manifest-icon-192.maskable.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/manifest-icon-192.maskable.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/manifest-icon-192.maskable.png?");

/***/ }),

/***/ "./src/icons/manifest-icon-512.maskable copy.png":
/*!*******************************************************!*\
  !*** ./src/icons/manifest-icon-512.maskable copy.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/manifest-icon-512.maskable copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/manifest-icon-512.maskable_copy.png?");

/***/ }),

/***/ "./src/icons/manifest-icon-512.maskable.png":
/*!**************************************************!*\
  !*** ./src/icons/manifest-icon-512.maskable.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/manifest-icon-512.maskable.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/manifest-icon-512.maskable.png?");

/***/ }),

/***/ "./src/icons/mstile-144x144 copy.png":
/*!*******************************************!*\
  !*** ./src/icons/mstile-144x144 copy.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-144x144 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-144x144_copy.png?");

/***/ }),

/***/ "./src/icons/mstile-144x144.png":
/*!**************************************!*\
  !*** ./src/icons/mstile-144x144.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-144x144.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-144x144.png?");

/***/ }),

/***/ "./src/icons/mstile-150x150 copy.png":
/*!*******************************************!*\
  !*** ./src/icons/mstile-150x150 copy.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-150x150 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-150x150_copy.png?");

/***/ }),

/***/ "./src/icons/mstile-150x150.png":
/*!**************************************!*\
  !*** ./src/icons/mstile-150x150.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-150x150.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-150x150.png?");

/***/ }),

/***/ "./src/icons/mstile-310x150 copy.png":
/*!*******************************************!*\
  !*** ./src/icons/mstile-310x150 copy.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-310x150 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-310x150_copy.png?");

/***/ }),

/***/ "./src/icons/mstile-310x150.png":
/*!**************************************!*\
  !*** ./src/icons/mstile-310x150.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-310x150.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-310x150.png?");

/***/ }),

/***/ "./src/icons/mstile-310x310 copy.png":
/*!*******************************************!*\
  !*** ./src/icons/mstile-310x310 copy.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-310x310 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-310x310_copy.png?");

/***/ }),

/***/ "./src/icons/mstile-310x310.png":
/*!**************************************!*\
  !*** ./src/icons/mstile-310x310.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-310x310.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-310x310.png?");

/***/ }),

/***/ "./src/icons/mstile-70x70 copy.png":
/*!*****************************************!*\
  !*** ./src/icons/mstile-70x70 copy.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-70x70 copy.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-70x70_copy.png?");

/***/ }),

/***/ "./src/icons/mstile-70x70.png":
/*!************************************!*\
  !*** ./src/icons/mstile-70x70.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/mstile-70x70.png\");\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/mstile-70x70.png?");

/***/ }),

/***/ "./src/manifest.webmanifest":
/*!**********************************!*\
  !*** ./src/manifest.webmanifest ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/manifest.webmanifest\");\n\n//# sourceURL=webpack://absurd-example-project/./src/manifest.webmanifest?");

/***/ }),

/***/ "./src/icons sync recursive \\.(jpg|jpeg|png)$":
/*!*******************************************!*\
  !*** ./src/icons/ sync \.(jpg|jpeg|png)$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./android-chrome-192x192 copy.png\": \"./src/icons/android-chrome-192x192 copy.png\",\n\t\"./android-chrome-192x192.png\": \"./src/icons/android-chrome-192x192.png\",\n\t\"./android-chrome-512x512.png\": \"./src/icons/android-chrome-512x512.png\",\n\t\"./apple-icon-180 copy.png\": \"./src/icons/apple-icon-180 copy.png\",\n\t\"./apple-icon-180.png\": \"./src/icons/apple-icon-180.png\",\n\t\"./apple-splash-1125-2436 copy.jpg\": \"./src/icons/apple-splash-1125-2436 copy.jpg\",\n\t\"./apple-splash-1125-2436.jpg\": \"./src/icons/apple-splash-1125-2436.jpg\",\n\t\"./apple-splash-1136-640 copy.jpg\": \"./src/icons/apple-splash-1136-640 copy.jpg\",\n\t\"./apple-splash-1136-640.jpg\": \"./src/icons/apple-splash-1136-640.jpg\",\n\t\"./apple-splash-1170-2532 copy.jpg\": \"./src/icons/apple-splash-1170-2532 copy.jpg\",\n\t\"./apple-splash-1170-2532.jpg\": \"./src/icons/apple-splash-1170-2532.jpg\",\n\t\"./apple-splash-1179-2556 copy.jpg\": \"./src/icons/apple-splash-1179-2556 copy.jpg\",\n\t\"./apple-splash-1179-2556.jpg\": \"./src/icons/apple-splash-1179-2556.jpg\",\n\t\"./apple-splash-1242-2208 copy.jpg\": \"./src/icons/apple-splash-1242-2208 copy.jpg\",\n\t\"./apple-splash-1242-2208.jpg\": \"./src/icons/apple-splash-1242-2208.jpg\",\n\t\"./apple-splash-1242-2688 copy.jpg\": \"./src/icons/apple-splash-1242-2688 copy.jpg\",\n\t\"./apple-splash-1242-2688.jpg\": \"./src/icons/apple-splash-1242-2688.jpg\",\n\t\"./apple-splash-1284-2778 copy.jpg\": \"./src/icons/apple-splash-1284-2778 copy.jpg\",\n\t\"./apple-splash-1284-2778.jpg\": \"./src/icons/apple-splash-1284-2778.jpg\",\n\t\"./apple-splash-1290-2796 copy.jpg\": \"./src/icons/apple-splash-1290-2796 copy.jpg\",\n\t\"./apple-splash-1290-2796.jpg\": \"./src/icons/apple-splash-1290-2796.jpg\",\n\t\"./apple-splash-1334-750 copy.jpg\": \"./src/icons/apple-splash-1334-750 copy.jpg\",\n\t\"./apple-splash-1334-750.jpg\": \"./src/icons/apple-splash-1334-750.jpg\",\n\t\"./apple-splash-1536-2048 copy.jpg\": \"./src/icons/apple-splash-1536-2048 copy.jpg\",\n\t\"./apple-splash-1536-2048.jpg\": \"./src/icons/apple-splash-1536-2048.jpg\",\n\t\"./apple-splash-1620-2160 copy.jpg\": \"./src/icons/apple-splash-1620-2160 copy.jpg\",\n\t\"./apple-splash-1620-2160.jpg\": \"./src/icons/apple-splash-1620-2160.jpg\",\n\t\"./apple-splash-1668-2224 copy.jpg\": \"./src/icons/apple-splash-1668-2224 copy.jpg\",\n\t\"./apple-splash-1668-2224.jpg\": \"./src/icons/apple-splash-1668-2224.jpg\",\n\t\"./apple-splash-1668-2388 copy.jpg\": \"./src/icons/apple-splash-1668-2388 copy.jpg\",\n\t\"./apple-splash-1668-2388.jpg\": \"./src/icons/apple-splash-1668-2388.jpg\",\n\t\"./apple-splash-1792-828 copy.jpg\": \"./src/icons/apple-splash-1792-828 copy.jpg\",\n\t\"./apple-splash-1792-828.jpg\": \"./src/icons/apple-splash-1792-828.jpg\",\n\t\"./apple-splash-2048-1536 copy.jpg\": \"./src/icons/apple-splash-2048-1536 copy.jpg\",\n\t\"./apple-splash-2048-1536.jpg\": \"./src/icons/apple-splash-2048-1536.jpg\",\n\t\"./apple-splash-2048-2732 copy.jpg\": \"./src/icons/apple-splash-2048-2732 copy.jpg\",\n\t\"./apple-splash-2048-2732.jpg\": \"./src/icons/apple-splash-2048-2732.jpg\",\n\t\"./apple-splash-2160-1620 copy.jpg\": \"./src/icons/apple-splash-2160-1620 copy.jpg\",\n\t\"./apple-splash-2160-1620.jpg\": \"./src/icons/apple-splash-2160-1620.jpg\",\n\t\"./apple-splash-2208-1242 copy.jpg\": \"./src/icons/apple-splash-2208-1242 copy.jpg\",\n\t\"./apple-splash-2208-1242.jpg\": \"./src/icons/apple-splash-2208-1242.jpg\",\n\t\"./apple-splash-2224-1668 copy.jpg\": \"./src/icons/apple-splash-2224-1668 copy.jpg\",\n\t\"./apple-splash-2224-1668.jpg\": \"./src/icons/apple-splash-2224-1668.jpg\",\n\t\"./apple-splash-2388-1668 copy.jpg\": \"./src/icons/apple-splash-2388-1668 copy.jpg\",\n\t\"./apple-splash-2388-1668.jpg\": \"./src/icons/apple-splash-2388-1668.jpg\",\n\t\"./apple-splash-2436-1125 copy.jpg\": \"./src/icons/apple-splash-2436-1125 copy.jpg\",\n\t\"./apple-splash-2436-1125.jpg\": \"./src/icons/apple-splash-2436-1125.jpg\",\n\t\"./apple-splash-2532-1170 copy.jpg\": \"./src/icons/apple-splash-2532-1170 copy.jpg\",\n\t\"./apple-splash-2532-1170.jpg\": \"./src/icons/apple-splash-2532-1170.jpg\",\n\t\"./apple-splash-2556-1179 copy.jpg\": \"./src/icons/apple-splash-2556-1179 copy.jpg\",\n\t\"./apple-splash-2556-1179.jpg\": \"./src/icons/apple-splash-2556-1179.jpg\",\n\t\"./apple-splash-2688-1242 copy.jpg\": \"./src/icons/apple-splash-2688-1242 copy.jpg\",\n\t\"./apple-splash-2688-1242.jpg\": \"./src/icons/apple-splash-2688-1242.jpg\",\n\t\"./apple-splash-2732-2048 copy.jpg\": \"./src/icons/apple-splash-2732-2048 copy.jpg\",\n\t\"./apple-splash-2732-2048.jpg\": \"./src/icons/apple-splash-2732-2048.jpg\",\n\t\"./apple-splash-2778-1284 copy.jpg\": \"./src/icons/apple-splash-2778-1284 copy.jpg\",\n\t\"./apple-splash-2778-1284.jpg\": \"./src/icons/apple-splash-2778-1284.jpg\",\n\t\"./apple-splash-2796-1290 copy.jpg\": \"./src/icons/apple-splash-2796-1290 copy.jpg\",\n\t\"./apple-splash-2796-1290.jpg\": \"./src/icons/apple-splash-2796-1290.jpg\",\n\t\"./apple-splash-640-1136 copy.jpg\": \"./src/icons/apple-splash-640-1136 copy.jpg\",\n\t\"./apple-splash-640-1136.jpg\": \"./src/icons/apple-splash-640-1136.jpg\",\n\t\"./apple-splash-750-1334 copy.jpg\": \"./src/icons/apple-splash-750-1334 copy.jpg\",\n\t\"./apple-splash-750-1334.jpg\": \"./src/icons/apple-splash-750-1334.jpg\",\n\t\"./apple-splash-828-1792 copy.jpg\": \"./src/icons/apple-splash-828-1792 copy.jpg\",\n\t\"./apple-splash-828-1792.jpg\": \"./src/icons/apple-splash-828-1792.jpg\",\n\t\"./apple-touch-icon-114x114 copy.png\": \"./src/icons/apple-touch-icon-114x114 copy.png\",\n\t\"./apple-touch-icon-114x114.png\": \"./src/icons/apple-touch-icon-114x114.png\",\n\t\"./apple-touch-icon-120x120 copy.png\": \"./src/icons/apple-touch-icon-120x120 copy.png\",\n\t\"./apple-touch-icon-120x120.png\": \"./src/icons/apple-touch-icon-120x120.png\",\n\t\"./apple-touch-icon-144x144 copy.png\": \"./src/icons/apple-touch-icon-144x144 copy.png\",\n\t\"./apple-touch-icon-144x144.png\": \"./src/icons/apple-touch-icon-144x144.png\",\n\t\"./apple-touch-icon-152x152 copy.png\": \"./src/icons/apple-touch-icon-152x152 copy.png\",\n\t\"./apple-touch-icon-152x152.png\": \"./src/icons/apple-touch-icon-152x152.png\",\n\t\"./apple-touch-icon-167x167 copy.png\": \"./src/icons/apple-touch-icon-167x167 copy.png\",\n\t\"./apple-touch-icon-167x167.png\": \"./src/icons/apple-touch-icon-167x167.png\",\n\t\"./apple-touch-icon-180x180 copy.png\": \"./src/icons/apple-touch-icon-180x180 copy.png\",\n\t\"./apple-touch-icon-180x180.png\": \"./src/icons/apple-touch-icon-180x180.png\",\n\t\"./apple-touch-icon-57x57 copy.png\": \"./src/icons/apple-touch-icon-57x57 copy.png\",\n\t\"./apple-touch-icon-57x57.png\": \"./src/icons/apple-touch-icon-57x57.png\",\n\t\"./apple-touch-icon-60x60 copy.png\": \"./src/icons/apple-touch-icon-60x60 copy.png\",\n\t\"./apple-touch-icon-60x60.png\": \"./src/icons/apple-touch-icon-60x60.png\",\n\t\"./apple-touch-icon-72x72 copy.png\": \"./src/icons/apple-touch-icon-72x72 copy.png\",\n\t\"./apple-touch-icon-72x72.png\": \"./src/icons/apple-touch-icon-72x72.png\",\n\t\"./apple-touch-icon-76x76 copy.png\": \"./src/icons/apple-touch-icon-76x76 copy.png\",\n\t\"./apple-touch-icon-76x76.png\": \"./src/icons/apple-touch-icon-76x76.png\",\n\t\"./favicon-128x128 copy.png\": \"./src/icons/favicon-128x128 copy.png\",\n\t\"./favicon-128x128.png\": \"./src/icons/favicon-128x128.png\",\n\t\"./favicon-16x16 copy.png\": \"./src/icons/favicon-16x16 copy.png\",\n\t\"./favicon-16x16.png\": \"./src/icons/favicon-16x16.png\",\n\t\"./favicon-196x196 copy.png\": \"./src/icons/favicon-196x196 copy.png\",\n\t\"./favicon-196x196.png\": \"./src/icons/favicon-196x196.png\",\n\t\"./favicon-32x32 copy.png\": \"./src/icons/favicon-32x32 copy.png\",\n\t\"./favicon-32x32.png\": \"./src/icons/favicon-32x32.png\",\n\t\"./favicon-96x96 copy.png\": \"./src/icons/favicon-96x96 copy.png\",\n\t\"./favicon-96x96.png\": \"./src/icons/favicon-96x96.png\",\n\t\"./manifest-icon-192.maskable copy.png\": \"./src/icons/manifest-icon-192.maskable copy.png\",\n\t\"./manifest-icon-192.maskable.png\": \"./src/icons/manifest-icon-192.maskable.png\",\n\t\"./manifest-icon-512.maskable copy.png\": \"./src/icons/manifest-icon-512.maskable copy.png\",\n\t\"./manifest-icon-512.maskable.png\": \"./src/icons/manifest-icon-512.maskable.png\",\n\t\"./mstile-144x144 copy.png\": \"./src/icons/mstile-144x144 copy.png\",\n\t\"./mstile-144x144.png\": \"./src/icons/mstile-144x144.png\",\n\t\"./mstile-150x150 copy.png\": \"./src/icons/mstile-150x150 copy.png\",\n\t\"./mstile-150x150.png\": \"./src/icons/mstile-150x150.png\",\n\t\"./mstile-310x150 copy.png\": \"./src/icons/mstile-310x150 copy.png\",\n\t\"./mstile-310x150.png\": \"./src/icons/mstile-310x150.png\",\n\t\"./mstile-310x310 copy.png\": \"./src/icons/mstile-310x310 copy.png\",\n\t\"./mstile-310x310.png\": \"./src/icons/mstile-310x310.png\",\n\t\"./mstile-70x70 copy.png\": \"./src/icons/mstile-70x70 copy.png\",\n\t\"./mstile-70x70.png\": \"./src/icons/mstile-70x70.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/icons sync recursive \\\\.(jpg|jpeg|png)$\";\n\n//# sourceURL=webpack://absurd-example-project/./src/icons/_sync_\\.(jpg%7Cjpeg%7Cpng)$?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var absurd_sql_dist_indexeddb_main_thread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! absurd-sql/dist/indexeddb-main-thread */ \"./node_modules/absurd-sql/dist/indexeddb-main-thread.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _signfts_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signfts.txt */ \"./src/signfts.txt\");\n/* harmony import */ var _signftsdata_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signftsdata.txt */ \"./src/signftsdata.txt\");\n/* harmony import */ var _signftstableftsdata_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signftstableftsdata.txt */ \"./src/signftstableftsdata.txt\");\n/* harmony import */ var _sw_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sw.js */ \"./src/sw.js\");\n/* harmony import */ var _sw_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sw_js__WEBPACK_IMPORTED_MODULE_5__);\n\n__webpack_require__.p = '/';\n\n\n\n\n\n\n\nfunction requireAll(r) { r.keys().forEach(r); }\nrequireAll(__webpack_require__(\"./src/icons sync recursive \\\\.(jpg|jpeg|png)$\"));\nrequireAll(__webpack_require__(\"./src sync recursive \\\\.(webmanifest)$\"));\n\nfunction init() {\n  let worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"src_index_worker_js\"), __webpack_require__.b));\n  // This is only required because Safari doesn't support nested\n  // workers. This installs a handler that will proxy creating web\n  // workers through the main thread\n  (0,absurd_sql_dist_indexeddb_main_thread__WEBPACK_IMPORTED_MODULE_0__.initBackend)(worker);\n  window.worker = worker;\n  worker.onmessage = (ev) => {\n    if(ev.data == 'ready'){\n      window.updateSearch()\n    } else {\n      let div = document.getElementById('results')\n      // console.log('fyrir json parse')\n      let signs = ev.data || [];\n      if(!signs.length){return}\n      if(!signs[0].phrase){return}\n      if(signs.length){\n        div.innerHTML = signs.map(sign => {\n          return `<div class=\"sign\" onclick=\"showYoutube(this)\" id=\"${sign.id}\" youtube_id=\"${sign.youtube_id}\">\n                      <div class=\"sign-phrase\">\n                          <span>${sign.phrase}</span>\n                          <span class=\"addToListIcon\" onclick=\"addToList(${sign.id})\">\n                      </div>\n                  </div>`\n      }).join('')\n      }\n    }\n\n    }\n\n    \n}\n\ninit();\n\n\n//# sourceURL=webpack://absurd-example-project/./src/index.js?");

/***/ }),

/***/ "./src/sw.js":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/***/ (() => {

eval("const PRECACHE = 'precache-v1.03';\r\nconst RUNTIME = 'runtime';\r\n\r\n// A list of local resources we always want to be cached.\r\nconst PRECACHE_URLS = [\r\n  '/index.html',\r\n  '/',\r\n  '/style.css',\r\n  '/manifest.webmanifest',\r\n  '/sql-wasm.js',\r\n  '/sql-wasm.wasm',\r\n  '/src_index_worker_js.js',\r\n];\r\n\r\n// The install handler takes care of precaching the resources we always need.\r\nself.addEventListener('install', event => {\r\n  event.waitUntil(\r\n    caches.open(PRECACHE)\r\n      .then(cache => cache.addAll(PRECACHE_URLS))\r\n      .then(self.skipWaiting())\r\n  );\r\n});\r\n\r\n// The activate handler takes care of cleaning up old caches.\r\nself.addEventListener('activate', event => {\r\n  const currentCaches = [PRECACHE, RUNTIME];\r\n  event.waitUntil(\r\n    caches.keys().then(cacheNames => {\r\n      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));\r\n    }).then(cachesToDelete => {\r\n      return Promise.all(cachesToDelete.map(cacheToDelete => {\r\n        return caches.delete(cacheToDelete);\r\n      }));\r\n    }).then(() => self.clients.claim())\r\n  );\r\n});\r\n\r\n// The fetch handler serves responses for same-origin resources from a cache.\r\n// If no response is found, it populates the runtime cache with the response\r\n// from the network before returning it to the page.\r\nself.addEventListener('fetch', event => {\r\n  // Skip cross-origin requests, like those for Google Analytics.\r\n  if (event.request.url.startsWith(self.location.origin)) {\r\n    event.respondWith(\r\n      caches.match(event.request).then(cachedResponse => {\r\n        if (cachedResponse) {\r\n          return cachedResponse;\r\n        }\r\n\r\n        return caches.open(RUNTIME).then(cache => {\r\n          return fetch(event.request).then(response => {\r\n            // Put a copy of the response in the runtime cache.\r\n            return cache.put(event.request, response.clone()).then(() => {\r\n              return response;\r\n            });\r\n          });\r\n        });\r\n      })\r\n    );\r\n  }\r\n});\n\n//# sourceURL=webpack://absurd-example-project/./src/sw.js?");

/***/ }),

/***/ "./src sync recursive \\.(webmanifest)$":
/*!************************************!*\
  !*** ./src/ sync \.(webmanifest)$ ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./manifest.webmanifest\": \"./src/manifest.webmanifest\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.(webmanifest)$\";\n\n//# sourceURL=webpack://absurd-example-project/./src/_sync_\\.(webmanifest)$?");

/***/ }),

/***/ "./src/signfts.txt":
/*!*************************!*\
  !*** ./src/signfts.txt ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/signfts.txt\";\n\n//# sourceURL=webpack://absurd-example-project/./src/signfts.txt?");

/***/ }),

/***/ "./src/signftsdata.txt":
/*!*****************************!*\
  !*** ./src/signftsdata.txt ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/signftsdata.txt\";\n\n//# sourceURL=webpack://absurd-example-project/./src/signftsdata.txt?");

/***/ }),

/***/ "./src/signftstableftsdata.txt":
/*!*************************************!*\
  !*** ./src/signftstableftsdata.txt ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/signftstableftsdata.txt\";\n\n//# sourceURL=webpack://absurd-example-project/./src/signftstableftsdata.txt?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "absurd-example-project:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkabsurd_example_project"] = self["webpackChunkabsurd_example_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;