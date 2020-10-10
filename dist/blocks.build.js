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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_data__);\n/**\n * BLOCK: story-slider\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\nvar RichText = wp.blockEditor.RichText;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar ALLOWED_BLOCKS = ['cgb/block-story-slider-slide'];\nvar TEMPLATE = [['cgb/block-story-slider-slide', { placeholder: 'Slide' }]];\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n/**\n* Registering Parent for the Story Slider block\n*/\nregisterBlockType('cgb/block-story-slider', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Story Slider'), // Block title.\n\ticon: 'slides', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\tslideNavTitles: {\n\t\t\ttype: 'array',\n\t\t\tdefault: []\n\t\t}\n\t},\n\tkeywords: [__('Story Slider'), __('Carousel')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\n\tedit: function edit(props) {\n\t\t//console.info(wp.data.select( 'core/block-editor' ).getBlocks()[0].innerBlocks[0].attributes.slideNavTitle);\n\t\tvar slideNavTitles = props.attributes.slideNavTitles,\n\t\t    setAttributes = props.setAttributes;\n\n\n\t\tvar buildNavArray = function buildNavArray() {\n\t\t\tvar parentBlockID = props.clientId;\n\t\t\tvar parentIndex = wp.data.select('core/block-editor').getBlockIndex(parentBlockID);\n\n\t\t\tvar _useSelect = Object(__WEBPACK_IMPORTED_MODULE_3__wordpress_data__[\"useSelect\"])(function (select) {\n\t\t\t\treturn {\n\t\t\t\t\tinnerBlockCount: select('core/block-editor').getBlockCount(parentBlockID)\n\t\t\t\t};\n\t\t\t}),\n\t\t\t    innerBlockCount = _useSelect.innerBlockCount;\n\n\t\t\tvar navItems = [];\n\n\t\t\tfor (var block = 0; block < innerBlockCount; block++) {\n\t\t\t\tvar navItem = wp.data.select('core/block-editor').getBlocks()[parentIndex].innerBlocks[block].attributes.slideNavTitle;\n\t\t\t\tnavItems.push(navItem);\n\t\t\t}\n\t\t\tif (hasSelectedInnerBlock(props)) {\n\t\t\t\tconsole.log(navItems);\n\t\t\t\twp.data.dispatch('core/block-editor').updateBlockAttributes([parentBlockID], { slideNavTitles: navItems });\n\t\t\t}\n\t\t};\n\t\tbuildNavArray();\n\t\tconsole.info(props);\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Story Slider Block'\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"], {\n\t\t\t\tallowedBlocks: ALLOWED_BLOCKS,\n\t\t\t\ttemplate: TEMPLATE,\n\t\t\t\trenderAppender: function renderAppender() {\n\t\t\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"].DefaultBlockAppender, null);\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'story-slider-nav' },\n\t\t\t\t'Slider Navigation'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'story-slider' },\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"].Content, null)\n\t\t\t)\n\t\t);\n\t}\n}); //end parent Slider Block\n\n/**\n * Registering Child Innerblock for the Story Slider block\n */\nregisterBlockType('cgb/block-story-slider-slide', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Story Slider Slide'), // Block title.\n\ticon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tparent: ['cgb/block-story-slider'],\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tattributes: {\n\t\tslideNavTitle: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: '.slide-nav-title'\n\t\t}\n\t},\n\tkeywords: [__('Slide'), __('Add slide')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t//console.info(props);\n\t\tvar slideNavTitle = props.attributes.slideNavTitle,\n\t\t    setAttributes = props.setAttributes;\n\n\n\t\tvar onChangeNavTitle = function onChangeNavTitle(newNavTitle) {\n\t\t\tsetAttributes({ slideNavTitle: newNavTitle });\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t'Slide'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'slide-nav-title' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ 'class': 'slide-nav-title_label ' },\n\t\t\t\t\t'Slide Navigation Title: '\n\t\t\t\t),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tclassName: \"slide-nav-title_input\",\n\t\t\t\t\tvalue: slideNavTitle,\n\t\t\t\t\tonChange: onChangeNavTitle,\n\t\t\t\t\tplaceholder: 'Add slide navigation title'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"], null)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\tvar slideNavTitle = props.attributes.slideNavTitle;\n\t\t//console.info(props);\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'story-slider_slide' },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ className: 'slide-nav-title' },\n\t\t\t\twp.element.createElement(RichText.Content, { value: slideNavTitle })\n\t\t\t),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"].Content, null)\n\t\t);\n\t}\n});\n\n//function to check if innerblocks have been changed\nfunction hasSelectedInnerBlock(props) {\n\tvar select = wp.data.select('core/block-editor');\n\tvar selected = select.getBlockSelectionStart();\n\tvar inner = select.getBlock(props.clientId).innerBlocks;\n\tfor (var i = 0; i < inner.length; i++) {\n\t\tif (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHN0b3J5LXNsaWRlclxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG52YXIgUmljaFRleHQgPSB3cC5ibG9ja0VkaXRvci5SaWNoVGV4dDtcbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBBTExPV0VEX0JMT0NLUyA9IFsnY2diL2Jsb2NrLXN0b3J5LXNsaWRlci1zbGlkZSddO1xudmFyIFRFTVBMQVRFID0gW1snY2diL2Jsb2NrLXN0b3J5LXNsaWRlci1zbGlkZScsIHsgcGxhY2Vob2xkZXI6ICdTbGlkZScgfV1dO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG4vKipcbiogUmVnaXN0ZXJpbmcgUGFyZW50IGZvciB0aGUgU3RvcnkgU2xpZGVyIGJsb2NrXG4qL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1zdG9yeS1zbGlkZXInLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1N0b3J5IFNsaWRlcicpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3NsaWRlcycsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0YXR0cmlidXRlczoge1xuXHRcdHNsaWRlTmF2VGl0bGVzOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0ZGVmYXVsdDogW11cblx0XHR9XG5cdH0sXG5cdGtleXdvcmRzOiBbX18oJ1N0b3J5IFNsaWRlcicpLCBfXygnQ2Fyb3VzZWwnKV0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxuICAqL1xuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvL2NvbnNvbGUuaW5mbyh3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpWzBdLmlubmVyQmxvY2tzWzBdLmF0dHJpYnV0ZXMuc2xpZGVOYXZUaXRsZSk7XG5cdFx0dmFyIHNsaWRlTmF2VGl0bGVzID0gcHJvcHMuYXR0cmlidXRlcy5zbGlkZU5hdlRpdGxlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblxuXHRcdHZhciBidWlsZE5hdkFycmF5ID0gZnVuY3Rpb24gYnVpbGROYXZBcnJheSgpIHtcblx0XHRcdHZhciBwYXJlbnRCbG9ja0lEID0gcHJvcHMuY2xpZW50SWQ7XG5cdFx0XHR2YXIgcGFyZW50SW5kZXggPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRCbG9ja0luZGV4KHBhcmVudEJsb2NrSUQpO1xuXG5cdFx0XHR2YXIgX3VzZVNlbGVjdCA9IHVzZVNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aW5uZXJCbG9ja0NvdW50OiBzZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJykuZ2V0QmxvY2tDb3VudChwYXJlbnRCbG9ja0lEKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSksXG5cdFx0XHQgICAgaW5uZXJCbG9ja0NvdW50ID0gX3VzZVNlbGVjdC5pbm5lckJsb2NrQ291bnQ7XG5cblx0XHRcdHZhciBuYXZJdGVtcyA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBibG9jayA9IDA7IGJsb2NrIDwgaW5uZXJCbG9ja0NvdW50OyBibG9jaysrKSB7XG5cdFx0XHRcdHZhciBuYXZJdGVtID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJykuZ2V0QmxvY2tzKClbcGFyZW50SW5kZXhdLmlubmVyQmxvY2tzW2Jsb2NrXS5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGU7XG5cdFx0XHRcdG5hdkl0ZW1zLnB1c2gobmF2SXRlbSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaGFzU2VsZWN0ZWRJbm5lckJsb2NrKHByb3BzKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhuYXZJdGVtcyk7XG5cdFx0XHRcdHdwLmRhdGEuZGlzcGF0Y2goJ2NvcmUvYmxvY2stZWRpdG9yJykudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKFtwYXJlbnRCbG9ja0lEXSwgeyBzbGlkZU5hdlRpdGxlczogbmF2SXRlbXMgfSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRidWlsZE5hdkFycmF5KCk7XG5cdFx0Y29uc29sZS5pbmZvKHByb3BzKTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnU3RvcnkgU2xpZGVyIEJsb2NrJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuXHRcdFx0XHRhbGxvd2VkQmxvY2tzOiBBTExPV0VEX0JMT0NLUyxcblx0XHRcdFx0dGVtcGxhdGU6IFRFTVBMQVRFLFxuXHRcdFx0XHRyZW5kZXJBcHBlbmRlcjogZnVuY3Rpb24gcmVuZGVyQXBwZW5kZXIoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5EZWZhdWx0QmxvY2tBcHBlbmRlciwgbnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0b3J5LXNsaWRlci1uYXYnIH0sXG5cdFx0XHRcdCdTbGlkZXIgTmF2aWdhdGlvbidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0b3J5LXNsaWRlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7IC8vZW5kIHBhcmVudCBTbGlkZXIgQmxvY2tcblxuLyoqXG4gKiBSZWdpc3RlcmluZyBDaGlsZCBJbm5lcmJsb2NrIGZvciB0aGUgU3RvcnkgU2xpZGVyIGJsb2NrXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stc3Rvcnktc2xpZGVyLXNsaWRlJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdTdG9yeSBTbGlkZXIgU2xpZGUnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICd3ZWxjb21lLWFkZC1wYWdlJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRwYXJlbnQ6IFsnY2diL2Jsb2NrLXN0b3J5LXNsaWRlciddLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0c2xpZGVOYXZUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdodG1sJyxcblx0XHRcdHNlbGVjdG9yOiAnLnNsaWRlLW5hdi10aXRsZSdcblx0XHR9XG5cdH0sXG5cdGtleXdvcmRzOiBbX18oJ1NsaWRlJyksIF9fKCdBZGQgc2xpZGUnKV0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0Ly9jb25zb2xlLmluZm8ocHJvcHMpO1xuXHRcdHZhciBzbGlkZU5hdlRpdGxlID0gcHJvcHMuYXR0cmlidXRlcy5zbGlkZU5hdlRpdGxlLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuXG5cdFx0dmFyIG9uQ2hhbmdlTmF2VGl0bGUgPSBmdW5jdGlvbiBvbkNoYW5nZU5hdlRpdGxlKG5ld05hdlRpdGxlKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc2xpZGVOYXZUaXRsZTogbmV3TmF2VGl0bGUgfSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdTbGlkZSdcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7ICdjbGFzcyc6ICdzbGlkZS1uYXYtdGl0bGUnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRcdHsgJ2NsYXNzJzogJ3NsaWRlLW5hdi10aXRsZV9sYWJlbCAnIH0sXG5cdFx0XHRcdFx0J1NsaWRlIE5hdmlnYXRpb24gVGl0bGU6ICdcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBcInNsaWRlLW5hdi10aXRsZV9pbnB1dFwiLFxuXHRcdFx0XHRcdHZhbHVlOiBzbGlkZU5hdlRpdGxlLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZU5hdlRpdGxlLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiAnQWRkIHNsaWRlIG5hdmlnYXRpb24gdGl0bGUnXG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIHNsaWRlTmF2VGl0bGUgPSBwcm9wcy5hdHRyaWJ1dGVzLnNsaWRlTmF2VGl0bGU7XG5cdFx0Ly9jb25zb2xlLmluZm8ocHJvcHMpO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdzdG9yeS1zbGlkZXJfc2xpZGUnIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdzbGlkZS1uYXYtdGl0bGUnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7IHZhbHVlOiBzbGlkZU5hdlRpdGxlIH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cbi8vZnVuY3Rpb24gdG8gY2hlY2sgaWYgaW5uZXJibG9ja3MgaGF2ZSBiZWVuIGNoYW5nZWRcbmZ1bmN0aW9uIGhhc1NlbGVjdGVkSW5uZXJCbG9jayhwcm9wcykge1xuXHR2YXIgc2VsZWN0ID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJyk7XG5cdHZhciBzZWxlY3RlZCA9IHNlbGVjdC5nZXRCbG9ja1NlbGVjdGlvblN0YXJ0KCk7XG5cdHZhciBpbm5lciA9IHNlbGVjdC5nZXRCbG9jayhwcm9wcy5jbGllbnRJZCkuaW5uZXJCbG9ja3M7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaW5uZXIubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoaW5uZXJbaV0uY2xpZW50SWQgPT09IHNlbGVjdGVkIHx8IGlubmVyW2ldLmlubmVyQmxvY2tzLmxlbmd0aCAmJiBoYXNTZWxlY3RlZElubmVyQmxvY2soaW5uZXJbaV0pKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

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