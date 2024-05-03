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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_alien_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/alien.js */ \"./src/scripts/alien.js\");\n/* harmony import */ var _scripts_asteroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/asteroid.js */ \"./src/scripts/asteroid.js\");\n\n\n\n\n// window.Player = Player;\nconst canvas = document.getElementById(\"game-canvas\");\nconst player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, \"./src/icons/ship1.png\", 350, 625, 80, 60);\nconst arr = [player];\n// debugger\n\nsetTimeout(function spawn() {\n  arr.push(new _scripts_alien_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, \"./src/icons/alien.png\"));\n  arr.push(new _scripts_asteroid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas, \"./src/icons/Asteroid_1.png\"));\n  setTimeout(spawn, 3000);\n}, 2000);\n// debugger\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);\n  // asteroid.draw();\n  // alien.draw();\n  // player.draw();\n  if (arr.length > 5) {\n    arr.splice(1, 2);\n  }\n  for (let i = 0; i < arr.length; i++) {\n    arr[i].draw();\n  }\n  // debugger\n}\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QztBQUNGO0FBQ007O0FBRTdDO0FBQ0EsTUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsTUFBTSxHQUFHLElBQUlOLDBEQUFNLENBQUNHLE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7QUFDdkUsTUFBTUksR0FBRyxHQUFHLENBQUNELE1BQU0sQ0FBQztBQUNwQjs7QUFFQUUsVUFBVSxDQUFDLFNBQVNDLEtBQUtBLENBQUEsRUFBRTtFQUN2QkYsR0FBRyxDQUFDRyxJQUFJLENBQUMsSUFBSVQseURBQUssQ0FBQ0UsTUFBTSxFQUFDLHVCQUF1QixDQUFDLENBQUM7RUFDbkRJLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLElBQUlSLDREQUFRLENBQUNDLE1BQU0sRUFBQyw0QkFBNEIsQ0FBQyxDQUFDO0VBQzNESyxVQUFVLENBQUNDLEtBQUssRUFBQyxJQUFJLENBQUM7QUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNSOztBQUVBLFNBQVNFLE9BQU9BLENBQUEsRUFBRTtFQUNkQyxxQkFBcUIsQ0FBQ0QsT0FBTyxDQUFDO0VBQzlCUixNQUFNLENBQUNVLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVYLE1BQU0sQ0FBQ1ksS0FBSyxFQUFFWixNQUFNLENBQUNhLE1BQU0sQ0FBQztFQUNwRTtFQUNBO0VBQ0E7RUFDQSxJQUFJVCxHQUFHLENBQUNVLE1BQU0sR0FBQyxDQUFDLEVBQUM7SUFDYlYsR0FBRyxDQUFDVyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztFQUNuQjtFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFDWixHQUFHLENBQUNVLE1BQU0sRUFBRUUsQ0FBQyxFQUFFLEVBQUM7SUFDNUJaLEdBQUcsQ0FBQ1ksQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ2pCO0VBQ0E7QUFFSjtBQUNBVCxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlc2hvb3RvdXRqcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vc2NyaXB0cy9wbGF5ZXIuanNcIjtcbmltcG9ydCBBbGllbiBmcm9tIFwiLi9zY3JpcHRzL2FsaWVuLmpzXCI7XG5pbXBvcnQgQXN0ZXJvaWQgZnJvbSBcIi4vc2NyaXB0cy9hc3Rlcm9pZC5qc1wiO1xuXG4vLyB3aW5kb3cuUGxheWVyID0gUGxheWVyO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKVxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsXCIuL3NyYy9pY29ucy9zaGlwMS5wbmdcIiwzNTAsNjI1LDgwLDYwKTtcbmNvbnN0IGFyciA9IFtwbGF5ZXJdO1xuLy8gZGVidWdnZXJcblxuc2V0VGltZW91dChmdW5jdGlvbiBzcGF3bigpe1xuICAgIGFyci5wdXNoKG5ldyBBbGllbihjYW52YXMsXCIuL3NyYy9pY29ucy9hbGllbi5wbmdcIikpO1xuICAgIGFyci5wdXNoKG5ldyBBc3Rlcm9pZChjYW52YXMsXCIuL3NyYy9pY29ucy9Bc3Rlcm9pZF8xLnBuZ1wiKSk7XG4gICAgc2V0VGltZW91dChzcGF3biwzMDAwKTtcbn0sIDIwMDApO1xuLy8gZGVidWdnZXJcblxuZnVuY3Rpb24gYW5pbWF0ZSgpe1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvLyBhc3Rlcm9pZC5kcmF3KCk7XG4gICAgLy8gYWxpZW4uZHJhdygpO1xuICAgIC8vIHBsYXllci5kcmF3KCk7XG4gICAgaWYgKGFyci5sZW5ndGg+NSl7XG4gICAgICAgIGFyci5zcGxpY2UoMSwyKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaT0wOyBpPGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGFycltpXS5kcmF3KCk7XG4gICAgfVxuICAgIC8vIGRlYnVnZ2VyXG4gICAgXG59XG5hbmltYXRlKClcblxuXG5cblxuIl0sIm5hbWVzIjpbIlBsYXllciIsIkFsaWVuIiwiQXN0ZXJvaWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVyIiwiYXJyIiwic2V0VGltZW91dCIsInNwYXduIiwicHVzaCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJzcGxpY2UiLCJpIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/alien.js":
/*!******************************!*\
  !*** ./src/scripts/alien.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movableObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movableObjects.js */ \"./src/scripts/movableObjects.js\");\n\nclass Alien extends _movableObjects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvas, alienSrc) {\n    const width = 50;\n    const height = 50;\n    const x = Math.random() * (canvas.width - width);\n    const y = -height; // Place above the canvas\n    super(canvas, alienSrc, x, y, width, height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alien);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hbGllbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFpRDtBQUNqRCxNQUFNQyxLQUFLLFNBQVNELDBEQUFjO0VBQzlCRSxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBQztJQUN6QixNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNoQixNQUFNQyxNQUFNLEdBQUcsRUFBRTtJQUNqQixNQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsSUFBSU4sTUFBTSxDQUFDRSxLQUFLLEdBQUdBLEtBQUssQ0FBQztJQUNoRCxNQUFNSyxDQUFDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDLENBQUM7SUFDbkIsS0FBSyxDQUFDSCxNQUFNLEVBQUVDLFFBQVEsRUFBRUcsQ0FBQyxFQUFFRyxDQUFDLEVBQUVMLEtBQUssRUFBRUMsTUFBTSxDQUFDO0VBQ2hEO0FBQ0o7QUFDQSwrREFBZUwsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlc2hvb3RvdXRqcy8uL3NyYy9zY3JpcHRzL2FsaWVuLmpzPzlhYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmFibGVPYmplY3RzIGZyb20gXCIuL21vdmFibGVPYmplY3RzLmpzXCI7XG5jbGFzcyBBbGllbiBleHRlbmRzIE1vdmFibGVPYmplY3Rze1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgYWxpZW5TcmMpe1xuICAgICAgICBjb25zdCB3aWR0aCA9IDUwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA1MDtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gLWhlaWdodDsgLy8gUGxhY2UgYWJvdmUgdGhlIGNhbnZhc1xuICAgICAgICBzdXBlcihjYW52YXMsIGFsaWVuU3JjLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBbGllbjsiXSwibmFtZXMiOlsiTW92YWJsZU9iamVjdHMiLCJBbGllbiIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiYWxpZW5TcmMiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJNYXRoIiwicmFuZG9tIiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/alien.js\n");

