/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./coffeeBg.jpg */ \"./src/coffeeBg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n#nav {\n    display: flex;\n    height: 100%;\n    width: 50vw;\n    padding-top: 5%;\n    flex-direction: column;\n}\n\n#navBtnContainer {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    padding-top: 2.5%;\n    justify-content: center;\n    align-items: center;   \n    gap: 10%;\n}\n\n.navBtn {\n    height: 100%;\n    width: 100%;\n    border: 1px transparent;\n    border-radius: 15px;\n    background-color: burlywood;\n    color: black;\n    transition: 0.3s;\n}\n\n.navBtn:hover {\n    background-color: rgb(222, 152, 135);\n    color: white;\n}\n\n#cafeTitle {\n    text-align: center;\n    color:antiquewhite;\n}\n\n#content {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    padding: 2.5%;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: rgba(127, 255, 212, 0);\n}\n\n#tagline {\n    color: antiquewhite;\n    text-decoration: underline;\n}\n\n#storyContainer {\n    margin-top: 2.5%;\n    padding-top: 0.5%;\n    padding-bottom: 0.5%;\n    display: flex;\n    justify-content: center;\n    border-radius: 5px;\n    background-color: rgba(49, 124, 59, 0.24);\n    width: 50%;\n}\n\n#storyText {\n    width: 75%;\n    color: white;\n    text-align: center;\n}\n\n#fruitTea {\n    width: 100%;\n    height: 100%;\n}\n\n#itemPreviewContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 10%;\n    height: 75%;\n    width: 75%;\n    margin-top: 2.5%;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.previewBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n.previewBox > img {\n    height: 300px;\n    width: 100%;\n}\n\n.previewBox > h3 {\n    color: white;\n    text-align: center;\n}\n\n#menuContainer {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-basis: auto;\n    justify-content: center;\n}\n\n#menuGrid {\n    display: grid;\n    width: 75%;\n    height: fit-content;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 25%;\n    row-gap: 1%;\n    padding: 5%;\n    background-color: #F3DEBA;\n    border-radius: 2.5%;\n    border: 1px black solid;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n.menuItem > img {\n    height: 300px;\n    width: 100%;\n}\n\n.menuItem > h3,\n.menuItem > p {\n    color: rgb(0, 0, 0);\n    text-align: center;\n}\n\n#menuBody {\n    background-color:#A9907E;\n    width: 100vw;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding-top: 5%;\n    padding-bottom: 5%;\n    border: 1px solid black;\n}\n\n#menuBody > h2 {\n    color: white;\n    padding-bottom: 2.5%;\n}\n\n#joinUsContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2.5%;\n    padding: 2.5%;\n    background-color: rgba(49, 124, 59, 0.24);\n    margin-bottom: 2.5%;\n}\n\n#joinUsContainer > h3,\n#joinUsContainer > p {\n    text-align: center;\n    color: white;\n}\n\n#partnerContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2.5%;\n    padding: 2.5%;\n    background-color: rgba(49, 124, 59, 0.24);\n}\n\n#partnerBody {\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5%;\n}\n\n#partnerBody > a {\n    text-align: center;\n    color: white;\n}\n\n#partnerContainer > h3 {\n    color: white;\n    text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-cafe/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-cafe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-cafe/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-cafe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-cafe/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-cafe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-cafe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-cafe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-cafe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-cafe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-cafe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _initialPageLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPageLoad.js */ \"./src/initialPageLoad.js\");\n/* harmony import */ var _menuLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLoad.js */ \"./src/menuLoad.js\");\n/* harmony import */ var _assets_fruitTea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fruitTea.jpg */ \"./src/assets/fruitTea.jpg\");\n/* harmony import */ var _assets_grapefruitTea_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/grapefruitTea.jpg */ \"./src/assets/grapefruitTea.jpg\");\n/* harmony import */ var _assets_strawberrySmoothie_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/strawberrySmoothie.jpg */ \"./src/assets/strawberrySmoothie.jpg\");\n/* harmony import */ var _assets_matchaSmoothie_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/matchaSmoothie.jpg */ \"./src/assets/matchaSmoothie.jpg\");\n/* harmony import */ var _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/latte.jpg */ \"./src/assets/latte.jpg\");\n/* harmony import */ var _assets_coffeeMilk_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/coffeeMilk.jpg */ \"./src/assets/coffeeMilk.jpg\");\n/* harmony import */ var _assets_lemonFoam_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/lemonFoam.jpg */ \"./src/assets/lemonFoam.jpg\");\n/* harmony import */ var _assets_orangeFoam_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/orangeFoam.jpg */ \"./src/assets/orangeFoam.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(\"Test\");\n// alert(\"Alert\");\n\n(0,_initialPageLoad_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst contentContainer = document.querySelector(\"#content\");\nconst cafeTitle = document.querySelector(\"#cafeTitle\");\n\nconst homeBtn = document.querySelector(\"#homeBtn\");\nhomeBtn.addEventListener(\"click\", () => {\n    while (contentContainer.firstChild) {\n        contentContainer.removeChild(contentContainer.lastChild);\n    }\n    const tagline = document.createElement(\"h3\");\n    tagline.setAttribute(\"id\", \"tagline\");\n    tagline.innerHTML = \"\\\"Mother Terra's Favorite Coffee!\\\"\";\n    contentContainer.appendChild(tagline);\n\n    const storyContainer = document.createElement(\"div\");\n    storyContainer.setAttribute(\"id\", \"storyContainer\");\n\n    const storyText = document.createElement(\"p\");\n    const storyTextNode = document.createTextNode(\"Serving Honeymoon Bay with assorted coffee, tea, and artisinal sandwiches since 2012.\");\n    storyText.appendChild(storyTextNode);\n    const storyTextBreak = document.createElement(\"br\");\n    storyText.appendChild(storyTextBreak);\n    const storyTextNode2 = document.createTextNode(\"Open 12 pm - 8 pm, Monday through Friday\");\n    storyText.appendChild(storyTextNode2);\n    storyText.setAttribute(\"id\", \"storyText\");\n    storyContainer.appendChild(storyText);\n\n    contentContainer.appendChild(storyContainer);\n\n    const itemPreviewContainer = document.createElement(\"div\");\n    itemPreviewContainer.setAttribute(\"id\", \"itemPreviewContainer\");\n\n    const itemPreview1 = document.createElement(\"div\");\n    itemPreview1.setAttribute(\"class\", \"previewBox\");\n    const itemPreview1Img = document.createElement(\"img\");\n    itemPreview1Img.src = _assets_fruitTea_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    itemPreview1.appendChild(itemPreview1Img);\n    const itemPreview1Text = document.createElement(\"h3\");\n    itemPreview1Text.innerHTML = \"Queen's Garden Tea\";\n    itemPreview1.appendChild(itemPreview1Text);\n    itemPreviewContainer.appendChild(itemPreview1);\n\n    const itemPreview2 = document.createElement(\"div\");\n    itemPreview2.setAttribute(\"class\", \"previewBox\");\n    const itemPreview2Img = document.createElement(\"img\");\n    itemPreview2Img.src = _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_7__;\n    itemPreview2.appendChild(itemPreview2Img);\n    const itemPreview2Text = document.createElement(\"h3\");\n    itemPreview2Text.innerHTML = \"Aviary Latte\";\n    itemPreview2.appendChild(itemPreview2Text);\n    itemPreviewContainer.appendChild(itemPreview2);\n\n    const itemPreview3 = document.createElement(\"div\");\n    itemPreview3.setAttribute(\"class\", \"previewBox\");\n    const itemPreview3Img = document.createElement(\"img\");\n    itemPreview3Img.src = _assets_strawberrySmoothie_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    itemPreview3.appendChild(itemPreview3Img);\n    const itemPreview3Text = document.createElement(\"h3\");\n    itemPreview3Text.innerHTML = \"Strawberry Rose Smoothie\";\n    itemPreview3.appendChild(itemPreview3Text);\n    itemPreviewContainer.appendChild(itemPreview3);\n\n    contentContainer.appendChild(itemPreviewContainer);\n    \n});\n\nconst menuBtn = document.querySelector(\"#menuBtn\");\nmenuBtn.addEventListener(\"click\", () => {\n    while (contentContainer.firstChild) {\n        contentContainer.removeChild(contentContainer.lastChild);\n    }\n\n    (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_2__.menuLoad)();\n});\nconst aboutBtn = document.querySelector(\"#aboutBtn\");\naboutBtn.addEventListener(\"click\", () => {\n    while (contentContainer.firstChild) {\n        contentContainer.removeChild(contentContainer.lastChild);\n    }\n\n    const joinUsContainer = document.createElement(\"div\");\n    joinUsContainer.setAttribute(\"id\", \"joinUsContainer\");\n\n    const joinUsText = document.createElement(\"h3\");\n    joinUsText.innerHTML = \"Looking to join our team?\";\n    joinUsText.setAttribute(\"id\", \"joinUsText\");\n    const joinUsBody = document.createElement(\"p\");\n    joinUsBody.innerHTML = \"Join our family today and become a Sprout by emailing your application and resume to us at verdantRoastery@gmail.com! <br> We look forward to hearing from you.\"\n\n    joinUsContainer.appendChild(joinUsText);\n    joinUsContainer.appendChild(joinUsBody);\n\n    const partnerContainer = document.createElement(\"div\");\n    partnerContainer.setAttribute(\"id\", \"partnerContainer\");\n\n    const partnerText = document.createElement(\"h3\");\n    partnerText.setAttribute(\"id\", \"partnerText\");\n    partnerText.innerHTML = \"Our partners and friends\";\n\n    const partnerBody = document.createElement(\"div\");\n    partnerBody.setAttribute(\"id\", \"partnerBody\");\n\n    const partnerItem1 = document.createElement(\"a\");\n    partnerItem1.innerHTML = \"Faeriemyst Entertainment\";\n    partnerItem1.setAttribute(\"href\", \"www.google.com\");\n\n    const partnerItem2 = document.createElement(\"a\");\n    partnerItem2.innerHTML = \"Aviary Roasteries\";\n    partnerItem2.setAttribute(\"href\", \"https://www.google.com\");\n    \n    const partnerItem3 = document.createElement(\"a\");\n    partnerItem3.innerHTML = \"Honeymoon Apiary\";\n    partnerItem3.setAttribute(\"href\", \"https://www.youtube.com\");\n\n    partnerBody.appendChild(partnerItem1);\n    partnerBody.appendChild(partnerItem2);\n    partnerBody.appendChild(partnerItem3);\n\n    partnerContainer.appendChild(partnerText);\n    partnerContainer.appendChild(partnerBody);\n    \n    contentContainer.appendChild(joinUsContainer);\n    contentContainer.appendChild(partnerContainer);\n    \n});\n\n//# sourceURL=webpack://odin-cafe/./src/index.js?");

