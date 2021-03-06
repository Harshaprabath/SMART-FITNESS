(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkoreva"] = self["webpackChunkoreva"] || []).push([["src_app_authentication_authentication_module_ts"], {
    /***/
    33365:
    /*!*****************************************************************!*\
      !*** ./src/app/authentication/authentication-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationRoutingModule": function AuthenticationRoutingModule() {
          return (
            /* binding */
            _AuthenticationRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _reset_reset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset/reset.component */
      48855);
      /* harmony import */


      var _page500_page500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page500/page500.component */
      11194);
      /* harmony import */


      var _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page404/page404.component */
      1991);
      /* harmony import */


      var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot/forgot.component */
      97594);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./signin/signin.component */
      19320);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup/signup.component */
      7794);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__.SigninComponent
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignupComponent
      }, {
        path: 'forgot',
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__.ForgotComponent
      }, {
        path: 'reset',
        component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_0__.ResetComponent
      }, {
        path: 'page404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component
      }, {
        path: 'page500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_1__.Page500Component
      }];

      var _AuthenticationRoutingModule = function _AuthenticationRoutingModule() {
        _classCallCheck(this, _AuthenticationRoutingModule);
      };

      _AuthenticationRoutingModule.??fac = function AuthenticationRoutingModule_Factory(t) {
        return new (t || _AuthenticationRoutingModule)();
      };

      _AuthenticationRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
        type: _AuthenticationRoutingModule
      });
      _AuthenticationRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](_AuthenticationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    41082:
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationModule": function AuthenticationModule() {
          return (
            /* binding */
            _AuthenticationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication-routing.module */
      33365);
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin/signin.component */
      19320);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup/signup.component */
      7794);
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-feather */
      35411);
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-feather/icons */
      940);
      /* harmony import */


      var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot/forgot.component */
      97594);
      /* harmony import */


      var _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page500/page500.component */
      11194);
      /* harmony import */


      var _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./page404/page404.component */
      1991);
      /* harmony import */


      var _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset/reset.component */
      48855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var icons = {
        Facebook: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.Facebook,
        Twitter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.Twitter,
        Github: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.Github,
        Gitlab: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.Gitlab,
        User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.User,
        Key: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.Key,
        UserCheck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.UserCheck,
        Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.Mail
      };

      var _AuthenticationModule = function _AuthenticationModule() {
        _classCallCheck(this, _AuthenticationModule);
      };

      _AuthenticationModule.??fac = function AuthenticationModule_Factory(t) {
        return new (t || _AuthenticationModule)();
      };

      _AuthenticationModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({
        type: _AuthenticationModule
      });
      _AuthenticationModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, angular_feather__WEBPACK_IMPORTED_MODULE_11__.FeatherModule.pick(icons)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](_AuthenticationModule, {
          declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__.SigninComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__.ForgotComponent, _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__.Page500Component, _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__.Page404Component, _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__.ResetComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, angular_feather__WEBPACK_IMPORTED_MODULE_11__.FeatherModule]
        });
      })();
      /***/

    },

    /***/
    97594:
    /*!***********************************************************!*\
      !*** ./src/app/authentication/forgot/forgot.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotComponent": function ForgotComponent() {
          return (
            /* binding */
            _ForgotComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _ForgotComponent = /*#__PURE__*/function () {
        function _ForgotComponent() {
          _classCallCheck(this, _ForgotComponent);
        }

        _createClass(_ForgotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ForgotComponent;
      }();

      _ForgotComponent.??fac = function ForgotComponent_Factory(t) {
        return new (t || _ForgotComponent)();
      };

      _ForgotComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ForgotComponent,
        selectors: [["app-forgot"]],
        decls: 20,
        vars: 0,
        consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "row"], [1, "auth-card"], [1, "col-12"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-body"], [1, "text-muted"], ["method", "POST"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "tabindex", "1", "required", "", "autofocus", "", 1, "form-control"], ["type", "submit", "tabindex", "4", 1, "btn", "btn-primary", "btn-lg", "btn-block"]],
        template: function ForgotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Forgot Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "We will send a link to reset your password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Forgot Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    },

    /***/
    1991:
    /*!*************************************************************!*\
      !*** ./src/app/authentication/page404/page404.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Page404Component": function Page404Component() {
          return (
            /* binding */
            _Page404Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Page404Component = /*#__PURE__*/function () {
        function _Page404Component() {
          _classCallCheck(this, _Page404Component);
        }

        _createClass(_Page404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _Page404Component;
      }();

      _Page404Component.??fac = function Page404Component_Factory(t) {
        return new (t || _Page404Component)();
      };

      _Page404Component.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _Page404Component,
        selectors: [["app-page404"]],
        decls: 22,
        vars: 0,
        consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "page-error"], [1, "page-inner"], [1, "page-description"], [1, "page-search"], [1, "form-group", "floating-addon", "floating-addon-not-append"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-group-append"], [1, "btn", "btn-primary", "btn-lg"], [1, "mt-3"], ["routerLink", "/authentication/signin"]],
        template: function Page404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " The page you were looking for could not be found. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Back to Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    11194:
    /*!*************************************************************!*\
      !*** ./src/app/authentication/page500/page500.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Page500Component": function Page500Component() {
          return (
            /* binding */
            _Page500Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _Page500Component = /*#__PURE__*/function () {
        function _Page500Component() {
          _classCallCheck(this, _Page500Component);
        }

        _createClass(_Page500Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _Page500Component;
      }();

      _Page500Component.??fac = function Page500Component_Factory(t) {
        return new (t || _Page500Component)();
      };

      _Page500Component.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _Page500Component,
        selectors: [["app-page500"]],
        decls: 22,
        vars: 0,
        consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "page-error"], [1, "page-inner"], [1, "page-description"], [1, "page-search"], [1, "form-group", "floating-addon", "floating-addon-not-append"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "input-group-append"], [1, "btn", "btn-primary", "btn-lg"], [1, "mt-3"], ["routerLink", "/authentication/signin"]],
        template: function Page500Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Whoopps, something went wrong. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Back to Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNTAwLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    48855:
    /*!*********************************************************!*\
      !*** ./src/app/authentication/reset/reset.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetComponent": function ResetComponent() {
          return (
            /* binding */
            _ResetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _ResetComponent = /*#__PURE__*/function () {
        function _ResetComponent() {
          _classCallCheck(this, _ResetComponent);
        }

        _createClass(_ResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ResetComponent;
      }();

      _ResetComponent.??fac = function ResetComponent_Factory(t) {
        return new (t || _ResetComponent)();
      };

      _ResetComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ResetComponent,
        selectors: [["app-reset"]],
        decls: 31,
        vars: 0,
        consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "auth-card"], [1, "row"], [1, "col-12"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-body"], [1, "text-muted"], ["method", "POST"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "tabindex", "1", "required", "", "autofocus", "", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "data-indicator", "pwindicator", "name", "password", "tabindex", "2", "required", "", 1, "form-control", "pwstrength"], ["id", "pwindicator", 1, "pwindicator"], [1, "bar"], [1, "label"], ["for", "password-confirm"], ["id", "password-confirm", "type", "password", "name", "confirm-password", "tabindex", "2", "required", "", 1, "form-control"], ["type", "submit", "tabindex", "4", 1, "btn", "btn-primary", "btn-lg", "btn-block"]],
        template: function ResetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Enter Your New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Reset Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /***/
    },

    /***/
    19320:
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signin/signin.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninComponent": function SigninComponent() {
          return (
            /* binding */
            _SigninComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/service/auth.service */
      41782);
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-feather */
      35411);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function SigninComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.error);
        }
      }

      var _SigninComponent = /*#__PURE__*/function () {
        function _SigninComponent(formBuilder, router, authService) {
          _classCallCheck(this, _SigninComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authService = authService;
          this.submitted = false;
          this.error = '';
          this.hide = true;
        }

        _createClass(_SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: ['admin@email.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
              password: ['admin@123', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true;
            this.error = '';

            if (this.loginForm.invalid) {
              this.error = 'Username and Password not valid !';
              return;
            } else {
              this.authService.login(this.f.username.value, this.f.password.value).subscribe(function (res) {
                if (res) {
                  var token = _this.authService.currentUserValue.token;

                  if (token) {
                    _this.router.navigate(['/dashboard/main']);
                  }
                } else {
                  _this.error = 'Invalid Login';
                }
              }, function (error) {
                _this.error = error;
                _this.submitted = false;
              });
            }
          }
        }]);

        return _SigninComponent;
      }();

      _SigninComponent.??fac = function SigninComponent_Factory(t) {
        return new (t || _SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _SigninComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _SigninComponent,
        selectors: [["app-signin"]],
        decls: 67,
        vars: 2,
        consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "card", "login-card", "mb-0"], [1, "row", "no-gutters"], [1, "col-md-5"], ["src", "assets/images/login.jpg", "alt", "login", 1, "login-card-img"], [1, "col-md-7"], [1, "login-body"], [1, "text-center"], [1, "brand-wrapper"], ["src", "assets/images/logo.png", "alt", "logo", 1, "logo"], [1, "logo-name"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-12"], [1, "form-group", "position-relative"], [1, "text-danger"], ["name", "user", 1, "login-icons"], ["type", "email", "formControlName", "username", "placeholder", "Email", 1, "form-control", "psl-5"], ["name", "key", 1, "login-icons"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", "psl-5"], [1, "d-flex", "justify-content-between"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "customCheck1", "formControlName", "termcondition", 1, "form-check-input"], ["for", "customCheck1", 1, "form-check-label"], [1, "forgot-pass", "mb-0"], ["routerLink", "/authentication/forgot", 1, "text-dark", "fw-bold"], ["class", "alert alert-danger mb-3 msl-3", 4, "ngIf"], [1, "col-lg-12", "mb-0"], [1, "btn", "btn-primary", "auth-form-btn"], [1, "col-lg-12", "mt-4", "text-center"], [1, "list-unstyled", "social-icon", "mb-0", "mt-3"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea-social", "sm-icon"], ["name", "github", 1, "fea-social", "sm-icon"], ["name", "twitter", 1, "fea-social", "sm-icon"], ["name", "gitlab", 1, "fea-social", "sm-icon"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "msr-2"], ["routerLink", "/authentication/signup", 1, "text-dark", "fw-bold"], [1, "alert", "alert-danger", "mb-3", "msl-3"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Oreva");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_13_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Your Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "i-feather", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Remember me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Forgot password ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](41, SigninComponent_div_41_Template, 2, 1, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Or Login With");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "ul", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "i-feather", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "i-feather", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](57, "i-feather", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "i-feather", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "Don't have an account ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    7794:
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupComponent": function SignupComponent() {
          return (
            /* binding */
            _SignupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-feather */
      35411);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function SignupComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.error);
        }
      }

      var _SignupComponent = /*#__PURE__*/function () {
        function _SignupComponent(formBuilder) {
          _classCallCheck(this, _SignupComponent);

          this.formBuilder = formBuilder;
          this.submitted = false;
          this.error = '';
        }

        _createClass(_SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
              lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5)]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
              termcondition: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            this.error = '';

            if (this.registerForm.invalid) {
              this.error = 'Invalid data !';
              return;
            } else {// register user call here..
            }
          }
        }]);

        return _SignupComponent;
      }();

      _SignupComponent.??fac = function SignupComponent_Factory(t) {
        return new (t || _SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
      };

      _SignupComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _SignupComponent,
        selectors: [["app-signup"]],
        decls: 81,
        vars: 3,
        consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container", "register-container"], [1, "card", "register-card"], [1, "row", "no-gutters"], [1, "col-md-6"], ["src", "assets/images/register.jpg", "alt", "register", 1, "register-card-img"], [1, "register-body"], [1, "text-center"], [1, "brand-wrapper"], ["src", "assets/images/logo.png", "alt", "logo", 1, "logo"], [1, "logo-name"], [1, "login-form", "mt-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group", "position-relative"], [1, "text-danger"], ["name", "user", 1, "login-icons"], ["type", "text", "formControlName", "fname", "placeholder", "First Name", "required", "", 1, "form-control", "psl-5"], ["name", "user-check", 1, "login-icons"], ["type", "text", "formControlName", "lname", "placeholder", "Last Name", "required", "", 1, "form-control", "psl-5"], [1, "col-md-12"], ["name", "mail", 1, "login-icons"], ["type", "email", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control", "psl-5"], ["name", "key", 1, "login-icons"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "psl-5"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "customCheck1", "formControlName", "termcondition", 1, "form-check-input"], ["for", "customCheck1", 1, "form-check-label"], ["href", "javascript:void(0)", 1, "col-blue"], ["class", "alert alert-danger mb-3 msl-3", 4, "ngIf"], [1, "btn", "btn-primary", "auth-form-btn", 3, "disabled"], [1, "col-lg-12", "mt-4", "text-center"], [1, "list-unstyled", "social-icon", "mb-0", "mt-3"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea-social", "sm-icon"], ["name", "github", 1, "fea-social", "sm-icon"], ["name", "twitter", 1, "fea-social", "sm-icon"], ["name", "gitlab", 1, "fea-social", "sm-icon"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "msr-2"], ["routerLink", "/authentication/signin", 1, "text-dark", "fw-bold"], [1, "alert", "alert-danger", "mb-3", "msl-3"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Oreva");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_13_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "First name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i-feather", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Last name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i-feather", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Your Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i-feather", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i-feather", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " I Accept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Terms And Condition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, SignupComponent_div_55_Template, 2, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Or Signup With");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "ul", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i-feather", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i-feather", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i-feather", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i-feather", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "small", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Already have an account ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.registerForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_authentication_authentication_module_ts-es5.js.map