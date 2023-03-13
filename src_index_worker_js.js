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

/***/ "./src/index.worker.js":
/*!*****************************!*\
  !*** ./src/index.worker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jlongster_sql_js_dist_sql_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jlongster/sql.js/dist/sql-wasm */ \"./node_modules/@jlongster/sql.js/dist/sql-wasm.js\");\n/* harmony import */ var _jlongster_sql_js_dist_sql_wasm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jlongster_sql_js_dist_sql_wasm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var absurd_sql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! absurd-sql */ \"./node_modules/absurd-sql/dist/index.js\");\n/* harmony import */ var absurd_sql_dist_indexeddb_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! absurd-sql/dist/indexeddb-backend */ \"./node_modules/absurd-sql/dist/indexeddb-backend.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator.return && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }\nfunction _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }\nfunction _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = \"return\" === key ? \"return\" : \"next\"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? \"return\" : \"normal\", arg); }, function (err) { resume(\"throw\", err); }); } catch (err) { settle(\"throw\", err); } } function settle(type, value) { switch (type) { case \"return\": front.resolve({ value: value, done: !0 }); break; case \"throw\": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, \"function\" != typeof gen.return && (this.return = void 0); }\n_AsyncGenerator.prototype[\"function\" == typeof Symbol && Symbol.asyncIterator || \"@@asyncIterator\"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke(\"next\", arg); }, _AsyncGenerator.prototype.throw = function (arg) { return this._invoke(\"throw\", arg); }, _AsyncGenerator.prototype.return = function (arg) { return this._invoke(\"return\", arg); };\nfunction _OverloadYield(value, kind) { this.v = value, this.k = kind; }\nfunction _asyncIterator(iterable) { var method, async, sync, retry = 2; for (\"undefined\" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = \"@@asyncIterator\", sync = \"@@iterator\"; } throw new TypeError(\"Object is not async iterable\"); }\nfunction AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + \" is not an object.\")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }\n\n\n\nvar db;\nvar firstRun = true;\nvar registerPromiseWorker = __webpack_require__(/*! promise-worker/register */ \"./node_modules/promise-worker/register.js\");\n\n// onmessage = (e) => {\n//   console.log('Message received from main script');\n//   const workerResult = `Result: ${e.data[0] * e.data[1]}`;\n//   console.log('Posting message back to main script');\n//   postMessage(workerResult);\n// }\nfunction run() {\n  return _run.apply(this, arguments);\n}\nfunction _run() {\n  _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {\n    var SQL, sqlFS, path, stream, db, initDB, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, line, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _line, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _line2;\n    return _regeneratorRuntime().wrap(function _callee5$(_context5) {\n      while (1) switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return _jlongster_sql_js_dist_sql_wasm__WEBPACK_IMPORTED_MODULE_0___default()({\n            locateFile: function locateFile(file) {\n              return \"\".concat(file);\n            }\n          });\n        case 2:\n          SQL = _context5.sent;\n          sqlFS = new absurd_sql__WEBPACK_IMPORTED_MODULE_1__.SQLiteFS(SQL.FS, new absurd_sql_dist_indexeddb_backend__WEBPACK_IMPORTED_MODULE_2__.default());\n          SQL.register_for_idb(sqlFS);\n          SQL.FS.mkdir('/sql');\n          SQL.FS.mount(sqlFS, {}, '/sql');\n          path = '/sql/sign.sqlite';\n          if (!(typeof SharedArrayBuffer === 'undefined')) {\n            _context5.next = 13;\n            break;\n          }\n          stream = SQL.FS.open(path, 'a+');\n          _context5.next = 12;\n          return stream.node.contents.readIfFallback();\n        case 12:\n          SQL.FS.close(stream);\n        case 13:\n          db = new SQL.Database(path, {\n            filename: true\n          }); // You might want to try `PRAGMA page_size=8192;` too!\n          db.exec(\"\\n  PRAGMA journal_mode=MEMORY;\\n  \");\n          initDB = false;\n          try {\n            db.exec('select * from sign_fts limit 5');\n          } catch (error) {\n            initDB = true;\n          }\n          if (!initDB) {\n            _context5.next = 102;\n            break;\n          }\n          _iteratorAbruptCompletion = false;\n          _didIteratorError = false;\n          _context5.prev = 20;\n          _iterator = _asyncIterator(splitTextFileBySemicolon('signfts.txt'));\n        case 22:\n          _context5.next = 24;\n          return _iterator.next();\n        case 24:\n          if (!(_iteratorAbruptCompletion = !(_step = _context5.sent).done)) {\n            _context5.next = 30;\n            break;\n          }\n          line = _step.value;\n          // console.log(line)\n          try {\n            db.exec(line);\n          } catch (error) {\n            console.error(error);\n          }\n        case 27:\n          _iteratorAbruptCompletion = false;\n          _context5.next = 22;\n          break;\n        case 30:\n          _context5.next = 36;\n          break;\n        case 32:\n          _context5.prev = 32;\n          _context5.t0 = _context5[\"catch\"](20);\n          _didIteratorError = true;\n          _iteratorError = _context5.t0;\n        case 36:\n          _context5.prev = 36;\n          _context5.prev = 37;\n          if (!(_iteratorAbruptCompletion && _iterator.return != null)) {\n            _context5.next = 41;\n            break;\n          }\n          _context5.next = 41;\n          return _iterator.return();\n        case 41:\n          _context5.prev = 41;\n          if (!_didIteratorError) {\n            _context5.next = 44;\n            break;\n          }\n          throw _iteratorError;\n        case 44:\n          return _context5.finish(41);\n        case 45:\n          return _context5.finish(36);\n        case 46:\n          _iteratorAbruptCompletion2 = false;\n          _didIteratorError2 = false;\n          _context5.prev = 48;\n          _iterator2 = _asyncIterator(splitTextFileBySemicolon('signftsdata.txt'));\n        case 50:\n          _context5.next = 52;\n          return _iterator2.next();\n        case 52:\n          if (!(_iteratorAbruptCompletion2 = !(_step2 = _context5.sent).done)) {\n            _context5.next = 58;\n            break;\n          }\n          _line = _step2.value;\n          // console.log(line)\n          try {\n            db.exec(_line);\n          } catch (error) {\n            console.error(error);\n          }\n        case 55:\n          _iteratorAbruptCompletion2 = false;\n          _context5.next = 50;\n          break;\n        case 58:\n          _context5.next = 64;\n          break;\n        case 60:\n          _context5.prev = 60;\n          _context5.t1 = _context5[\"catch\"](48);\n          _didIteratorError2 = true;\n          _iteratorError2 = _context5.t1;\n        case 64:\n          _context5.prev = 64;\n          _context5.prev = 65;\n          if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {\n            _context5.next = 69;\n            break;\n          }\n          _context5.next = 69;\n          return _iterator2.return();\n        case 69:\n          _context5.prev = 69;\n          if (!_didIteratorError2) {\n            _context5.next = 72;\n            break;\n          }\n          throw _iteratorError2;\n        case 72:\n          return _context5.finish(69);\n        case 73:\n          return _context5.finish(64);\n        case 74:\n          _iteratorAbruptCompletion3 = false;\n          _didIteratorError3 = false;\n          _context5.prev = 76;\n          _iterator3 = _asyncIterator(splitTextFileBySemicolon('signftstableftsdata.txt'));\n        case 78:\n          _context5.next = 80;\n          return _iterator3.next();\n        case 80:\n          if (!(_iteratorAbruptCompletion3 = !(_step3 = _context5.sent).done)) {\n            _context5.next = 86;\n            break;\n          }\n          _line2 = _step3.value;\n          // console.log(line)\n          try {\n            db.exec(_line2);\n          } catch (error) {\n            console.error(error);\n          }\n        case 83:\n          _iteratorAbruptCompletion3 = false;\n          _context5.next = 78;\n          break;\n        case 86:\n          _context5.next = 92;\n          break;\n        case 88:\n          _context5.prev = 88;\n          _context5.t2 = _context5[\"catch\"](76);\n          _didIteratorError3 = true;\n          _iteratorError3 = _context5.t2;\n        case 92:\n          _context5.prev = 92;\n          _context5.prev = 93;\n          if (!(_iteratorAbruptCompletion3 && _iterator3.return != null)) {\n            _context5.next = 97;\n            break;\n          }\n          _context5.next = 97;\n          return _iterator3.return();\n        case 97:\n          _context5.prev = 97;\n          if (!_didIteratorError3) {\n            _context5.next = 100;\n            break;\n          }\n          throw _iteratorError3;\n        case 100:\n          return _context5.finish(97);\n        case 101:\n          return _context5.finish(92);\n        case 102:\n          registerPromiseWorker( /*#__PURE__*/function () {\n            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(message) {\n              var stmt, searchValue, result, res, _stmt, user_collections, _stmt2, _user_collections;\n              return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n                while (1) switch (_context3.prev = _context3.next) {\n                  case 0:\n                    if (!(message.type == 'searchValue')) {\n                      _context3.next = 8;\n                      break;\n                    }\n                    // let searchValue = message.searchValue\n                    searchValue = message.searchValue;\n                    if (!searchValue) {\n                      stmt = db.prepare(\"select * from sign order by phrase asc limit 500\");\n                    }\n                    if (searchValue[0] === '*') {\n                      stmt = db.prepare(\"select * from sign where phrase like \\\"%\".concat(searchValue.substring(1), \"%\\\" order by phrase asc\"));\n                    }\n                    if (searchValue && searchValue[0] != '*') {\n                      if (searchValue[searchValue.length - 1] != '*') {\n                        searchValue = searchValue + '*';\n                      }\n                      stmt = db.prepare(\"select * from sign_fts join sign on sign.id = sign_fts.id where sign_fts match \\\"\".concat(searchValue, \"\\\" order by rank, phrase asc\"));\n                    }\n                    result = [];\n                    while (stmt.step()) result.push(stmt.getAsObject());\n                    // postMessage({type:'signs',signs:result})\n                    return _context3.abrupt(\"return\", result);\n                  case 8:\n                    if (!(message.type === 'exec')) {\n                      _context3.next = 13;\n                      break;\n                    }\n                    stmt = db.prepare(message.command);\n                    res = [];\n                    while (stmt.step()) {\n                      res.push(stmt.getAsObject());\n                    }\n                    return _context3.abrupt(\"return\", res);\n                  case 13:\n                    if (message.type === 'user-collections') {\n                      try {\n                        db.exec(\"SELECT * FROM user WHERE NAME = \\\"default_user\\\"\");\n                      } catch (error) {\n                        console.error(error);\n                      }\n                      _stmt = db.prepare(\"SELECT * FROM collection WHERE user_id IN (select id from user where user.name = \\\"default_user\\\")\");\n                      user_collections = [];\n                      while (_stmt.step()) {\n                        user_collections.push(_stmt.getAsObject());\n                      }\n                      // postMessage({type:'user-collections',user_collections})\n                    }\n                    if (!(message.type === 'new-collection')) {\n                      _context3.next = 20;\n                      break;\n                    }\n                    try {\n                      db.exec(\"INSERT INTO collection (name, user_id) SELECT \\\"\".concat(message.newCollectionName, \"\\\", id from (select id from user where name = \\\"default_user\\\")\"));\n                    } catch (error) {\n                      console.error(error);\n                    }\n                    _stmt2 = db.prepare(\"SELECT * FROM collection WHERE user_id IN (select id from user where user.name = \\\"default_user\\\")\");\n                    _user_collections = [];\n                    while (_stmt2.step()) {\n                      _user_collections.push(_stmt2.getAsObject());\n                    }\n                    // stmt.step()\n                    // user_collections.push(stmt.getAsObject());\n                    // postMessage({type:'user-collection',user_collections:user_collections})\n                    return _context3.abrupt(\"return\", _user_collections);\n                  case 20:\n                  case \"end\":\n                    return _context3.stop();\n                }\n              }, _callee3);\n            }));\n            return function (_x3) {\n              return _ref.apply(this, arguments);\n            };\n          }());\n          onmessage = /*#__PURE__*/function () {\n            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(message) {\n              var stmt, searchValue, result, resp, _stmt3, user_collections, _stmt4, _user_collections2;\n              return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n                while (1) switch (_context4.prev = _context4.next) {\n                  case 0:\n                    if (!(message.data.type == 'searchValue')) {\n                      _context4.next = 9;\n                      break;\n                    }\n                    // let searchValue = message.data.searchValue\n                    searchValue = message.data.searchValue;\n                    if (!searchValue) {\n                      stmt = db.prepare(\"select * from sign order by phrase asc limit 500\");\n                    }\n                    if (searchValue[0] === '*') {\n                      stmt = db.prepare(\"select * from sign where phrase like \\\"%\".concat(searchValue.substring(1), \"%\\\" order by phrase asc\"));\n                    }\n                    if (searchValue && searchValue[0] != '*') {\n                      if (searchValue[searchValue.length - 1] != '*') {\n                        searchValue = searchValue + '*';\n                      }\n                      stmt = db.prepare(\"select * from sign_fts join sign on sign.id = sign_fts.id where sign_fts match \\\"\".concat(searchValue, \"\\\" order by rank, phrase asc\"));\n                    }\n                    result = [];\n                    while (stmt.step()) result.push(stmt.getAsObject());\n                    postMessage({\n                      type: 'signs',\n                      signs: result\n                    });\n                    return _context4.abrupt(\"return\");\n                  case 9:\n                    if (!(message.data.type === 'command')) {\n                      _context4.next = 16;\n                      break;\n                    }\n                    _context4.next = 12;\n                    return db.exec(message.data.command);\n                  case 12:\n                    resp = _context4.sent;\n                    if (!resp) {\n                      _context4.next = 16;\n                      break;\n                    }\n                    postMessage({\n                      type: 'command',\n                      command: resp\n                    });\n                    return _context4.abrupt(\"return\");\n                  case 16:\n                    if (message.data.type === 'user-collections') {\n                      try {\n                        db.exec(\"SELECT * FROM user WHERE NAME = \\\"default_user\\\"\");\n                      } catch (error) {\n                        console.error(error);\n                      }\n                      _stmt3 = db.prepare(\"SELECT * FROM collection WHERE user_id IN (select id from user where user.name = \\\"default_user\\\")\");\n                      user_collections = [];\n                      while (_stmt3.step()) {\n                        user_collections.push(_stmt3.getAsObject());\n                      }\n                      postMessage({\n                        type: 'user-collections',\n                        user_collections: user_collections\n                      });\n                    }\n                    if (!(message.data.type === 'new-collection')) {\n                      _context4.next = 24;\n                      break;\n                    }\n                    try {\n                      db.exec(\"INSERT INTO collection (name, user_id) SELECT \\\"\".concat(message.data.newCollectionName, \"\\\", id from (select id from user where name = \\\"default_user\\\")\"));\n                    } catch (error) {\n                      console.error(error);\n                    }\n                    _stmt4 = db.prepare(\"SELECT * FROM collection WHERE user_id IN (select id from user where user.name = \\\"default_user\\\")\");\n                    _user_collections2 = [];\n                    while (_stmt4.step()) {\n                      _user_collections2.push(_stmt4.getAsObject());\n                    }\n                    // stmt.step()\n                    // user_collections.push(stmt.getAsObject());\n                    postMessage({\n                      type: 'user-collection',\n                      user_collections: _user_collections2\n                    });\n                    return _context4.abrupt(\"return\");\n                  case 24:\n                  case \"end\":\n                    return _context4.stop();\n                }\n              }, _callee4);\n            }));\n            return function onmessage(_x4) {\n              return _ref2.apply(this, arguments);\n            };\n          }();\n          if (firstRun) {\n            firstRun = false;\n            console.log('first run');\n            postMessage('ready');\n          }\n        case 105:\n        case \"end\":\n          return _context5.stop();\n      }\n    }, _callee5, null, [[20, 32, 36, 46], [37,, 41, 45], [48, 60, 64, 74], [65,, 69, 73], [76, 88, 92, 102], [93,, 97, 101]]);\n  }));\n  return _run.apply(this, arguments);\n}\nrun();\nfunction makeTextFileLineIterator(_x) {\n  return _makeTextFileLineIterator.apply(this, arguments);\n}\nfunction _makeTextFileLineIterator() {\n  _makeTextFileLineIterator = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fileURL) {\n    var utf8Decoder, response, reader, _yield$_awaitAsyncGen, chunk, readerDone, re, startIndex, result, remainder, _yield$_awaitAsyncGen2;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          utf8Decoder = new TextDecoder(\"utf-8\");\n          _context.next = 3;\n          return _awaitAsyncGenerator(fetch(fileURL));\n        case 3:\n          response = _context.sent;\n          reader = response.body.getReader();\n          _context.next = 7;\n          return _awaitAsyncGenerator(reader.read());\n        case 7:\n          _yield$_awaitAsyncGen = _context.sent;\n          chunk = _yield$_awaitAsyncGen.value;\n          readerDone = _yield$_awaitAsyncGen.done;\n          chunk = chunk ? utf8Decoder.decode(chunk, {\n            stream: true\n          }) : \"\";\n          re = /\\r\\n|\\n|\\r/gm;\n          startIndex = 0;\n        case 13:\n          result = re.exec(chunk);\n          if (result) {\n            _context.next = 26;\n            break;\n          }\n          if (!readerDone) {\n            _context.next = 17;\n            break;\n          }\n          return _context.abrupt(\"break\", 31);\n        case 17:\n          remainder = chunk.substr(startIndex);\n          _context.next = 20;\n          return _awaitAsyncGenerator(reader.read());\n        case 20:\n          _yield$_awaitAsyncGen2 = _context.sent;\n          chunk = _yield$_awaitAsyncGen2.value;\n          readerDone = _yield$_awaitAsyncGen2.done;\n          chunk = remainder + (chunk ? utf8Decoder.decode(chunk, {\n            stream: true\n          }) : \"\");\n          startIndex = re.lastIndex = 0;\n          return _context.abrupt(\"continue\", 29);\n        case 26:\n          _context.next = 28;\n          return chunk.substring(startIndex, result.index);\n        case 28:\n          startIndex = re.lastIndex;\n        case 29:\n          _context.next = 13;\n          break;\n        case 31:\n          if (!(startIndex < chunk.length)) {\n            _context.next = 34;\n            break;\n          }\n          _context.next = 34;\n          return chunk.substr(startIndex);\n        case 34:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _makeTextFileLineIterator.apply(this, arguments);\n}\nfunction processLine(line) {\n  console.log(line);\n}\nfunction lineDoer() {\n  return _lineDoer.apply(this, arguments);\n} // lineDoer()\nfunction _lineDoer() {\n  _lineDoer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {\n    var _iteratorAbruptCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, line;\n    return _regeneratorRuntime().wrap(function _callee6$(_context6) {\n      while (1) switch (_context6.prev = _context6.next) {\n        case 0:\n          _iteratorAbruptCompletion4 = false;\n          _didIteratorError4 = false;\n          _context6.prev = 2;\n          _iterator4 = _asyncIterator(makeTextFileLineIterator('data.txt'));\n        case 4:\n          _context6.next = 6;\n          return _iterator4.next();\n        case 6:\n          if (!(_iteratorAbruptCompletion4 = !(_step4 = _context6.sent).done)) {\n            _context6.next = 12;\n            break;\n          }\n          line = _step4.value;\n          processLine(line);\n        case 9:\n          _iteratorAbruptCompletion4 = false;\n          _context6.next = 4;\n          break;\n        case 12:\n          _context6.next = 18;\n          break;\n        case 14:\n          _context6.prev = 14;\n          _context6.t0 = _context6[\"catch\"](2);\n          _didIteratorError4 = true;\n          _iteratorError4 = _context6.t0;\n        case 18:\n          _context6.prev = 18;\n          _context6.prev = 19;\n          if (!(_iteratorAbruptCompletion4 && _iterator4.return != null)) {\n            _context6.next = 23;\n            break;\n          }\n          _context6.next = 23;\n          return _iterator4.return();\n        case 23:\n          _context6.prev = 23;\n          if (!_didIteratorError4) {\n            _context6.next = 26;\n            break;\n          }\n          throw _iteratorError4;\n        case 26:\n          return _context6.finish(23);\n        case 27:\n          return _context6.finish(18);\n        case 28:\n        case \"end\":\n          return _context6.stop();\n      }\n    }, _callee6, null, [[2, 14, 18, 28], [19,, 23, 27]]);\n  }));\n  return _lineDoer.apply(this, arguments);\n}\nfunction splitTextFileBySemicolon(_x2) {\n  return _splitTextFileBySemicolon.apply(this, arguments);\n}\nfunction _splitTextFileBySemicolon() {\n  _splitTextFileBySemicolon = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fileURL) {\n    var utf8Decoder, response, reader, _yield$_awaitAsyncGen3, chunk, readerDone, re, startIndex, result, remainder, _yield$_awaitAsyncGen4;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          utf8Decoder = new TextDecoder(\"utf-8\");\n          _context2.next = 3;\n          return _awaitAsyncGenerator(fetch(fileURL));\n        case 3:\n          response = _context2.sent;\n          reader = response.body.getReader();\n          _context2.next = 7;\n          return _awaitAsyncGenerator(reader.read());\n        case 7:\n          _yield$_awaitAsyncGen3 = _context2.sent;\n          chunk = _yield$_awaitAsyncGen3.value;\n          readerDone = _yield$_awaitAsyncGen3.done;\n          chunk = chunk ? utf8Decoder.decode(chunk, {\n            stream: true\n          }) : \"\";\n          re = /;/gm;\n          startIndex = 0;\n        case 13:\n          result = re.exec(chunk);\n          if (result) {\n            _context2.next = 26;\n            break;\n          }\n          if (!readerDone) {\n            _context2.next = 17;\n            break;\n          }\n          return _context2.abrupt(\"break\", 31);\n        case 17:\n          remainder = chunk.substr(startIndex);\n          _context2.next = 20;\n          return _awaitAsyncGenerator(reader.read());\n        case 20:\n          _yield$_awaitAsyncGen4 = _context2.sent;\n          chunk = _yield$_awaitAsyncGen4.value;\n          readerDone = _yield$_awaitAsyncGen4.done;\n          chunk = remainder + (chunk ? utf8Decoder.decode(chunk, {\n            stream: true\n          }) : \"\");\n          startIndex = re.lastIndex = 0;\n          return _context2.abrupt(\"continue\", 29);\n        case 26:\n          _context2.next = 28;\n          return chunk.substring(startIndex, result.index);\n        case 28:\n          startIndex = re.lastIndex;\n        case 29:\n          _context2.next = 13;\n          break;\n        case 31:\n          if (!(startIndex < chunk.length)) {\n            _context2.next = 34;\n            break;\n          }\n          _context2.next = 34;\n          return chunk.substr(startIndex);\n        case 34:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return _splitTextFileBySemicolon.apply(this, arguments);\n}\n\n//# sourceURL=webpack://taknmal/./src/index.worker.js?");

/***/ }),

/***/ "?6b37":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://taknmal/crypto_(ignored)?");

/***/ }),

/***/ "?180a":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://taknmal/fs_(ignored)?");

/***/ }),

/***/ "?2a46":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://taknmal/path_(ignored)?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jlongster_sql_js_dist_sql-wasm_js-node_modules_absurd-sql_dist_index_js--104d3b"], () => (__webpack_require__("./src/index.worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_index_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktaknmal"] = self["webpackChunktaknmal"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_jlongster_sql_js_dist_sql-wasm_js-node_modules_absurd-sql_dist_index_js--104d3b").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;