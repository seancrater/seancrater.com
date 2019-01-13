webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UserData.js":
/*!********************************!*\
  !*** ./components/UserData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var UserData = function UserData(_ref) {
  var user = _ref.user;

  if (user) {
    var avatarUrl = user.avatarUrl,
        bio = user.bio,
        name = user.name;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: name,
      src: avatarUrl
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, bio));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (UserData);

/***/ })

})
//# sourceMappingURL=index.js.26dad47b607afffa3234.hot-update.js.map