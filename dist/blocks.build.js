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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_data__);\n/**\n * BLOCK: story-slider\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\nvar RichText = wp.blockEditor.RichText;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar ALLOWED_BLOCKS = ['cgb/block-story-slider-slide'];\nvar TEMPLATE = [['cgb/block-story-slider-slide', { placeholder: 'Slide' }]];\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n/**\n* Registering Parent for the Story Slider block\n*/\nregisterBlockType('cgb/block-story-slider', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Story Slider'), // Block title.\n\ticon: 'slides', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\tslideNavTitles: {\n\t\t\ttype: 'array',\n\t\t\tdefault: []\n\t\t}\n\t},\n\tkeywords: [__('Story Slider'), __('Carousel')],\n\n\t/**\n  * \n  * Edit function for Parent Slider Block\n  * \n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\n\tedit: function edit(props) {\n\t\t//console.info(wp.data.select( 'core/block-editor' ).getBlocks()[0].innerBlocks[0].attributes.slideNavTitle);\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar slideNavTitles = attributes.slideNavTitles;\n\n\n\t\tvar buildNavArray = function buildNavArray() {\n\t\t\tvar parentBlockID = props.clientId;\n\t\t\tvar parentIndex = wp.data.select('core/block-editor').getBlockIndex(parentBlockID);\n\n\t\t\tvar _useSelect = Object(__WEBPACK_IMPORTED_MODULE_3__wordpress_data__[\"useSelect\"])(function (select) {\n\t\t\t\treturn {\n\t\t\t\t\tinnerBlockCount: select('core/block-editor').getBlockCount(parentBlockID)\n\t\t\t\t};\n\t\t\t}),\n\t\t\t    innerBlockCount = _useSelect.innerBlockCount;\n\n\t\t\tvar navItems = [];\n\n\t\t\tfor (var block = 0; block < innerBlockCount; block++) {\n\t\t\t\tvar navItem = wp.data.select('core/block-editor').getBlocks()[parentIndex].innerBlocks[block].attributes.slideNavTitle;\n\t\t\t\tnavItems.push(navItem);\n\t\t\t}\n\t\t\tif (hasSelectedInnerBlock(props)) {\n\t\t\t\t//wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( [parentBlockID], { slideNavTitles : navItems } );\t\t\t\t\n\t\t\t\tvar addTitle = function addTitle(newTitle) {\n\t\t\t\t\treturn setAttributes({ slideNavTitles: newTitle });\n\t\t\t\t};\n\t\t\t\taddTitle(navItems);\n\t\t\t}\n\t\t};\n\t\tbuildNavArray();\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Story Slider Block'\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"], {\n\t\t\t\tallowedBlocks: ALLOWED_BLOCKS,\n\t\t\t\ttemplate: TEMPLATE,\n\t\t\t\trenderAppender: function renderAppender() {\n\t\t\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"].DefaultBlockAppender, null);\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\n\t/**\n  * \n  * Save function for Parent Slider Block\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\t// const {\n\t\t// \tattributes: { slideNavTitles }\n\t\t// } = props;\n\t\tvar attributes = props.attributes;\n\t\tconsole.info(attributes);\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'story-slider-nav' },\n\t\t\t\t'Slider Navigation'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'story-slider' },\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"].Content, null)\n\t\t\t)\n\t\t);\n\t}\n}); //end parent Slider Block\n\n/**********************************************************\n * Registering Child Innerblock for the Story Slider block\n **********************************************************/\nregisterBlockType('cgb/block-story-slider-slide', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Story Slider Slide'), // Block title.\n\ticon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tparent: ['cgb/block-story-slider'],\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\tslideNavTitle: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: '.slide-nav-title'\n\t\t}\n\t},\n\tkeywords: [__('Slide'), __('Add slide')],\n\n\t/**\n  * \n  * Edit function for Child Slide Block\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t//console.info(props);\n\t\tvar slideNavTitle = props.attributes.slideNavTitle,\n\t\t    setAttributes = props.setAttributes;\n\n\n\t\tvar onChangeNavTitle = function onChangeNavTitle(newNavTitle) {\n\t\t\tsetAttributes({ slideNavTitle: newNavTitle });\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t'Slide'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'slide-nav-title' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ 'class': 'slide-nav-title_label ' },\n\t\t\t\t\t'Slide Navigation Title: '\n\t\t\t\t),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tclassName: \"slide-nav-title_input\",\n\t\t\t\t\tvalue: slideNavTitle,\n\t\t\t\t\tonChange: onChangeNavTitle,\n\t\t\t\t\tplaceholder: 'Add slide navigation title'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"], null)\n\t\t);\n\t},\n\n\t/**\n  *\n  * Save function for Child Slide Block\n  * \n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\tvar slideNavTitle = props.attributes.slideNavTitle;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'story-slider_slide' },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ className: 'slide-nav-title' },\n\t\t\t\twp.element.createElement(RichText.Content, { value: slideNavTitle })\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"].Content, null)\n\t\t);\n\t}\n});\n\n//function to check if innerblocks have been changed\nfunction hasSelectedInnerBlock(props) {\n\tvar select = wp.data.select('core/block-editor');\n\tvar selected = select.getBlockSelectionStart();\n\tvar inner = select.getBlock(props.clientId).innerBlocks;\n\tfor (var i = 0; i < inner.length; i++) {\n\t\tif (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHN0b3J5LXNsaWRlclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG52YXIgUmljaFRleHQgPSB3cC5ibG9ja0VkaXRvci5SaWNoVGV4dDtcbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBBTExPV0VEX0JMT0NLUyA9IFsnY2diL2Jsb2NrLXN0b3J5LXNsaWRlci1zbGlkZSddO1xudmFyIFRFTVBMQVRFID0gW1snY2diL2Jsb2NrLXN0b3J5LXNsaWRlci1zbGlkZScsIHsgcGxhY2Vob2xkZXI6ICdTbGlkZScgfV1dO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG4vKipcbiogUmVnaXN0ZXJpbmcgUGFyZW50IGZvciB0aGUgU3RvcnkgU2xpZGVyIGJsb2NrXG4qL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1zdG9yeS1zbGlkZXInLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1N0b3J5IFNsaWRlcicpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3NsaWRlcycsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0YXR0cmlidXRlczoge1xuXHRcdHNsaWRlTmF2VGl0bGVzOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0ZGVmYXVsdDogW11cblx0XHR9XG5cdH0sXG5cdGtleXdvcmRzOiBbX18oJ1N0b3J5IFNsaWRlcicpLCBfXygnQ2Fyb3VzZWwnKV0sXG5cblx0LyoqXG4gICogXG4gICogRWRpdCBmdW5jdGlvbiBmb3IgUGFyZW50IFNsaWRlciBCbG9ja1xuICAqIFxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdC8vY29uc29sZS5pbmZvKHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKClbMF0uaW5uZXJCbG9ja3NbMF0uYXR0cmlidXRlcy5zbGlkZU5hdlRpdGxlKTtcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXHRcdHZhciBzbGlkZU5hdlRpdGxlcyA9IGF0dHJpYnV0ZXMuc2xpZGVOYXZUaXRsZXM7XG5cblxuXHRcdHZhciBidWlsZE5hdkFycmF5ID0gZnVuY3Rpb24gYnVpbGROYXZBcnJheSgpIHtcblx0XHRcdHZhciBwYXJlbnRCbG9ja0lEID0gcHJvcHMuY2xpZW50SWQ7XG5cdFx0XHR2YXIgcGFyZW50SW5kZXggPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRCbG9ja0luZGV4KHBhcmVudEJsb2NrSUQpO1xuXG5cdFx0XHR2YXIgX3VzZVNlbGVjdCA9IHVzZVNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aW5uZXJCbG9ja0NvdW50OiBzZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJykuZ2V0QmxvY2tDb3VudChwYXJlbnRCbG9ja0lEKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSksXG5cdFx0XHQgICAgaW5uZXJCbG9ja0NvdW50ID0gX3VzZVNlbGVjdC5pbm5lckJsb2NrQ291bnQ7XG5cblx0XHRcdHZhciBuYXZJdGVtcyA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBibG9jayA9IDA7IGJsb2NrIDwgaW5uZXJCbG9ja0NvdW50OyBibG9jaysrKSB7XG5cdFx0XHRcdHZhciBuYXZJdGVtID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJykuZ2V0QmxvY2tzKClbcGFyZW50SW5kZXhdLmlubmVyQmxvY2tzW2Jsb2NrXS5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGU7XG5cdFx0XHRcdG5hdkl0ZW1zLnB1c2gobmF2SXRlbSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaGFzU2VsZWN0ZWRJbm5lckJsb2NrKHByb3BzKSkge1xuXHRcdFx0XHQvL3dwLmRhdGEuZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIFtwYXJlbnRCbG9ja0lEXSwgeyBzbGlkZU5hdlRpdGxlcyA6IG5hdkl0ZW1zIH0gKTtcdFx0XHRcdFxuXHRcdFx0XHR2YXIgYWRkVGl0bGUgPSBmdW5jdGlvbiBhZGRUaXRsZShuZXdUaXRsZSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgc2xpZGVOYXZUaXRsZXM6IG5ld1RpdGxlIH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRhZGRUaXRsZShuYXZJdGVtcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRidWlsZE5hdkFycmF5KCk7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdTdG9yeSBTbGlkZXIgQmxvY2snXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7XG5cdFx0XHRcdGFsbG93ZWRCbG9ja3M6IEFMTE9XRURfQkxPQ0tTLFxuXHRcdFx0XHR0ZW1wbGF0ZTogVEVNUExBVEUsXG5cdFx0XHRcdHJlbmRlckFwcGVuZGVyOiBmdW5jdGlvbiByZW5kZXJBcHBlbmRlcigpIHtcblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkRlZmF1bHRCbG9ja0FwcGVuZGVyLCBudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFxuICAqIFNhdmUgZnVuY3Rpb24gZm9yIFBhcmVudCBTbGlkZXIgQmxvY2tcbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0Ly8gY29uc3Qge1xuXHRcdC8vIFx0YXR0cmlidXRlczogeyBzbGlkZU5hdlRpdGxlcyB9XG5cdFx0Ly8gfSA9IHByb3BzO1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblx0XHRjb25zb2xlLmluZm8oYXR0cmlidXRlcyk7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdzdG9yeS1zbGlkZXItbmF2JyB9LFxuXHRcdFx0XHQnU2xpZGVyIE5hdmlnYXRpb24nXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdzdG9yeS1zbGlkZXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pOyAvL2VuZCBwYXJlbnQgU2xpZGVyIEJsb2NrXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBSZWdpc3RlcmluZyBDaGlsZCBJbm5lcmJsb2NrIGZvciB0aGUgU3RvcnkgU2xpZGVyIGJsb2NrXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stc3Rvcnktc2xpZGVyLXNsaWRlJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdTdG9yeSBTbGlkZXIgU2xpZGUnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICd3ZWxjb21lLWFkZC1wYWdlJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRwYXJlbnQ6IFsnY2diL2Jsb2NrLXN0b3J5LXNsaWRlciddLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0c2xpZGVOYXZUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdodG1sJyxcblx0XHRcdHNlbGVjdG9yOiAnLnNsaWRlLW5hdi10aXRsZSdcblx0XHR9XG5cdH0sXG5cdGtleXdvcmRzOiBbX18oJ1NsaWRlJyksIF9fKCdBZGQgc2xpZGUnKV0sXG5cblx0LyoqXG4gICogXG4gICogRWRpdCBmdW5jdGlvbiBmb3IgQ2hpbGQgU2xpZGUgQmxvY2tcbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvL2NvbnNvbGUuaW5mbyhwcm9wcyk7XG5cdFx0dmFyIHNsaWRlTmF2VGl0bGUgPSBwcm9wcy5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGUsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cblx0XHR2YXIgb25DaGFuZ2VOYXZUaXRsZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlTmF2VGl0bGUobmV3TmF2VGl0bGUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzbGlkZU5hdlRpdGxlOiBuZXdOYXZUaXRsZSB9KTtcblx0XHR9O1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2gyJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1NsaWRlJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgJ2NsYXNzJzogJ3NsaWRlLW5hdi10aXRsZScgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0eyAnY2xhc3MnOiAnc2xpZGUtbmF2LXRpdGxlX2xhYmVsICcgfSxcblx0XHRcdFx0XHQnU2xpZGUgTmF2aWdhdGlvbiBUaXRsZTogJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0XHRjbGFzc05hbWU6IFwic2xpZGUtbmF2LXRpdGxlX2lucHV0XCIsXG5cdFx0XHRcdFx0dmFsdWU6IHNsaWRlTmF2VGl0bGUsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlTmF2VGl0bGUsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdBZGQgc2xpZGUgbmF2aWdhdGlvbiB0aXRsZSdcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIG51bGwpXG5cdFx0KTtcblx0fSxcblxuXHQvKipcbiAgKlxuICAqIFNhdmUgZnVuY3Rpb24gZm9yIENoaWxkIFNsaWRlIEJsb2NrXG4gICogXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgc2xpZGVOYXZUaXRsZSA9IHByb3BzLmF0dHJpYnV0ZXMuc2xpZGVOYXZUaXRsZTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnc3Rvcnktc2xpZGVyX3NsaWRlJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2xpZGUtbmF2LXRpdGxlJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwgeyB2YWx1ZTogc2xpZGVOYXZUaXRsZSB9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG4vL2Z1bmN0aW9uIHRvIGNoZWNrIGlmIGlubmVyYmxvY2tzIGhhdmUgYmVlbiBjaGFuZ2VkXG5mdW5jdGlvbiBoYXNTZWxlY3RlZElubmVyQmxvY2socHJvcHMpIHtcblx0dmFyIHNlbGVjdCA9IHdwLmRhdGEuc2VsZWN0KCdjb3JlL2Jsb2NrLWVkaXRvcicpO1xuXHR2YXIgc2VsZWN0ZWQgPSBzZWxlY3QuZ2V0QmxvY2tTZWxlY3Rpb25TdGFydCgpO1xuXHR2YXIgaW5uZXIgPSBzZWxlY3QuZ2V0QmxvY2socHJvcHMuY2xpZW50SWQpLmlubmVyQmxvY2tzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGlubmVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGlubmVyW2ldLmNsaWVudElkID09PSBzZWxlY3RlZCB8fCBpbm5lcltpXS5pbm5lckJsb2Nrcy5sZW5ndGggJiYgaGFzU2VsZWN0ZWRJbm5lckJsb2NrKGlubmVyW2ldKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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
/* 11 */,
/* 12 */
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: useSelect */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ })
/******/ ]);