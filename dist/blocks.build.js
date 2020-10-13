/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_parent_block_js__ = __webpack_require__(/*! ./slider-parent-block.js */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_child_block_js__ = __webpack_require__(/*! ./slider-child-block.js */ 14);\n/**\n * BLOCK: story-slider\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n//  Import JS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHN0b3J5LXNsaWRlclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8vICBJbXBvcnQgSlMuXG5pbXBvcnQgJy4vc2xpZGVyLXBhcmVudC1ibG9jay5qcyc7XG5pbXBvcnQgJy4vc2xpZGVyLWNoaWxkLWJsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InnerBlocks */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: TextControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 12 */
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: useSelect */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),
/* 13 */
/*!******************************************!*\
  !*** ./src/block/slider-parent-block.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_data__);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar RawHTML = wp.element.RawHTML;\n\nvar ALLOWED_BLOCKS = ['cgb/block-story-slider-slide'];\nvar TEMPLATE = [['cgb/block-story-slider-slide', { placeholder: 'Slide' }]];\n/**\n * Register: Story Slider Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n/**\n* Registering Parent for the Story Slider block\n*/\nregisterBlockType('cgb/block-story-slider', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Story Slider'), // Block title.\n\ticon: 'slides', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\tslideNavTitles: {\n\t\t\ttype: 'array',\n\t\t\tdefault: []\n\t\t}\n\t},\n\tkeywords: [__('Story Slider'), __('Carousel')],\n\n\t/**\n  * \n  * Edit function for Parent Slider Block\n  * \n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\n\tedit: function edit(props) {\n\t\t//console.info(wp.data.select( 'core/block-editor' ).getBlocks()[0].innerBlocks[0].attributes.slideNavTitle);\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar slideNavTitles = attributes.slideNavTitles;\n\n\n\t\tvar buildNavArray = function buildNavArray() {\n\t\t\tvar parentBlockID = props.clientId;\n\t\t\tvar parentIndex = wp.data.select('core/block-editor').getBlockIndex(parentBlockID);\n\n\t\t\tvar _useSelect = Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_data__[\"useSelect\"])(function (select) {\n\t\t\t\treturn {\n\t\t\t\t\tinnerBlockCount: select('core/block-editor').getBlockCount(parentBlockID)\n\t\t\t\t};\n\t\t\t}),\n\t\t\t    innerBlockCount = _useSelect.innerBlockCount;\n\n\t\t\tvar navItems = [];\n\n\t\t\tfor (var block = 0; block < innerBlockCount; block++) {\n\t\t\t\tvar navItem = wp.data.select('core/block-editor').getBlocks()[parentIndex].innerBlocks[block].attributes.slideNavTitle;\n\t\t\t\tnavItems.push(navItem);\n\t\t\t}\n\t\t\tif (hasSelectedInnerBlock(props)) {\n\t\t\t\t//wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( [parentBlockID], { slideNavTitles : navItems } );\t\t\t\t\n\t\t\t\tvar addTitle = function addTitle(newTitle) {\n\t\t\t\t\treturn setAttributes({ slideNavTitles: newTitle });\n\t\t\t\t};\n\t\t\t\taddTitle(navItems);\n\t\t\t}\n\t\t};\n\t\tbuildNavArray();\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Story Slider Block'\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"InnerBlocks\"], {\n\t\t\t\tallowedBlocks: ALLOWED_BLOCKS,\n\t\t\t\ttemplate: TEMPLATE,\n\t\t\t\trenderAppender: function renderAppender() {\n\t\t\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"InnerBlocks\"].DefaultBlockAppender, null);\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\n\t/**\n  * \n  * Save function for Parent Slider Block\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\tvar slideNavTitles = props.attributes.slideNavTitles;\n\n\t\tconsole.info(slideNavTitles);\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'story-slider-nav' },\n\t\t\t\tslideNavTitles.map(function (title) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'story-slider-nav_title' },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\tRawHTML,\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'story-slider' },\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"InnerBlocks\"].Content, null)\n\t\t\t)\n\t\t);\n\t}\n}); //end parent Slider Block\n\n//function to check if innerblocks have been changed\nfunction hasSelectedInnerBlock(props) {\n\t//Known bugs: This function causes a bug where if input field is currently selected\n\t// and user clicks \"save,\" a message comes up asking if user wants to leave without saving\n\t// also, when changing the text in the input field, the changes do not get saved to attribute\n\t// unless another block or field is selected after change is made\n\t// will need to re-write this to fix both of these bugs\n\tvar select = wp.data.select('core/block-editor');\n\tvar selected = select.getBlockSelectionStart();\n\tvar inner = select.getBlock(props.clientId).innerBlocks;\n\tfor (var i = 0; i < inner.length; i++) {\n\t\tif (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svc2xpZGVyLXBhcmVudC1ibG9jay5qcz9kYjVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyQmxvY2tzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIFJhd0hUTUwgPSB3cC5lbGVtZW50LlJhd0hUTUw7XG5cbnZhciBBTExPV0VEX0JMT0NLUyA9IFsnY2diL2Jsb2NrLXN0b3J5LXNsaWRlci1zbGlkZSddO1xudmFyIFRFTVBMQVRFID0gW1snY2diL2Jsb2NrLXN0b3J5LXNsaWRlci1zbGlkZScsIHsgcGxhY2Vob2xkZXI6ICdTbGlkZScgfV1dO1xuLyoqXG4gKiBSZWdpc3RlcjogU3RvcnkgU2xpZGVyIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbi8qKlxuKiBSZWdpc3RlcmluZyBQYXJlbnQgZm9yIHRoZSBTdG9yeSBTbGlkZXIgYmxvY2tcbiovXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLXN0b3J5LXNsaWRlcicsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnU3RvcnkgU2xpZGVyJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2xpZGVzJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2xheW91dCcsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0c2xpZGVOYXZUaXRsZXM6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRkZWZhdWx0OiBbXVxuXHRcdH1cblx0fSxcblx0a2V5d29yZHM6IFtfXygnU3RvcnkgU2xpZGVyJyksIF9fKCdDYXJvdXNlbCcpXSxcblxuXHQvKipcbiAgKiBcbiAgKiBFZGl0IGZ1bmN0aW9uIGZvciBQYXJlbnQgU2xpZGVyIEJsb2NrXG4gICogXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0Ly9jb25zb2xlLmluZm8od3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKVswXS5pbm5lckJsb2Nrc1swXS5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGUpO1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cdFx0dmFyIHNsaWRlTmF2VGl0bGVzID0gYXR0cmlidXRlcy5zbGlkZU5hdlRpdGxlcztcblxuXG5cdFx0dmFyIGJ1aWxkTmF2QXJyYXkgPSBmdW5jdGlvbiBidWlsZE5hdkFycmF5KCkge1xuXHRcdFx0dmFyIHBhcmVudEJsb2NrSUQgPSBwcm9wcy5jbGllbnRJZDtcblx0XHRcdHZhciBwYXJlbnRJbmRleCA9IHdwLmRhdGEuc2VsZWN0KCdjb3JlL2Jsb2NrLWVkaXRvcicpLmdldEJsb2NrSW5kZXgocGFyZW50QmxvY2tJRCk7XG5cblx0XHRcdHZhciBfdXNlU2VsZWN0ID0gdXNlU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpbm5lckJsb2NrQ291bnQ6IHNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRCbG9ja0NvdW50KHBhcmVudEJsb2NrSUQpXG5cdFx0XHRcdH07XG5cdFx0XHR9KSxcblx0XHRcdCAgICBpbm5lckJsb2NrQ291bnQgPSBfdXNlU2VsZWN0LmlubmVyQmxvY2tDb3VudDtcblxuXHRcdFx0dmFyIG5hdkl0ZW1zID0gW107XG5cblx0XHRcdGZvciAodmFyIGJsb2NrID0gMDsgYmxvY2sgPCBpbm5lckJsb2NrQ291bnQ7IGJsb2NrKyspIHtcblx0XHRcdFx0dmFyIG5hdkl0ZW0gPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRCbG9ja3MoKVtwYXJlbnRJbmRleF0uaW5uZXJCbG9ja3NbYmxvY2tdLmF0dHJpYnV0ZXMuc2xpZGVOYXZUaXRsZTtcblx0XHRcdFx0bmF2SXRlbXMucHVzaChuYXZJdGVtKTtcblx0XHRcdH1cblx0XHRcdGlmIChoYXNTZWxlY3RlZElubmVyQmxvY2socHJvcHMpKSB7XG5cdFx0XHRcdC8vd3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggW3BhcmVudEJsb2NrSURdLCB7IHNsaWRlTmF2VGl0bGVzIDogbmF2SXRlbXMgfSApO1x0XHRcdFx0XG5cdFx0XHRcdHZhciBhZGRUaXRsZSA9IGZ1bmN0aW9uIGFkZFRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBzbGlkZU5hdlRpdGxlczogbmV3VGl0bGUgfSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdGFkZFRpdGxlKG5hdkl0ZW1zKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGJ1aWxkTmF2QXJyYXkoKTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1N0b3J5IFNsaWRlciBCbG9jaydcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0YWxsb3dlZEJsb2NrczogQUxMT1dFRF9CTE9DS1MsXG5cdFx0XHRcdHRlbXBsYXRlOiBURU1QTEFURSxcblx0XHRcdFx0cmVuZGVyQXBwZW5kZXI6IGZ1bmN0aW9uIHJlbmRlckFwcGVuZGVyKCkge1xuXHRcdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuRGVmYXVsdEJsb2NrQXBwZW5kZXIsIG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogXG4gICogU2F2ZSBmdW5jdGlvbiBmb3IgUGFyZW50IFNsaWRlciBCbG9ja1xuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgc2xpZGVOYXZUaXRsZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGVzO1xuXG5cdFx0Y29uc29sZS5pbmZvKHNsaWRlTmF2VGl0bGVzKTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0b3J5LXNsaWRlci1uYXYnIH0sXG5cdFx0XHRcdHNsaWRlTmF2VGl0bGVzLm1hcChmdW5jdGlvbiAodGl0bGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0b3J5LXNsaWRlci1uYXZfdGl0bGUnIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFJhd0hUTUwsXG5cdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdHRpdGxlXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0b3J5LXNsaWRlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7IC8vZW5kIHBhcmVudCBTbGlkZXIgQmxvY2tcblxuLy9mdW5jdGlvbiB0byBjaGVjayBpZiBpbm5lcmJsb2NrcyBoYXZlIGJlZW4gY2hhbmdlZFxuZnVuY3Rpb24gaGFzU2VsZWN0ZWRJbm5lckJsb2NrKHByb3BzKSB7XG5cdC8vS25vd24gYnVnczogVGhpcyBmdW5jdGlvbiBjYXVzZXMgYSBidWcgd2hlcmUgaWYgaW5wdXQgZmllbGQgaXMgY3VycmVudGx5IHNlbGVjdGVkXG5cdC8vIGFuZCB1c2VyIGNsaWNrcyBcInNhdmUsXCIgYSBtZXNzYWdlIGNvbWVzIHVwIGFza2luZyBpZiB1c2VyIHdhbnRzIHRvIGxlYXZlIHdpdGhvdXQgc2F2aW5nXG5cdC8vIGFsc28sIHdoZW4gY2hhbmdpbmcgdGhlIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkLCB0aGUgY2hhbmdlcyBkbyBub3QgZ2V0IHNhdmVkIHRvIGF0dHJpYnV0ZVxuXHQvLyB1bmxlc3MgYW5vdGhlciBibG9jayBvciBmaWVsZCBpcyBzZWxlY3RlZCBhZnRlciBjaGFuZ2UgaXMgbWFkZVxuXHQvLyB3aWxsIG5lZWQgdG8gcmUtd3JpdGUgdGhpcyB0byBmaXggYm90aCBvZiB0aGVzZSBidWdzXG5cdHZhciBzZWxlY3QgPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKTtcblx0dmFyIHNlbGVjdGVkID0gc2VsZWN0LmdldEJsb2NrU2VsZWN0aW9uU3RhcnQoKTtcblx0dmFyIGlubmVyID0gc2VsZWN0LmdldEJsb2NrKHByb3BzLmNsaWVudElkKS5pbm5lckJsb2Nrcztcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbm5lci5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChpbm5lcltpXS5jbGllbnRJZCA9PT0gc2VsZWN0ZWQgfHwgaW5uZXJbaV0uaW5uZXJCbG9ja3MubGVuZ3RoICYmIGhhc1NlbGVjdGVkSW5uZXJCbG9jayhpbm5lcltpXSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3NsaWRlci1wYXJlbnQtYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*****************************************!*\
  !*** ./src/block/slider-child-block.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar RawHTML = wp.element.RawHTML;\n\n/**********************************************************\n * Registering Child Innerblock for the Story Slider block\n **********************************************************/\n\nregisterBlockType('cgb/block-story-slider-slide', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Story Slider Slide'), // Block title.\n\ticon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tparent: ['cgb/block-story-slider'],\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\tslideNavTitle: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: '.slide-nav-title'\n\t\t}\n\t},\n\tkeywords: [__('Slide'), __('Add slide')],\n\n\t/**\n  * \n  * Edit function for Child Slide Block\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t//console.info(props);\n\t\tvar slideNavTitle = props.attributes.slideNavTitle,\n\t\t    setAttributes = props.setAttributes;\n\n\n\t\tvar onChangeNavTitle = function onChangeNavTitle(newNavTitle) {\n\t\t\tsetAttributes({ slideNavTitle: newNavTitle });\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t'Slide'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'slide-nav-title' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ 'class': 'slide-nav-title_label ' },\n\t\t\t\t\t'Slide Navigation Title: '\n\t\t\t\t),\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"TextControl\"], {\n\t\t\t\t\tclassName: \"slide-nav-title_input\",\n\t\t\t\t\tvalue: slideNavTitle,\n\t\t\t\t\tonChange: onChangeNavTitle,\n\t\t\t\t\tplaceholder: 'Add slide navigation title',\n\t\t\t\t\ttype: 'text'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"InnerBlocks\"], null)\n\t\t);\n\t},\n\n\t/**\n  *\n  * Save function for Child Slide Block\n  * \n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\tvar slideNavTitle = props.attributes.slideNavTitle;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'story-slider_slide' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'slide-nav-title' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tRawHTML,\n\t\t\t\t\tnull,\n\t\t\t\t\tslideNavTitle\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"InnerBlocks\"].Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svc2xpZGVyLWNoaWxkLWJsb2NrLmpzP2QwZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBSYXdIVE1MID0gd3AuZWxlbWVudC5SYXdIVE1MO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUmVnaXN0ZXJpbmcgQ2hpbGQgSW5uZXJibG9jayBmb3IgdGhlIFN0b3J5IFNsaWRlciBibG9ja1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stc3Rvcnktc2xpZGVyLXNsaWRlJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdTdG9yeSBTbGlkZXIgU2xpZGUnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICd3ZWxjb21lLWFkZC1wYWdlJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRwYXJlbnQ6IFsnY2diL2Jsb2NrLXN0b3J5LXNsaWRlciddLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0c2xpZGVOYXZUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdodG1sJyxcblx0XHRcdHNlbGVjdG9yOiAnLnNsaWRlLW5hdi10aXRsZSdcblx0XHR9XG5cdH0sXG5cdGtleXdvcmRzOiBbX18oJ1NsaWRlJyksIF9fKCdBZGQgc2xpZGUnKV0sXG5cblx0LyoqXG4gICogXG4gICogRWRpdCBmdW5jdGlvbiBmb3IgQ2hpbGQgU2xpZGUgQmxvY2tcbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvL2NvbnNvbGUuaW5mbyhwcm9wcyk7XG5cdFx0dmFyIHNsaWRlTmF2VGl0bGUgPSBwcm9wcy5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cblx0XHR2YXIgb25DaGFuZ2VOYXZUaXRsZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlTmF2VGl0bGUobmV3TmF2VGl0bGUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzbGlkZU5hdlRpdGxlOiBuZXdOYXZUaXRsZSB9KTtcblx0XHR9O1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2gyJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1NsaWRlJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgJ2NsYXNzJzogJ3NsaWRlLW5hdi10aXRsZScgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0eyAnY2xhc3MnOiAnc2xpZGUtbmF2LXRpdGxlX2xhYmVsICcgfSxcblx0XHRcdFx0XHQnU2xpZGUgTmF2aWdhdGlvbiBUaXRsZTogJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0XHRjbGFzc05hbWU6IFwic2xpZGUtbmF2LXRpdGxlX2lucHV0XCIsXG5cdFx0XHRcdFx0dmFsdWU6IHNsaWRlTmF2VGl0bGUsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlTmF2VGl0bGUsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdBZGQgc2xpZGUgbmF2aWdhdGlvbiB0aXRsZScsXG5cdFx0XHRcdFx0dHlwZTogJ3RleHQnXG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICpcbiAgKiBTYXZlIGZ1bmN0aW9uIGZvciBDaGlsZCBTbGlkZSBCbG9ja1xuICAqIFxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIHNsaWRlTmF2VGl0bGUgPSBwcm9wcy5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGU7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ3N0b3J5LXNsaWRlcl9zbGlkZScgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2xpZGUtbmF2LXRpdGxlJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0UmF3SFRNTCxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHNsaWRlTmF2VGl0bGVcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3NsaWRlci1jaGlsZC1ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ })
/******/ ]);