/***/ }),

/***/ "./src/scripts/asteroid.js":
/*!*********************************!*\
  !*** ./src/scripts/asteroid.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movableObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movableObjects.js */ \"./src/scripts/movableObjects.js\");\n\nclass Asteroid extends _movableObjects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(canvas, asteroidSrc) {\n    const width = 50;\n    const height = 50;\n    const x = Math.random() * (canvas.width - width);\n    const y = -height; // Place above the canvas\n    super(canvas, asteroidSrc, x, y, width, height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Asteroid);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hc3Rlcm9pZC5qcyIsIm1hcHBpbmdzIjoiOztBQUFpRDtBQUVqRCxNQUFNQyxRQUFRLFNBQVNELDBEQUFjO0VBQ2pDRSxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLFdBQVcsRUFBQztJQUM1QixNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNoQixNQUFNQyxNQUFNLEdBQUcsRUFBRTtJQUNqQixNQUFNQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsSUFBSU4sTUFBTSxDQUFDRSxLQUFLLEdBQUdBLEtBQUssQ0FBQztJQUNoRCxNQUFNSyxDQUFDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDLENBQUM7SUFDbkIsS0FBSyxDQUFDSCxNQUFNLEVBQUVDLFdBQVcsRUFBRUcsQ0FBQyxFQUFFRyxDQUFDLEVBQUVMLEtBQUssRUFBRUMsTUFBTSxDQUFDO0VBQ25EO0FBQ0o7QUFDQSwrREFBZUwsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlc2hvb3RvdXRqcy8uL3NyYy9zY3JpcHRzL2FzdGVyb2lkLmpzP2E3M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmFibGVPYmplY3RzIGZyb20gXCIuL21vdmFibGVPYmplY3RzLmpzXCI7XG5cbmNsYXNzIEFzdGVyb2lkIGV4dGVuZHMgTW92YWJsZU9iamVjdHN7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBhc3Rlcm9pZFNyYyl7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gNTA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwO1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSAtaGVpZ2h0OyAvLyBQbGFjZSBhYm92ZSB0aGUgY2FudmFzXG4gICAgICAgIHN1cGVyKGNhbnZhcywgYXN0ZXJvaWRTcmMsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFzdGVyb2lkOyJdLCJuYW1lcyI6WyJNb3ZhYmxlT2JqZWN0cyIsIkFzdGVyb2lkIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJhc3Rlcm9pZFNyYyIsIndpZHRoIiwiaGVpZ2h0IiwieCIsIk1hdGgiLCJyYW5kb20iLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/asteroid.js\n");

