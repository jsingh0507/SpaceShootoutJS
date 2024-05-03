/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\nwindow.Player = _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst canvas = document.getElementById(\"game-canvas\");\nconst player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, \"./src/icons/ship1.png\", 350, 625, 80, 60);\n// debugger\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  player.draw();\n}\nanimate();\n// console.log(player)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7QUFDekNDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSwwREFBTTtBQUN0QixNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUNyRCxNQUFNQyxNQUFNLEdBQUcsSUFBSUwsMERBQU0sQ0FBQ0UsTUFBTSxFQUFDLHVCQUF1QixFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztBQUN2RTs7QUFFQSxTQUFTSSxPQUFPQSxDQUFBLEVBQUU7RUFDZEMscUJBQXFCLENBQUNELE9BQU8sQ0FBQztFQUM5QkQsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztBQUNqQjtBQUVBRixPQUFPLENBQUMsQ0FBQztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2VzaG9vdG91dGpzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllci5qc1wiO1xud2luZG93LlBsYXllciA9IFBsYXllcjtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLFwiLi9zcmMvaWNvbnMvc2hpcDEucG5nXCIsMzUwLDYyNSw4MCw2MCk7XG4vLyBkZWJ1Z2dlclxuXG5mdW5jdGlvbiBhbmltYXRlKCl7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIHBsYXllci5kcmF3KCk7XG59XG5cbmFuaW1hdGUoKVxuLy8gY29uc29sZS5sb2cocGxheWVyKVxuXG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ3aW5kb3ciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVyIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(canvas, shipSrc, x, y, width, height) {\n    this.canvas = canvas;\n    this.x = x;\n    this.y = y;\n    this.height = height;\n    this.width = width;\n    this.icon = new Image();\n    this.icon.src = shipSrc;\n    this.ctx = this.canvas.getContext('2d');\n\n    // variables to keep track of the keyboard entry of the user:\n    this.keys = {};\n    // speed for the movements:\n    this.speed = 5;\n\n    //this event listener will work when pressed the key\n    document.addEventListener(\"keydown\", event => {\n      this.keys[event.key] = true;\n    });\n\n    //this event listener is when we release the key\n    document.addEventListener(\"keyup\", event => {\n      this.keys[event.key] = false;\n    });\n  }\n  updatePos() {\n    //this function will basically check if the keys is true(from the eventListener) then increase the speed \n    if (this.keys['a'] && this.x >= 0) {\n      this.x -= this.speed;\n    }\n    if (this.keys['d'] && this.x + this.width <= this.canvas.width) {\n      this.x += this.speed;\n    }\n    if (this.keys['w'] && this.y >= 0) {\n      this.y -= this.speed;\n    }\n    if (this.keys['s'] && this.y + this.height <= this.canvas.height) {\n      this.y += this.speed;\n    }\n  }\n  draw() {\n    // debugger\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.updatePos();\n    this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);\n    // this.ctx.fillRect(this.x, this.y,this.height,this.width)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlc2hvb3RvdXRqcy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBzaGlwU3JjLCB4LCB5LCB3aWR0aCxoZWlnaHQpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5pY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaWNvbi5zcmMgPSBzaGlwU3JjO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyB2YXJpYWJsZXMgdG8ga2VlcCB0cmFjayBvZiB0aGUga2V5Ym9hcmQgZW50cnkgb2YgdGhlIHVzZXI6XG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgICAgICAvLyBzcGVlZCBmb3IgdGhlIG1vdmVtZW50czpcbiAgICAgICAgdGhpcy5zcGVlZCA9IDU7XG5cbiAgICAgICAgLy90aGlzIGV2ZW50IGxpc3RlbmVyIHdpbGwgd29yayB3aGVuIHByZXNzZWQgdGhlIGtleVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tldmVudC5rZXldID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy90aGlzIGV2ZW50IGxpc3RlbmVyIGlzIHdoZW4gd2UgcmVsZWFzZSB0aGUga2V5XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tldmVudC5rZXldID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvcygpe1xuICAgICAgICAvL3RoaXMgZnVuY3Rpb24gd2lsbCBiYXNpY2FsbHkgY2hlY2sgaWYgdGhlIGtleXMgaXMgdHJ1ZShmcm9tIHRoZSBldmVudExpc3RlbmVyKSB0aGVuIGluY3JlYXNlIHRoZSBzcGVlZCBcbiAgICAgICAgaWYodGhpcy5rZXlzWydhJ10gJiYgdGhpcy54Pj0wKXtcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMua2V5c1snZCddICYmICh0aGlzLngrdGhpcy53aWR0aDw9dGhpcy5jYW52YXMud2lkdGgpICl7XG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmtleXNbJ3cnXSAmJiB0aGlzLnk+PTApe1xuICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5rZXlzWydzJ10gJiYgKHRoaXMueSt0aGlzLmhlaWdodDw9dGhpcy5jYW52YXMuaGVpZ2h0KSl7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pY29uLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSx0aGlzLmhlaWdodCx0aGlzLndpZHRoKVxuICAgIH1cblxuICAgIFxuXG59Il0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwic2hpcFNyYyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJjdHgiLCJnZXRDb250ZXh0Iiwia2V5cyIsInNwZWVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJ1cGRhdGVQb3MiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZXNob290b3V0anMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;