/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _assets_fruitTea_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fruitTea.jpg */ \"./src/assets/fruitTea.jpg\");\n/* harmony import */ var _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/latte.jpg */ \"./src/assets/latte.jpg\");\n/* harmony import */ var _assets_strawberrySmoothie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/strawberrySmoothie.jpg */ \"./src/assets/strawberrySmoothie.jpg\");\n\n\n\n\nfunction initialPageLoad() {\n    const navBar = document.querySelector(\"#nav\");\n    const cafeTitle = document.createElement(\"h1\");\n    cafeTitle.setAttribute(\"id\", \"cafeTitle\");\n    cafeTitle.innerHTML = \"Verdant Cafe\";\n    navBar.appendChild(cafeTitle);\n\n    const navBtnContainer = document.createElement(\"div\");\n    navBtnContainer.setAttribute(\"id\", \"navBtnContainer\");\n    navBar.appendChild(navBtnContainer);\n    navBtnContainer.append(document.querySelector(\"#homeBtn\"));\n    navBtnContainer.append(document.querySelector(\"#menuBtn\"));\n    navBtnContainer.append(document.querySelector(\"#aboutBtn\"));\n\n    const contentContainer = document.querySelector(\"#content\");\n    const tagline = document.createElement(\"h3\");\n    tagline.setAttribute(\"id\", \"tagline\");\n    tagline.innerHTML = \"\\\"Mother Terra's Favorite Coffee!\\\"\";\n    contentContainer.appendChild(tagline);\n\n    const storyContainer = document.createElement(\"div\");\n    storyContainer.setAttribute(\"id\", \"storyContainer\");\n\n    const storyText = document.createElement(\"p\");\n    const storyTextNode = document.createTextNode(\"Serving Honeymoon Bay with assorted coffee, tea, and artisinal sandwiches since 2012.\");\n    storyText.appendChild(storyTextNode);\n    const storyTextBreak = document.createElement(\"br\");\n    storyText.appendChild(storyTextBreak);\n    const storyTextNode2 = document.createTextNode(\"Open 12 pm - 8 pm, Monday through Friday\");\n    storyText.appendChild(storyTextNode2);\n    storyText.setAttribute(\"id\", \"storyText\");\n    storyContainer.appendChild(storyText);\n\n    contentContainer.appendChild(storyContainer);\n\n    const itemPreviewContainer = document.createElement(\"div\");\n    itemPreviewContainer.setAttribute(\"id\", \"itemPreviewContainer\");\n\n    const itemPreview1 = document.createElement(\"div\");\n    itemPreview1.setAttribute(\"class\", \"previewBox\");\n    const itemPreview1Img = document.createElement(\"img\");\n    itemPreview1Img.src = _assets_fruitTea_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    itemPreview1.appendChild(itemPreview1Img);\n    const itemPreview1Text = document.createElement(\"h3\");\n    itemPreview1Text.innerHTML = \"Queen's Garden Tea\";\n    itemPreview1.appendChild(itemPreview1Text);\n    itemPreviewContainer.appendChild(itemPreview1);\n\n    const itemPreview2 = document.createElement(\"div\");\n    itemPreview2.setAttribute(\"class\", \"previewBox\");\n    const itemPreview2Img = document.createElement(\"img\");\n    itemPreview2Img.src = _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    itemPreview2.appendChild(itemPreview2Img);\n    const itemPreview2Text = document.createElement(\"h3\");\n    itemPreview2Text.innerHTML = \"Aviary Latte\";\n    itemPreview2.appendChild(itemPreview2Text);\n    itemPreviewContainer.appendChild(itemPreview2);\n\n    const itemPreview3 = document.createElement(\"div\");\n    itemPreview3.setAttribute(\"class\", \"previewBox\");\n    const itemPreview3Img = document.createElement(\"img\");\n    itemPreview3Img.src = _assets_strawberrySmoothie_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    itemPreview3.appendChild(itemPreview3Img);\n    const itemPreview3Text = document.createElement(\"h3\");\n    itemPreview3Text.innerHTML = \"Strawberry Rose Smoothie\";\n    itemPreview3.appendChild(itemPreview3Text);\n    itemPreviewContainer.appendChild(itemPreview3);\n\n    contentContainer.appendChild(itemPreviewContainer);\n};\n\n//# sourceURL=webpack://odin-cafe/./src/initialPageLoad.js?");

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _assets_fruitTea_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fruitTea.jpg */ \"./src/assets/fruitTea.jpg\");\n/* harmony import */ var _assets_grapefruitTea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/grapefruitTea.jpg */ \"./src/assets/grapefruitTea.jpg\");\n/* harmony import */ var _assets_strawberrySmoothie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/strawberrySmoothie.jpg */ \"./src/assets/strawberrySmoothie.jpg\");\n/* harmony import */ var _assets_matchaSmoothie_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/matchaSmoothie.jpg */ \"./src/assets/matchaSmoothie.jpg\");\n/* harmony import */ var _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/latte.jpg */ \"./src/assets/latte.jpg\");\n/* harmony import */ var _assets_coffeeMilk_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/coffeeMilk.jpg */ \"./src/assets/coffeeMilk.jpg\");\n/* harmony import */ var _assets_lemonFoam_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/lemonFoam.jpg */ \"./src/assets/lemonFoam.jpg\");\n/* harmony import */ var _assets_orangeFoam_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/orangeFoam.jpg */ \"./src/assets/orangeFoam.jpg\");\n\n\n\n\n\n\n\n\n\nfunction menuLoad() {\n    const contentContainer = document.querySelector(\"#content\");\n    const menuBody = document.createElement(\"div\");\n    menuBody.setAttribute(\"id\", \"menuBody\");\n\n    const menuHeader = document.createElement(\"h2\");\n    menuHeader.setAttribute(\"id\", \"menuHeader\");\n    menuHeader.innerHTML = \"~Menu~\";\n    menuBody.appendChild(menuHeader);\n    \n    contentContainer.appendChild(menuBody);\n\n\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.setAttribute(\"id\", \"menuContainer\");\n    \n    const menuGrid = document.createElement(\"div\");\n    menuGrid.setAttribute(\"id\", \"menuGrid\");\n    \n\n    const menuItem1 = document.createElement(\"div\");\n    menuItem1.setAttribute(\"class\", \"menuItem\");\n    const menuItem1Img = document.createElement(\"img\");\n    menuItem1Img.src = _assets_fruitTea_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    menuItem1.appendChild(menuItem1Img);\n    const menuItem1Text = document.createElement(\"h3\");\n    menuItem1Text.innerHTML = \"Queen's Garden Tea\";\n    const menuItem1Desc = document.createElement(\"p\");\n    menuItem1Desc.innerText = \"Artisanal Silver Pine white tea gently flavored with lemon and orange.\";\n    menuItem1.appendChild(menuItem1Text);\n    menuItem1.appendChild(menuItem1Desc);\n    menuGrid.appendChild(menuItem1);\n\n    const menuItem2 = document.createElement(\"div\");\n    menuItem2.setAttribute(\"class\", \"menuItem\");\n    const menuItem2Img = document.createElement(\"img\");\n    menuItem2Img.src = _assets_grapefruitTea_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    menuItem2.appendChild(menuItem2Img);\n    const menuItem2Text = document.createElement(\"h3\");\n    menuItem2Text.innerHTML = \"Liurnian Daydream\";\n    const menuItem2Desc = document.createElement(\"p\");\n    menuItem2Desc.innerText = \"Green tea from the mountaintops of Liurnia mixed with grapefruit.\";\n    menuItem2.appendChild(menuItem2Text);\n    menuItem2.appendChild(menuItem2Desc);\n    menuGrid.appendChild(menuItem2);\n\n    const menuItem3 = document.createElement(\"div\");\n    menuItem3.setAttribute(\"class\", \"menuItem\");\n    const menuItem3Img = document.createElement(\"img\");\n    menuItem3Img.src = _assets_strawberrySmoothie_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    menuItem3.appendChild(menuItem3Img);\n    const menuItem3Text = document.createElement(\"h3\");\n    menuItem3Text.innerHTML = \"Strawberry Rose Smoothie\";\n    const menuItem3Desc = document.createElement(\"p\");\n    menuItem3Desc.innerText = \"Strawberry and rose blended with ice for an icy delicacy.\";\n    menuItem3.appendChild(menuItem3Text);\n    menuItem3.appendChild(menuItem3Desc);\n    menuGrid.appendChild(menuItem3);\n\n    const menuItem4 = document.createElement(\"div\");\n    menuItem4.setAttribute(\"class\", \"menuItem\");\n    const menuItem4Img = document.createElement(\"img\");\n    menuItem4Img.src = _assets_matchaSmoothie_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    menuItem4.appendChild(menuItem4Img);\n    const menuItem4Text = document.createElement(\"h3\");\n    menuItem4Text.innerHTML = \"Hedge Maze Smoothie\";\n    const menuItem4Desc = document.createElement(\"p\");\n    menuItem4Desc.innerText = \"A milk-based matcha smoothie offering the refreshingly light sweetness of our house milk paired with the earthy depth of matcha.\";\n    menuItem4.appendChild(menuItem4Text);\n    menuItem4.appendChild(menuItem4Desc);\n    menuGrid.appendChild(menuItem4);\n    \n    const menuItem5 = document.createElement(\"div\");\n    menuItem5.setAttribute(\"class\", \"menuItem\");\n    const menuItem5Img = document.createElement(\"img\");\n    menuItem5Img.src = _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    menuItem5.appendChild(menuItem5Img);\n    const menuItem5Text = document.createElement(\"h3\");\n    menuItem5Text.innerHTML = \"Aviary Latte\";\n    const menuItem5Desc = document.createElement(\"p\");\n    menuItem5Desc.innerText = \"Aviary Roastery espresso paired with our house milk and (optionally) sea salt foam for a savory morning delight.\";\n    menuItem5.appendChild(menuItem5Text);\n    menuItem5.appendChild(menuItem5Desc);\n    menuGrid.appendChild(menuItem5);\n\n    const menuItem6 = document.createElement(\"div\");\n    menuItem6.setAttribute(\"class\", \"menuItem\");\n    const menuItem6Img = document.createElement(\"img\");\n    menuItem6Img.src = _assets_coffeeMilk_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    menuItem6.appendChild(menuItem6Img);\n    const menuItem6Text = document.createElement(\"h3\");\n    menuItem6Text.innerHTML = \"Hazelnut Sunrise\";\n    const menuItem6Desc = document.createElement(\"p\");\n    menuItem6Desc.innerText = \"Deep coffee flavor meets hazelnut in a delicious, signature blend of Aviary Roastery espresso, hazelnut syrup, and fresh milk.\";\n    menuItem6.appendChild(menuItem6Text);\n    menuItem6.appendChild(menuItem6Desc);\n    menuGrid.appendChild(menuItem6);\n\n    const menuItem7 = document.createElement(\"div\");\n    menuItem7.setAttribute(\"class\", \"menuItem\");\n    const menuItem7Img = document.createElement(\"img\");\n    menuItem7Img.src = _assets_orangeFoam_jpg__WEBPACK_IMPORTED_MODULE_7__;\n    menuItem7.appendChild(menuItem7Img);\n    const menuItem7Text = document.createElement(\"h3\");\n    menuItem7Text.innerHTML = \"Citrus Cloud\";\n    const menuItem7Desc = document.createElement(\"p\");\n    menuItem7Desc.innerText = \"Jasmine green tea paired with freshly-squeezed orange juice and sea salt foam for a savory then tangy and sweet refreshment.\";\n    menuItem7.appendChild(menuItem7Text);\n    menuItem7.appendChild(menuItem7Desc);\n    menuGrid.appendChild(menuItem7);\n\n    const menuItem8 = document.createElement(\"div\");\n    menuItem8.setAttribute(\"class\", \"menuItem\");\n    const menuItem8Img = document.createElement(\"img\");\n    menuItem8Img.src = _assets_lemonFoam_jpg__WEBPACK_IMPORTED_MODULE_6__;\n    menuItem8.appendChild(menuItem8Img);\n    const menuItem8Text = document.createElement(\"h3\");\n    menuItem8Text.innerHTML = \"Honeymoon Drop\";\n    const menuItem8Desc = document.createElement(\"p\");\n    menuItem8Desc.innerText = \"Jasmine green tea with a hint of lemon paired with sea salt foam or whipped cream. (Lana Del Rey's favorite - 2023)\";\n    menuItem8.appendChild(menuItem8Text);\n    menuItem8.appendChild(menuItem8Desc);\n    menuGrid.appendChild(menuItem8);\n\n    menuContainer.appendChild(menuGrid);\n    menuBody.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack://odin-cafe/./src/menuLoad.js?");

