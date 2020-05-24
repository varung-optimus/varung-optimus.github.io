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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./../assets/fonts/OpenSans-Regular.ttf */ \"./src/assets/fonts/OpenSans-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"/* fallback */\\n@font-face {\\n  font-family: 'Material Icons';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format(\\\"woff2\\\"); }\\n\\n.material-icons {\\n  font-family: 'Material Icons';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 24px;\\n  line-height: 1;\\n  letter-spacing: normal;\\n  text-transform: none;\\n  display: inline-block;\\n  white-space: nowrap;\\n  word-wrap: normal;\\n  direction: ltr;\\n  -webkit-font-feature-settings: 'liga';\\n  -webkit-font-smoothing: antialiased; }\\n\\n@font-face {\\n  font-family: 'Open Sans';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"ttf\\\"); }\\n\\n.email-input-container {\\n  font-family: 'Open Sans', sans-serif; }\\n\\n.email-input-container {\\n  width: 100%;\\n  height: 200px;\\n  border: 1px solid #eee;\\n  border-radius: 0.5em;\\n  cursor: text;\\n  background: #fff;\\n  padding: 5px;\\n  overflow-y: scroll; }\\n\\n.email-input-container input {\\n  border-color: transparent;\\n  outline: none;\\n  display: inline;\\n  font-size: 14px; }\\n  .email-input-container input::placeholder {\\n    color: #C3C2CF; }\\n\\n.email-input-container .email-text-icon-container {\\n  padding: 5px 10px;\\n  border-radius: 100px;\\n  background-color: rgba(102, 153, 255, 0.2);\\n  display: inline-block;\\n  margin: 3px;\\n  font-size: 14px; }\\n\\n.email-input-container .invalid-email {\\n  border-bottom: 1px dashed red;\\n  margin: 3px 5px;\\n  font-size: 14px; }\\n\\n.email-input-container .close-icon {\\n  border-color: transparent; }\\n  .email-input-container .close-icon .material-icons {\\n    font-size: 14px;\\n    transform: translate(5px, 2px);\\n    cursor: pointer;\\n    color: #050038; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/OpenSans-Regular.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1b0809d519837cb7aad36a73433f655c.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans-Regular.ttf?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n/**\n * Element Input module\n * ==\n * Exports major functionality to other modules\n * @param {html DOM element} node\n * @param {properties} props\n */\nvar EmailInput = function (node, props) {\n    var _this = this;\n    this._node = node;\n    this._props = props;\n    // Private variables/consts\n    // TODO: Should be i18n compatible characters\n    var allowedChars = 'abcdefghijklmnopqrstuvwxyz1234567890';\n    var generatedEmailLength = 15;\n    var defaultSettings = { isEnterEnabled: true, isCommaEnabled: true, isBlurEnabled: true, isSpaceEnabled: true, domain: '@miro.com', placeholder: 'add more people...' };\n    var emailRegex = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    /**\n     * ================\n     * Methods\n     * =================\n     */\n    /**\n     * Removes the element from registry array and removes from DOM\n     * @param removeIconElement Receives the span element of remove icon\n     */\n    var _removeEmailEntry = function (removeIconElement) {\n        var value = removeIconElement.getAttribute('data-value');\n        // remove from registry\n        _this.emails = _this.emails.filter(function (email) { return email !== value; });\n        // remove from DOM\n        removeIconElement.parentElement.outerHTML = '';\n    };\n    /**\n     * Adds remove icon to the newly added node\n     * @param node New node getting added to the DOM\n     */\n    var _addRemoveIcon = function (node) {\n        // create remove icon and set initial config\n        var removeIcon = document.createElement('span');\n        removeIcon.setAttribute('data-value', node.innerText);\n        removeIcon.className = 'close-icon';\n        removeIcon.innerHTML = '<i class=\"material-icons\">close</i>';\n        // attach onclick handler for remove icon\n        removeIcon.onclick = function (event) {\n            // get item value\n            var elementToBeRemoved = event.target.parentElement;\n            _removeEmailEntry(elementToBeRemoved);\n        };\n        // append the icon to new node\n        node.appendChild(removeIcon);\n    };\n    /**\n     * Adds email entry to the element container\n     * @param element element container instance\n     * @param inputElement input element instance within the element container\n     * @param generatedId optional param for generated ID string - if not passed then use input element value\n     */\n    var _addEmailEntry = function (element, inputElement, generatedId) {\n        // create a new node\n        var node = document.createElement('span');\n        // set value from either generated ID or inputElement value\n        var value = generatedId ? generatedId : inputElement.value;\n        if (value && value !== '') {\n            // check if value is invalid/invalid\n            var emailValidityClass = emailRegex.test(value) ? 'email-text-icon-container' : 'invalid-email';\n            // set the value of DOM and registry\n            node.innerHTML = \"<span>\" + value + \"</span>\";\n            node.className = emailValidityClass;\n            _this.emails.push(value);\n            // Add remove icon to the new node\n            _addRemoveIcon(node);\n            // Add the node before the input element\n            element.insertBefore(node, inputElement);\n            // reset the input element state\n            if (!generatedId) {\n                inputElement.value = '';\n            }\n        }\n    };\n    /**\n     * Attach events\n     * @param element main container element\n     * @param inputElement input element within the container element\n     */\n    var _attachEventHandlers = function (element, inputElement) {\n        // click event for container\n        element.onclick = function () {\n            inputElement.focus();\n        };\n        // listen to ENTER and COMMA\n        inputElement.onkeypress = function (event) {\n            if (props.isEnterEnabled && event && event.keyCode === 13) {\n                // Add item as an email item entry\n                if (inputElement && inputElement.value) {\n                    _addEmailEntry(element, inputElement);\n                }\n                return false;\n            }\n            if (props.isSpaceEnabled && event && event.keyCode === 32) {\n                // Add item as an email item entry\n                if (inputElement && inputElement.value) {\n                    _addEmailEntry(element, inputElement);\n                }\n                return false;\n            }\n            if (props.isCommaEnabled && event && event.keyCode === 44) {\n                // Add item as an email item entry\n                if (inputElement && inputElement.value) {\n                    _addEmailEntry(element, inputElement);\n                }\n                return false;\n            }\n        };\n        // on paste\n        inputElement.onpaste = function (event) {\n            if (event && event.clipboardData) {\n                var pasteData = (event.clipboardData || window.clipboardData).getData('text');\n                var pastedEmails = pasteData ? pasteData.split(',') : [];\n                if (pastedEmails.length > 0) {\n                    for (var _i = 0, pastedEmails_1 = pastedEmails; _i < pastedEmails_1.length; _i++) {\n                        var email = pastedEmails_1[_i];\n                        _addEmailEntry(element, inputElement, email.trim());\n                    }\n                }\n                return false;\n            }\n        };\n        inputElement.onblur = function (event) {\n            // add item on blur\n            if (inputElement && inputElement.value) {\n                _addEmailEntry(element, inputElement);\n            }\n        };\n    };\n    /**\n     * Initializes the proxy to be able to listen to change event\n     * @param callback callback method to be invoked on change of value\n     */\n    var _initProxy = function (callback) {\n        _this.emails = new Proxy(_this.emails, {\n            set: function (target, propKey, value) {\n                target[propKey] = value;\n                // trigger change only if there is change in property - length\n                // proxy gets triggered for all changes\n                if (propKey === 'length') {\n                    callback();\n                }\n                return true;\n            }\n        });\n    };\n    /**\n     * Generate random email\n     */\n    var addEmail = function () {\n        var generatedId = '';\n        for (var index = 0; index < generatedEmailLength; index++) {\n            generatedId += allowedChars[Math.floor(Math.random() * allowedChars.length)];\n        }\n        generatedId = \"\" + generatedId + props.domain;\n        _addEmailEntry(_this.emailInputContainer, _this.inputElement, generatedId);\n    };\n    /**\n     * Gets valid email count\n     */\n    var getEmailsCount = function () {\n        var validEmailsCount = 0;\n        for (var _i = 0, _a = _this.emails; _i < _a.length; _i++) {\n            var email = _a[_i];\n            if (emailRegex.test(email)) {\n                validEmailsCount++;\n            }\n        }\n        return validEmailsCount;\n    };\n    /**\n     * Get emails\n     */\n    var getEmails = function () {\n        return _this.emails;\n    };\n    /**\n     * Replace existing emails with the new list\n     * @param newEmails new emails list to be added\n     */\n    var replaceEmails = function (newEmails) {\n        var emails = _this._node.querySelectorAll('.email-text-icon-container');\n        // Remove existing emails (if any)\n        _this._node.innerHTML = \"<input type=\\\"text\\\" placeholder=\\\"\" + props.placeholder + \"\\\" />\";\n        // Add new emails\n        for (var _i = 0, newEmails_1 = newEmails; _i < newEmails_1.length; _i++) {\n            var email = newEmails_1[_i];\n            _addEmailEntry(_this.emailInputContainer, _this.inputElement, email);\n        }\n        // Update the registry\n        _this.emails = newEmails;\n    };\n    /**\n     * Listener for value changes to email input\n     * @param callback Callback to invoke when there is value changes\n     */\n    var listenToChanges = function (callback) {\n        // support for old browsers - depecrated now\n        if (Object && Object.observe) {\n            Object.observe(_this.emails, callback);\n        }\n        // Proxy supported\n        if (('Proxy' in window)) {\n            _initProxy(callback);\n            return;\n        }\n    };\n    /**\n     * ================\n     * LIFECYCLE EVENTS\n     * =================\n     */\n    /**\n     * Email input initializer\n     */\n    var _init = function () {\n        _this.emails = [];\n        // settings\n        props = __assign(__assign({}, defaultSettings), props);\n        // append the node\n        node.innerHTML = \"<div class=\\\"email-input-container\\\">\\n                <input type=\\\"text\\\" placeholder=\\\"\" + props.placeholder + \"\\\" />\\n            </div>\";\n        _this.emailInputContainer = node.querySelector('.email-input-container');\n        _this.inputElement = node.querySelector('input[type=\"text\"');\n        _attachEventHandlers(_this.emailInputContainer, _this.inputElement);\n    };\n    // Initialize the input-element\n    _init();\n    /**\n     * ================\n     * EXPOSED API METHODS\n     * =================\n     */\n    return {\n        addEmail: addEmail,\n        getEmailsCount: getEmailsCount,\n        getEmails: getEmails,\n        replaceEmails: replaceEmails,\n        listenToChanges: listenToChanges\n    };\n};\n// attach to the document\nwindow.EmailInput = EmailInput;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });