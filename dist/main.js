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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\nwindow.Player = _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst canvas = document.getElementById(\"game-canvas\");\nconst player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, \"./ship.png\", 0, 0, 50, 50);\n// debugger\nplayer.draw();\nconsole.log(player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7QUFDekNDLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSwwREFBTTtBQUN0QixNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUNyRCxNQUFNQyxNQUFNLEdBQUcsSUFBSUwsMERBQU0sQ0FBQ0UsTUFBTSxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7QUFDeEQ7QUFDQUcsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQztBQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2VzaG9vdG91dGpzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllci5qc1wiO1xud2luZG93LlBsYXllciA9IFBsYXllcjtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLFwiLi9zaGlwLnBuZ1wiLDAsMCw1MCw1MCk7XG4vLyBkZWJ1Z2dlclxucGxheWVyLmRyYXcoKTtcbmNvbnNvbGUubG9nKHBsYXllcilcblxuXG4iXSwibmFtZXMiOlsiUGxheWVyIiwid2luZG93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXllciIsImRyYXciLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(canvas, shipSrc, x, y, width, height) {\n    this.canvas = canvas;\n    this.x = x;\n    this.y = y;\n    this.height = height;\n    this.width = width;\n    this.icon = new Image();\n    this.icon.src = shipSrc;\n    this.ctx = this.canvas.getContext('2d');\n  }\n  draw() {\n    // debugger\n    this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);\n    // this.ctx.fillRect(this.x, this.y,this.height,this.width)\n  }\n  move(dx, dy) {\n    this.x += dx;\n    this.y += dy;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU0sQ0FBQztFQUN4QkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxLQUFLLEVBQUNDLE1BQU0sRUFBQztJQUM1QyxJQUFJLENBQUNMLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNFLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDRSxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDRCxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDRSxJQUFJLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsR0FBR1AsT0FBTztJQUN2QixJQUFJLENBQUNRLEdBQUcsR0FBRyxJQUFJLENBQUNULE1BQU0sQ0FBQ1UsVUFBVSxDQUFDLElBQUksQ0FBQztFQUUzQztFQUVBQyxJQUFJQSxDQUFBLEVBQUU7SUFDRjtJQUNBLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxTQUFTLENBQUMsSUFBSSxDQUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDdEU7RUFDSjtFQUVBUSxJQUFJQSxDQUFDQyxFQUFFLEVBQUVDLEVBQUUsRUFBQztJQUNSLElBQUksQ0FBQ2IsQ0FBQyxJQUFJWSxFQUFFO0lBQ1osSUFBSSxDQUFDWCxDQUFDLElBQUdZLEVBQUU7RUFDZjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2VzaG9vdG91dGpzLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHNoaXBTcmMsIHgsIHksIHdpZHRoLGhlaWdodCl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pY29uLnNyYyA9IHNoaXBTcmM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pY29uLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSx0aGlzLmhlaWdodCx0aGlzLndpZHRoKVxuICAgIH1cblxuICAgIG1vdmUoZHgsIGR5KXtcbiAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICB0aGlzLnkgKz1keTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiUGxheWVyIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJzaGlwU3JjIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImljb24iLCJJbWFnZSIsInNyYyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3IiwiZHJhd0ltYWdlIiwibW92ZSIsImR4IiwiZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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