/***/ }),

/***/ "./src/assets/coffeeMilk.jpg":
/*!***********************************!*\
  !*** ./src/assets/coffeeMilk.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab5e9f3ea5dfdd7de6e5.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/coffeeMilk.jpg?");

/***/ }),

/***/ "./src/assets/fruitTea.jpg":
/*!*********************************!*\
  !*** ./src/assets/fruitTea.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f83e5a1e5c9654469e0.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/fruitTea.jpg?");

/***/ }),

/***/ "./src/assets/grapefruitTea.jpg":
/*!**************************************!*\
  !*** ./src/assets/grapefruitTea.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ecc938caf73caa30ae69.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/grapefruitTea.jpg?");

/***/ }),

/***/ "./src/assets/latte.jpg":
/*!******************************!*\
  !*** ./src/assets/latte.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c11b7f8a821d64e962b2.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/latte.jpg?");

/***/ }),

/***/ "./src/assets/lemonFoam.jpg":
/*!**********************************!*\
  !*** ./src/assets/lemonFoam.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69866188316f77cbc4d1.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/lemonFoam.jpg?");

/***/ }),

/***/ "./src/assets/matchaSmoothie.jpg":
/*!***************************************!*\
  !*** ./src/assets/matchaSmoothie.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"643f2fdd2b31048534ae.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/matchaSmoothie.jpg?");

/***/ }),

/***/ "./src/assets/orangeFoam.jpg":
/*!***********************************!*\
  !*** ./src/assets/orangeFoam.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c45d3e49ad58d150eee.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/orangeFoam.jpg?");

/***/ }),

/***/ "./src/assets/strawberrySmoothie.jpg":
/*!*******************************************!*\
  !*** ./src/assets/strawberrySmoothie.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ef7496b888a293e6ed5.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/assets/strawberrySmoothie.jpg?");

/***/ }),

/***/ "./src/coffeeBg.jpg":
/*!**************************!*\
  !*** ./src/coffeeBg.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84daa42d826ff30315fe.jpg\";\n\n//# sourceURL=webpack://odin-cafe/./src/coffeeBg.jpg?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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