/***/ }),

/***/ "./src/scripts/movableObjects.js":
/*!***************************************!*\
  !*** ./src/scripts/movableObjects.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovableObjects {\n  constructor(canvas, imageSrc, x, y, width, height) {\n    this.canvas = canvas;\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.speed = 3;\n    this.icon = new Image();\n    this.icon.src = imageSrc;\n    this.ctx = this.canvas.getContext('2d');\n    this.keys = {};\n  }\n  updatePos() {\n    this.y += this.speed;\n  }\n  draw() {\n    this.updatePos();\n    this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovableObjects);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZhYmxlT2JqZWN0cy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsY0FBYyxDQUFDO0VBQ2pCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFO0lBQy9DLElBQUksQ0FBQ0wsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0UsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsR0FBR1IsUUFBUTtJQUN4QixJQUFJLENBQUNTLEdBQUcsR0FBRyxJQUFJLENBQUNWLE1BQU0sQ0FBQ1csVUFBVSxDQUFDLElBQUksQ0FBQztJQUN2QyxJQUFJLENBQUNDLElBQUksR0FBRyxDQUFDLENBQUM7RUFDbEI7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDVixDQUFDLElBQUksSUFBSSxDQUFDRyxLQUFLO0VBQ3hCO0VBRUFRLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0QsU0FBUyxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDSCxHQUFHLENBQUNLLFNBQVMsQ0FBQyxJQUFJLENBQUNSLElBQUksRUFBRSxJQUFJLENBQUNMLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztFQUMxRTtBQUNKO0FBRUEsK0RBQWVQLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZXNob290b3V0anMvLi9zcmMvc2NyaXB0cy9tb3ZhYmxlT2JqZWN0cy5qcz9hM2QwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmFibGVPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGltYWdlU3JjLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnNwZWVkID0gMztcbiAgICAgICAgdGhpcy5pY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaWNvbi5zcmMgPSBpbWFnZVNyYztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmtleXMgPSB7fTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3MoKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmljb24sIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZhYmxlT2JqZWN0czsiXSwibmFtZXMiOlsiTW92YWJsZU9iamVjdHMiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImltYWdlU3JjIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiY3R4IiwiZ2V0Q29udGV4dCIsImtleXMiLCJ1cGRhdGVQb3MiLCJkcmF3IiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/movableObjects.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(canvas, shipSrc, x, y, width, height) {\n    this.canvas = canvas;\n    this.x = x;\n    this.y = y;\n    this.height = height;\n    this.width = width;\n    this.icon = new Image();\n    this.icon.src = shipSrc;\n    this.ctx = this.canvas.getContext('2d');\n\n    // variables to keep track of the keyboard entry of the user:\n    this.keys = {};\n    // speed for the movements:\n    this.speed = 5;\n\n    //this event listener will work when pressed the key\n    document.addEventListener(\"keydown\", event => {\n      this.keys[event.key] = true;\n    });\n\n    //this event listener is when we release the key\n    document.addEventListener(\"keyup\", event => {\n      this.keys[event.key] = false;\n    });\n  }\n  updatePos() {\n    //this function will basically check if the keys is true(from the eventListener) then increase the speed \n    if (this.keys['a'] && this.x >= 0) {\n      this.x -= this.speed;\n    }\n    if (this.keys['d'] && this.x + this.width <= this.canvas.width) {\n      this.x += this.speed;\n    }\n    if (this.keys['w'] && this.y >= 0) {\n      this.y -= this.speed;\n    }\n    if (this.keys['s'] && this.y + this.height <= this.canvas.height) {\n      this.y += this.speed;\n    }\n  }\n  draw() {\n    // debugger\n    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.updatePos();\n    this.ctx.drawImage(this.icon, this.x, this.y, this.width, this.height);\n    // this.ctx.fillRect(this.x, this.y,this.height,this.width)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU0sQ0FBQztFQUN4QkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxLQUFLLEVBQUNDLE1BQU0sRUFBQztJQUM1QyxJQUFJLENBQUNMLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNFLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDRSxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDRCxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDRSxJQUFJLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsR0FBR1AsT0FBTztJQUN2QixJQUFJLENBQUNRLEdBQUcsR0FBRyxJQUFJLENBQUNULE1BQU0sQ0FBQ1UsVUFBVSxDQUFDLElBQUksQ0FBQzs7SUFFdkM7SUFDQSxJQUFJLENBQUNDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDZDtJQUNBLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7O0lBRWQ7SUFDQUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdDLEtBQUssSUFBSztNQUM1QyxJQUFJLENBQUNKLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxHQUFHLENBQUMsR0FBRyxJQUFJO0lBQy9CLENBQUMsQ0FBQzs7SUFFRjtJQUNBSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsS0FBSyxJQUFLO01BQzFDLElBQUksQ0FBQ0osSUFBSSxDQUFDSSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEtBQUs7SUFDaEMsQ0FBQyxDQUFDO0VBQ047RUFFQUMsU0FBU0EsQ0FBQSxFQUFFO0lBQ1A7SUFDQSxJQUFHLElBQUksQ0FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ1QsQ0FBQyxJQUFFLENBQUMsRUFBQztNQUMzQixJQUFJLENBQUNBLENBQUMsSUFBSSxJQUFJLENBQUNVLEtBQUs7SUFDeEI7SUFDQSxJQUFHLElBQUksQ0FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFLLElBQUksQ0FBQ1QsQ0FBQyxHQUFDLElBQUksQ0FBQ0UsS0FBSyxJQUFFLElBQUksQ0FBQ0osTUFBTSxDQUFDSSxLQUFNLEVBQUU7TUFDekQsSUFBSSxDQUFDRixDQUFDLElBQUksSUFBSSxDQUFDVSxLQUFLO0lBQ3hCO0lBQ0EsSUFBRyxJQUFJLENBQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNSLENBQUMsSUFBRSxDQUFDLEVBQUM7TUFDM0IsSUFBSSxDQUFDQSxDQUFDLElBQUksSUFBSSxDQUFDUyxLQUFLO0lBQ3hCO0lBQ0EsSUFBRyxJQUFJLENBQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUNSLENBQUMsR0FBQyxJQUFJLENBQUNFLE1BQU0sSUFBRSxJQUFJLENBQUNMLE1BQU0sQ0FBQ0ssTUFBTyxFQUFDO01BQzFELElBQUksQ0FBQ0YsQ0FBQyxJQUFJLElBQUksQ0FBQ1MsS0FBSztJQUN4QjtFQUNKO0VBRUFNLElBQUlBLENBQUEsRUFBRTtJQUNGO0lBQ0E7SUFDQSxJQUFJLENBQUNELFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQ1IsR0FBRyxDQUFDVSxTQUFTLENBQUMsSUFBSSxDQUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDdEU7RUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2VzaG9vdG91dGpzLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHNoaXBTcmMsIHgsIHksIHdpZHRoLGhlaWdodCl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pY29uLnNyYyA9IHNoaXBTcmM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHZhcmlhYmxlcyB0byBrZWVwIHRyYWNrIG9mIHRoZSBrZXlib2FyZCBlbnRyeSBvZiB0aGUgdXNlcjpcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgICAgIC8vIHNwZWVkIGZvciB0aGUgbW92ZW1lbnRzOlxuICAgICAgICB0aGlzLnNwZWVkID0gNTtcblxuICAgICAgICAvL3RoaXMgZXZlbnQgbGlzdGVuZXIgd2lsbCB3b3JrIHdoZW4gcHJlc3NlZCB0aGUga2V5XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmtleV0gPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3RoaXMgZXZlbnQgbGlzdGVuZXIgaXMgd2hlbiB3ZSByZWxlYXNlIHRoZSBrZXlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmtleV0gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zKCl7XG4gICAgICAgIC8vdGhpcyBmdW5jdGlvbiB3aWxsIGJhc2ljYWxseSBjaGVjayBpZiB0aGUga2V5cyBpcyB0cnVlKGZyb20gdGhlIGV2ZW50TGlzdGVuZXIpIHRoZW4gaW5jcmVhc2UgdGhlIHNwZWVkIFxuICAgICAgICBpZih0aGlzLmtleXNbJ2EnXSAmJiB0aGlzLng+PTApe1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5rZXlzWydkJ10gJiYgKHRoaXMueCt0aGlzLndpZHRoPD10aGlzLmNhbnZhcy53aWR0aCkgKXtcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMua2V5c1sndyddICYmIHRoaXMueT49MCl7XG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmtleXNbJ3MnXSAmJiAodGhpcy55K3RoaXMuaGVpZ2h0PD10aGlzLmNhbnZhcy5oZWlnaHQpKXtcbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmljb24sIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LHRoaXMuaGVpZ2h0LHRoaXMud2lkdGgpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsInNoaXBTcmMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaWNvbiIsIkltYWdlIiwic3JjIiwiY3R4IiwiZ2V0Q29udGV4dCIsImtleXMiLCJzcGVlZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwidXBkYXRlUG9zIiwiZHJhdyIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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