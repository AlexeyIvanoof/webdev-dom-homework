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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteComment: () => (/* binding */ deleteComment),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   postComments: () => (/* binding */ postComments),\n/* harmony export */   regUsers: () => (/* binding */ regUsers),\n/* harmony export */   setLoginName: () => (/* binding */ setLoginName),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   token: () => (/* binding */ token)\n/* harmony export */ });\nconst commentsURL = \"https://wedev-api.sky.pro/api/v2/aleksey-ivanov/comments\"  \r\nconst userURL =  \"https://wedev-api.sky.pro/api/user\"\r\nconst userLoginURL = \"https://wedev-api.sky.pro/api/user/login\"\r\nconst deleteCommentURL = \"https://wedev-api.sky.pro/api/v2/aleksey-ivanov/comments/:id\" \r\n\r\nlet token;\r\nconst setToken = (newToken) =>{\r\n  token = newToken\r\n};\r\nlet name;\r\nlet setLoginName = (newName) =>{\r\n  return name = newName;\r\n};\r\n\r\nfunction deleteComment({id}) {\r\n  return fetch(deleteCommentURL +id, {\r\n    method: \"DELETE\",\r\n    headers:{\r\n      Authorization: `Bearer ${token}`},\r\n   }).then((response) => {\r\n     response.json()\r\n    });\r\n};\r\n\r\nfunction getComments() {\r\n    return fetch(commentsURL, {\r\n        method: \"GET\",\r\n      })\r\n      .then((response) => {\r\n      return response.json()\r\n      })\r\n};\r\nfunction postComments({nam,text,date}){\r\n    return fetch(commentsURL, {\r\n        method: \"POST\",\r\n        headers:{\r\n        Authorization: `Bearer ${token}`},\r\n        body: JSON.stringify({\r\n          name: nam,\r\n          text: text,\r\n          date: date,\r\n        })\r\n      }) \r\n        .then((response) => {\r\n          if (response.status === 500) {\r\n            throw (\"Сервер перегружен!\")\r\n          }\r\n          if(response.status === 400){\r\n            throw new Error(\"Введите не мение трех символов!\") \r\n          }\r\n          return response.json();\r\n        })      \r\n};\r\nfunction login({login, password}){\r\n  return fetch(userLoginURL, {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n       login,\r\n       password,\r\n      })\r\n    }) \r\n    .then((response) => {\r\n      console.log(response)\r\n        if (response.status === 400) {\r\n          throw new Error (\"неверный логин или пароль\")\r\n        }\r\n        return response.json();\r\n      })\r\n      .catch((error) => {\r\n        console.log(error.message)\r\n        if(error.message){\r\n          Swal.fire({\r\n          icon:\"error\",\r\n          title:\"Упс!\",\r\n          text: \"неверный логин или пароль!\"\r\n        })\r\n        }\r\n      })     \r\n};\r\n\r\nfunction regUsers({login, password,name}){\r\n  return fetch(userURL, {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n       login,\r\n       password,\r\n       name,\r\n\r\n      })\r\n    }) \r\n      .then((response) => {\r\n        if (response.status === 500) {\r\n          throw (\"Сервер перегружен!\")\r\n        }\r\n        if(response.status === 400){\r\n          throw new Error(\"Введите не мение трех символов!\") \r\n        }\r\n        return response.json();\r\n      })      \r\n};\n\n//# sourceURL=webpack://yes/./app.js?");

/***/ }),

/***/ "./login.js":
/*!******************!*\
  !*** ./login.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./app.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\r\n\r\n\r\nconst renderLogin = () => {\r\n  const pageElement = document.getElementById(\"container\");\r\n    const loginHtml = \r\n    `<div class=\"container\">\r\n    <div class=\"add-form\">\r\n        <h3>Форма входа</h3>\r\n        <input\r\n        id=\"login-input\"\r\n          type=\"text\"\r\n          class=\"text-enter\"\r\n          placeholder=\"Введите логин\"\r\n         />\r\n         <input\r\n         id=\"password-input\"\r\n           type=\"text\"\r\n           class=\"text-enter\"\r\n           placeholder=\"Введите пароль\"\r\n          />\r\n          <div class=\"add-form-enter\">\r\n            <button id=\"login-button\" class=\"add-form-button\">Войти</button>\r\n          </div>\r\n          <a class=\"reg-enter\" href=\"#\">Регистрация</a>\r\n    </div>\r\n</div>`;\r\n\r\npageElement.innerHTML = loginHtml;\r\n\r\n\r\nconst buttonElement = document.getElementById(\"login-button\");\r\nconst loginInputElement = document.getElementById(\"login-input\");\r\nconst passwordInputElement = document.getElementById(\"password-input\");\r\n\r\n\r\nbuttonElement.addEventListener(\"click\", () => {\r\n  console.log(loginInputElement.value, passwordInputElement.value)\r\n;(0,_app_js__WEBPACK_IMPORTED_MODULE_0__.login)({\r\n    login:loginInputElement.value,\r\n    password:passwordInputElement.value,\r\n}).then((responseData) => {\r\n    console.log(responseData);\r\n    console.log(_app_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\n    (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\r\n    (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.setLoginName)(responseData.user.name);\r\n    console.log(_app_js__WEBPACK_IMPORTED_MODULE_0__.name);\r\n})\r\n.then(() => {\r\n  return  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderPage)();\r\n})\r\n})\r\n}\n\n//# sourceURL=webpack://yes/./login.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments),\n/* harmony export */   formatDate: () => (/* binding */ formatDate),\n/* harmony export */   getFetchPromise: () => (/* binding */ getFetchPromise)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./app.js\");\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ \"./login.js\");\n\r\n\r\n\r\n\r\nconst newCommentElement = document.getElementById(\"container\");\r\nconst loadComments =  document.getElementById(\"load\");\r\nconst loader =  document.getElementById(\"loader\");\r\nconst buttonAuthorization = document.getElementById(\"regUser\");\r\n\r\n   //Авторизация\r\n   const authorization = document.getElementById(\"regUser\");\r\n   authorization.addEventListener(\"click\", () => {\r\n    (0,_login_js__WEBPACK_IMPORTED_MODULE_1__.renderLogin)();\r\n    buttonAuthorization.style.display = \"none\"\r\n   });\r\n  \r\n\r\n//формат даты\r\nconst dateElement = document.getElementById(\"date\");\r\nconst myDate = new Date();\r\n//formatDateToRu;\r\nconst formatDate = (date) => {\r\n  let data = date.getDate();\r\n  let month = date.getMonth();\r\n  let hour = date.getHours();\r\n  let minute = date.getMinutes();\r\n\r\n  if (data < 10) {\r\n    data = \"0\" + data;\r\n  }\r\n  if (month < 10) {\r\n    month = \"0\" + (month + 1);\r\n  }\r\n  if (hour < 10) {\r\n    hour = \"0\" + hour;\r\n  }\r\n  return `${data}.${month}.${date.getFullYear().toString().substr(-2)} ${hour}:${minute}`;\r\n};\r\ndateElement.textContent = formatDate(myDate); /*formatDateToRu(myDate);*/\r\n\r\n// массив данных\r\nlet comments = [];\r\n\r\n// рендер функция\r\n//export const country = \"ru\";\r\nconst renderСomments = () => {\r\n     const commentsHtml = comments.map((comment, index)=>{\r\n      return`<li  class=\"comment\"  data-likeNumb=\"${ comment.likes}\"  data-comment-text=\"<${comment.text}\r\n(${comment.author.name})\">\r\n      <div class=\"comment-header\">\r\n        <div>${comment.author.name}</div>\r\n        <div> ${comment.date}</div>\r\n      </div>\r\n      <div class=\"comment-body\">\r\n        <div class=\"comment-text\">\r\n          ${comment.text}\r\n        </div>\r\n      </div>\r\n      <div class=\"comment-footer\">\r\n        <div class=\"likes\">\r\n          <span class=\"likes-counter\">${comment.likes}</span>\r\n          <button class=\"like-button\"></button>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button data-index=\"${index}\" class=\"delete-button\">Удалить комментарий</button>\r\n      </div>\r\n    </li>`\r\n    })\r\n    .join(\"\");\r\n  \r\n     newCommentElement.innerHTML = commentsHtml;\r\n\r\n};    \r\n  renderСomments();\r\n\r\n// отправляем данные на сервер (метод GET)\r\n const getFetchPromise = () => {\r\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.getComments)()\r\n  .then((responseData) => {\r\n      loadComments.textContent = \"\";\r\n      const appComments = responseData.comments.map((comment) =>{\r\n          return{\r\n            name: comment.author.name,\r\n            date: new Date(comment.date),\r\n            text: comment.text,\r\n            likes: comment.likes,\r\n            isLiked : false\r\n          }\r\n        });  \r\n      comments = appComments;\r\n      comments = responseData.comments;\r\n      renderСomments()\r\n    });\r\n  \r\n  };\r\n  \r\n   getFetchPromise();\r\n\r\n   loader.textContent = \"\";\r\n   \n\n//# sourceURL=webpack://yes/./main.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./app.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\n//import { formatDateToRu,formatDateToUs } from \"./lib/formatDate/formatDate.js\";\r\n\r\n// рендер страницы после авторизации\r\n\r\nconst renderPage = () => {\r\n    const pageElement = document.getElementById(\"container\");\r\n    const commentsHtml = _main_js__WEBPACK_IMPORTED_MODULE_1__.comments.map((comment, index)=>{\r\n      return`<li  class=\"comment\"  data-likeNumb=\"${ comment.likes}\"  data-comment-text=\"<${comment.text}\r\n(${comment.author.name})\">\r\n      <div class=\"comment-header\">\r\n        <div>${comment.author.name}</div>\r\n        <div>${comment.date}</div>\r\n      </div>\r\n      <div class=\"comment-body\">\r\n        <div class=\"comment-text\">\r\n          ${comment.text}\r\n        </div>\r\n      </div>\r\n      <div class=\"comment-footer\">\r\n        <div class=\"likes\">\r\n          <span class=\"likes-counter\">${comment.likes}</span>\r\n          <button class=\"like-button\"></button>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button data-index=\"${index}\" class=\"delete-button\">Удалить комментарий</button>\r\n      </div>\r\n    </li>`\r\n    })\r\n    .join(\"\");\r\n     const addHtml =\r\n    `<div id=\"add-form\" class=\"add-form\">\r\n    <input\r\n      id=\"add-form-name\"\r\n      type=\"text\"\r\n      class=\"add-form-name\"\r\n      placeholder=\"${_app_js__WEBPACK_IMPORTED_MODULE_0__.name}\" value=${_app_js__WEBPACK_IMPORTED_MODULE_0__.name} readonly\r\n    />\r\n    <textarea\r\n      id=\"add-form-text\"\r\n      type=\"textarea\"\r\n      class=\"add-form-text\"\r\n      placeholder=\"Введите ваш коментарий\"\r\n      rows=\"4\"\r\n    ></textarea>\r\n    <div class=\"add-form-row\">\r\n      <button id=\"add-form-button\" class=\"add-form-button\">Написать</button>\r\n    </div>`\r\n\r\n    pageElement.innerHTML = commentsHtml+addHtml ;\r\n\r\n    const buttonElement = document.getElementById(\"add-form-button\");\r\n    let inputNameElement = document.getElementById(\"add-form-name\");\r\n    const commentsElement = document.getElementById(\"add-form-text\");\r\n    const loadComment =  document.getElementById(\"add-form\");\r\n    const loader =  document.getElementById(\"loader\");\r\n    const myDate = new Date();      \r\n\r\n\r\n    const initEventListeners = () => {\r\n      const commentElements = document.querySelectorAll(\".comment\");\r\n      for (const commentElement of commentElements) {\r\n        commentElement.addEventListener(\"click\", () => {\r\n    \r\n    // редактирование коментария \r\n          let textItem = commentElement.dataset.commentText;\r\n        if (textItem) {\r\n        document.querySelector('#add-form-text').value = textItem;\r\n      };\r\n        });\r\n    \r\n    // активация лайка\r\n        const likeButton = commentElement.querySelector(\".like-button\");\r\n        const likesCounter = commentElement.querySelector(\".likes-counter\");\r\n        const dataLikeNumb = parseInt(commentElement.getAttribute(\"data-likeNumb\"));\r\n    \r\n        let liked = false;\r\n        let likes = dataLikeNumb;\r\n    \r\n        if (likeButton.classList.contains(\"-active-like\")) {\r\n          liked = true;\r\n        }\r\n    \r\n        likeButton.addEventListener(\"click\", (event) => {\r\n          event.stopPropagation();\r\n          if (liked) {\r\n            likes--;\r\n          } else {\r\n            likes++;\r\n          }\r\n          liked = !liked;\r\n          likesCounter.textContent = likes;\r\n          commentElement.setAttribute(\"data-likeNumb\", likes);\r\n          likeButton.classList.toggle(\"-active-like\");\r\n        });\r\n      }\r\n    };\r\n    initEventListeners();\r\n  \r\n//кнопка удаления комментария\r\n     const initDeleteButtonsListeners = () => {\r\n     const deleteButtonsElements = document.querySelectorAll(\".delete-button\");\r\n\r\n    for (const deleteButtonElement of deleteButtonsElements) {\r\n    deleteButtonElement.addEventListener(\"click\", (event) => {\r\n      event.stopPropagation();\r\n      const index = deleteButtonElement.dataset.index;\r\n      console.log(index);\r\n      _main_js__WEBPACK_IMPORTED_MODULE_1__.comments.splice(index, 1);\r\n\r\n      renderPage();\r\n    });\r\n  }\r\n};\r\ninitDeleteButtonsListeners();\r\ninitEventListeners();\r\n\r\n/*/const initDeleteButtonsListeners = () => {\r\n  const deleteButtonsElements = document.querySelectorAll(\".delete-button\");\r\n\r\n for (const deleteButtonElement of deleteButtonsElements) {\r\n deleteButtonElement.addEventListener(\"click\", (event) => {\r\n   event.stopPropagation();\r\n   const id =  deleteButtonElement.dataset.id;\r\n   deleteComment({id}).then(() => {\r\n     getFetchPromise();\r\n});\r\n });\r\n}\r\n};\r\ninitDeleteButtonsListeners();\r\ninitEventListeners();/*/\r\n \r\n//добавляем новый комментарий\r\nloader.textContent = \"\";\r\nbuttonElement.addEventListener(\"click\", () => {\r\n \r\n  if (inputNameElement.value === \"\" || commentsElement.value === \"\") {\r\n    return false;\r\n  };\r\n// ответ от сервера (метод POST)\r\n  loadComment.style.display = \"none\"; \r\n  loader.textContent = \"...Добавляем комментарий\";\r\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.postComments)({\r\n    nam:inputNameElement.value,\r\n    text: commentsElement.value, \r\n    date:`${(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.formatDate)(myDate)}`\r\n  })  \r\n    .then((response) => {\r\n      loadComment.style.display = \"block\";\r\n      loader.textContent = \"\";\r\n      inputNameElement.value = \"\";\r\n      commentsElement.value = \"\";\r\n    })\r\n    .catch((error) => {\r\n      loadComment.style.display = \"block\";\r\n      loader.textContent = \"\";\r\n      if(error.message){\r\n        error.message ===(\"Введите не мение трех символов!\");\r\n        Swal.fire({\r\n        icon:\"error\",\r\n        title:\"Неверный формат ввода данных\",\r\n        text: \"Введите не мение трех символов!\"\r\n      })\r\n      }else{\r\n      Swal.fire({\r\n        icon:\"error\",\r\n        title:\"Упс\",\r\n        text: \"Сервер перегружен!\"\r\n      })} \r\n      console.warn(error);\r\n    });\r\n});\r\n};    \r\n\r\n\r\n\n\n//# sourceURL=webpack://yes/./render.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;