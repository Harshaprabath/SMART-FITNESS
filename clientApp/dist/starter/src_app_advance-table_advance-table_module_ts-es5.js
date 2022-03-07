(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkoreva"] = self["webpackChunkoreva"] || []).push([["src_app_advance-table_advance-table_module_ts"], {
    /***/
    38550:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClickType": function ClickType() {
          return (
            /* binding */
            _ClickType
          );
        },

        /* harmony export */
        "ColumnChangesService": function ColumnChangesService() {
          return (
            /* binding */
            _ColumnChangesService
          );
        },

        /* harmony export */
        "ColumnMode": function ColumnMode() {
          return (
            /* binding */
            _ColumnMode
          );
        },

        /* harmony export */
        "ContextmenuType": function ContextmenuType() {
          return (
            /* binding */
            _ContextmenuType
          );
        },

        /* harmony export */
        "DataTableBodyCellComponent": function DataTableBodyCellComponent() {
          return (
            /* binding */
            _DataTableBodyCellComponent
          );
        },

        /* harmony export */
        "DataTableBodyComponent": function DataTableBodyComponent() {
          return (
            /* binding */
            _DataTableBodyComponent
          );
        },

        /* harmony export */
        "DataTableBodyRowComponent": function DataTableBodyRowComponent() {
          return (
            /* binding */
            _DataTableBodyRowComponent
          );
        },

        /* harmony export */
        "DataTableColumnCellDirective": function DataTableColumnCellDirective() {
          return (
            /* binding */
            _DataTableColumnCellDirective
          );
        },

        /* harmony export */
        "DataTableColumnCellTreeToggle": function DataTableColumnCellTreeToggle() {
          return (
            /* binding */
            _DataTableColumnCellTreeToggle
          );
        },

        /* harmony export */
        "DataTableColumnDirective": function DataTableColumnDirective() {
          return (
            /* binding */
            _DataTableColumnDirective
          );
        },

        /* harmony export */
        "DataTableColumnHeaderDirective": function DataTableColumnHeaderDirective() {
          return (
            /* binding */
            _DataTableColumnHeaderDirective
          );
        },

        /* harmony export */
        "DataTableFooterComponent": function DataTableFooterComponent() {
          return (
            /* binding */
            _DataTableFooterComponent
          );
        },

        /* harmony export */
        "DataTableFooterTemplateDirective": function DataTableFooterTemplateDirective() {
          return (
            /* binding */
            _DataTableFooterTemplateDirective
          );
        },

        /* harmony export */
        "DataTableHeaderCellComponent": function DataTableHeaderCellComponent() {
          return (
            /* binding */
            _DataTableHeaderCellComponent
          );
        },

        /* harmony export */
        "DataTableHeaderComponent": function DataTableHeaderComponent() {
          return (
            /* binding */
            _DataTableHeaderComponent
          );
        },

        /* harmony export */
        "DataTablePagerComponent": function DataTablePagerComponent() {
          return (
            /* binding */
            _DataTablePagerComponent
          );
        },

        /* harmony export */
        "DataTableRowWrapperComponent": function DataTableRowWrapperComponent() {
          return (
            /* binding */
            _DataTableRowWrapperComponent
          );
        },

        /* harmony export */
        "DataTableSelectionComponent": function DataTableSelectionComponent() {
          return (
            /* binding */
            _DataTableSelectionComponent
          );
        },

        /* harmony export */
        "DataTableSummaryRowComponent": function DataTableSummaryRowComponent() {
          return (
            /* binding */
            _DataTableSummaryRowComponent
          );
        },

        /* harmony export */
        "DatatableComponent": function DatatableComponent() {
          return (
            /* binding */
            _DatatableComponent
          );
        },

        /* harmony export */
        "DatatableFooterDirective": function DatatableFooterDirective() {
          return (
            /* binding */
            _DatatableFooterDirective
          );
        },

        /* harmony export */
        "DatatableGroupHeaderDirective": function DatatableGroupHeaderDirective() {
          return (
            /* binding */
            _DatatableGroupHeaderDirective
          );
        },

        /* harmony export */
        "DatatableGroupHeaderTemplateDirective": function DatatableGroupHeaderTemplateDirective() {
          return (
            /* binding */
            _DatatableGroupHeaderTemplateDirective
          );
        },

        /* harmony export */
        "DatatableRowDetailDirective": function DatatableRowDetailDirective() {
          return (
            /* binding */
            _DatatableRowDetailDirective
          );
        },

        /* harmony export */
        "DatatableRowDetailTemplateDirective": function DatatableRowDetailTemplateDirective() {
          return (
            /* binding */
            _DatatableRowDetailTemplateDirective
          );
        },

        /* harmony export */
        "DimensionsHelper": function DimensionsHelper() {
          return (
            /* binding */
            _DimensionsHelper
          );
        },

        /* harmony export */
        "DraggableDirective": function DraggableDirective() {
          return (
            /* binding */
            _DraggableDirective
          );
        },

        /* harmony export */
        "Keys": function Keys() {
          return (
            /* binding */
            _Keys
          );
        },

        /* harmony export */
        "LongPressDirective": function LongPressDirective() {
          return (
            /* binding */
            _LongPressDirective
          );
        },

        /* harmony export */
        "NgxDatatableModule": function NgxDatatableModule() {
          return (
            /* binding */
            _NgxDatatableModule
          );
        },

        /* harmony export */
        "OrderableDirective": function OrderableDirective() {
          return (
            /* binding */
            _OrderableDirective
          );
        },

        /* harmony export */
        "ProgressBarComponent": function ProgressBarComponent() {
          return (
            /* binding */
            _ProgressBarComponent
          );
        },

        /* harmony export */
        "ResizeableDirective": function ResizeableDirective() {
          return (
            /* binding */
            _ResizeableDirective
          );
        },

        /* harmony export */
        "RowHeightCache": function RowHeightCache() {
          return (
            /* binding */
            _RowHeightCache
          );
        },

        /* harmony export */
        "ScrollbarHelper": function ScrollbarHelper() {
          return (
            /* binding */
            _ScrollbarHelper
          );
        },

        /* harmony export */
        "ScrollerComponent": function ScrollerComponent() {
          return (
            /* binding */
            _ScrollerComponent
          );
        },

        /* harmony export */
        "SelectionType": function SelectionType() {
          return (
            /* binding */
            _SelectionType
          );
        },

        /* harmony export */
        "SortDirection": function SortDirection() {
          return (
            /* binding */
            _SortDirection
          );
        },

        /* harmony export */
        "SortType": function SortType() {
          return (
            /* binding */
            _SortType
          );
        },

        /* harmony export */
        "VisibilityDirective": function VisibilityDirective() {
          return (
            /* binding */
            _VisibilityDirective
          );
        },

        /* harmony export */
        "adjustColumnWidths": function adjustColumnWidths() {
          return (
            /* binding */
            _adjustColumnWidths
          );
        },

        /* harmony export */
        "camelCase": function camelCase() {
          return (
            /* binding */
            _camelCase
          );
        },

        /* harmony export */
        "columnGroupWidths": function columnGroupWidths() {
          return (
            /* binding */
            _columnGroupWidths
          );
        },

        /* harmony export */
        "columnTotalWidth": function columnTotalWidth() {
          return (
            /* binding */
            _columnTotalWidth
          );
        },

        /* harmony export */
        "columnsByPin": function columnsByPin() {
          return (
            /* binding */
            _columnsByPin
          );
        },

        /* harmony export */
        "columnsByPinArr": function columnsByPinArr() {
          return (
            /* binding */
            _columnsByPinArr
          );
        },

        /* harmony export */
        "columnsTotalWidth": function columnsTotalWidth() {
          return (
            /* binding */
            _columnsTotalWidth
          );
        },

        /* harmony export */
        "deCamelCase": function deCamelCase() {
          return (
            /* binding */
            _deCamelCase
          );
        },

        /* harmony export */
        "deepValueGetter": function deepValueGetter() {
          return (
            /* binding */
            _deepValueGetter
          );
        },

        /* harmony export */
        "elementsFromPoint": function elementsFromPoint() {
          return (
            /* binding */
            _elementsFromPoint
          );
        },

        /* harmony export */
        "emptyStringGetter": function emptyStringGetter() {
          return (
            /* binding */
            _emptyStringGetter
          );
        },

        /* harmony export */
        "forceFillColumnWidths": function forceFillColumnWidths() {
          return (
            /* binding */
            _forceFillColumnWidths
          );
        },

        /* harmony export */
        "getTotalFlexGrow": function getTotalFlexGrow() {
          return (
            /* binding */
            _getTotalFlexGrow
          );
        },

        /* harmony export */
        "getVendorPrefixedName": function getVendorPrefixedName() {
          return (
            /* binding */
            _getVendorPrefixedName
          );
        },

        /* harmony export */
        "getterForProp": function getterForProp() {
          return (
            /* binding */
            _getterForProp
          );
        },

        /* harmony export */
        "groupRowsByParents": function groupRowsByParents() {
          return (
            /* binding */
            _groupRowsByParents
          );
        },

        /* harmony export */
        "id": function id() {
          return (
            /* binding */
            _id
          );
        },

        /* harmony export */
        "isNullOrUndefined": function isNullOrUndefined() {
          return (
            /* binding */
            _isNullOrUndefined
          );
        },

        /* harmony export */
        "nextSortDir": function nextSortDir() {
          return (
            /* binding */
            _nextSortDir
          );
        },

        /* harmony export */
        "numericIndexGetter": function numericIndexGetter() {
          return (
            /* binding */
            _numericIndexGetter
          );
        },

        /* harmony export */
        "optionalGetterForProp": function optionalGetterForProp() {
          return (
            /* binding */
            _optionalGetterForProp
          );
        },

        /* harmony export */
        "orderByComparator": function orderByComparator() {
          return (
            /* binding */
            _orderByComparator
          );
        },

        /* harmony export */
        "selectRows": function selectRows() {
          return (
            /* binding */
            _selectRows
          );
        },

        /* harmony export */
        "selectRowsBetween": function selectRowsBetween() {
          return (
            /* binding */
            _selectRowsBetween
          );
        },

        /* harmony export */
        "setColumnDefaults": function setColumnDefaults() {
          return (
            /* binding */
            _setColumnDefaults
          );
        },

        /* harmony export */
        "shallowValueGetter": function shallowValueGetter() {
          return (
            /* binding */
            _shallowValueGetter
          );
        },

        /* harmony export */
        "sortRows": function sortRows() {
          return (
            /* binding */
            _sortRows
          );
        },

        /* harmony export */
        "throttle": function throttle() {
          return (
            /* binding */
            _throttle
          );
        },

        /* harmony export */
        "throttleable": function throttleable() {
          return (
            /* binding */
            _throttleable
          );
        },

        /* harmony export */
        "translateTemplates": function translateTemplates() {
          return (
            /* binding */
            _translateTemplates
          );
        },

        /* harmony export */
        "translateXY": function translateXY() {
          return (
            /* binding */
            _translateXY
          );
        },

        /* harmony export */
        "ɵ0": function ɵ0() {
          return (
            /* binding */
            _ɵ
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      47762);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      96937);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      45094);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      25755);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /**
       * Gets the width of the scrollbar.  Nesc for windows
       * http://stackoverflow.com/a/13382873/888165
       */


      var _c0 = ["*"];

      function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-progress");
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 9);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.onTreeAction(group_r7);
          })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r1.onActivate($event, ctx_r15.indexes.first + i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var i_r20 = restoredCtx.index;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r1.onActivate($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
        }

        if (rf & 2) {
          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.rowContextmenu.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 16);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-scroller", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.onBodyScroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
        }
      }

      function DataTableBodyComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header-cell", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var column_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.onColumnResized($event, column_r3);
          })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.onLongPressStart($event);
          })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.onLongPressEnd($event);
          })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.onSort($event);
          })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.select.emit($event);
          })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.columnContextmenu.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
        }
      }

      function DataTableHeaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colGroup_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
        }
      }

      function DatatableComponent_datatable_header_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onColumnSort($event);
          })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onColumnResize($event);
          })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onColumnReorder($event);
          })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onHeaderSelect($event);
          })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onColumnContextmenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
        }
      }

      function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-footer", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onFooterPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
        }
      }

      function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}

      function DataTableHeaderCellComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
        }
      }

      function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.select.emit(!ctx_r5.allRowsSelected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
        }
      }

      function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onSort();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}

      function DataTableHeaderCellComponent_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
        }
      }

      function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1, a2, a3, a4) {
        return {
          rowCount: a0,
          pageSize: a1,
          selectedCount: a2,
          curPage: a3,
          offset: a4
        };
      };

      function DataTableFooterComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
        }
      }

      function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
        }
      }

      function DataTableFooterComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
        }
      }

      function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-pager", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.page.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "selected-count": a0
        };
      };

      function DataTablePagerComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var pg_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.selectPage(pg_r1.number);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pg_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
        }
      }

      function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-cell", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ii_r5 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.onActivate($event, ii_r5);
          })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.onTreeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
        }
      }

      function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colGroup_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
        }
      }

      function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

      function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
        }
      }

      function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
        }
      }

      function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
        }
      }

      function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}

      function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
        }
      }

      function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
        }
      }

      var _c3 = ["cellTemplate"];

      function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onCheckboxChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.onTreeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
        }
      }

      function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

      var _c4 = function _c4(a0) {
        return {
          cellContext: a0
        };
      };

      function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
        }
      }

      function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
        }
      }

      function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}

      function DataTableBodyCellComponent_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
        }
      }

      function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-body-row", 1);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
        }
      }

      var _ScrollbarHelper = /*#__PURE__*/function () {
        function _ScrollbarHelper(document) {
          _classCallCheck(this, _ScrollbarHelper);

          this.document = document;
          this.width = this.getWidth();
        }

        _createClass(_ScrollbarHelper, [{
          key: "getWidth",
          value: function getWidth() {
            var outer = this.document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            outer.style.msOverflowStyle = 'scrollbar';
            this.document.body.appendChild(outer);
            var widthNoScroll = outer.offsetWidth;
            outer.style.overflow = 'scroll';
            var inner = this.document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);
            var widthWithScroll = inner.offsetWidth;
            outer.parentNode.removeChild(outer);
            return widthNoScroll - widthWithScroll;
          }
        }]);

        return _ScrollbarHelper;
      }();

      _ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
        return new (t || _ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _ScrollbarHelper.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ScrollbarHelper,
        factory: _ScrollbarHelper.ɵfac
      });

      _ScrollbarHelper.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };
      /**
       * Gets the width of the scrollbar.  Nesc for windows
       * http://stackoverflow.com/a/13382873/888165
       */


      var _DimensionsHelper = /*#__PURE__*/function () {
        function _DimensionsHelper() {
          _classCallCheck(this, _DimensionsHelper);
        }

        _createClass(_DimensionsHelper, [{
          key: "getDimensions",
          value: function getDimensions(element) {
            return element.getBoundingClientRect();
          }
        }]);

        return _DimensionsHelper;
      }();

      _DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
        return new (t || _DimensionsHelper)();
      };

      _DimensionsHelper.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _DimensionsHelper,
        factory: _DimensionsHelper.ɵfac
      });
      /**
       * service to make DatatableComponent aware of changes to
       * input bindings of DataTableColumnDirective
       */

      var _ColumnChangesService = /*#__PURE__*/function () {
        function _ColumnChangesService() {
          _classCallCheck(this, _ColumnChangesService);

          this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_ColumnChangesService, [{
          key: "columnInputChanges$",
          get: function get() {
            return this.columnInputChanges.asObservable();
          }
        }, {
          key: "onInputChange",
          value: function onInputChange() {
            this.columnInputChanges.next();
          }
        }]);

        return _ColumnChangesService;
      }();

      _ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
        return new (t || _ColumnChangesService)();
      };

      _ColumnChangesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ColumnChangesService,
        factory: _ColumnChangesService.ɵfac
      });

      var _DataTableFooterTemplateDirective = function _DataTableFooterTemplateDirective(template) {
        _classCallCheck(this, _DataTableFooterTemplateDirective);

        this.template = template;
      };

      _DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
        return new (t || _DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _DataTableFooterTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DataTableFooterTemplateDirective,
        selectors: [["", "ngx-datatable-footer-template", ""]]
      });

      _DataTableFooterTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };
      /**
       * Visibility Observer Directive
       *
       * Usage:
       *
       * 		<div
       * 			visibilityObserver
       * 			(visible)="onVisible($event)">
       * 		</div>
       *
       */


      var _VisibilityDirective = /*#__PURE__*/function () {
        function _VisibilityDirective(element, zone) {
          _classCallCheck(this, _VisibilityDirective);

          this.element = element;
          this.zone = zone;
          this.isVisible = false;
          this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_VisibilityDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.runCheck();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this.timeout);
          }
        }, {
          key: "onVisibilityChange",
          value: function onVisibilityChange() {
            var _this = this;

            // trigger zone recalc for columns
            this.zone.run(function () {
              _this.isVisible = true;

              _this.visible.emit(true);
            });
          }
        }, {
          key: "runCheck",
          value: function runCheck() {
            var _this2 = this;

            var check = function check() {
              // https://davidwalsh.name/offsetheight-visibility
              var _this2$element$native = _this2.element.nativeElement,
                  offsetHeight = _this2$element$native.offsetHeight,
                  offsetWidth = _this2$element$native.offsetWidth;

              if (offsetHeight && offsetWidth) {
                clearTimeout(_this2.timeout);

                _this2.onVisibilityChange();
              } else {
                clearTimeout(_this2.timeout);

                _this2.zone.runOutsideAngular(function () {
                  _this2.timeout = setTimeout(function () {
                    return check();
                  }, 50);
                });
              }
            };

            this.timeout = setTimeout(function () {
              return check();
            });
          }
        }]);

        return _VisibilityDirective;
      }();

      _VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
        return new (t || _VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _VisibilityDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _VisibilityDirective,
        selectors: [["", "visibilityObserver", ""]],
        hostVars: 2,
        hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
          }
        },
        outputs: {
          visible: "visible"
        }
      });

      _VisibilityDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      _VisibilityDirective.propDecorators = {
        isVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.visible']
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };
      /**
       * Draggable Directive for Angular2
       *
       * Inspiration:
       *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
       *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
       *
       */

      var _DraggableDirective = /*#__PURE__*/function () {
        function _DraggableDirective(element) {
          _classCallCheck(this, _DraggableDirective);

          this.dragX = true;
          this.dragY = true;
          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.isDragging = false;
          this.element = element.nativeElement;
        }

        _createClass(_DraggableDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
              this.onMousedown(changes['dragEventTarget'].currentValue);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubscription();
          }
        }, {
          key: "onMouseup",
          value: function onMouseup(event) {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.element.classList.remove('dragging');

            if (this.subscription) {
              this._destroySubscription();

              this.dragEnd.emit({
                event: event,
                element: this.element,
                model: this.dragModel
              });
            }
          }
        }, {
          key: "onMousedown",
          value: function onMousedown(event) {
            var _this3 = this;

            // we only want to drag the inner header text
            var isDragElm = event.target.classList.contains('draggable');

            if (isDragElm && (this.dragX || this.dragY)) {
              event.preventDefault();
              this.isDragging = true;
              var mouseDownPos = {
                x: event.clientX,
                y: event.clientY
              };
              var mouseup = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
              this.subscription = mouseup.subscribe(function (ev) {
                return _this3.onMouseup(ev);
              });
              var mouseMoveSub = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(function (ev) {
                return _this3.move(ev, mouseDownPos);
              });
              this.subscription.add(mouseMoveSub);
              this.dragStart.emit({
                event: event,
                element: this.element,
                model: this.dragModel
              });
            }
          }
        }, {
          key: "move",
          value: function move(event, mouseDownPos) {
            if (!this.isDragging) return;
            var x = event.clientX - mouseDownPos.x;
            var y = event.clientY - mouseDownPos.y;
            if (this.dragX) this.element.style.left = "".concat(x, "px");
            if (this.dragY) this.element.style.top = "".concat(y, "px");
            this.element.classList.add('dragging');
            this.dragging.emit({
              event: event,
              element: this.element,
              model: this.dragModel
            });
          }
        }, {
          key: "_destroySubscription",
          value: function _destroySubscription() {
            if (this.subscription) {
              this.subscription.unsubscribe();
              this.subscription = undefined;
            }
          }
        }]);

        return _DraggableDirective;
      }();

      _DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
        return new (t || _DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _DraggableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DraggableDirective,
        selectors: [["", "draggable", ""]],
        inputs: {
          dragX: "dragX",
          dragY: "dragY",
          dragEventTarget: "dragEventTarget",
          dragModel: "dragModel"
        },
        outputs: {
          dragStart: "dragStart",
          dragging: "dragging",
          dragEnd: "dragEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _DraggableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _DraggableDirective.propDecorators = {
        dragEventTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dragModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dragX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dragY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      var _ResizeableDirective = /*#__PURE__*/function () {
        function _ResizeableDirective(element, renderer) {
          _classCallCheck(this, _ResizeableDirective);

          this.renderer = renderer;
          this.resizeEnabled = true;
          this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.resizing = false;
          this.element = element.nativeElement;
        }

        _createClass(_ResizeableDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var renderer2 = this.renderer;
            this.resizeHandle = renderer2.createElement('span');

            if (this.resizeEnabled) {
              renderer2.addClass(this.resizeHandle, 'resize-handle');
            } else {
              renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
            }

            renderer2.appendChild(this.element, this.resizeHandle);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubscription();

            if (this.renderer.destroyNode) {
              this.renderer.destroyNode(this.resizeHandle);
            } else if (this.resizeHandle) {
              this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
            }
          }
        }, {
          key: "onMouseup",
          value: function onMouseup() {
            this.resizing = false;

            if (this.subscription && !this.subscription.closed) {
              this._destroySubscription();

              this.resize.emit(this.element.clientWidth);
            }
          }
        }, {
          key: "onMousedown",
          value: function onMousedown(event) {
            var _this4 = this;

            var isHandle = event.target.classList.contains('resize-handle');
            var initialWidth = this.element.clientWidth;
            var mouseDownScreenX = event.screenX;

            if (isHandle) {
              event.stopPropagation();
              this.resizing = true;
              var mouseup = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
              this.subscription = mouseup.subscribe(function (ev) {
                return _this4.onMouseup();
              });
              var mouseMoveSub = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(function (e) {
                return _this4.move(e, initialWidth, mouseDownScreenX);
              });
              this.subscription.add(mouseMoveSub);
            }
          }
        }, {
          key: "move",
          value: function move(event, initialWidth, mouseDownScreenX) {
            var movementX = event.screenX - mouseDownScreenX;
            var newWidth = initialWidth + movementX;
            var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
            var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;

            if (overMinWidth && underMaxWidth) {
              this.element.style.width = "".concat(newWidth, "px");
            }
          }
        }, {
          key: "_destroySubscription",
          value: function _destroySubscription() {
            if (this.subscription) {
              this.subscription.unsubscribe();
              this.subscription = undefined;
            }
          }
        }]);

        return _ResizeableDirective;
      }();

      _ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
        return new (t || _ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _ResizeableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ResizeableDirective,
        selectors: [["", "resizeable", ""]],
        hostVars: 2,
        hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
              return ctx.onMousedown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
          }
        },
        inputs: {
          resizeEnabled: "resizeEnabled",
          minWidth: "minWidth",
          maxWidth: "maxWidth"
        },
        outputs: {
          resize: "resize"
        }
      });

      _ResizeableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }];
      };

      _ResizeableDirective.propDecorators = {
        resizeEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        onMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mousedown', ['$event']]
        }]
      };

      var _OrderableDirective = /*#__PURE__*/function () {
        function _OrderableDirective(differs, document) {
          _classCallCheck(this, _OrderableDirective);

          this.document = document;
          this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.differ = differs.find({}).create();
        }

        _createClass(_OrderableDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            // HACK: Investigate Better Way
            this.updateSubscriptions();
            this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.draggables.forEach(function (d) {
              d.dragStart.unsubscribe();
              d.dragging.unsubscribe();
              d.dragEnd.unsubscribe();
            });
          }
        }, {
          key: "updateSubscriptions",
          value: function updateSubscriptions() {
            var _this5 = this;

            var diffs = this.differ.diff(this.createMapDiffs());

            if (diffs) {
              var subscribe = function subscribe(_ref) {
                var currentValue = _ref.currentValue,
                    previousValue = _ref.previousValue;
                unsubscribe({
                  previousValue: previousValue
                });

                if (currentValue) {
                  currentValue.dragStart.subscribe(_this5.onDragStart.bind(_this5));
                  currentValue.dragging.subscribe(_this5.onDragging.bind(_this5));
                  currentValue.dragEnd.subscribe(_this5.onDragEnd.bind(_this5));
                }
              };

              var unsubscribe = function unsubscribe(_ref2) {
                var previousValue = _ref2.previousValue;

                if (previousValue) {
                  previousValue.dragStart.unsubscribe();
                  previousValue.dragging.unsubscribe();
                  previousValue.dragEnd.unsubscribe();
                }
              };

              diffs.forEachAddedItem(subscribe); // diffs.forEachChangedItem(subscribe.bind(this));

              diffs.forEachRemovedItem(unsubscribe);
            }
          }
        }, {
          key: "onDragStart",
          value: function onDragStart() {
            this.positions = {};
            var i = 0;

            var _iterator = _createForOfIteratorHelper(this.draggables.toArray()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var dragger = _step.value;
                var elm = dragger.element;
                var left = parseInt(elm.offsetLeft.toString(), 0);
                this.positions[dragger.dragModel.prop] = {
                  left: left,
                  right: left + parseInt(elm.offsetWidth.toString(), 0),
                  index: i++,
                  element: elm
                };
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "onDragging",
          value: function onDragging(_ref3) {
            var element = _ref3.element,
                model = _ref3.model,
                event = _ref3.event;
            var prevPos = this.positions[model.prop];
            var target = this.isTarget(model, event);

            if (target) {
              if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                  prevIndex: this.lastDraggingIndex,
                  newIndex: target.i,
                  initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
              }
            } else if (this.lastDraggingIndex !== prevPos.index) {
              this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
              });
              this.lastDraggingIndex = prevPos.index;
            }
          }
        }, {
          key: "onDragEnd",
          value: function onDragEnd(_ref4) {
            var element = _ref4.element,
                model = _ref4.model,
                event = _ref4.event;
            var prevPos = this.positions[model.prop];
            var target = this.isTarget(model, event);

            if (target) {
              this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model: model
              });
            }

            this.lastDraggingIndex = undefined;
            element.style.left = 'auto';
          }
        }, {
          key: "isTarget",
          value: function isTarget(model, event) {
            var _this6 = this;

            var i = 0;
            var x = event.x || event.clientX;
            var y = event.y || event.clientY;
            var targets = this.document.elementsFromPoint(x, y);

            var _loop = function _loop(prop) {
              // current column position which throws event.
              var pos = _this6.positions[prop]; // since we drag the inner span, we need to find it in the elements at the cursor

              if (model.prop !== prop && targets.find(function (el) {
                return el === pos.element;
              })) {
                return {
                  v: {
                    pos: pos,
                    i: i
                  }
                };
              }

              i++;
            };

            for (var prop in this.positions) {
              var _ret = _loop(prop);

              if (typeof _ret === "object") return _ret.v;
            }
          }
        }, {
          key: "createMapDiffs",
          value: function createMapDiffs() {
            return this.draggables.toArray().reduce(function (acc, curr) {
              acc[curr.dragModel.$$id] = curr;
              return acc;
            }, {});
          }
        }]);

        return _OrderableDirective;
      }();

      _OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
        return new (t || _OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _OrderableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OrderableDirective,
        selectors: [["", "orderable", ""]],
        contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DraggableDirective, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
          }
        },
        outputs: {
          reorder: "reorder",
          targetChanged: "targetChanged"
        }
      });

      _OrderableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      _OrderableDirective.propDecorators = {
        reorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        targetChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        draggables: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_DraggableDirective, {
            descendants: true
          }]
        }]
      };

      var _LongPressDirective = /*#__PURE__*/function () {
        function _LongPressDirective() {
          _classCallCheck(this, _LongPressDirective);

          this.pressEnabled = true;
          this.duration = 500;
          this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.mouseX = 0;
          this.mouseY = 0;
        }

        _createClass(_LongPressDirective, [{
          key: "press",
          get: function get() {
            return this.pressing;
          }
        }, {
          key: "isLongPress",
          get: function get() {
            return this.isLongPressing;
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            var _this7 = this;

            // don't do right/middle clicks
            if (event.which !== 1 || !this.pressEnabled) return; // don't start drag if its on resize handle

            var target = event.target;
            if (target.classList.contains('resize-handle')) return;
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            this.pressing = true;
            this.isLongPressing = false;
            var mouseup = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
            this.subscription = mouseup.subscribe(function (ev) {
              return _this7.onMouseup();
            });
            this.timeout = setTimeout(function () {
              _this7.isLongPressing = true;

              _this7.longPressStart.emit({
                event: event,
                model: _this7.pressModel
              });

              _this7.subscription.add((0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(function (mouseEvent) {
                return _this7.onMouseMove(mouseEvent);
              }));

              _this7.loop(event);
            }, this.duration);
            this.loop(event);
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(event) {
            if (this.pressing && !this.isLongPressing) {
              var xThres = Math.abs(event.clientX - this.mouseX) > 10;
              var yThres = Math.abs(event.clientY - this.mouseY) > 10;

              if (xThres || yThres) {
                this.endPress();
              }
            }
          }
        }, {
          key: "loop",
          value: function loop(event) {
            var _this8 = this;

            if (this.isLongPressing) {
              this.timeout = setTimeout(function () {
                _this8.longPressing.emit({
                  event: event,
                  model: _this8.pressModel
                });

                _this8.loop(event);
              }, 50);
            }
          }
        }, {
          key: "endPress",
          value: function endPress() {
            clearTimeout(this.timeout);
            this.isLongPressing = false;
            this.pressing = false;

            this._destroySubscription();

            this.longPressEnd.emit({
              model: this.pressModel
            });
          }
        }, {
          key: "onMouseup",
          value: function onMouseup() {
            this.endPress();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubscription();
          }
        }, {
          key: "_destroySubscription",
          value: function _destroySubscription() {
            if (this.subscription) {
              this.subscription.unsubscribe();
              this.subscription = undefined;
            }
          }
        }]);

        return _LongPressDirective;
      }();

      _LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
        return new (t || _LongPressDirective)();
      };

      _LongPressDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _LongPressDirective,
        selectors: [["", "long-press", ""]],
        hostVars: 4,
        hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
          }
        },
        inputs: {
          pressEnabled: "pressEnabled",
          duration: "duration",
          pressModel: "pressModel"
        },
        outputs: {
          longPressStart: "longPressStart",
          longPressing: "longPressing",
          longPressEnd: "longPressEnd"
        }
      });
      _LongPressDirective.propDecorators = {
        pressEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pressModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        longPressStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        longPressing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        longPressEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        press: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.press']
        }],
        isLongPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.longpress']
        }],
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mousedown', ['$event']]
        }]
      };

      var _ScrollerComponent = /*#__PURE__*/function () {
        function _ScrollerComponent(ngZone, element, renderer) {
          _classCallCheck(this, _ScrollerComponent);

          this.ngZone = ngZone;
          this.renderer = renderer;
          this.scrollbarV = false;
          this.scrollbarH = false;
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scrollYPos = 0;
          this.scrollXPos = 0;
          this.prevScrollYPos = 0;
          this.prevScrollXPos = 0;
          this._scrollEventListener = null;
          this.element = element.nativeElement;
        }

        _createClass(_ScrollerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // manual bind so we don't always listen
            if (this.scrollbarV || this.scrollbarH) {
              var renderer = this.renderer;
              this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
              this._scrollEventListener = this.onScrolled.bind(this);
              this.parentElement.addEventListener('scroll', this._scrollEventListener);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._scrollEventListener) {
              this.parentElement.removeEventListener('scroll', this._scrollEventListener);
              this._scrollEventListener = null;
            }
          }
        }, {
          key: "setOffset",
          value: function setOffset(offsetY) {
            if (this.parentElement) {
              this.parentElement.scrollTop = offsetY;
            }
          }
        }, {
          key: "onScrolled",
          value: function onScrolled(event) {
            var _this9 = this;

            var dom = event.currentTarget;
            requestAnimationFrame(function () {
              _this9.scrollYPos = dom.scrollTop;
              _this9.scrollXPos = dom.scrollLeft;

              _this9.updateOffset();
            });
          }
        }, {
          key: "updateOffset",
          value: function updateOffset() {
            var direction;

            if (this.scrollYPos < this.prevScrollYPos) {
              direction = 'down';
            } else if (this.scrollYPos > this.prevScrollYPos) {
              direction = 'up';
            }

            this.scroll.emit({
              direction: direction,
              scrollYPos: this.scrollYPos,
              scrollXPos: this.scrollXPos
            });
            this.prevScrollYPos = this.scrollYPos;
            this.prevScrollXPos = this.scrollXPos;
          }
        }]);

        return _ScrollerComponent;
      }();

      _ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
        return new (t || _ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _ScrollerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ScrollerComponent,
        selectors: [["datatable-scroller"]],
        hostAttrs: [1, "datatable-scroll"],
        hostVars: 4,
        hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
          }
        },
        inputs: {
          scrollbarV: "scrollbarV",
          scrollbarH: "scrollbarH",
          scrollHeight: "scrollHeight",
          scrollWidth: "scrollWidth"
        },
        outputs: {
          scroll: "scroll"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function ScrollerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      _ScrollerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }];
      };

      _ScrollerComponent.propDecorators = {
        scrollbarV: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.height.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrollWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.width.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      var _DatatableGroupHeaderTemplateDirective = function _DatatableGroupHeaderTemplateDirective(template) {
        _classCallCheck(this, _DatatableGroupHeaderTemplateDirective);

        this.template = template;
      };

      _DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
        return new (t || _DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _DatatableGroupHeaderTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DatatableGroupHeaderTemplateDirective,
        selectors: [["", "ngx-datatable-group-header-template", ""]]
      });

      _DatatableGroupHeaderTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      var _DatatableGroupHeaderDirective = /*#__PURE__*/function () {
        function _DatatableGroupHeaderDirective() {
          _classCallCheck(this, _DatatableGroupHeaderDirective);

          /**
           * Row height is required when virtual scroll is enabled.
           */
          this.rowHeight = 0;
          /**
           * Track toggling of group visibility
           */

          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_DatatableGroupHeaderDirective, [{
          key: "template",
          get: function get() {
            return this._templateInput || this._templateQuery;
          }
          /**
           * Toggle the expansion of a group
           */

        }, {
          key: "toggleExpandGroup",
          value: function toggleExpandGroup(group) {
            this.toggle.emit({
              type: 'group',
              value: group
            });
          }
          /**
           * Expand all groups
           */

        }, {
          key: "expandAllGroups",
          value: function expandAllGroups() {
            this.toggle.emit({
              type: 'all',
              value: true
            });
          }
          /**
           * Collapse all groups
           */

        }, {
          key: "collapseAllGroups",
          value: function collapseAllGroups() {
            this.toggle.emit({
              type: 'all',
              value: false
            });
          }
        }]);

        return _DatatableGroupHeaderDirective;
      }();

      _DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
        return new (t || _DatatableGroupHeaderDirective)();
      };

      _DatatableGroupHeaderDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DatatableGroupHeaderDirective,
        selectors: [["ngx-datatable-group-header"]],
        contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DatatableGroupHeaderTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
          }
        },
        inputs: {
          rowHeight: "rowHeight",
          _templateInput: ["template", "_templateInput"]
        },
        outputs: {
          toggle: "toggle"
        }
      });
      _DatatableGroupHeaderDirective.propDecorators = {
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _templateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['template']
        }],
        _templateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DatatableGroupHeaderTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            "static": true
          }]
        }],
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };
      /**
       * Always returns the empty string ''
       */

      function _emptyStringGetter() {
        return '';
      }
      /**
       * Returns the appropriate getter function for this kind of prop.
       * If prop == null, returns the emptyStringGetter.
       */


      function _getterForProp(prop) {
        if (prop == null) {
          return _emptyStringGetter;
        }

        if (typeof prop === 'number') {
          return _numericIndexGetter;
        } else {
          // deep or simple
          if (prop.indexOf('.') !== -1) {
            return _deepValueGetter;
          } else {
            return _shallowValueGetter;
          }
        }
      }
      /**
       * Returns the value at this numeric index.
       * @param row array of values
       * @param index numeric index
       * @returns any or '' if invalid index
       */


      function _numericIndexGetter(row, index) {
        if (row == null) {
          return '';
        } // mimic behavior of deepValueGetter


        if (!row || index == null) {
          return row;
        }

        var value = row[index];

        if (value == null) {
          return '';
        }

        return value;
      }
      /**
       * Returns the value of a field.
       * (more efficient than deepValueGetter)
       * @param obj object containing the field
       * @param fieldName field name string
       */


      function _shallowValueGetter(obj, fieldName) {
        if (obj == null) {
          return '';
        }

        if (!obj || !fieldName) {
          return obj;
        }

        var value = obj[fieldName];

        if (value == null) {
          return '';
        }

        return value;
      }
      /**
       * Returns a deep object given a string. zoo['animal.type']
       */


      function _deepValueGetter(obj, path) {
        if (obj == null) {
          return '';
        }

        if (!obj || !path) {
          return obj;
        } // check if path matches a root-level field
        // { "a.b.c": 123 }


        var current = obj[path];

        if (current !== undefined) {
          return current;
        }

        current = obj;
        var split = path.split('.');

        if (split.length) {
          for (var i = 0; i < split.length; i++) {
            current = current[split[i]]; // if found undefined, return empty string

            if (current === undefined || current === null) {
              return '';
            }
          }
        }

        return current;
      }

      function _optionalGetterForProp(prop) {
        return prop && function (row) {
          return _getterForProp(prop)(row, prop);
        };
      }
      /**
       * This functions rearrange items by their parents
       * Also sets the level value to each of the items
       *
       * Note: Expecting each item has a property called parentId
       * Note: This algorithm will fail if a list has two or more items with same ID
       * NOTE: This algorithm will fail if there is a deadlock of relationship
       *
       * For example,
       *
       * Input
       *
       * id -> parent
       * 1  -> 0
       * 2  -> 0
       * 3  -> 1
       * 4  -> 1
       * 5  -> 2
       * 7  -> 8
       * 6  -> 3
       *
       *
       * Output
       * id -> level
       * 1      -> 0
       * --3    -> 1
       * ----6  -> 2
       * --4    -> 1
       * 2      -> 0
       * --5    -> 1
       * 7     -> 8
       *
       *
       * @param rows
       *
       */


      function _groupRowsByParents(rows, from, to) {
        if (from && to) {
          var nodeById = {};
          var l = rows.length;
          var node = null;
          nodeById[0] = new TreeNode(); // that's the root node

          var uniqIDs = rows.reduce(function (arr, item) {
            var toValue = to(item);

            if (arr.indexOf(toValue) === -1) {
              arr.push(toValue);
            }

            return arr;
          }, []);

          for (var i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
          }

          for (var _i = 0; _i < l; _i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[_i])];
            var parent = 0;
            var fromValue = from(node.row);

            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
              parent = fromValue;
            }

            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
          }

          var resolvedRows = [];
          nodeById[0].flatten(function () {
            resolvedRows = [].concat(_toConsumableArray(resolvedRows), [this.row]);
          }, true);
          return resolvedRows;
        } else {
          return rows;
        }
      }

      var TreeNode = /*#__PURE__*/function () {
        function TreeNode() {
          var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _classCallCheck(this, TreeNode);

          if (!row) {
            row = {
              level: -1,
              treeStatus: 'expanded'
            };
          }

          this.row = row;
          this.parent = null;
          this.children = [];
        }

        _createClass(TreeNode, [{
          key: "flatten",
          value: function flatten(f, recursive) {
            if (this.row['treeStatus'] === 'expanded') {
              for (var i = 0, l = this.children.length; i < l; i++) {
                var child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive) child.flatten.apply(child, arguments);
              }
            }
          }
        }]);

        return TreeNode;
      }();
      /**
       * Converts strings from something to camel case
       * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
       */


      function _camelCase(str) {
        // Replace special characters with a space
        str = str.replace(/[^a-zA-Z0-9 ]/g, ' '); // put a space before an uppercase letter

        str = str.replace(/([a-z](?=[A-Z]))/g, '$1 '); // Lower case first character and some other stuff

        str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase(); // uppercase characters preceded by a space or number

        str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
          return b.trim() + c.toUpperCase();
        });
        return str;
      }
      /**
       * Converts strings from camel case to words
       * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
       */


      function _deCamelCase(str) {
        return str.replace(/([A-Z])/g, function (match) {
          return " ".concat(match);
        }).replace(/^./, function (match) {
          return match.toUpperCase();
        });
      }
      /**
       * Creates a unique object id.
       * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
       */


      function _id() {
        return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
      }
      /**
       * Sets the column defaults
       */


      function _setColumnDefaults(columns) {
        if (!columns) return; // Only one column should hold the tree view
        // Thus if multiple columns are provided with
        // isTreeColumn as true we take only the first one

        var treeColumnFound = false;

        var _iterator2 = _createForOfIteratorHelper(columns),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var column = _step2.value;

            if (!column.$$id) {
              column.$$id = _id();
            } // prop can be numeric; zero is valid not a missing prop
            // translate name => prop


            if (_isNullOrUndefined(column.prop) && column.name) {
              column.prop = _camelCase(column.name);
            }

            if (!column.$$valueGetter) {
              column.$$valueGetter = _getterForProp(column.prop);
            } // format props if no name passed


            if (!_isNullOrUndefined(column.prop) && _isNullOrUndefined(column.name)) {
              column.name = _deCamelCase(String(column.prop));
            }

            if (_isNullOrUndefined(column.prop) && _isNullOrUndefined(column.name)) {
              column.name = ''; // Fixes IE and Edge displaying `null`
            }

            if (!column.hasOwnProperty('resizeable')) {
              column.resizeable = true;
            }

            if (!column.hasOwnProperty('sortable')) {
              column.sortable = true;
            }

            if (!column.hasOwnProperty('draggable')) {
              column.draggable = true;
            }

            if (!column.hasOwnProperty('canAutoResize')) {
              column.canAutoResize = true;
            }

            if (!column.hasOwnProperty('width')) {
              column.width = 150;
            }

            if (!column.hasOwnProperty('isTreeColumn')) {
              column.isTreeColumn = false;
            } else {
              if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
              } else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      function _isNullOrUndefined(value) {
        return value === null || value === undefined;
      }
      /**
       * Translates templates definitions to objects
       */


      function _translateTemplates(templates) {
        var result = [];

        var _iterator3 = _createForOfIteratorHelper(templates),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var temp = _step3.value;
            var col = {};
            var props = Object.getOwnPropertyNames(temp);

            var _iterator4 = _createForOfIteratorHelper(props),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var prop = _step4.value;
                col[prop] = temp[prop];
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (temp.headerTemplate) {
              col.headerTemplate = temp.headerTemplate;
            }

            if (temp.cellTemplate) {
              col.cellTemplate = temp.cellTemplate;
            }

            if (temp.summaryFunc) {
              col.summaryFunc = temp.summaryFunc;
            }

            if (temp.summaryTemplate) {
              col.summaryTemplate = temp.summaryTemplate;
            }

            result.push(col);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return result;
      }

      var _ColumnMode;

      (function (ColumnMode) {
        ColumnMode["standard"] = "standard";
        ColumnMode["flex"] = "flex";
        ColumnMode["force"] = "force";
      })(_ColumnMode || (_ColumnMode = {}));

      var _SelectionType;

      (function (SelectionType) {
        SelectionType["single"] = "single";
        SelectionType["multi"] = "multi";
        SelectionType["multiClick"] = "multiClick";
        SelectionType["cell"] = "cell";
        SelectionType["checkbox"] = "checkbox";
      })(_SelectionType || (_SelectionType = {}));

      var _SortType;

      (function (SortType) {
        SortType["single"] = "single";
        SortType["multi"] = "multi";
      })(_SortType || (_SortType = {}));

      var _ContextmenuType;

      (function (ContextmenuType) {
        ContextmenuType["header"] = "header";
        ContextmenuType["body"] = "body";
      })(_ContextmenuType || (_ContextmenuType = {}));

      var _DataTableColumnHeaderDirective = function _DataTableColumnHeaderDirective(template) {
        _classCallCheck(this, _DataTableColumnHeaderDirective);

        this.template = template;
      };

      _DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
        return new (t || _DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _DataTableColumnHeaderDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DataTableColumnHeaderDirective,
        selectors: [["", "ngx-datatable-header-template", ""]]
      });

      _DataTableColumnHeaderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      var _DataTableColumnCellDirective = function _DataTableColumnCellDirective(template) {
        _classCallCheck(this, _DataTableColumnCellDirective);

        this.template = template;
      };

      _DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
        return new (t || _DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _DataTableColumnCellDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DataTableColumnCellDirective,
        selectors: [["", "ngx-datatable-cell-template", ""]]
      });

      _DataTableColumnCellDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      var _DataTableColumnCellTreeToggle = function _DataTableColumnCellTreeToggle(template) {
        _classCallCheck(this, _DataTableColumnCellTreeToggle);

        this.template = template;
      };

      _DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
        return new (t || _DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _DataTableColumnCellTreeToggle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DataTableColumnCellTreeToggle,
        selectors: [["", "ngx-datatable-tree-toggle", ""]]
      });

      _DataTableColumnCellTreeToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      var _DataTableColumnDirective = /*#__PURE__*/function () {
        function _DataTableColumnDirective(columnChangesService) {
          _classCallCheck(this, _DataTableColumnDirective);

          this.columnChangesService = columnChangesService;
          this.isFirstChange = true;
        }

        _createClass(_DataTableColumnDirective, [{
          key: "cellTemplate",
          get: function get() {
            return this._cellTemplateInput || this._cellTemplateQuery;
          }
        }, {
          key: "headerTemplate",
          get: function get() {
            return this._headerTemplateInput || this._headerTemplateQuery;
          }
        }, {
          key: "treeToggleTemplate",
          get: function get() {
            return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.isFirstChange) {
              this.isFirstChange = false;
            } else {
              this.columnChangesService.onInputChange();
            }
          }
        }]);

        return _DataTableColumnDirective;
      }();

      _DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
        return new (t || _DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ColumnChangesService));
      };

      _DataTableColumnDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DataTableColumnDirective,
        selectors: [["ngx-datatable-column"]],
        contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DataTableColumnCellDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DataTableColumnHeaderDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DataTableColumnCellTreeToggle, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
          }
        },
        inputs: {
          name: "name",
          prop: "prop",
          frozenLeft: "frozenLeft",
          frozenRight: "frozenRight",
          flexGrow: "flexGrow",
          resizeable: "resizeable",
          comparator: "comparator",
          pipe: "pipe",
          sortable: "sortable",
          draggable: "draggable",
          canAutoResize: "canAutoResize",
          minWidth: "minWidth",
          width: "width",
          maxWidth: "maxWidth",
          checkboxable: "checkboxable",
          headerCheckboxable: "headerCheckboxable",
          headerClass: "headerClass",
          cellClass: "cellClass",
          isTreeColumn: "isTreeColumn",
          treeLevelIndent: "treeLevelIndent",
          summaryFunc: "summaryFunc",
          summaryTemplate: "summaryTemplate",
          _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
          _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
          _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _DataTableColumnDirective.ctorParameters = function () {
        return [{
          type: _ColumnChangesService
        }];
      };

      _DataTableColumnDirective.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        prop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        frozenLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        frozenRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        flexGrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resizeable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        comparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        canAutoResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        checkboxable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerCheckboxable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cellClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isTreeColumn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        treeLevelIndent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryFunc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _cellTemplateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cellTemplate']
        }],
        _cellTemplateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DataTableColumnCellDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            "static": true
          }]
        }],
        _headerTemplateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['headerTemplate']
        }],
        _headerTemplateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DataTableColumnHeaderDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            "static": true
          }]
        }],
        _treeToggleTemplateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['treeToggleTemplate']
        }],
        _treeToggleTemplateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DataTableColumnCellTreeToggle, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            "static": true
          }]
        }]
      };

      var _DatatableRowDetailTemplateDirective = function _DatatableRowDetailTemplateDirective(template) {
        _classCallCheck(this, _DatatableRowDetailTemplateDirective);

        this.template = template;
      };

      _DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
        return new (t || _DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _DatatableRowDetailTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DatatableRowDetailTemplateDirective,
        selectors: [["", "ngx-datatable-row-detail-template", ""]]
      });

      _DatatableRowDetailTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      var _DatatableRowDetailDirective = /*#__PURE__*/function () {
        function _DatatableRowDetailDirective() {
          _classCallCheck(this, _DatatableRowDetailDirective);

          /**
           * The detail row height is required especially
           * when virtual scroll is enabled.
           */
          this.rowHeight = 0;
          /**
           * Row detail row visbility was toggled.
           */

          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_DatatableRowDetailDirective, [{
          key: "template",
          get: function get() {
            return this._templateInput || this._templateQuery;
          }
          /**
           * Toggle the expansion of the row
           */

        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            this.toggle.emit({
              type: 'row',
              value: row
            });
          }
          /**
           * API method to expand all the rows.
           */

        }, {
          key: "expandAllRows",
          value: function expandAllRows() {
            this.toggle.emit({
              type: 'all',
              value: true
            });
          }
          /**
           * API method to collapse all the rows.
           */

        }, {
          key: "collapseAllRows",
          value: function collapseAllRows() {
            this.toggle.emit({
              type: 'all',
              value: false
            });
          }
        }]);

        return _DatatableRowDetailDirective;
      }();

      _DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
        return new (t || _DatatableRowDetailDirective)();
      };

      _DatatableRowDetailDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DatatableRowDetailDirective,
        selectors: [["ngx-datatable-row-detail"]],
        contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DatatableRowDetailTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
          }
        },
        inputs: {
          rowHeight: "rowHeight",
          _templateInput: ["template", "_templateInput"]
        },
        outputs: {
          toggle: "toggle"
        }
      });
      _DatatableRowDetailDirective.propDecorators = {
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _templateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['template']
        }],
        _templateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DatatableRowDetailTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
            "static": true
          }]
        }],
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      var _DatatableFooterDirective = /*#__PURE__*/function () {
        function _DatatableFooterDirective() {
          _classCallCheck(this, _DatatableFooterDirective);
        }

        _createClass(_DatatableFooterDirective, [{
          key: "template",
          get: function get() {
            return this._templateInput || this._templateQuery;
          }
        }]);

        return _DatatableFooterDirective;
      }();

      _DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
        return new (t || _DatatableFooterDirective)();
      };

      _DatatableFooterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DatatableFooterDirective,
        selectors: [["ngx-datatable-footer"]],
        contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DataTableFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
          }
        },
        inputs: {
          footerHeight: "footerHeight",
          totalMessage: "totalMessage",
          selectedMessage: "selectedMessage",
          pagerLeftArrowIcon: "pagerLeftArrowIcon",
          pagerRightArrowIcon: "pagerRightArrowIcon",
          pagerPreviousIcon: "pagerPreviousIcon",
          pagerNextIcon: "pagerNextIcon",
          _templateInput: ["template", "_templateInput"]
        }
      });
      _DatatableFooterDirective.propDecorators = {
        footerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        totalMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectedMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerLeftArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerRightArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerPreviousIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _templateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['template']
        }],
        _templateQuery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DataTableFooterTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }]
      };
      /**
       * Returns the columns by pin.
       */

      function _columnsByPin(cols) {
        var ret = {
          left: [],
          center: [],
          right: []
        };

        if (cols) {
          var _iterator5 = _createForOfIteratorHelper(cols),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var col = _step5.value;

              if (col.frozenLeft) {
                ret.left.push(col);
              } else if (col.frozenRight) {
                ret.right.push(col);
              } else {
                ret.center.push(col);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        return ret;
      }
      /**
       * Returns the widths of all group sets of a column
       */


      function _columnGroupWidths(groups, all) {
        return {
          left: _columnTotalWidth(groups.left),
          center: _columnTotalWidth(groups.center),
          right: _columnTotalWidth(groups.right),
          total: Math.floor(_columnTotalWidth(all))
        };
      }
      /**
       * Calculates the total width of all columns and their groups
       */


      function _columnTotalWidth(columns, prop) {
        var totalWidth = 0;

        if (columns) {
          var _iterator6 = _createForOfIteratorHelper(columns),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var c = _step6.value;
              var has = prop && c[prop];
              var width = has ? c[prop] : c.width;
              totalWidth = totalWidth + parseFloat(width);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }

        return totalWidth;
      }
      /**
       * Calculates the total width of all columns and their groups
       */


      function _columnsTotalWidth(columns, prop) {
        var totalWidth = 0;

        var _iterator7 = _createForOfIteratorHelper(columns),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var column = _step7.value;
            var has = prop && column[prop];
            totalWidth = totalWidth + (has ? column[prop] : column.width);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return totalWidth;
      }

      function _columnsByPinArr(val) {
        var colsByPinArr = [];

        var colsByPin = _columnsByPin(val);

        colsByPinArr.push({
          type: 'left',
          columns: colsByPin['left']
        });
        colsByPinArr.push({
          type: 'center',
          columns: colsByPin['center']
        });
        colsByPinArr.push({
          type: 'right',
          columns: colsByPin['right']
        });
        return colsByPinArr;
      }
      /**
       * This object contains the cache of the various row heights that are present inside
       * the data table.   Its based on Fenwick tree data structure that helps with
       * querying sums that have time complexity of log n.
       *
       * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
       * https://github.com/mikolalysenko/fenwick-tree
       *
       */


      var _RowHeightCache = /*#__PURE__*/function () {
        function _RowHeightCache() {
          _classCallCheck(this, _RowHeightCache);

          /**
           * Tree Array stores the cumulative information of the row heights to perform efficient
           * range queries and updates.  Currently the tree is initialized to the base row
           * height instead of the detail row height.
           */
          this.treeArray = [];
        }
        /**
         * Clear the Tree array.
         */


        _createClass(_RowHeightCache, [{
          key: "clearCache",
          value: function clearCache() {
            this.treeArray = [];
          }
          /**
           * Initialize the Fenwick tree with row Heights.
           *
           * @param rows The array of rows which contain the expanded status.
           * @param rowHeight The row height.
           * @param detailRowHeight The detail row height.
           */

        }, {
          key: "initCache",
          value: function initCache(details) {
            var rows = details.rows,
                rowHeight = details.rowHeight,
                detailRowHeight = details.detailRowHeight,
                externalVirtual = details.externalVirtual,
                rowCount = details.rowCount,
                rowIndexes = details.rowIndexes,
                rowExpansions = details.rowExpansions;
            var isFn = typeof rowHeight === 'function';
            var isDetailFn = typeof detailRowHeight === 'function';

            if (!isFn && isNaN(rowHeight)) {
              throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (".concat(rowHeight, ") when 'scrollbarV' is enabled."));
            } // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.


            if (!isDetailFn && isNaN(detailRowHeight)) {
              throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (".concat(detailRowHeight, ") when 'scrollbarV' is enabled."));
            }

            var n = externalVirtual ? rowCount : rows.length;
            this.treeArray = new Array(n);

            for (var i = 0; i < n; ++i) {
              this.treeArray[i] = 0;
            }

            for (var _i2 = 0; _i2 < n; ++_i2) {
              var row = rows[_i2];
              var currentRowHeight = rowHeight;

              if (isFn) {
                currentRowHeight = rowHeight(row);
              } // Add the detail row height to the already expanded rows.
              // This is useful for the table that goes through a filter or sort.


              var expanded = rowExpansions.has(row);

              if (row && expanded) {
                if (isDetailFn) {
                  var index = rowIndexes.get(row);
                  currentRowHeight += detailRowHeight(row, index);
                } else {
                  currentRowHeight += detailRowHeight;
                }
              }

              this.update(_i2, currentRowHeight);
            }
          }
          /**
           * Given the ScrollY position i.e. sum, provide the rowIndex
           * that is present in the current view port.  Below handles edge cases.
           */

        }, {
          key: "getRowIndex",
          value: function getRowIndex(scrollY) {
            if (scrollY === 0) return 0;
            return this.calcRowIndex(scrollY);
          }
          /**
           * When a row is expanded or rowHeight is changed, update the height.  This can
           * be utilized in future when Angular Data table supports dynamic row heights.
           */

        }, {
          key: "update",
          value: function update(atRowIndex, byRowHeight) {
            if (!this.treeArray.length) {
              throw new Error("Update at index ".concat(atRowIndex, " with value ").concat(byRowHeight, " failed:\n        Row Height cache not initialized."));
            }

            var n = this.treeArray.length;
            atRowIndex |= 0;

            while (atRowIndex < n) {
              this.treeArray[atRowIndex] += byRowHeight;
              atRowIndex |= atRowIndex + 1;
            }
          }
          /**
           * Range Sum query from 1 to the rowIndex
           */

        }, {
          key: "query",
          value: function query(atIndex) {
            if (!this.treeArray.length) {
              throw new Error("query at index ".concat(atIndex, " failed: Fenwick tree array not initialized."));
            }

            var sum = 0;
            atIndex |= 0;

            while (atIndex >= 0) {
              sum += this.treeArray[atIndex];
              atIndex = (atIndex & atIndex + 1) - 1;
            }

            return sum;
          }
          /**
           * Find the total height between 2 row indexes
           */

        }, {
          key: "queryBetween",
          value: function queryBetween(atIndexA, atIndexB) {
            return this.query(atIndexB) - this.query(atIndexA - 1);
          }
          /**
           * Given the ScrollY position i.e. sum, provide the rowIndex
           * that is present in the current view port.
           */

        }, {
          key: "calcRowIndex",
          value: function calcRowIndex(sum) {
            if (!this.treeArray.length) return 0;
            var pos = -1;
            var dataLength = this.treeArray.length; // Get the highest bit for the block size.

            var highestBit = Math.pow(2, dataLength.toString(2).length - 1);

            for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
              var nextPos = pos + blockSize;

              if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
              }
            }

            return pos + 1;
          }
        }]);

        return _RowHeightCache;
      }();

      var cache = {};
      var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;

      var _ɵ = function _ɵ() {
        var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
        var match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
        var pre = match !== null ? match[1] : undefined; // tslint:disable-next-line: tsr-detect-non-literal-regexp

        var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
        return dom ? {
          dom: dom,
          lowercase: pre,
          css: "-".concat(pre, "-"),
          js: pre[0].toUpperCase() + pre.substr(1)
        } : undefined;
      }; // Get Prefix
      // http://davidwalsh.name/vendor-prefix


      var prefix = _ɵ();

      function _getVendorPrefixedName(property) {
        var name = _camelCase(property);

        if (!cache[name]) {
          if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
          } else if (testStyle[property] !== undefined) {
            cache[name] = property;
          }
        }

        return cache[name];
      } // browser detection and prefixing tools


      var transform = typeof window !== 'undefined' ? _getVendorPrefixedName('transform') : undefined;
      var backfaceVisibility = typeof window !== 'undefined' ? _getVendorPrefixedName('backfaceVisibility') : undefined;
      var hasCSSTransforms = typeof window !== 'undefined' ? !!_getVendorPrefixedName('transform') : undefined;
      var hasCSS3DTransforms = typeof window !== 'undefined' ? !!_getVendorPrefixedName('perspective') : undefined;
      var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
      var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);

      function _translateXY(styles, x, y) {
        if (typeof transform !== 'undefined' && hasCSSTransforms) {
          if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
            styles[backfaceVisibility] = 'hidden';
          } else {
            styles[_camelCase(transform)] = "translate(".concat(x, "px, ").concat(y, "px)");
          }
        } else {
          styles.top = "".concat(y, "px");
          styles.left = "".concat(x, "px");
        }
      }

      var _DataTableBodyComponent = /*#__PURE__*/function () {
        /**
         * Creates an instance of DataTableBodyComponent.
         */
        function _DataTableBodyComponent(cd) {
          var _this10 = this;

          _classCallCheck(this, _DataTableBodyComponent);

          this.cd = cd;
          this.selected = [];
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.rowHeightsCache = new _RowHeightCache();
          this.temp = [];
          this.offsetY = 0;
          this.indexes = {};
          this.rowIndexes = new WeakMap();
          this.rowExpansions = [];
          /**
           * Get the height of the detail row.
           */

          this.getDetailRowHeight = function (row, index) {
            if (!_this10.rowDetail) {
              return 0;
            }

            var rowHeight = _this10.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
          }; // declare fn here so we can get access to the `this` property


          this.rowTrackingFn = function (index, row) {
            var idx = _this10.getRowIndex(row);

            if (_this10.trackByProp) {
              return row[_this10.trackByProp];
            } else {
              return idx;
            }
          };
        }

        _createClass(_DataTableBodyComponent, [{
          key: "pageSize",
          get: function get() {
            return this._pageSize;
          },
          set: function set(val) {
            this._pageSize = val;
            this.recalcLayout();
          }
        }, {
          key: "rows",
          get: function get() {
            return this._rows;
          },
          set: function set(val) {
            this._rows = val;
            this.recalcLayout();
          }
        }, {
          key: "columns",
          get: function get() {
            return this._columns;
          },
          set: function set(val) {
            this._columns = val;

            var colsByPin = _columnsByPin(val);

            this.columnGroupWidths = _columnGroupWidths(colsByPin, val);
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set: function set(val) {
            this._offset = val;
            if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
          }
        }, {
          key: "rowCount",
          get: function get() {
            return this._rowCount;
          },
          set: function set(val) {
            this._rowCount = val;
            this.recalcLayout();
          }
        }, {
          key: "bodyWidth",
          get: function get() {
            if (this.scrollbarH) {
              return this.innerWidth + 'px';
            } else {
              return '100%';
            }
          }
        }, {
          key: "bodyHeight",
          get: function get() {
            return this._bodyHeight;
          }
          /**
           * Returns if selection is enabled.
           */
          ,
          set: function set(val) {
            if (this.scrollbarV) {
              this._bodyHeight = val + 'px';
            } else {
              this._bodyHeight = 'auto';
            }

            this.recalcLayout();
          }
        }, {
          key: "selectEnabled",
          get: function get() {
            return !!this.selectionType;
          }
          /**
           * Property that would calculate the height of scroll bar
           * based on the row heights cache for virtual scroll and virtualization. Other scenarios
           * calculate scroll height automatically (as height will be undefined).
           */

        }, {
          key: "scrollHeight",
          get: function get() {
            if (this.scrollbarV && this.virtualization && this.rowCount) {
              return this.rowHeightsCache.query(this.rowCount - 1);
            } // avoid TS7030: Not all code paths return a value.


            return undefined;
          }
          /**
           * Called after the constructor, initializing input properties
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            if (this.rowDetail) {
              this.listener = this.rowDetail.toggle.subscribe(function (_ref5) {
                var type = _ref5.type,
                    value = _ref5.value;

                if (type === 'row') {
                  _this11.toggleRowExpansion(value);
                }

                if (type === 'all') {
                  _this11.toggleAllRows(value);
                } // Refresh rows after toggle
                // Fixes #883


                _this11.updateIndexes();

                _this11.updateRows();

                _this11.cd.markForCheck();
              });
            }

            if (this.groupHeader) {
              this.listener = this.groupHeader.toggle.subscribe(function (_ref6) {
                var type = _ref6.type,
                    value = _ref6.value;

                if (type === 'group') {
                  _this11.toggleRowExpansion(value);
                }

                if (type === 'all') {
                  _this11.toggleAllRows(value);
                } // Refresh rows after toggle
                // Fixes #883


                _this11.updateIndexes();

                _this11.updateRows();

                _this11.cd.markForCheck();
              });
            }
          }
          /**
           * Called once, before the instance is destroyed.
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.rowDetail || this.groupHeader) {
              this.listener.unsubscribe();
            }
          }
          /**
           * Updates the Y offset given a new offset.
           */

        }, {
          key: "updateOffsetY",
          value: function updateOffsetY(offset) {
            // scroller is missing on empty table
            if (!this.scroller) {
              return;
            }

            if (this.scrollbarV && this.virtualization && offset) {
              // First get the row Index that we need to move to.
              var rowIndex = this.pageSize * offset;
              offset = this.rowHeightsCache.query(rowIndex - 1);
            } else if (this.scrollbarV && !this.virtualization) {
              offset = 0;
            }

            this.scroller.setOffset(offset || 0);
          }
          /**
           * Body was scrolled, this is mainly useful for
           * when a user is server-side pagination via virtual scroll.
           */

        }, {
          key: "onBodyScroll",
          value: function onBodyScroll(event) {
            var scrollYPos = event.scrollYPos;
            var scrollXPos = event.scrollXPos; // if scroll change, trigger update
            // this is mainly used for header cell positions

            if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
              this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
              });
            }

            this.offsetY = scrollYPos;
            this.offsetX = scrollXPos;
            this.updateIndexes();
            this.updatePage(event.direction);
            this.updateRows();
          }
          /**
           * Updates the page given a direction.
           */

        }, {
          key: "updatePage",
          value: function updatePage(direction) {
            var offset = this.indexes.first / this.pageSize;

            if (direction === 'up') {
              offset = Math.ceil(offset);
            } else if (direction === 'down') {
              offset = Math.floor(offset);
            }

            if (direction !== undefined && !isNaN(offset)) {
              this.page.emit({
                offset: offset
              });
            }
          }
          /**
           * Updates the rows in the view port
           */

        }, {
          key: "updateRows",
          value: function updateRows() {
            var _this12 = this;

            var _this$indexes = this.indexes,
                first = _this$indexes.first,
                last = _this$indexes.last;
            var rowIndex = first;
            var idx = 0;
            var temp = []; // if grouprowsby has been specified treat row paging
            // parameters as group paging parameters ie if limit 10 has been
            // specified treat it as 10 groups rather than 10 rows

            if (this.groupedRows) {
              var maxRowsPerGroup = 3; // if there is only one group set the maximum number of
              // rows per group the same as the total number of rows

              if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
              }

              while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                var group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);

                if (group.value) {
                  // add indexes for each group item
                  group.value.forEach(function (g, i) {
                    var _idx = "".concat(rowIndex, "-").concat(i);

                    _this12.rowIndexes.set(g, _idx);
                  });
                }

                temp[idx] = group;
                idx++; // Group index in this context

                rowIndex++;
              }
            } else {
              while (rowIndex < last && rowIndex < this.rowCount) {
                var row = this.rows[rowIndex];

                if (row) {
                  // add indexes for each row
                  this.rowIndexes.set(row, rowIndex);
                  temp[idx] = row;
                }

                idx++;
                rowIndex++;
              }
            }

            this.temp = temp;
          }
          /**
           * Get the row height
           */

        }, {
          key: "getRowHeight",
          value: function getRowHeight(row) {
            // if its a function return it
            if (typeof this.rowHeight === 'function') {
              return this.rowHeight(row);
            }

            return this.rowHeight;
          }
          /**
           * @param group the group with all rows
           */

        }, {
          key: "getGroupHeight",
          value: function getGroupHeight(group) {
            var rowHeight = 0;

            if (group.value) {
              for (var index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
              }
            }

            return rowHeight;
          }
          /**
           * Calculate row height based on the expanded state of the row.
           */

        }, {
          key: "getRowAndDetailHeight",
          value: function getRowAndDetailHeight(row) {
            var rowHeight = this.getRowHeight(row);
            var expanded = this.getRowExpanded(row); // Adding detail row height if its expanded.

            if (expanded) {
              rowHeight += this.getDetailRowHeight(row);
            }

            return rowHeight;
          }
          /**
           * Calculates the styles for the row so that the rows can be moved in 2D space
           * during virtual scroll inside the DOM.   In the below case the Y position is
           * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
           * 100 px then following styles are generated:
           *
           * transform: translate3d(0px, 0px, 0px);    ->  row0
           * transform: translate3d(0px, 30px, 0px);   ->  row1
           * transform: translate3d(0px, 130px, 0px);  ->  row2
           *
           * Row heights have to be calculated based on the row heights cache as we wont
           * be able to determine which row is of what height before hand.  In the above
           * case the positionY of the translate3d for row2 would be the sum of all the
           * heights of the rows before it (i.e. row0 and row1).
           *
           * @param rows the row that needs to be placed in the 2D space.
           * @returns the CSS3 style to be applied
           *
           * @memberOf DataTableBodyComponent
           */

        }, {
          key: "getRowsStyles",
          value: function getRowsStyles(rows) {
            var styles = {}; // only add styles for the group if there is a group

            if (this.groupedRows) {
              styles.width = this.columnGroupWidths.total;
            }

            if (this.scrollbarV && this.virtualization) {
              var idx = 0;

              if (this.groupedRows) {
                // Get the latest row rowindex in a group
                var row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
              } else {
                idx = this.getRowIndex(rows);
              } // const pos = idx * rowHeight;
              // The position of this row would be the sum of all row heights
              // until the previous row position.


              var pos = this.rowHeightsCache.query(idx - 1);

              _translateXY(styles, 0, pos);
            }

            return styles;
          }
          /**
           * Calculate bottom summary row offset for scrollbar mode.
           * For more information about cache and offset calculation
           * see description for `getRowsStyles` method
           *
           * @returns the CSS3 style to be applied
           *
           * @memberOf DataTableBodyComponent
           */

        }, {
          key: "getBottomSummaryRowStyles",
          value: function getBottomSummaryRowStyles() {
            if (!this.scrollbarV || !this.rows || !this.rows.length) {
              return null;
            }

            var styles = {
              position: 'absolute'
            };
            var pos = this.rowHeightsCache.query(this.rows.length - 1);

            _translateXY(styles, 0, pos);

            return styles;
          }
          /**
           * Hides the loading indicator
           */

        }, {
          key: "hideIndicator",
          value: function hideIndicator() {
            var _this13 = this;

            setTimeout(function () {
              return _this13.loadingIndicator = false;
            }, 500);
          }
          /**
           * Updates the index of the rows in the viewport
           */

        }, {
          key: "updateIndexes",
          value: function updateIndexes() {
            var first = 0;
            var last = 0;

            if (this.scrollbarV) {
              if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                var height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
              } else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
              }
            } else {
              // The server is handling paging and will pass an array that begins with the
              // element at a specified offset.  first should always be 0 with external paging.
              if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
              }

              last = Math.min(first + this.pageSize, this.rowCount);
            }

            this.indexes = {
              first: first,
              last: last
            };
          }
          /**
           * Refreshes the full Row Height cache.  Should be used
           * when the entire row array state has changed.
           */

        }, {
          key: "refreshRowHeightCache",
          value: function refreshRowHeightCache() {
            if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
              return;
            } // clear the previous row height cache if already present.
            // this is useful during sorts, filters where the state of the
            // rows array is changed.


            this.rowHeightsCache.clearCache(); // Initialize the tree only if there are rows inside the tree.

            if (this.rows && this.rows.length) {
              var rowExpansions = new Set();

              var _iterator8 = _createForOfIteratorHelper(this.rows),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var row = _step8.value;

                  if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: rowExpansions
              });
            }
          }
          /**
           * Gets the index for the view port
           */

        }, {
          key: "getAdjustedViewPortIndex",
          value: function getAdjustedViewPortIndex() {
            // Capture the row index of the first row that is visible on the viewport.
            // If the scroll bar is just below the row which is highlighted then make that as the
            // first index.
            var viewPortFirstRowIndex = this.indexes.first;

            if (this.scrollbarV && this.virtualization) {
              var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
              return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
            }

            return viewPortFirstRowIndex;
          }
          /**
           * Toggle the Expansion of the row i.e. if the row is expanded then it will
           * collapse and vice versa.   Note that the expanded status is stored as
           * a part of the row object itself as we have to preserve the expanded row
           * status in case of sorting and filtering of the row set.
           */

        }, {
          key: "toggleRowExpansion",
          value: function toggleRowExpansion(row) {
            // Capture the row index of the first row that is visible on the viewport.
            var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
            var rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
            var expanded = rowExpandedIdx > -1; // If the detailRowHeight is auto --> only in case of non-virtualized scroll

            if (this.scrollbarV && this.virtualization) {
              var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1); // const idx = this.rowIndexes.get(row) || 0;

              var idx = this.getRowIndex(row);
              this.rowHeightsCache.update(idx, detailRowHeight);
            } // Update the toggled row and update thive nevere heights in the cache.


            if (expanded) {
              this.rowExpansions.splice(rowExpandedIdx, 1);
            } else {
              this.rowExpansions.push(row);
            }

            this.detailToggle.emit({
              rows: [row],
              currentIndex: viewPortFirstRowIndex
            });
          }
          /**
           * Expand/Collapse all the rows no matter what their state is.
           */

        }, {
          key: "toggleAllRows",
          value: function toggleAllRows(expanded) {
            // clear prev expansions
            this.rowExpansions = []; // Capture the row index of the first row that is visible on the viewport.

            var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();

            if (expanded) {
              var _iterator9 = _createForOfIteratorHelper(this.rows),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var row = _step9.value;
                  this.rowExpansions.push(row);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            if (this.scrollbarV) {
              // Refresh the full row heights cache since every row was affected.
              this.recalcLayout();
            } // Emit all rows that have been expanded.


            this.detailToggle.emit({
              rows: this.rows,
              currentIndex: viewPortFirstRowIndex
            });
          }
          /**
           * Recalculates the table
           */

        }, {
          key: "recalcLayout",
          value: function recalcLayout() {
            this.refreshRowHeightCache();
            this.updateIndexes();
            this.updateRows();
          }
          /**
           * Tracks the column
           */

        }, {
          key: "columnTrackingFn",
          value: function columnTrackingFn(index, column) {
            return column.$$id;
          }
          /**
           * Gets the row pinning group styles
           */

        }, {
          key: "stylesByGroup",
          value: function stylesByGroup(group) {
            var widths = this.columnGroupWidths;
            var offsetX = this.offsetX;
            var styles = {
              width: "".concat(widths[group], "px")
            };

            if (group === 'left') {
              _translateXY(styles, offsetX, 0);
            } else if (group === 'right') {
              var bodyWidth = parseInt(this.innerWidth + '', 0);
              var totalDiff = widths.total - bodyWidth;
              var offsetDiff = totalDiff - offsetX;
              var offset = offsetDiff * -1;

              _translateXY(styles, offset, 0);
            }

            return styles;
          }
          /**
           * Returns if the row was expanded and set default row expansion when row expansion is empty
           */

        }, {
          key: "getRowExpanded",
          value: function getRowExpanded(row) {
            if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
              var _iterator10 = _createForOfIteratorHelper(this.groupedRows),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var group = _step10.value;
                  this.rowExpansions.push(group);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }

            return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
          }
        }, {
          key: "getRowExpandedIdx",
          value: function getRowExpandedIdx(row, expanded) {
            var _this14 = this;

            if (!expanded || !expanded.length) return -1;
            var rowId = this.rowIdentity(row);
            return expanded.findIndex(function (r) {
              var id = _this14.rowIdentity(r);

              return id === rowId;
            });
          }
          /**
           * Gets the row index given a row
           */

        }, {
          key: "getRowIndex",
          value: function getRowIndex(row) {
            return this.rowIndexes.get(row) || 0;
          }
        }, {
          key: "onTreeAction",
          value: function onTreeAction(row) {
            this.treeAction.emit({
              row: row
            });
          }
        }]);

        return _DataTableBodyComponent;
      }();

      _DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
        return new (t || _DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _DataTableBodyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableBodyComponent,
        selectors: [["datatable-body"]],
        viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ScrollerComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
          }
        },
        hostAttrs: [1, "datatable-body"],
        hostVars: 4,
        hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
          }
        },
        inputs: {
          selected: "selected",
          pageSize: "pageSize",
          rows: "rows",
          columns: "columns",
          offset: "offset",
          rowCount: "rowCount",
          bodyHeight: "bodyHeight",
          offsetX: "offsetX",
          loadingIndicator: "loadingIndicator",
          scrollbarV: "scrollbarV",
          scrollbarH: "scrollbarH",
          externalPaging: "externalPaging",
          rowHeight: "rowHeight",
          emptyMessage: "emptyMessage",
          selectionType: "selectionType",
          rowIdentity: "rowIdentity",
          rowDetail: "rowDetail",
          groupHeader: "groupHeader",
          selectCheck: "selectCheck",
          displayCheck: "displayCheck",
          trackByProp: "trackByProp",
          rowClass: "rowClass",
          groupedRows: "groupedRows",
          groupExpansionDefault: "groupExpansionDefault",
          innerWidth: "innerWidth",
          groupRowsBy: "groupRowsBy",
          virtualization: "virtualization",
          summaryRow: "summaryRow",
          summaryPosition: "summaryPosition",
          summaryHeight: "summaryHeight"
        },
        outputs: {
          scroll: "scroll",
          page: "page",
          activate: "activate",
          select: "select",
          detailToggle: "detailToggle",
          rowContextmenu: "rowContextmenu",
          treeAction: "treeAction"
        },
        decls: 5,
        vars: 9,
        consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
        template: function DataTableBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datatable-selection", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
              return ctx.select.emit($event);
            })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
              return ctx.activate.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _DataTableSelectionComponent, _ProgressBarComponent, _ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _DataTableSummaryRowComponent, _DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _DataTableBodyRowComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      _DataTableBodyComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _DataTableBodyComponent.propDecorators = {
        scrollbarV: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        loadingIndicator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        externalPaging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        emptyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowIdentity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        trackByProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupedRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupExpansionDefault: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupRowsBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        virtualization: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        bodyWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.width']
        }],
        bodyHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.height']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        detailToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        rowContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        scroller: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_ScrollerComponent]
        }]
      };

      var _DataTableHeaderComponent = /*#__PURE__*/function () {
        function _DataTableHeaderComponent(cd) {
          _classCallCheck(this, _DataTableHeaderComponent);

          this.cd = cd;
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
          this._columnGroupWidths = {
            total: 100
          };
          this._styleByGroup = {
            left: {},
            center: {},
            right: {}
          };
          this.destroyed = false;
        }

        _createClass(_DataTableHeaderComponent, [{
          key: "innerWidth",
          get: function get() {
            return this._innerWidth;
          },
          set: function set(val) {
            var _this15 = this;

            this._innerWidth = val;
            setTimeout(function () {
              if (_this15._columns) {
                var colByPin = _columnsByPin(_this15._columns);

                _this15._columnGroupWidths = _columnGroupWidths(colByPin, _this15._columns);

                _this15.setStylesByGroup();
              }
            });
          }
        }, {
          key: "headerHeight",
          get: function get() {
            return this._headerHeight;
          },
          set: function set(val) {
            if (val !== 'auto') {
              this._headerHeight = "".concat(val, "px");
            } else {
              this._headerHeight = val;
            }
          }
        }, {
          key: "columns",
          get: function get() {
            return this._columns;
          },
          set: function set(val) {
            var _this16 = this;

            this._columns = val;

            var colsByPin = _columnsByPin(val);

            this._columnsByPin = _columnsByPinArr(val);
            setTimeout(function () {
              _this16._columnGroupWidths = _columnGroupWidths(colsByPin, val);

              _this16.setStylesByGroup();
            });
          }
        }, {
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          },
          set: function set(val) {
            this._offsetX = val;
            this.setStylesByGroup();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed = true;
          }
        }, {
          key: "onLongPressStart",
          value: function onLongPressStart(_ref7) {
            var event = _ref7.event,
                model = _ref7.model;
            model.dragging = true;
            this.dragEventTarget = event;
          }
        }, {
          key: "onLongPressEnd",
          value: function onLongPressEnd(_ref8) {
            var _this17 = this;

            var event = _ref8.event,
                model = _ref8.model;
            this.dragEventTarget = event; // delay resetting so sort can be
            // prevented if we were dragging

            setTimeout(function () {
              // datatable component creates copies from columns on reorder
              // set dragging to false on new objects
              var column = _this17._columns.find(function (c) {
                return c.$$id === model.$$id;
              });

              if (column) {
                column.dragging = false;
              }
            }, 5);
          }
        }, {
          key: "headerWidth",
          get: function get() {
            if (this.scrollbarH) {
              return this.innerWidth + 'px';
            }

            return '100%';
          }
        }, {
          key: "trackByGroups",
          value: function trackByGroups(index, colGroup) {
            return colGroup.type;
          }
        }, {
          key: "columnTrackingFn",
          value: function columnTrackingFn(index, column) {
            return column.$$id;
          }
        }, {
          key: "onColumnResized",
          value: function onColumnResized(width, column) {
            if (width <= column.minWidth) {
              width = column.minWidth;
            } else if (width >= column.maxWidth) {
              width = column.maxWidth;
            }

            this.resize.emit({
              column: column,
              prevValue: column.width,
              newValue: width
            });
          }
        }, {
          key: "onColumnReordered",
          value: function onColumnReordered(_ref9) {
            var prevIndex = _ref9.prevIndex,
                newIndex = _ref9.newIndex,
                model = _ref9.model;
            var column = this.getColumn(newIndex);
            column.isTarget = false;
            column.targetMarkerContext = undefined;
            this.reorder.emit({
              column: model,
              prevValue: prevIndex,
              newValue: newIndex
            });
          }
        }, {
          key: "onTargetChanged",
          value: function onTargetChanged(_ref10) {
            var prevIndex = _ref10.prevIndex,
                newIndex = _ref10.newIndex,
                initialIndex = _ref10.initialIndex;

            if (prevIndex || prevIndex === 0) {
              var oldColumn = this.getColumn(prevIndex);
              oldColumn.isTarget = false;
              oldColumn.targetMarkerContext = undefined;
            }

            if (newIndex || newIndex === 0) {
              var newColumn = this.getColumn(newIndex);
              newColumn.isTarget = true;

              if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                  "class": 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
              }
            }
          }
        }, {
          key: "getColumn",
          value: function getColumn(index) {
            var leftColumnCount = this._columnsByPin[0].columns.length;

            if (index < leftColumnCount) {
              return this._columnsByPin[0].columns[index];
            }

            var centerColumnCount = this._columnsByPin[1].columns.length;

            if (index < leftColumnCount + centerColumnCount) {
              return this._columnsByPin[1].columns[index - leftColumnCount];
            }

            return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
          }
        }, {
          key: "onSort",
          value: function onSort(_ref11) {
            var column = _ref11.column,
                prevValue = _ref11.prevValue,
                newValue = _ref11.newValue;

            // if we are dragging don't sort!
            if (column.dragging) {
              return;
            }

            var sorts = this.calcNewSorts(column, prevValue, newValue);
            this.sort.emit({
              sorts: sorts,
              column: column,
              prevValue: prevValue,
              newValue: newValue
            });
          }
        }, {
          key: "calcNewSorts",
          value: function calcNewSorts(column, prevValue, newValue) {
            var idx = 0;

            if (!this.sorts) {
              this.sorts = [];
            }

            var sorts = this.sorts.map(function (s, i) {
              s = Object.assign({}, s);

              if (s.prop === column.prop) {
                idx = i;
              }

              return s;
            });

            if (newValue === undefined) {
              sorts.splice(idx, 1);
            } else if (prevValue) {
              sorts[idx].dir = newValue;
            } else {
              if (this.sortType === _SortType.single) {
                sorts.splice(0, this.sorts.length);
              }

              sorts.push({
                dir: newValue,
                prop: column.prop
              });
            }

            return sorts;
          }
        }, {
          key: "setStylesByGroup",
          value: function setStylesByGroup() {
            this._styleByGroup.left = this.calcStylesByGroup('left');
            this._styleByGroup.center = this.calcStylesByGroup('center');
            this._styleByGroup.right = this.calcStylesByGroup('right');

            if (!this.destroyed) {
              this.cd.detectChanges();
            }
          }
        }, {
          key: "calcStylesByGroup",
          value: function calcStylesByGroup(group) {
            var widths = this._columnGroupWidths;
            var offsetX = this.offsetX;
            var styles = {
              width: "".concat(widths[group], "px")
            };

            if (group === 'center') {
              _translateXY(styles, offsetX * -1, 0);
            } else if (group === 'right') {
              var totalDiff = widths.total - this.innerWidth;
              var offset = totalDiff * -1;

              _translateXY(styles, offset, 0);
            }

            return styles;
          }
        }]);

        return _DataTableHeaderComponent;
      }();

      _DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
        return new (t || _DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _DataTableHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableHeaderComponent,
        selectors: [["datatable-header"]],
        hostAttrs: [1, "datatable-header"],
        hostVars: 4,
        hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
          }
        },
        inputs: {
          innerWidth: "innerWidth",
          headerHeight: "headerHeight",
          columns: "columns",
          offsetX: "offsetX",
          sorts: "sorts",
          sortAscendingIcon: "sortAscendingIcon",
          sortDescendingIcon: "sortDescendingIcon",
          sortUnsetIcon: "sortUnsetIcon",
          scrollbarH: "scrollbarH",
          dealsWithGroup: "dealsWithGroup",
          targetMarkerTemplate: "targetMarkerTemplate",
          sortType: "sortType",
          allRowsSelected: "allRowsSelected",
          selectionType: "selectionType",
          reorderable: "reorderable"
        },
        outputs: {
          sort: "sort",
          reorder: "reorder",
          resize: "resize",
          select: "select",
          columnContextmenu: "columnContextmenu"
        },
        decls: 2,
        vars: 4,
        consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
        template: function DataTableHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
              return ctx.onColumnReordered($event);
            })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
              return ctx.onTargetChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
          }
        },
        directives: function directives() {
          return [_OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _DataTableHeaderCellComponent, _ResizeableDirective, _LongPressDirective, _DraggableDirective];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      _DataTableHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _DataTableHeaderComponent.propDecorators = {
        sortAscendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortDescendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortUnsetIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dealsWithGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        targetMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        allRowsSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        reorderable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.height']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        reorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        columnContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        headerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.width']
        }]
      };
      /**
       * Throttle a function
       */

      function _throttle(func, wait, options) {
        options = options || {};
        var context;
        var args;
        var result;
        var timeout = null;
        var previous = 0;

        function later() {
          previous = options.leading === false ? 0 : +new Date();
          timeout = null;
          result = func.apply(context, args);
        }

        return function () {
          var now = +new Date();

          if (!previous && options.leading === false) {
            previous = now;
          }

          var remaining = wait - (now - previous);
          context = this;
          args = arguments;

          if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }

          return result;
        };
      }
      /**
       * Throttle decorator
       *
       *  class MyClass {
       *    throttleable(10)
       *    myFn() { ... }
       *  }
       */


      function _throttleable(duration, options) {
        return function innerDecorator(target, key, descriptor) {
          return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
              Object.defineProperty(this, key, {
                configurable: true,
                enumerable: descriptor.enumerable,
                value: _throttle(descriptor.value, duration, options)
              });
              return this[key];
            }
          };
        };
      }
      /**
       * Calculates the Total Flex Grow
       */


      function _getTotalFlexGrow(columns) {
        var totalFlexGrow = 0;

        var _iterator11 = _createForOfIteratorHelper(columns),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var c = _step11.value;
            totalFlexGrow += c.flexGrow || 0;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return totalFlexGrow;
      }
      /**
       * Adjusts the column widths.
       * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
       */


      function _adjustColumnWidths(allColumns, expectedWidth) {
        var columnsWidth = _columnsTotalWidth(allColumns);

        var totalFlexGrow = _getTotalFlexGrow(allColumns);

        var colsByGroup = _columnsByPin(allColumns);

        if (columnsWidth !== expectedWidth) {
          scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
        }
      }
      /**
       * Resizes columns based on the flexGrow property, while respecting manually set widths
       */


      function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
        // calculate total width and flexgrow points for coulumns that can be resized
        for (var attr in colsByGroup) {
          var _iterator12 = _createForOfIteratorHelper(colsByGroup[attr]),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var column = _step12.value;

              if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
              } else {
                column.width = 0;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }

        var hasMinWidth = {};
        var remainingWidth = maxWidth; // resize columns until no width is left to be distributed

        do {
          var widthPerFlexPoint = remainingWidth / totalFlexGrow;
          remainingWidth = 0;

          for (var _attr in colsByGroup) {
            var _iterator13 = _createForOfIteratorHelper(colsByGroup[_attr]),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _column = _step13.value;

                // if the column can be resize and it hasn't reached its minimum width yet
                if (_column.canAutoResize && !hasMinWidth[_column.prop]) {
                  var newWidth = _column.width + _column.flexGrow * widthPerFlexPoint;

                  if (_column.minWidth !== undefined && newWidth < _column.minWidth) {
                    remainingWidth += newWidth - _column.minWidth;
                    _column.width = _column.minWidth;
                    hasMinWidth[_column.prop] = true;
                  } else {
                    _column.width = newWidth;
                  }
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        } while (remainingWidth !== 0);
      }
      /**
       * Forces the width of the columns to
       * distribute equally but overflowing when necessary
       *
       * Rules:
       *
       *  - If combined withs are less than the total width of the grid,
       *    proportion the widths given the min / max / normal widths to fill the width.
       *
       *  - If the combined widths, exceed the total width of the grid,
       *    use the standard widths.
       *
       *  - If a column is resized, it should always use that width
       *
       *  - The proportional widths should never fall below min size if specified.
       *
       *  - If the grid starts off small but then becomes greater than the size ( + / - )
       *    the width should use the original width; not the newly proportioned widths.
       */


      function _forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed) {
        var defaultColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;
        var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(function (c) {
          return c.canAutoResize !== false;
        });

        var _iterator14 = _createForOfIteratorHelper(columnsToResize),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _column2 = _step14.value;

            if (!_column2.$$oldWidth) {
              _column2.$$oldWidth = _column2.width;
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        var additionWidthPerColumn = 0;
        var exceedsWindow = false;
        var contentWidth = getContentWidth(allColumns, defaultColWidth);
        var remainingWidth = expectedWidth - contentWidth;
        var columnsProcessed = [];
        var remainingWidthLimit = 1; // when to stop
        // This loop takes care of the

        do {
          additionWidthPerColumn = remainingWidth / columnsToResize.length;
          exceedsWindow = contentWidth >= expectedWidth;

          var _iterator15 = _createForOfIteratorHelper(columnsToResize),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var column = _step15.value;

              if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
              } else {
                var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;

                if (column.minWidth && newSize < column.minWidth) {
                  column.width = column.minWidth;
                  columnsProcessed.push(column);
                } else if (column.maxWidth && newSize > column.maxWidth) {
                  column.width = column.maxWidth;
                  columnsProcessed.push(column);
                } else {
                  column.width = newSize;
                }
              }

              column.width = Math.max(0, column.width);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          contentWidth = getContentWidth(allColumns);
          remainingWidth = expectedWidth - contentWidth;
          removeProcessedColumns(columnsToResize, columnsProcessed);
        } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
      }
      /**
       * Remove the processed columns from the current active columns.
       */


      function removeProcessedColumns(columnsToResize, columnsProcessed) {
        var _iterator16 = _createForOfIteratorHelper(columnsProcessed),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var column = _step16.value;
            var index = columnsToResize.indexOf(column);
            columnsToResize.splice(index, 1);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
      /**
       * Gets the width of the columns
       */


      function getContentWidth(allColumns) {
        var defaultColWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        var contentWidth = 0;

        var _iterator17 = _createForOfIteratorHelper(allColumns),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var column = _step17.value;
            contentWidth += column.width || defaultColWidth;
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }

        return contentWidth;
      }

      var _SortDirection;

      (function (SortDirection) {
        SortDirection["asc"] = "asc";
        SortDirection["desc"] = "desc";
      })(_SortDirection || (_SortDirection = {}));
      /**
       * Gets the next sort direction
       */


      function _nextSortDir(sortType, current) {
        if (sortType === _SortType.single) {
          if (current === _SortDirection.asc) {
            return _SortDirection.desc;
          } else {
            return _SortDirection.asc;
          }
        } else {
          if (!current) {
            return _SortDirection.asc;
          } else if (current === _SortDirection.asc) {
            return _SortDirection.desc;
          } else if (current === _SortDirection.desc) {
            return undefined;
          } // avoid TS7030: Not all code paths return a value.


          return undefined;
        }
      }
      /**
       * Adapted from fueld-ui on 6/216
       * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
       */


      function _orderByComparator(a, b) {
        if (a === null || typeof a === 'undefined') a = 0;
        if (b === null || typeof b === 'undefined') b = 0;

        if (a instanceof Date && b instanceof Date) {
          if (a < b) return -1;
          if (a > b) return 1;
        } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
          // Convert to string in case of a=0 or b=0
          a = String(a);
          b = String(b); // Isn't a number so lowercase the string to properly compare

          if (a.toLowerCase() < b.toLowerCase()) return -1;
          if (a.toLowerCase() > b.toLowerCase()) return 1;
        } else {
          // Parse strings as numbers to compare properly
          if (parseFloat(a) < parseFloat(b)) return -1;
          if (parseFloat(a) > parseFloat(b)) return 1;
        } // equal each other


        return 0;
      }
      /**
       * creates a shallow copy of the `rows` input and returns the sorted copy. this function
       * does not sort the `rows` argument in place
       */


      function _sortRows(rows, columns, dirs) {
        if (!rows) return [];
        if (!dirs || !dirs.length || !columns) return _toConsumableArray(rows);
        /**
         * record the row ordering of results from prior sort operations (if applicable)
         * this is necessary to guarantee stable sorting behavior
         */

        var rowToIndexMap = new Map();
        rows.forEach(function (row, index) {
          return rowToIndexMap.set(row, index);
        });

        var temp = _toConsumableArray(rows);

        var cols = columns.reduce(function (obj, col) {
          if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
          }

          return obj;
        }, {}); // cache valueGetter and compareFn so that they
        // do not need to be looked-up in the sort function body

        var cachedDirs = dirs.map(function (dir) {
          var prop = dir.prop;
          return {
            prop: prop,
            dir: dir.dir,
            valueGetter: _getterForProp(prop),
            compareFn: cols[prop] || _orderByComparator
          };
        });
        return temp.sort(function (rowA, rowB) {
          var _iterator18 = _createForOfIteratorHelper(cachedDirs),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var cachedDir = _step18.value;
              // Get property and valuegetters for column to be sorted
              var prop = cachedDir.prop,
                  valueGetter = cachedDir.valueGetter; // Get A and B cell values from rows based on properties of the columns

              var propA = valueGetter(rowA, prop);
              var propB = valueGetter(rowB, prop); // Compare function gets five parameters:
              // Two cell values to be compared as propA and propB
              // Two rows corresponding to the cells as rowA and rowB
              // Direction of the sort for this column as SortDirection
              // Compare can be a standard JS comparison function (a,b) => -1|0|1
              // as additional parameters are silently ignored. The whole row and sort
              // direction enable more complex sort logic.

              var comparison = cachedDir.dir !== _SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir); // Don't return 0 yet in case of needing to sort by next property

              if (comparison !== 0) return comparison;
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
          /**
           * all else being equal, preserve original order of the rows (stable sort)
           */

          return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
        });
      }

      var _DatatableComponent = /*#__PURE__*/function () {
        function _DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
          var _this18 = this;

          _classCallCheck(this, _DatatableComponent);

          this.scrollbarHelper = scrollbarHelper;
          this.dimensionsHelper = dimensionsHelper;
          this.cd = cd;
          this.columnChangesService = columnChangesService;
          this.configuration = configuration;
          /**
           * List of row objects that should be
           * represented as selected in the grid.
           * Default value: `[]`
           */

          this.selected = [];
          /**
           * Enable vertical scrollbars
           */

          this.scrollbarV = false;
          /**
           * Enable horz scrollbars
           */

          this.scrollbarH = false;
          /**
           * The row height; which is necessary
           * to calculate the height for the lazy rendering.
           */

          this.rowHeight = 30;
          /**
           * Type of column width distribution formula.
           * Example: flex, force, standard
           */

          this.columnMode = _ColumnMode.standard;
          /**
           * The minimum header height in pixels.
           * Pass a falsey for no header
           */

          this.headerHeight = 30;
          /**
           * The minimum footer height in pixels.
           * Pass falsey for no footer
           */

          this.footerHeight = 0;
          /**
           * If the table should use external paging
           * otherwise its assumed that all data is preloaded.
           */

          this.externalPaging = false;
          /**
           * If the table should use external sorting or
           * the built-in basic sorting.
           */

          this.externalSorting = false;
          /**
           * Show the linear loading bar.
           * Default value: `false`
           */

          this.loadingIndicator = false;
          /**
           * Enable/Disable ability to re-order columns
           * by dragging them.
           */

          this.reorderable = true;
          /**
           * Swap columns on re-order columns or
           * move them.
           */

          this.swapColumns = true;
          /**
           * The type of sorting
           */

          this.sortType = _SortType.single;
          /**
           * Array of sorted columns by property and type.
           * Default value: `[]`
           */

          this.sorts = [];
          /**
           * Css class overrides
           */

          this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            sortUnset: 'datatable-icon-sort-unset',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
          };
          /**
           * Message overrides for localization
           *
           * emptyMessage     [default] = 'No data to display'
           * totalMessage     [default] = 'total'
           * selectedMessage  [default] = 'selected'
           */

          this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
          };
          /**
           * A boolean you can use to set the detault behaviour of rows and groups
           * whether they will start expanded or not. If ommited the default is NOT expanded.
           *
           */

          this.groupExpansionDefault = false;
          /**
           * Property to which you can use for determining select all
           * rows on current page or not.
           *
           * @memberOf DatatableComponent
           */

          this.selectAllRowsOnPage = false;
          /**
           * A flag for row virtualization on / off
           */

          this.virtualization = true;
          /**
           * A flag for switching summary row on / off
           */

          this.summaryRow = false;
          /**
           * A height of summary row
           */

          this.summaryHeight = 30;
          /**
           * A property holds a summary row position: top/bottom
           */

          this.summaryPosition = 'top';
          /**
           * Body was scrolled typically in a `scrollbarV:true` scenario.
           */

          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * A cell or row was focused via keyboard or mouse click.
           */

          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * A cell or row was selected.
           */

          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Column sort was invoked.
           */

          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * The table was paged either triggered by the pager or the body scroll.
           */

          this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Columns were re-ordered.
           */

          this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Column was resized.
           */

          this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * The context menu was invoked on the table.
           * type indicates whether the header or the body was clicked.
           * content contains either the column or the row that was clicked.
           */

          this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
          /**
           * A row was expanded ot collapsed for tree
           */

          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.rowCount = 0;
          this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
          this._count = 0;
          this._offset = 0;
          this._subscriptions = [];
          /**
           * This will be used when displaying or selecting rows.
           * when tracking/comparing them, we'll use the value of this fn,
           *
           * (`fn(x) === fn(y)` instead of `x === y`)
           */

          this.rowIdentity = function (x) {
            if (_this18._groupRowsBy) {
              // each group in groupedRows are stored as {key, value: [rows]},
              // where key is the groupRowsBy index
              return x.key;
            } else {
              return x;
            }
          }; // get ref to elm for measuring


          this.element = element.nativeElement;
          this.rowDiffer = differs.find({}).create(); // apply global settings from Module.forRoot

          if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
          }
        }
        /**
         * Rows that are displayed in the table.
         */


        _createClass(_DatatableComponent, [{
          key: "rows",
          get:
          /**
           * Gets the rows.
           */
          function get() {
            return this._rows;
          }
          /**
           * This attribute allows the user to set the name of the column to group the data with
           */
          ,
          set: function set(val) {
            this._rows = val;

            if (val) {
              this._internalRows = _toConsumableArray(val);
            } // auto sort on new updates


            if (!this.externalSorting) {
              this.sortInternalRows();
            } // auto group by parent on new update


            this._internalRows = _groupRowsByParents(this._internalRows, _optionalGetterForProp(this.treeFromRelation), _optionalGetterForProp(this.treeToRelation)); // recalculate sizes/etc

            this.recalculate();

            if (this._rows && this._groupRowsBy) {
              // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
              this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }

            this.cd.markForCheck();
          }
        }, {
          key: "groupRowsBy",
          get: function get() {
            return this._groupRowsBy;
          }
          /**
           * Columns to be displayed.
           */
          ,
          set: function set(val) {
            if (val) {
              this._groupRowsBy = val;

              if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
              }
            }
          }
        }, {
          key: "columns",
          get:
          /**
           * Get the columns.
           */
          function get() {
            return this._columns;
          }
          /**
           * The page size to be shown.
           * Default value: `undefined`
           */
          ,
          set: function set(val) {
            if (val) {
              this._internalColumns = _toConsumableArray(val);

              _setColumnDefaults(this._internalColumns);

              this.recalculateColumns();
            }

            this._columns = val;
          }
        }, {
          key: "limit",
          get:
          /**
           * Gets the limit.
           */
          function get() {
            return this._limit;
          }
          /**
           * The total count of all rows.
           * Default value: `0`
           */
          ,
          set: function set(val) {
            this._limit = val; // recalculate sizes/etc

            this.recalculate();
          }
        }, {
          key: "count",
          get:
          /**
           * Gets the count.
           */
          function get() {
            return this._count;
          }
          /**
           * The current offset ( page - 1 ) shown.
           * Default value: `0`
           */
          ,
          set: function set(val) {
            this._count = val; // recalculate sizes/etc

            this.recalculate();
          }
        }, {
          key: "offset",
          get: function get() {
            return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
          }
          /**
           * CSS class applied if the header height if fixed height.
           */
          ,
          set: function set(val) {
            this._offset = val;
          }
        }, {
          key: "isFixedHeader",
          get: function get() {
            var headerHeight = this.headerHeight;
            return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
          }
          /**
           * CSS class applied to the root element if
           * the row heights are fixed heights.
           */

        }, {
          key: "isFixedRow",
          get: function get() {
            return this.rowHeight !== 'auto';
          }
          /**
           * CSS class applied to root element if
           * vertical scrolling is enabled.
           */

        }, {
          key: "isVertScroll",
          get: function get() {
            return this.scrollbarV;
          }
          /**
           * CSS class applied to root element if
           * virtualization is enabled.
           */

        }, {
          key: "isVirtualized",
          get: function get() {
            return this.virtualization;
          }
          /**
           * CSS class applied to the root element
           * if the horziontal scrolling is enabled.
           */

        }, {
          key: "isHorScroll",
          get: function get() {
            return this.scrollbarH;
          }
          /**
           * CSS class applied to root element is selectable.
           */

        }, {
          key: "isSelectable",
          get: function get() {
            return this.selectionType !== undefined;
          }
          /**
           * CSS class applied to root is checkbox selection.
           */

        }, {
          key: "isCheckboxSelection",
          get: function get() {
            return this.selectionType === _SelectionType.checkbox;
          }
          /**
           * CSS class applied to root if cell selection.
           */

        }, {
          key: "isCellSelection",
          get: function get() {
            return this.selectionType === _SelectionType.cell;
          }
          /**
           * CSS class applied to root if single select.
           */

        }, {
          key: "isSingleSelection",
          get: function get() {
            return this.selectionType === _SelectionType.single;
          }
          /**
           * CSS class added to root element if mulit select
           */

        }, {
          key: "isMultiSelection",
          get: function get() {
            return this.selectionType === _SelectionType.multi;
          }
          /**
           * CSS class added to root element if mulit click select
           */

        }, {
          key: "isMultiClickSelection",
          get: function get() {
            return this.selectionType === _SelectionType.multiClick;
          }
          /**
           * Column templates gathered from `ContentChildren`
           * if described in your markup.
           */

        }, {
          key: "columnTemplates",
          get:
          /**
           * Returns the column templates.
           */
          function get() {
            return this._columnTemplates;
          }
          /**
           * Returns if all rows are selected.
           */
          ,
          set: function set(val) {
            this._columnTemplates = val;
            this.translateColumns(val);
          }
        }, {
          key: "allRowsSelected",
          get: function get() {
            var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;

            if (this.bodyComponent && this.selectAllRowsOnPage) {
              var indexes = this.bodyComponent.indexes;
              var rowsOnPage = indexes.last - indexes.first;
              allRowsSelected = this.selected.length === rowsOnPage;
            }

            return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
          }
          /**
           * Lifecycle hook that is called after data-bound
           * properties of a directive are initialized.
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // need to call this immediatly to size
            // if the table is hidden the visibility
            // listener will invoke this itself upon show
            this.recalculate();
          }
          /**
           * Lifecycle hook that is called after a component's
           * view has been fully initialized.
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this19 = this;

            if (!this.externalSorting) {
              this.sortInternalRows();
            } // this has to be done to prevent the change detection
            // tree from freaking out because we are readjusting


            if (typeof requestAnimationFrame === 'undefined') {
              return;
            }

            requestAnimationFrame(function () {
              _this19.recalculate(); // emit page for virtual server-side kickoff


              if (_this19.externalPaging && _this19.scrollbarV) {
                _this19.page.emit({
                  count: _this19.count,
                  pageSize: _this19.pageSize,
                  limit: _this19.limit,
                  offset: 0
                });
              }
            });
          }
          /**
           * Lifecycle hook that is called after a component's
           * content has been fully initialized.
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this20 = this;

            this.columnTemplates.changes.subscribe(function (v) {
              return _this20.translateColumns(v);
            });
            this.listenForColumnInputChanges();
          }
          /**
           * Translates the templates to the column objects
           */

        }, {
          key: "translateColumns",
          value: function translateColumns(val) {
            if (val) {
              var arr = val.toArray();

              if (arr.length) {
                this._internalColumns = _translateTemplates(arr);

                _setColumnDefaults(this._internalColumns);

                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
              }
            }
          }
          /**
           * Creates a map with the data grouped by the user choice of grouping index
           *
           * @param originalArray the original array passed via parameter
           * @param groupByIndex  the index of the column to group the data by
           */

        }, {
          key: "groupArrayBy",
          value: function groupArrayBy(originalArray, groupBy) {
            // create a map to hold groups with their corresponding results
            var map = new Map();
            var i = 0;
            originalArray.forEach(function (item) {
              var key = item[groupBy];

              if (!map.has(key)) {
                map.set(key, [item]);
              } else {
                map.get(key).push(item);
              }

              i++;
            });

            var addGroup = function addGroup(key, value) {
              return {
                key: key,
                value: value
              };
            }; // convert map back to a simple array of objects


            return Array.from(map, function (x) {
              return addGroup(x[0], x[1]);
            });
          }
          /*
           * Lifecycle hook that is called when Angular dirty checks a directive.
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.rowDiffer.diff(this.rows)) {
              if (!this.externalSorting) {
                this.sortInternalRows();
              } else {
                this._internalRows = _toConsumableArray(this.rows);
              } // auto group by parent on new update


              this._internalRows = _groupRowsByParents(this._internalRows, _optionalGetterForProp(this.treeFromRelation), _optionalGetterForProp(this.treeToRelation));
              this.recalculatePages();
              this.cd.markForCheck();
            }
          }
          /**
           * Recalc's the sizes of the grid.
           *
           * Updated automatically on changes to:
           *
           *  - Columns
           *  - Rows
           *  - Paging related
           *
           * Also can be manually invoked or upon window resize.
           */

        }, {
          key: "recalculate",
          value: function recalculate() {
            this.recalculateDims();
            this.recalculateColumns();
            this.cd.markForCheck();
          }
          /**
           * Window resize handler to update sizes.
           */

        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            this.recalculate();
          }
          /**
           * Recalulcates the column widths based on column width
           * distribution mode and scrollbar offsets.
           */

        }, {
          key: "recalculateColumns",
          value: function recalculateColumns() {
            var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._internalColumns;
            var forceIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
            var allowBleed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.scrollbarH;
            if (!columns) return undefined;
            var width = this._innerWidth;

            if (this.scrollbarV) {
              width = width - this.scrollbarHelper.width;
            }

            if (this.columnMode === _ColumnMode.force) {
              _forceFillColumnWidths(columns, width, forceIdx, allowBleed);
            } else if (this.columnMode === _ColumnMode.flex) {
              _adjustColumnWidths(columns, width);
            }

            return columns;
          }
          /**
           * Recalculates the dimensions of the table size.
           * Internally calls the page size and row count calcs too.
           *
           */

        }, {
          key: "recalculateDims",
          value: function recalculateDims() {
            var dims = this.dimensionsHelper.getDimensions(this.element);
            this._innerWidth = Math.floor(dims.width);

            if (this.scrollbarV) {
              var height = dims.height;
              if (this.headerHeight) height = height - this.headerHeight;
              if (this.footerHeight) height = height - this.footerHeight;
              this.bodyHeight = height;
            }

            this.recalculatePages();
          }
          /**
           * Recalculates the pages after a update.
           */

        }, {
          key: "recalculatePages",
          value: function recalculatePages() {
            this.pageSize = this.calcPageSize();
            this.rowCount = this.calcRowCount();
          }
          /**
           * Body triggered a page event.
           */

        }, {
          key: "onBodyPage",
          value: function onBodyPage(_ref12) {
            var offset = _ref12.offset;

            // Avoid pagination caming from body events like scroll when the table
            // has no virtualization and the external paging is enable.
            // This means, let's the developer handle pagination by my him(her) self
            if (this.externalPaging && !this.virtualization) {
              return;
            }

            this.offset = offset;
            this.page.emit({
              count: this.count,
              pageSize: this.pageSize,
              limit: this.limit,
              offset: this.offset
            });
          }
          /**
           * The body triggered a scroll event.
           */

        }, {
          key: "onBodyScroll",
          value: function onBodyScroll(event) {
            this._offsetX.next(event.offsetX);

            this.scroll.emit(event);
            this.cd.detectChanges();
          }
          /**
           * The footer triggered a page event.
           */

        }, {
          key: "onFooterPage",
          value: function onFooterPage(event) {
            this.offset = event.page - 1;
            this.bodyComponent.updateOffsetY(this.offset);
            this.page.emit({
              count: this.count,
              pageSize: this.pageSize,
              limit: this.limit,
              offset: this.offset
            });

            if (this.selectAllRowsOnPage) {
              this.selected = [];
              this.select.emit({
                selected: this.selected
              });
            }
          }
          /**
           * Recalculates the sizes of the page
           */

        }, {
          key: "calcPageSize",
          value: function calcPageSize() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

            // Keep the page size constant even if the row has been expanded.
            // This is because an expanded row is still considered to be a child of
            // the original row.  Hence calculation would use rowHeight only.
            if (this.scrollbarV && this.virtualization) {
              var size = Math.ceil(this.bodyHeight / this.rowHeight);
              return Math.max(size, 0);
            } // if limit is passed, we are paging


            if (this.limit !== undefined) {
              return this.limit;
            } // otherwise use row length


            if (val) {
              return val.length;
            } // other empty :(


            return 0;
          }
          /**
           * Calculates the row count.
           */

        }, {
          key: "calcRowCount",
          value: function calcRowCount() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

            if (!this.externalPaging) {
              if (!val) return 0;

              if (this.groupedRows) {
                return this.groupedRows.length;
              } else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
              } else {
                return val.length;
              }
            }

            return this.count;
          }
          /**
           * The header triggered a contextmenu event.
           */

        }, {
          key: "onColumnContextmenu",
          value: function onColumnContextmenu(_ref13) {
            var event = _ref13.event,
                column = _ref13.column;
            this.tableContextmenu.emit({
              event: event,
              type: _ContextmenuType.header,
              content: column
            });
          }
          /**
           * The body triggered a contextmenu event.
           */

        }, {
          key: "onRowContextmenu",
          value: function onRowContextmenu(_ref14) {
            var event = _ref14.event,
                row = _ref14.row;
            this.tableContextmenu.emit({
              event: event,
              type: _ContextmenuType.body,
              content: row
            });
          }
          /**
           * The header triggered a column resize event.
           */

        }, {
          key: "onColumnResize",
          value: function onColumnResize(_ref15) {
            var column = _ref15.column,
                newValue = _ref15.newValue;

            /* Safari/iOS 10.2 workaround */
            if (column === undefined) {
              return;
            }

            var idx;

            var cols = this._internalColumns.map(function (c, i) {
              c = Object.assign({}, c);

              if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue; // set this so we can force the column
                // width distribution to be to this value

                c.$$oldWidth = newValue;
              }

              return c;
            });

            this.recalculateColumns(cols, idx);
            this._internalColumns = cols;
            this.resize.emit({
              column: column,
              newValue: newValue
            });
          }
          /**
           * The header triggered a column re-order event.
           */

        }, {
          key: "onColumnReorder",
          value: function onColumnReorder(_ref16) {
            var column = _ref16.column,
                newValue = _ref16.newValue,
                prevValue = _ref16.prevValue;

            var cols = this._internalColumns.map(function (c) {
              return Object.assign({}, c);
            });

            if (this.swapColumns) {
              var prevCol = cols[newValue];
              cols[newValue] = column;
              cols[prevValue] = prevCol;
            } else {
              if (newValue > prevValue) {
                var movedCol = cols[prevValue];

                for (var i = prevValue; i < newValue; i++) {
                  cols[i] = cols[i + 1];
                }

                cols[newValue] = movedCol;
              } else {
                var _movedCol = cols[prevValue];

                for (var _i3 = prevValue; _i3 > newValue; _i3--) {
                  cols[_i3] = cols[_i3 - 1];
                }

                cols[newValue] = _movedCol;
              }
            }

            this._internalColumns = cols;
            this.reorder.emit({
              column: column,
              newValue: newValue,
              prevValue: prevValue
            });
          }
          /**
           * The header triggered a column sort event.
           */

        }, {
          key: "onColumnSort",
          value: function onColumnSort(event) {
            // clean selected rows
            if (this.selectAllRowsOnPage) {
              this.selected = [];
              this.select.emit({
                selected: this.selected
              });
            }

            this.sorts = event.sorts; // this could be optimized better since it will resort
            // the rows again on the 'push' detection...

            if (this.externalSorting === false) {
              // don't use normal setter so we don't resort
              this.sortInternalRows();
            } // auto group by parent on new update


            this._internalRows = _groupRowsByParents(this._internalRows, _optionalGetterForProp(this.treeFromRelation), _optionalGetterForProp(this.treeToRelation)); // Always go to first page when sorting to see the newly sorted data

            this.offset = 0;
            this.bodyComponent.updateOffsetY(this.offset);
            this.sort.emit(event);
          }
          /**
           * Toggle all row selection
           */

        }, {
          key: "onHeaderSelect",
          value: function onHeaderSelect(event) {
            if (this.bodyComponent && this.selectAllRowsOnPage) {
              // before we splice, chk if we currently have all selected
              var first = this.bodyComponent.indexes.first;
              var last = this.bodyComponent.indexes.last;
              var allSelected = this.selected.length === last - first; // remove all existing either way

              this.selected = []; // do the opposite here

              if (!allSelected) {
                var _this$selected;

                (_this$selected = this.selected).push.apply(_this$selected, _toConsumableArray(this._internalRows.slice(first, last)));
              }
            } else {
              // before we splice, chk if we currently have all selected
              var _allSelected = this.selected.length === this.rows.length; // remove all existing either way


              this.selected = []; // do the opposite here

              if (!_allSelected) {
                var _this$selected2;

                (_this$selected2 = this.selected).push.apply(_this$selected2, _toConsumableArray(this.rows));
              }
            }

            this.select.emit({
              selected: this.selected
            });
          }
          /**
           * A row was selected from body
           */

        }, {
          key: "onBodySelect",
          value: function onBodySelect(event) {
            this.select.emit(event);
          }
          /**
           * A row was expanded or collapsed for tree
           */

        }, {
          key: "onTreeAction",
          value: function onTreeAction(event) {
            var _this21 = this;

            var row = event.row; // TODO: For duplicated items this will not work

            var rowIndex = this._rows.findIndex(function (r) {
              return r[_this21.treeToRelation] === event.row[_this21.treeToRelation];
            });

            this.treeAction.emit({
              row: row,
              rowIndex: rowIndex
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscriptions.forEach(function (subscription) {
              return subscription.unsubscribe();
            });
          }
          /**
           * listen for changes to input bindings of all DataTableColumnDirective and
           * trigger the columnTemplates.changes observable to emit
           */

        }, {
          key: "listenForColumnInputChanges",
          value: function listenForColumnInputChanges() {
            var _this22 = this;

            this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(function () {
              if (_this22.columnTemplates) {
                _this22.columnTemplates.notifyOnChanges();
              }
            }));
          }
        }, {
          key: "sortInternalRows",
          value: function sortInternalRows() {
            this._internalRows = _sortRows(this._internalRows, this._internalColumns, this.sorts);
          }
        }]);

        return _DatatableComponent;
      }();

      _DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
        return new (t || _DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('configuration', 8));
      };

      _DatatableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DatatableComponent,
        selectors: [["ngx-datatable"]],
        contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DatatableRowDetailDirective, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DatatableGroupHeaderDirective, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DatatableFooterDirective, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _DataTableColumnDirective, 4);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
          }
        },
        viewQuery: function DatatableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_DataTableBodyComponent, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_DataTableHeaderComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
          }
        },
        hostAttrs: [1, "ngx-datatable"],
        hostVars: 22,
        hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
              return ctx.onWindowResize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
          }
        },
        inputs: {
          selected: "selected",
          scrollbarV: "scrollbarV",
          scrollbarH: "scrollbarH",
          rowHeight: "rowHeight",
          columnMode: "columnMode",
          headerHeight: "headerHeight",
          footerHeight: "footerHeight",
          externalPaging: "externalPaging",
          externalSorting: "externalSorting",
          loadingIndicator: "loadingIndicator",
          reorderable: "reorderable",
          swapColumns: "swapColumns",
          sortType: "sortType",
          sorts: "sorts",
          cssClasses: "cssClasses",
          messages: "messages",
          groupExpansionDefault: "groupExpansionDefault",
          selectAllRowsOnPage: "selectAllRowsOnPage",
          virtualization: "virtualization",
          summaryRow: "summaryRow",
          summaryHeight: "summaryHeight",
          summaryPosition: "summaryPosition",
          rowIdentity: "rowIdentity",
          rows: "rows",
          groupedRows: "groupedRows",
          groupRowsBy: "groupRowsBy",
          columns: "columns",
          limit: "limit",
          count: "count",
          offset: "offset",
          targetMarkerTemplate: "targetMarkerTemplate",
          selectionType: "selectionType",
          rowClass: "rowClass",
          selectCheck: "selectCheck",
          displayCheck: "displayCheck",
          trackByProp: "trackByProp",
          treeFromRelation: "treeFromRelation",
          treeToRelation: "treeToRelation"
        },
        outputs: {
          scroll: "scroll",
          activate: "activate",
          select: "select",
          sort: "sort",
          page: "page",
          reorder: "reorder",
          resize: "resize",
          tableContextmenu: "tableContextmenu",
          treeAction: "treeAction"
        },
        decls: 5,
        vars: 34,
        consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
        template: function DatatableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
              return ctx.recalculate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "datatable-body", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
              return ctx.onBodyPage($event);
            })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
              return ctx.activate.emit($event);
            })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
              return ctx.onRowContextmenu($event);
            })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
              return ctx.onBodySelect($event);
            })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
              return ctx.onBodyScroll($event);
            })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
              return ctx.onTreeAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerHeight);
          }
        },
        directives: function directives() {
          return [_VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _DataTableBodyComponent, _DataTableHeaderComponent, _DataTableFooterComponent];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe];
        },
        styles: [".ngx-datatable{display:block;justify-content:center;overflow:hidden;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{-webkit-overflow-scrolling:touch;overflow-x:auto}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{-o-flex-flow:row;display:flex;flex-direction:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{display:inline-block;line-height:1.625;overflow-x:hidden;vertical-align:top}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{-webkit-align-items:stretch;align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{display:inline-block;position:relative}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{cursor:pointer;display:inline-block;line-height:100%;vertical-align:middle}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{bottom:0;display:inline-block;padding:0 4px;position:absolute;right:0;top:0;visibility:hidden;width:5px}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{bottom:0;position:absolute;top:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{display:block;position:relative;z-index:10}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;overflow:auto;width:100%}.ngx-datatable .datatable-footer .datatable-footer-inner{align-items:center;display:flex;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{display:inline-block;list-style:none;margin:0;padding:0}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"],
        encapsulation: 2,
        changeDetection: 0
      });

      _DatatableComponent.ctorParameters = function () {
        return [{
          type: _ScrollbarHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: _DimensionsHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
        }, {
          type: _ColumnChangesService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: ['configuration']
          }]
        }];
      };

      _DatatableComponent.propDecorators = {
        targetMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupRowsBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupedRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrollbarV: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrollbarH: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        columnMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        footerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        externalPaging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        externalSorting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        limit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        loadingIndicator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        reorderable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        swapColumns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cssClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        messages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupExpansionDefault: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        trackByProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectAllRowsOnPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        virtualization: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        treeFromRelation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        treeToRelation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        summaryPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        reorder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        tableContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        isFixedHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.fixed-header']
        }],
        isFixedRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.fixed-row']
        }],
        isVertScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.scroll-vertical']
        }],
        isVirtualized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.virtualized']
        }],
        isHorScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.scroll-horz']
        }],
        isSelectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.selectable']
        }],
        isCheckboxSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.checkbox-selection']
        }],
        isCellSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.cell-selection']
        }],
        isSingleSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.single-selection']
        }],
        isMultiSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.multi-selection']
        }],
        isMultiClickSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.multi-click-selection']
        }],
        columnTemplates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_DataTableColumnDirective]
        }],
        rowDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DatatableRowDetailDirective]
        }],
        groupHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DatatableGroupHeaderDirective]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_DatatableFooterDirective]
        }],
        bodyComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_DataTableBodyComponent]
        }],
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_DataTableHeaderComponent]
        }],
        rowIdentity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:resize']
        }]
      };
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([_throttleable(5)], _DatatableComponent.prototype, "onWindowResize", null);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ScrollbarHelper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DimensionsHelper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], null, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ColumnChangesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableFooterTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngx-datatable-footer-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_VisibilityDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[visibilityObserver]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.visible']
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DraggableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[draggable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          dragX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dragY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          dragEventTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dragModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ResizeableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[resizeable]',
            host: {
              '[class.resizeable]': 'resizeEnabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }];
        }, {
          resizeEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mousedown', ['$event']]
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_OrderableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[orderable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, {
          reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          targetChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          draggables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_DraggableDirective, {
              descendants: true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LongPressDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[long-press]'
          }]
        }], function () {
          return [];
        }, {
          pressEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          longPressStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          longPressing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          longPressEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.press']
          }],
          isLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.longpress']
          }],
          onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mousedown', ['$event']]
          }],
          pressModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ScrollerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-scroller',
            template: " <ng-content></ng-content> ",
            host: {
              "class": 'datatable-scroll'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }];
        }, {
          scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          scrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DatatableGroupHeaderTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngx-datatable-group-header-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DatatableGroupHeaderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ngx-datatable-group-header'
          }]
        }], function () {
          return [];
        }, {
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['template']
          }],
          _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DatatableGroupHeaderTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableColumnHeaderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngx-datatable-header-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableColumnCellDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngx-datatable-cell-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableColumnCellTreeToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngx-datatable-tree-toggle]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableColumnDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ngx-datatable-column'
          }]
        }], function () {
          return [{
            type: _ColumnChangesService
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          frozenLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          frozenRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          flexGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          resizeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          comparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          canAutoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          checkboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerCheckboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cellClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isTreeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          treeLevelIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _cellTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cellTemplate']
          }],
          _cellTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DataTableColumnCellDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
              "static": true
            }]
          }],
          _headerTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['headerTemplate']
          }],
          _headerTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DataTableColumnHeaderDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
              "static": true
            }]
          }],
          _treeToggleTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['treeToggleTemplate']
          }],
          _treeToggleTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DataTableColumnCellTreeToggle, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DatatableRowDetailTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngx-datatable-row-detail-template]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DatatableRowDetailDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ngx-datatable-row-detail'
          }]
        }], function () {
          return [];
        }, {
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['template']
          }],
          _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DatatableRowDetailTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DatatableFooterDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ngx-datatable-footer'
          }]
        }], null, {
          footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['template']
          }],
          _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DataTableFooterTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableBodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-body',
            template: "\n    <datatable-progress *ngIf=\"loadingIndicator\"> </datatable-progress>\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"rows\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n    >\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths?.total\"\n        (scroll)=\"onBodyScroll($event)\"\n      >\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'top'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n        <datatable-row-wrapper\n          [groupedRows]=\"groupedRows\"\n          *ngFor=\"let group of temp; let i = index; trackBy: rowTrackingFn\"\n          [innerWidth]=\"innerWidth\"\n          [ngStyle]=\"getRowsStyles(group)\"\n          [rowDetail]=\"rowDetail\"\n          [groupHeader]=\"groupHeader\"\n          [offsetX]=\"offsetX\"\n          [detailRowHeight]=\"getDetailRowHeight(group && group[i], i)\"\n          [row]=\"group\"\n          [expanded]=\"getRowExpanded(group)\"\n          [rowIndex]=\"getRowIndex(group && group[i])\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        >\n          <datatable-body-row\n            *ngIf=\"!groupedRows; else groupedRowsTemplate\"\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(group)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"getRowHeight(group)\"\n            [row]=\"group\"\n            [rowIndex]=\"getRowIndex(group)\"\n            [expanded]=\"getRowExpanded(group)\"\n            [rowClass]=\"rowClass\"\n            [displayCheck]=\"displayCheck\"\n            [treeStatus]=\"group && group.treeStatus\"\n            (treeAction)=\"onTreeAction(group)\"\n            (activate)=\"selector.onActivate($event, indexes.first + i)\"\n          >\n          </datatable-body-row>\n          <ng-template #groupedRowsTemplate>\n            <datatable-body-row\n              *ngFor=\"let row of group.value; let i = index; trackBy: rowTrackingFn\"\n              tabindex=\"-1\"\n              [isSelected]=\"selector.getRowSelected(row)\"\n              [innerWidth]=\"innerWidth\"\n              [offsetX]=\"offsetX\"\n              [columns]=\"columns\"\n              [rowHeight]=\"getRowHeight(row)\"\n              [row]=\"row\"\n              [group]=\"group.value\"\n              [rowIndex]=\"getRowIndex(row)\"\n              [expanded]=\"getRowExpanded(row)\"\n              [rowClass]=\"rowClass\"\n              (activate)=\"selector.onActivate($event, i)\"\n            >\n            </datatable-body-row>\n          </ng-template>\n        </datatable-row-wrapper>\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'bottom'\"\n          [ngStyle]=\"getBottomSummaryRowStyles()\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n      </datatable-scroller>\n      <div class=\"empty-row\" *ngIf=\"!rows?.length && !loadingIndicator\" [innerHTML]=\"emptyMessage\"></div>\n    </datatable-selection>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            host: {
              "class": 'datatable-body'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          detailToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          bodyWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width']
          }],
          bodyHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_ScrollerComponent]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-header',
            template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\"\n    >\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\"\n      >\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [sortUnsetIcon]=\"sortUnsetIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\"\n        >\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
            host: {
              "class": 'datatable-header'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width']
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dealsWithGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DatatableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ngx-datatable',
            template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            host: {
              "class": 'ngx-datatable'
            },
            styles: [".ngx-datatable{display:block;justify-content:center;overflow:hidden;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{-webkit-overflow-scrolling:touch;overflow-x:auto}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{-o-flex-flow:row;display:flex;flex-direction:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{display:inline-block;line-height:1.625;overflow-x:hidden;vertical-align:top}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{-webkit-align-items:stretch;align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{display:inline-block;position:relative}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{cursor:pointer;display:inline-block;line-height:100%;vertical-align:middle}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{bottom:0;display:inline-block;padding:0 4px;position:absolute;right:0;top:0;visibility:hidden;width:5px}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{bottom:0;position:absolute;top:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{display:block;position:relative;z-index:10}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;overflow:auto;width:100%}.ngx-datatable .datatable-footer .datatable-footer-inner{align-items:center;display:flex;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{display:inline-block;list-style:none;margin:0;padding:0}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
          }]
        }], function () {
          return [{
            type: _ScrollbarHelper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: _DimensionsHelper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
          }, {
            type: _ColumnChangesService
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: ['configuration']
            }]
          }];
        }, {
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columnMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          externalSorting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          swapColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectAllRowsOnPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          tableContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isFixedHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.fixed-header']
          }],
          isFixedRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.fixed-row']
          }],
          isVertScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.scroll-vertical']
          }],
          isVirtualized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.virtualized']
          }],
          isHorScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.scroll-horz']
          }],
          isSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.selectable']
          }],
          isCheckboxSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.checkbox-selection']
          }],
          isCellSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.cell-selection']
          }],
          isSingleSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.single-selection']
          }],
          isMultiSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.multi-selection']
          }],
          isMultiClickSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.multi-click-selection']
          }],
          columnTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_DataTableColumnDirective]
          }],

          /**
           * Window resize handler to update sizes.
           */
          onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:resize']
          }],
          targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          treeFromRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          treeToRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DatatableRowDetailDirective]
          }],
          groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DatatableGroupHeaderDirective]
          }],
          footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_DatatableFooterDirective]
          }],
          bodyComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_DataTableBodyComponent]
          }],
          headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_DataTableHeaderComponent]
          }]
        });
      })();

      var _DataTableHeaderCellComponent = /*#__PURE__*/function () {
        function _DataTableHeaderCellComponent(cd) {
          _classCallCheck(this, _DataTableHeaderCellComponent);

          this.cd = cd;
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
          this.sortFn = this.onSort.bind(this);
          this.selectFn = this.select.emit.bind(this.select);
          this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
          };
        }

        _createClass(_DataTableHeaderCellComponent, [{
          key: "allRowsSelected",
          get: function get() {
            return this._allRowsSelected;
          },
          set: function set(value) {
            this._allRowsSelected = value;
            this.cellContext.allRowsSelected = value;
          }
        }, {
          key: "column",
          get: function get() {
            return this._column;
          },
          set: function set(column) {
            this._column = column;
            this.cellContext.column = column;
            this.cd.markForCheck();
          }
        }, {
          key: "sorts",
          get: function get() {
            return this._sorts;
          },
          set: function set(val) {
            this._sorts = val;
            this.sortDir = this.calcSortDir(val);
            this.cellContext.sortDir = this.sortDir;
            this.sortClass = this.calcSortClass(this.sortDir);
            this.cd.markForCheck();
          }
        }, {
          key: "columnCssClasses",
          get: function get() {
            var cls = 'datatable-header-cell';
            if (this.column.sortable) cls += ' sortable';
            if (this.column.resizeable) cls += ' resizeable';

            if (this.column.headerClass) {
              if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
              } else if (typeof this.column.headerClass === 'function') {
                var res = this.column.headerClass({
                  column: this.column
                });

                if (typeof res === 'string') {
                  cls += res;
                } else if (typeof res === 'object') {
                  var keys = Object.keys(res);

                  for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
                    var k = _keys[_i4];
                    if (res[k] === true) cls += " ".concat(k);
                  }
                }
              }
            }

            var sortDir = this.sortDir;

            if (sortDir) {
              cls += " sort-active sort-".concat(sortDir);
            }

            return cls;
          }
        }, {
          key: "name",
          get: function get() {
            // guaranteed to have a value by setColumnDefaults() in column-helper.ts
            return this.column.headerTemplate === undefined ? this.column.name : undefined;
          }
        }, {
          key: "minWidth",
          get: function get() {
            return this.column.minWidth;
          }
        }, {
          key: "maxWidth",
          get: function get() {
            return this.column.maxWidth;
          }
        }, {
          key: "width",
          get: function get() {
            return this.column.width;
          }
        }, {
          key: "isCheckboxable",
          get: function get() {
            return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === _SelectionType.checkbox;
          }
        }, {
          key: "onContextmenu",
          value: function onContextmenu($event) {
            this.columnContextmenu.emit({
              event: $event,
              column: this.column
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sortClass = this.calcSortClass(this.sortDir);
          }
        }, {
          key: "calcSortDir",
          value: function calcSortDir(sorts) {
            var _this23 = this;

            if (sorts && this.column) {
              var sort = sorts.find(function (s) {
                return s.prop === _this23.column.prop;
              });
              if (sort) return sort.dir;
            }
          }
        }, {
          key: "onSort",
          value: function onSort() {
            if (!this.column.sortable) return;

            var newValue = _nextSortDir(this.sortType, this.sortDir);

            this.sort.emit({
              column: this.column,
              prevValue: this.sortDir,
              newValue: newValue
            });
          }
        }, {
          key: "calcSortClass",
          value: function calcSortClass(sortDir) {
            if (!this.cellContext.column.sortable) return;

            if (sortDir === _SortDirection.asc) {
              return "sort-btn sort-asc ".concat(this.sortAscendingIcon);
            } else if (sortDir === _SortDirection.desc) {
              return "sort-btn sort-desc ".concat(this.sortDescendingIcon);
            } else {
              return "sort-btn ".concat(this.sortUnsetIcon);
            }
          }
        }]);

        return _DataTableHeaderCellComponent;
      }();

      _DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
        return new (t || _DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _DataTableHeaderCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableHeaderCellComponent,
        selectors: [["datatable-header-cell"]],
        hostAttrs: [1, "datatable-header-cell"],
        hostVars: 11,
        hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
              return ctx.onContextmenu($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
          }
        },
        inputs: {
          allRowsSelected: "allRowsSelected",
          column: "column",
          sorts: "sorts",
          sortType: "sortType",
          sortAscendingIcon: "sortAscendingIcon",
          sortDescendingIcon: "sortDescendingIcon",
          sortUnsetIcon: "sortUnsetIcon",
          isTarget: "isTarget",
          targetMarkerTemplate: "targetMarkerTemplate",
          targetMarkerContext: "targetMarkerContext",
          selectionType: "selectionType",
          headerHeight: "headerHeight"
        },
        outputs: {
          sort: "sort",
          select: "select",
          columnContextmenu: "columnContextmenu"
        },
        decls: 6,
        vars: 6,
        consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
        template: function DataTableHeaderCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
              return ctx.onSort();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTarget);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sortClass);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        encapsulation: 2,
        changeDetection: 0
      });

      _DataTableHeaderCellComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _DataTableHeaderCellComponent.propDecorators = {
        sortType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortAscendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortDescendingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sortUnsetIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        targetMarkerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        targetMarkerContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        allRowsSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.height.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        columnContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        columnCssClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['attr.title']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.minWidth.px']
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.maxWidth.px']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.width.px']
        }],
        onContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['contextmenu', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableHeaderCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-header-cell',
            template: "\n    <div class=\"datatable-header-cell-template-wrap\">\n      <ng-template\n        *ngIf=\"isTarget\"\n        [ngTemplateOutlet]=\"targetMarkerTemplate\"\n        [ngTemplateOutletContext]=\"targetMarkerContext\"\n      >\n      </ng-template>\n      <label *ngIf=\"isCheckboxable\" class=\"datatable-checkbox\">\n        <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"select.emit(!allRowsSelected)\" />\n      </label>\n      <span *ngIf=\"!column.headerTemplate\" class=\"datatable-header-cell-wrapper\">\n        <span class=\"datatable-header-cell-label draggable\" (click)=\"onSort()\" [innerHTML]=\"name\"> </span>\n      </span>\n      <ng-template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n      <span (click)=\"onSort()\" [class]=\"sortClass\"> </span>\n    </div>\n  ",
            host: {
              "class": 'datatable-header-cell'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['attr.title']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.minWidth.px']
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.maxWidth.px']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
          }],
          onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['contextmenu', ['$event']]
          }],
          sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          targetMarkerContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _DataTableFooterComponent = /*#__PURE__*/function () {
        function _DataTableFooterComponent() {
          _classCallCheck(this, _DataTableFooterComponent);

          this.selectedCount = 0;
          this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_DataTableFooterComponent, [{
          key: "isVisible",
          get: function get() {
            return this.rowCount / this.pageSize > 1;
          }
        }, {
          key: "curPage",
          get: function get() {
            return this.offset + 1;
          }
        }]);

        return _DataTableFooterComponent;
      }();

      _DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
        return new (t || _DataTableFooterComponent)();
      };

      _DataTableFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableFooterComponent,
        selectors: [["datatable-footer"]],
        hostAttrs: [1, "datatable-footer"],
        inputs: {
          selectedCount: "selectedCount",
          footerHeight: "footerHeight",
          rowCount: "rowCount",
          pageSize: "pageSize",
          offset: "offset",
          pagerLeftArrowIcon: "pagerLeftArrowIcon",
          pagerRightArrowIcon: "pagerRightArrowIcon",
          pagerPreviousIcon: "pagerPreviousIcon",
          pagerNextIcon: "pagerNextIcon",
          totalMessage: "totalMessage",
          footerTemplate: "footerTemplate",
          selectedMessage: "selectedMessage"
        },
        outputs: {
          page: "page"
        },
        decls: 4,
        vars: 8,
        consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
        template: function DataTableFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _DataTablePagerComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });
      _DataTableFooterComponent.propDecorators = {
        footerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerLeftArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerRightArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerPreviousIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        totalMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectedCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectedMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-footer',
            template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{ 'selected-count': selectedMessage }\"\n      [style.height.px]=\"footerHeight\"\n    >\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{\n          rowCount: rowCount,\n          pageSize: pageSize,\n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\"\n      >\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>\n        {{ rowCount?.toLocaleString() }} {{ totalMessage }}\n      </div>\n      <datatable-pager\n        *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\"\n      >\n      </datatable-pager>\n    </div>\n  ",
            host: {
              "class": 'datatable-footer'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [];
        }, {
          selectedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _DataTablePagerComponent = /*#__PURE__*/function () {
        function _DataTablePagerComponent() {
          _classCallCheck(this, _DataTablePagerComponent);

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._count = 0;
          this._page = 1;
          this._size = 0;
        }

        _createClass(_DataTablePagerComponent, [{
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(val) {
            this._size = val;
            this.pages = this.calcPages();
          }
        }, {
          key: "count",
          get: function get() {
            return this._count;
          },
          set: function set(val) {
            this._count = val;
            this.pages = this.calcPages();
          }
        }, {
          key: "page",
          get: function get() {
            return this._page;
          },
          set: function set(val) {
            this._page = val;
            this.pages = this.calcPages();
          }
        }, {
          key: "totalPages",
          get: function get() {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
          }
        }, {
          key: "canPrevious",
          value: function canPrevious() {
            return this.page > 1;
          }
        }, {
          key: "canNext",
          value: function canNext() {
            return this.page < this.totalPages;
          }
        }, {
          key: "prevPage",
          value: function prevPage() {
            this.selectPage(this.page - 1);
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.selectPage(this.page + 1);
          }
        }, {
          key: "selectPage",
          value: function selectPage(page) {
            if (page > 0 && page <= this.totalPages && page !== this.page) {
              this.page = page;
              this.change.emit({
                page: page
              });
            }
          }
        }, {
          key: "calcPages",
          value: function calcPages(page) {
            var pages = [];
            var startPage = 1;
            var endPage = this.totalPages;
            var maxSize = 5;
            var isMaxSized = maxSize < this.totalPages;
            page = page || this.page;

            if (isMaxSized) {
              startPage = page - Math.floor(maxSize / 2);
              endPage = page + Math.floor(maxSize / 2);

              if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
              } else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
              }
            }

            for (var num = startPage; num <= endPage; num++) {
              pages.push({
                number: num,
                text: num
              });
            }

            return pages;
          }
        }]);

        return _DataTablePagerComponent;
      }();

      _DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
        return new (t || _DataTablePagerComponent)();
      };

      _DataTablePagerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTablePagerComponent,
        selectors: [["datatable-pager"]],
        hostAttrs: [1, "datatable-pager"],
        inputs: {
          size: "size",
          count: "count",
          page: "page",
          pagerLeftArrowIcon: "pagerLeftArrowIcon",
          pagerRightArrowIcon: "pagerRightArrowIcon",
          pagerPreviousIcon: "pagerPreviousIcon",
          pagerNextIcon: "pagerNextIcon"
        },
        outputs: {
          change: "change"
        },
        decls: 14,
        vars: 21,
        consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
        template: function DataTablePagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
              return ctx.selectPage(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
              return ctx.prevPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
              return ctx.selectPage(ctx.totalPages);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        encapsulation: 2,
        changeDetection: 0
      });
      _DataTablePagerComponent.propDecorators = {
        pagerLeftArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerRightArrowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerPreviousIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pagerNextIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTablePagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-pager',
            template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to first page\" href=\"javascript:void(0)\" (click)=\"selectPage(1)\">\n          <i class=\"{{ pagerPreviousIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to previous page\" href=\"javascript:void(0)\" (click)=\"prevPage()\">\n          <i class=\"{{ pagerLeftArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li\n        role=\"button\"\n        [attr.aria-label]=\"'page ' + pg.number\"\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\"\n      >\n        <a href=\"javascript:void(0)\" (click)=\"selectPage(pg.number)\">\n          {{ pg.text }}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to next page\" href=\"javascript:void(0)\" (click)=\"nextPage()\">\n          <i class=\"{{ pagerRightArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to last page\" href=\"javascript:void(0)\" (click)=\"selectPage(totalPages)\">\n          <i class=\"{{ pagerNextIcon }}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
            host: {
              "class": 'datatable-pager'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _ProgressBarComponent = function _ProgressBarComponent() {
        _classCallCheck(this, _ProgressBarComponent);
      };

      _ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
        return new (t || _ProgressBarComponent)();
      };

      _ProgressBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProgressBarComponent,
        selectors: [["datatable-progress"]],
        decls: 3,
        vars: 0,
        consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
        template: function ProgressBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ProgressBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-progress',
            template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], null, null);
      })();

      var _Keys;

      (function (Keys) {
        Keys[Keys["up"] = 38] = "up";
        Keys[Keys["down"] = 40] = "down";
        Keys[Keys["return"] = 13] = "return";
        Keys[Keys["escape"] = 27] = "escape";
        Keys[Keys["left"] = 37] = "left";
        Keys[Keys["right"] = 39] = "right";
      })(_Keys || (_Keys = {}));

      var _DataTableBodyRowComponent = /*#__PURE__*/function () {
        function _DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
          _classCallCheck(this, _DataTableBodyRowComponent);

          this.differs = differs;
          this.scrollbarHelper = scrollbarHelper;
          this.cd = cd;
          this.treeStatus = 'collapsed';
          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._groupStyles = {
            left: {},
            center: {},
            right: {}
          };
          this._element = element.nativeElement;
          this._rowDiffer = differs.find({}).create();
        }

        _createClass(_DataTableBodyRowComponent, [{
          key: "columns",
          get: function get() {
            return this._columns;
          },
          set: function set(val) {
            this._columns = val;
            this.recalculateColumns(val);
            this.buildStylesByGroup();
          }
        }, {
          key: "innerWidth",
          get: function get() {
            return this._innerWidth;
          },
          set: function set(val) {
            if (this._columns) {
              var colByPin = _columnsByPin(this._columns);

              this._columnGroupWidths = _columnGroupWidths(colByPin, this._columns);
            }

            this._innerWidth = val;
            this.recalculateColumns();
            this.buildStylesByGroup();
          }
        }, {
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          },
          set: function set(val) {
            this._offsetX = val;
            this.buildStylesByGroup();
          }
        }, {
          key: "cssClass",
          get: function get() {
            var cls = 'datatable-body-row';

            if (this.isSelected) {
              cls += ' active';
            }

            if (this.rowIndex % 2 !== 0) {
              cls += ' datatable-row-odd';
            }

            if (this.rowIndex % 2 === 0) {
              cls += ' datatable-row-even';
            }

            if (this.rowClass) {
              var res = this.rowClass(this.row);

              if (typeof res === 'string') {
                cls += " ".concat(res);
              } else if (typeof res === 'object') {
                var keys = Object.keys(res);

                for (var _i5 = 0, _keys2 = keys; _i5 < _keys2.length; _i5++) {
                  var k = _keys2[_i5];

                  if (res[k] === true) {
                    cls += " ".concat(k);
                  }
                }
              }
            }

            return cls;
          }
        }, {
          key: "columnsTotalWidths",
          get: function get() {
            return this._columnGroupWidths.total;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._rowDiffer.diff(this.row)) {
              this.cd.markForCheck();
            }
          }
        }, {
          key: "trackByGroups",
          value: function trackByGroups(index, colGroup) {
            return colGroup.type;
          }
        }, {
          key: "columnTrackingFn",
          value: function columnTrackingFn(index, column) {
            return column.$$id;
          }
        }, {
          key: "buildStylesByGroup",
          value: function buildStylesByGroup() {
            this._groupStyles.left = this.calcStylesByGroup('left');
            this._groupStyles.center = this.calcStylesByGroup('center');
            this._groupStyles.right = this.calcStylesByGroup('right');
            this.cd.markForCheck();
          }
        }, {
          key: "calcStylesByGroup",
          value: function calcStylesByGroup(group) {
            var widths = this._columnGroupWidths;
            var offsetX = this.offsetX;
            var styles = {
              width: "".concat(widths[group], "px")
            };

            if (group === 'left') {
              _translateXY(styles, offsetX, 0);
            } else if (group === 'right') {
              var bodyWidth = parseInt(this.innerWidth + '', 0);
              var totalDiff = widths.total - bodyWidth;
              var offsetDiff = totalDiff - offsetX;
              var offset = (offsetDiff + this.scrollbarHelper.width) * -1;

              _translateXY(styles, offset, 0);
            }

            return styles;
          }
        }, {
          key: "onActivate",
          value: function onActivate(event, index) {
            event.cellIndex = index;
            event.rowElement = this._element;
            this.activate.emit(event);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            var keyCode = event.keyCode;
            var isTargetRow = event.target === this._element;
            var isAction = keyCode === _Keys["return"] || keyCode === _Keys.down || keyCode === _Keys.up || keyCode === _Keys.left || keyCode === _Keys.right;

            if (isAction && isTargetRow) {
              event.preventDefault();
              event.stopPropagation();
              this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                rowElement: this._element
              });
            }
          }
        }, {
          key: "onMouseenter",
          value: function onMouseenter(event) {
            this.activate.emit({
              type: 'mouseenter',
              event: event,
              row: this.row,
              rowElement: this._element
            });
          }
        }, {
          key: "recalculateColumns",
          value: function recalculateColumns() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.columns;
            this._columns = val;

            var colsByPin = _columnsByPin(this._columns);

            this._columnsByPin = _columnsByPinArr(this._columns);
            this._columnGroupWidths = _columnGroupWidths(colsByPin, this._columns);
          }
        }, {
          key: "onTreeAction",
          value: function onTreeAction() {
            this.treeAction.emit();
          }
        }]);

        return _DataTableBodyRowComponent;
      }();

      _DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
        return new (t || _DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _DataTableBodyRowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableBodyRowComponent,
        selectors: [["datatable-body-row"]],
        hostVars: 6,
        hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
              return ctx.onMouseenter($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
          }
        },
        inputs: {
          treeStatus: "treeStatus",
          columns: "columns",
          innerWidth: "innerWidth",
          offsetX: "offsetX",
          expanded: "expanded",
          rowClass: "rowClass",
          row: "row",
          group: "group",
          isSelected: "isSelected",
          rowIndex: "rowIndex",
          displayCheck: "displayCheck",
          rowHeight: "rowHeight"
        },
        outputs: {
          activate: "activate",
          treeAction: "treeAction"
        },
        decls: 1,
        vars: 2,
        consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
        template: function DataTableBodyRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _DataTableBodyCellComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      _DataTableBodyRowComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
        }, {
          type: _ScrollbarHelper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _DataTableBodyRowComponent.propDecorators = {
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        treeStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class']
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.height.px']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        columnsTotalWidths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.width.px']
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['keydown', ['$event']]
        }],
        onMouseenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseenter', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableBodyRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-body-row',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            template: "\n    <div\n      *ngFor=\"let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{ colGroup.type }} datatable-row-group\"\n      [ngStyle]=\"_groupStyles[colGroup.type]\"\n    >\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [group]=\"group\"\n        [expanded]=\"expanded\"\n        [isSelected]=\"isSelected\"\n        [rowIndex]=\"rowIndex\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        [displayCheck]=\"displayCheck\"\n        [treeStatus]=\"treeStatus\"\n        (activate)=\"onActivate($event, ii)\"\n        (treeAction)=\"onTreeAction()\"\n      >\n      </datatable-body-cell>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
          }, {
            type: _ScrollbarHelper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
          }],
          columnsTotalWidths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
          }],
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
          }],
          onMouseenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter', ['$event']]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height.px']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _DataTableRowWrapperComponent = /*#__PURE__*/function () {
        function _DataTableRowWrapperComponent(cd, differs) {
          _classCallCheck(this, _DataTableRowWrapperComponent);

          this.cd = cd;
          this.differs = differs;
          this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
          this._expanded = false;
          this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
          };
          this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
          };
          this.rowDiffer = differs.find({}).create();
        }

        _createClass(_DataTableRowWrapperComponent, [{
          key: "rowIndex",
          get: function get() {
            return this._rowIndex;
          },
          set: function set(val) {
            this._rowIndex = val;
            this.rowContext.rowIndex = val;
            this.groupContext.rowIndex = val;
            this.cd.markForCheck();
          }
        }, {
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(val) {
            this._expanded = val;
            this.groupContext.expanded = val;
            this.rowContext.expanded = val;
            this.cd.markForCheck();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.rowDiffer.diff(this.row)) {
              this.rowContext.row = this.row;
              this.groupContext.group = this.row;
              this.cd.markForCheck();
            }
          }
        }, {
          key: "onContextmenu",
          value: function onContextmenu($event) {
            this.rowContextmenu.emit({
              event: $event,
              row: this.row
            });
          }
        }, {
          key: "getGroupHeaderStyle",
          value: function getGroupHeaderStyle() {
            var styles = {};
            styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
            styles['backface-visibility'] = 'hidden';
            styles['width'] = this.innerWidth;
            return styles;
          }
        }]);

        return _DataTableRowWrapperComponent;
      }();

      _DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
        return new (t || _DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers));
      };

      _DataTableRowWrapperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableRowWrapperComponent,
        selectors: [["datatable-row-wrapper"]],
        hostAttrs: [1, "datatable-row-wrapper"],
        hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
              return ctx.onContextmenu($event);
            });
          }
        },
        inputs: {
          rowIndex: "rowIndex",
          expanded: "expanded",
          innerWidth: "innerWidth",
          rowDetail: "rowDetail",
          groupHeader: "groupHeader",
          offsetX: "offsetX",
          detailRowHeight: "detailRowHeight",
          row: "row",
          groupedRows: "groupedRows"
        },
        outputs: {
          rowContextmenu: "rowContextmenu"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 3,
        consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
        template: function DataTableRowWrapperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        encapsulation: 2,
        changeDetection: 0
      });

      _DataTableRowWrapperComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
        }];
      };

      _DataTableRowWrapperComponent.propDecorators = {
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        detailRowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupedRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        onContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['contextmenu', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableRowWrapperComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-row-wrapper',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            template: "\n    <div *ngIf=\"groupHeader && groupHeader.template\" class=\"datatable-group-header\" [ngStyle]=\"getGroupHeaderStyle()\">\n      <ng-template\n        *ngIf=\"groupHeader && groupHeader.template\"\n        [ngTemplateOutlet]=\"groupHeader.template\"\n        [ngTemplateOutletContext]=\"groupContext\"\n      >\n      </ng-template>\n    </div>\n    <ng-content *ngIf=\"(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template\">\n    </ng-content>\n    <div\n      *ngIf=\"rowDetail && rowDetail.template && expanded\"\n      [style.height.px]=\"detailRowHeight\"\n      class=\"datatable-row-detail\"\n    >\n      <ng-template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngTemplateOutletContext]=\"rowContext\"\n      >\n      </ng-template>\n    </div>\n  ",
            host: {
              "class": 'datatable-row-wrapper'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
          }];
        }, {
          rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['contextmenu', ['$event']]
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          detailRowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _DataTableBodyCellComponent = /*#__PURE__*/function () {
        function _DataTableBodyCellComponent(element, cd) {
          _classCallCheck(this, _DataTableBodyCellComponent);

          this.cd = cd;
          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.isFocused = false;
          this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
          this.activateFn = this.activate.emit.bind(this.activate);
          this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
          };
          this._element = element.nativeElement;
        }

        _createClass(_DataTableBodyCellComponent, [{
          key: "group",
          get: function get() {
            return this._group;
          },
          set: function set(group) {
            this._group = group;
            this.cellContext.group = group;
            this.checkValueUpdates();
            this.cd.markForCheck();
          }
        }, {
          key: "rowHeight",
          get: function get() {
            return this._rowHeight;
          },
          set: function set(val) {
            this._rowHeight = val;
            this.cellContext.rowHeight = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
          }
        }, {
          key: "isSelected",
          get: function get() {
            return this._isSelected;
          },
          set: function set(val) {
            this._isSelected = val;
            this.cellContext.isSelected = val;
            this.cd.markForCheck();
          }
        }, {
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(val) {
            this._expanded = val;
            this.cellContext.expanded = val;
            this.cd.markForCheck();
          }
        }, {
          key: "rowIndex",
          get: function get() {
            return this._rowIndex;
          },
          set: function set(val) {
            this._rowIndex = val;
            this.cellContext.rowIndex = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
          }
        }, {
          key: "column",
          get: function get() {
            return this._column;
          },
          set: function set(column) {
            this._column = column;
            this.cellContext.column = column;
            this.checkValueUpdates();
            this.cd.markForCheck();
          }
        }, {
          key: "row",
          get: function get() {
            return this._row;
          },
          set: function set(row) {
            this._row = row;
            this.cellContext.row = row;
            this.checkValueUpdates();
            this.cd.markForCheck();
          }
        }, {
          key: "sorts",
          get: function get() {
            return this._sorts;
          },
          set: function set(val) {
            this._sorts = val;
            this.calcSortDir = this.calcSortDir(val);
          }
        }, {
          key: "treeStatus",
          get: function get() {
            return this._treeStatus;
          },
          set: function set(status) {
            if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
              this._treeStatus = 'collapsed';
            } else {
              this._treeStatus = status;
            }

            this.cellContext.treeStatus = this._treeStatus;
            this.checkValueUpdates();
            this.cd.markForCheck();
          }
        }, {
          key: "columnCssClasses",
          get: function get() {
            var cls = 'datatable-body-cell';

            if (this.column.cellClass) {
              if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
              } else if (typeof this.column.cellClass === 'function') {
                var res = this.column.cellClass({
                  row: this.row,
                  group: this.group,
                  column: this.column,
                  value: this.value,
                  rowHeight: this.rowHeight
                });

                if (typeof res === 'string') {
                  cls += ' ' + res;
                } else if (typeof res === 'object') {
                  var keys = Object.keys(res);

                  for (var _i6 = 0, _keys3 = keys; _i6 < _keys3.length; _i6++) {
                    var k = _keys3[_i6];

                    if (res[k] === true) {
                      cls += " ".concat(k);
                    }
                  }
                }
              }
            }

            if (!this.sortDir) {
              cls += ' sort-active';
            }

            if (this.isFocused) {
              cls += ' active';
            }

            if (this.sortDir === _SortDirection.asc) {
              cls += ' sort-asc';
            }

            if (this.sortDir === _SortDirection.desc) {
              cls += ' sort-desc';
            }

            return cls;
          }
        }, {
          key: "width",
          get: function get() {
            return this.column.width;
          }
        }, {
          key: "minWidth",
          get: function get() {
            return this.column.minWidth;
          }
        }, {
          key: "maxWidth",
          get: function get() {
            return this.column.maxWidth;
          }
        }, {
          key: "height",
          get: function get() {
            var height = this.rowHeight;

            if (isNaN(height)) {
              return height;
            }

            return height + 'px';
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.checkValueUpdates();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.cellTemplate) {
              this.cellTemplate.clear();
            }
          }
        }, {
          key: "checkValueUpdates",
          value: function checkValueUpdates() {
            var value = '';

            if (!this.row || !this.column) {
              value = '';
            } else {
              var val = this.column.$$valueGetter(this.row, this.column.prop);
              var userPipe = this.column.pipe;

              if (userPipe) {
                value = userPipe.transform(val);
              } else if (value !== undefined) {
                value = val;
              }
            }

            if (this.value !== value) {
              this.value = value;
              this.cellContext.value = value;
              this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
              this.cd.markForCheck();
            }
          }
        }, {
          key: "onFocus",
          value: function onFocus() {
            this.isFocused = true;
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.isFocused = false;
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            this.activate.emit({
              type: 'click',
              event: event,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element
            });
          }
        }, {
          key: "onDblClick",
          value: function onDblClick(event) {
            this.activate.emit({
              type: 'dblclick',
              event: event,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element
            });
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            var keyCode = event.keyCode;
            var isTargetCell = event.target === this._element;
            var isAction = keyCode === _Keys["return"] || keyCode === _Keys.down || keyCode === _Keys.up || keyCode === _Keys.left || keyCode === _Keys.right;

            if (isAction && isTargetCell) {
              event.preventDefault();
              event.stopPropagation();
              this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
              });
            }
          }
        }, {
          key: "onCheckboxChange",
          value: function onCheckboxChange(event) {
            this.activate.emit({
              type: 'checkbox',
              event: event,
              row: this.row,
              group: this.group,
              rowHeight: this.rowHeight,
              column: this.column,
              value: this.value,
              cellElement: this._element,
              treeStatus: 'collapsed'
            });
          }
        }, {
          key: "calcSortDir",
          value: function calcSortDir(sorts) {
            var _this24 = this;

            if (!sorts) {
              return;
            }

            var sort = sorts.find(function (s) {
              return s.prop === _this24.column.prop;
            });

            if (sort) {
              return sort.dir;
            }
          }
        }, {
          key: "stripHtml",
          value: function stripHtml(html) {
            if (!html.replace) {
              return html;
            }

            return html.replace(/<\/?[^>]+(>|$)/g, '');
          }
        }, {
          key: "onTreeAction",
          value: function onTreeAction() {
            this.treeAction.emit(this.row);
          }
        }, {
          key: "calcLeftMargin",
          value: function calcLeftMargin(column, row) {
            var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
            return column.isTreeColumn ? row.level * levelIndent : 0;
          }
        }]);

        return _DataTableBodyCellComponent;
      }();

      _DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
        return new (t || _DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _DataTableBodyCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableBodyCellComponent,
        selectors: [["datatable-body-cell"]],
        viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
          }
        },
        hostVars: 10,
        hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
              return ctx.onFocus();
            })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
              return ctx.onDblClick($event);
            })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
          }
        },
        inputs: {
          group: "group",
          rowHeight: "rowHeight",
          isSelected: "isSelected",
          expanded: "expanded",
          rowIndex: "rowIndex",
          column: "column",
          row: "row",
          sorts: "sorts",
          treeStatus: "treeStatus",
          displayCheck: "displayCheck"
        },
        outputs: {
          activate: "activate",
          treeAction: "treeAction"
        },
        decls: 5,
        vars: 6,
        consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
        template: function DataTableBodyCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        encapsulation: 2,
        changeDetection: 0
      });

      _DataTableBodyCellComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _DataTableBodyCellComponent.propDecorators = {
        displayCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        sorts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        treeStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        treeAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        cellTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['cellTemplate', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
            "static": true
          }]
        }],
        columnCssClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.width.px']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.minWidth.px']
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.maxWidth.px']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.height']
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['focus']
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['blur']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['click', ['$event']]
        }],
        onDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['dblclick', ['$event']]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['keydown', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableBodyCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-body-cell',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"datatable-body-cell-label\" [style.margin-left.px]=\"calcLeftMargin(column, row)\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\"\n      >\n        <input type=\"checkbox\" [checked]=\"isSelected\" (click)=\"onCheckboxChange($event)\" />\n      </label>\n      <ng-container *ngIf=\"column.isTreeColumn\">\n        <button\n          *ngIf=\"!column.treeToggleTemplate\"\n          class=\"datatable-tree-button\"\n          [disabled]=\"treeStatus === 'disabled'\"\n          (click)=\"onTreeAction()\"\n        >\n          <span>\n            <i *ngIf=\"treeStatus === 'loading'\" class=\"icon datatable-icon-collapse\"></i>\n            <i *ngIf=\"treeStatus === 'collapsed'\" class=\"icon datatable-icon-up\"></i>\n            <i *ngIf=\"treeStatus === 'expanded' || treeStatus === 'disabled'\" class=\"icon datatable-icon-down\"></i>\n          </span>\n        </button>\n        <ng-template\n          *ngIf=\"column.treeToggleTemplate\"\n          [ngTemplateOutlet]=\"column.treeToggleTemplate\"\n          [ngTemplateOutletContext]=\"{ cellContext: cellContext }\"\n        >\n        </ng-template>\n      </ng-container>\n\n      <span *ngIf=\"!column.cellTemplate\" [title]=\"sanitizedValue\" [innerHTML]=\"value\"> </span>\n      <ng-template\n        #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.minWidth.px']
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.maxWidth.px']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height']
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['focus']
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['blur']
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event']]
          }],
          onDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['dblclick', ['$event']]
          }],
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
          }],
          displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['cellTemplate', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
              "static": true
            }]
          }]
        });
      })();

      function _selectRows(selected, row, comparefn) {
        var selectedIndex = comparefn(row, selected);

        if (selectedIndex > -1) {
          selected.splice(selectedIndex, 1);
        } else {
          selected.push(row);
        }

        return selected;
      }

      function _selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
        var reverse = index < prevIndex;

        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var greater = i >= prevIndex && i <= index;
          var lesser = i <= prevIndex && i >= index;
          var range = {
            start: 0,
            end: 0
          };

          if (reverse) {
            range = {
              start: index,
              end: prevIndex
            };
          } else {
            range = {
              start: prevIndex,
              end: index + 1
            };
          }

          if (reverse && lesser || !reverse && greater) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
              selected.push(row);
            }
          }
        }

        return selected;
      }

      var _DataTableSelectionComponent = /*#__PURE__*/function () {
        function _DataTableSelectionComponent() {
          _classCallCheck(this, _DataTableSelectionComponent);

          this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_DataTableSelectionComponent, [{
          key: "selectRow",
          value: function selectRow(event, index, row) {
            var _this$selected3;

            if (!this.selectEnabled) return;
            var chkbox = this.selectionType === _SelectionType.checkbox;
            var multi = this.selectionType === _SelectionType.multi;
            var multiClick = this.selectionType === _SelectionType.multiClick;
            var selected = [];

            if (multi || chkbox || multiClick) {
              if (event.shiftKey) {
                selected = _selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
              } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = _selectRows(_toConsumableArray(this.selected), row, this.getRowSelectedIdx.bind(this));
              } else {
                selected = _selectRows([], row, this.getRowSelectedIdx.bind(this));
              }
            } else {
              selected = _selectRows([], row, this.getRowSelectedIdx.bind(this));
            }

            if (typeof this.selectCheck === 'function') {
              selected = selected.filter(this.selectCheck.bind(this));
            }

            this.selected.splice(0, this.selected.length);

            (_this$selected3 = this.selected).push.apply(_this$selected3, _toConsumableArray(selected));

            this.prevIndex = index;
            this.select.emit({
              selected: selected
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(model, index) {
            var type = model.type,
                event = model.event,
                row = model.row;
            var chkbox = this.selectionType === _SelectionType.checkbox;
            var select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';

            if (select) {
              this.selectRow(event, index, row);
            } else if (type === 'keydown') {
              if (event.keyCode === _Keys["return"]) {
                this.selectRow(event, index, row);
              } else {
                this.onKeyboardFocus(model);
              }
            }

            this.activate.emit(model);
          }
        }, {
          key: "onKeyboardFocus",
          value: function onKeyboardFocus(model) {
            var keyCode = model.event.keyCode;
            var shouldFocus = keyCode === _Keys.up || keyCode === _Keys.down || keyCode === _Keys.right || keyCode === _Keys.left;

            if (shouldFocus) {
              var isCellSelection = this.selectionType === _SelectionType.cell;

              if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
              } else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
              }
            }
          }
        }, {
          key: "focusRow",
          value: function focusRow(rowElement, keyCode) {
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) nextRowElement.focus();
          }
        }, {
          key: "getPrevNextRow",
          value: function getPrevNextRow(rowElement, keyCode) {
            var parentElement = rowElement.parentElement;

            if (parentElement) {
              var focusElement;

              if (keyCode === _Keys.up) {
                focusElement = parentElement.previousElementSibling;
              } else if (keyCode === _Keys.down) {
                focusElement = parentElement.nextElementSibling;
              }

              if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
              }
            }
          }
        }, {
          key: "focusCell",
          value: function focusCell(cellElement, rowElement, keyCode, cellIndex) {
            var nextCellElement;

            if (keyCode === _Keys.left) {
              nextCellElement = cellElement.previousElementSibling;
            } else if (keyCode === _Keys.right) {
              nextCellElement = cellElement.nextElementSibling;
            } else if (keyCode === _Keys.up || keyCode === _Keys.down) {
              var nextRowElement = this.getPrevNextRow(rowElement, keyCode);

              if (nextRowElement) {
                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length) nextCellElement = children[cellIndex];
              }
            }

            if (nextCellElement) nextCellElement.focus();
          }
        }, {
          key: "getRowSelected",
          value: function getRowSelected(row) {
            return this.getRowSelectedIdx(row, this.selected) > -1;
          }
        }, {
          key: "getRowSelectedIdx",
          value: function getRowSelectedIdx(row, selected) {
            var _this25 = this;

            if (!selected || !selected.length) return -1;
            var rowId = this.rowIdentity(row);
            return selected.findIndex(function (r) {
              var id = _this25.rowIdentity(r);

              return id === rowId;
            });
          }
        }]);

        return _DataTableSelectionComponent;
      }();

      _DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
        return new (t || _DataTableSelectionComponent)();
      };

      _DataTableSelectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableSelectionComponent,
        selectors: [["datatable-selection"]],
        inputs: {
          rows: "rows",
          selected: "selected",
          selectEnabled: "selectEnabled",
          selectionType: "selectionType",
          rowIdentity: "rowIdentity",
          selectCheck: "selectCheck"
        },
        outputs: {
          activate: "activate",
          select: "select"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function DataTableSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      _DataTableSelectionComponent.propDecorators = {
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectionType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowIdentity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableSelectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-selection',
            template: " <ng-content></ng-content> ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [];
        }, {
          activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      function defaultSumFunc(cells) {
        var cellsWithValues = cells.filter(function (cell) {
          return !!cell;
        });

        if (!cellsWithValues.length) {
          return null;
        }

        if (cellsWithValues.some(function (cell) {
          return typeof cell !== 'number';
        })) {
          return null;
        }

        return cellsWithValues.reduce(function (res, cell) {
          return res + cell;
        });
      }

      function noopSumFunc(cells) {
        return null;
      }

      var _DataTableSummaryRowComponent = /*#__PURE__*/function () {
        function _DataTableSummaryRowComponent() {
          _classCallCheck(this, _DataTableSummaryRowComponent);

          this.summaryRow = {};
        }

        _createClass(_DataTableSummaryRowComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (!this.columns || !this.rows) {
              return;
            }

            this.updateInternalColumns();
            this.updateValues();
          }
        }, {
          key: "updateInternalColumns",
          value: function updateInternalColumns() {
            this._internalColumns = this.columns.map(function (col) {
              return Object.assign(Object.assign({}, col), {
                cellTemplate: col.summaryTemplate
              });
            });
          }
        }, {
          key: "updateValues",
          value: function updateValues() {
            var _this26 = this;

            this.summaryRow = {};
            this.columns.filter(function (col) {
              return !col.summaryTemplate;
            }).forEach(function (col) {
              var cellsFromSingleColumn = _this26.rows.map(function (row) {
                return row[col.prop];
              });

              var sumFunc = _this26.getSummaryFunction(col);

              _this26.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
            });
          }
        }, {
          key: "getSummaryFunction",
          value: function getSummaryFunction(column) {
            if (column.summaryFunc === undefined) {
              return defaultSumFunc;
            } else if (column.summaryFunc === null) {
              return noopSumFunc;
            } else {
              return column.summaryFunc;
            }
          }
        }]);

        return _DataTableSummaryRowComponent;
      }();

      _DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
        return new (t || _DataTableSummaryRowComponent)();
      };

      _DataTableSummaryRowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DataTableSummaryRowComponent,
        selectors: [["datatable-summary-row"]],
        hostAttrs: [1, "datatable-summary-row"],
        inputs: {
          rows: "rows",
          columns: "columns",
          rowHeight: "rowHeight",
          offsetX: "offsetX",
          innerWidth: "innerWidth"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
        template: function DataTableSummaryRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _DataTableBodyRowComponent],
        encapsulation: 2
      });
      _DataTableSummaryRowComponent.propDecorators = {
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        innerWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableSummaryRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'datatable-summary-row',
            template: "\n    <datatable-body-row\n      *ngIf=\"summaryRow && _internalColumns\"\n      tabindex=\"-1\"\n      [innerWidth]=\"innerWidth\"\n      [offsetX]=\"offsetX\"\n      [columns]=\"_internalColumns\"\n      [rowHeight]=\"rowHeight\"\n      [row]=\"summaryRow\"\n      [rowIndex]=\"-1\"\n    >\n    </datatable-body-row>\n  ",
            host: {
              "class": 'datatable-summary-row'
            }
          }]
        }], function () {
          return [];
        }, {
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _NgxDatatableModule = /*#__PURE__*/function () {
        function _NgxDatatableModule() {
          _classCallCheck(this, _NgxDatatableModule);
        }

        _createClass(_NgxDatatableModule, null, [{
          key: "forRoot",
          value:
          /**
           * Configure global configuration via INgxDatatableConfig
           * @param configuration
           */
          function forRoot(configuration) {
            return {
              ngModule: _NgxDatatableModule,
              providers: [{
                provide: 'configuration',
                useValue: configuration
              }]
            };
          }
        }]);

        return _NgxDatatableModule;
      }();

      _NgxDatatableModule.ɵfac = function NgxDatatableModule_Factory(t) {
        return new (t || _NgxDatatableModule)();
      };

      _NgxDatatableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgxDatatableModule
      });
      _NgxDatatableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_ScrollbarHelper, _DimensionsHelper, _ColumnChangesService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxDatatableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
            providers: [_ScrollbarHelper, _DimensionsHelper, _ColumnChangesService],
            declarations: [_DataTableFooterTemplateDirective, _VisibilityDirective, _DraggableDirective, _ResizeableDirective, _OrderableDirective, _LongPressDirective, _ScrollerComponent, _DatatableComponent, _DataTableColumnDirective, _DataTableHeaderComponent, _DataTableHeaderCellComponent, _DataTableBodyComponent, _DataTableFooterComponent, _DataTablePagerComponent, _ProgressBarComponent, _DataTableBodyRowComponent, _DataTableRowWrapperComponent, _DatatableRowDetailDirective, _DatatableGroupHeaderDirective, _DatatableRowDetailTemplateDirective, _DataTableBodyCellComponent, _DataTableSelectionComponent, _DataTableColumnHeaderDirective, _DataTableColumnCellDirective, _DataTableColumnCellTreeToggle, _DatatableFooterDirective, _DatatableGroupHeaderTemplateDirective, _DataTableSummaryRowComponent],
            exports: [_DatatableComponent, _DatatableRowDetailDirective, _DatatableGroupHeaderDirective, _DatatableRowDetailTemplateDirective, _DataTableColumnDirective, _DataTableColumnHeaderDirective, _DataTableColumnCellDirective, _DataTableColumnCellTreeToggle, _DataTableFooterTemplateDirective, _DatatableFooterDirective, _DataTablePagerComponent, _DatatableGroupHeaderTemplateDirective]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgxDatatableModule, {
          declarations: function declarations() {
            return [_DataTableFooterTemplateDirective, _VisibilityDirective, _DraggableDirective, _ResizeableDirective, _OrderableDirective, _LongPressDirective, _ScrollerComponent, _DatatableComponent, _DataTableColumnDirective, _DataTableHeaderComponent, _DataTableHeaderCellComponent, _DataTableBodyComponent, _DataTableFooterComponent, _DataTablePagerComponent, _ProgressBarComponent, _DataTableBodyRowComponent, _DataTableRowWrapperComponent, _DatatableRowDetailDirective, _DatatableGroupHeaderDirective, _DatatableRowDetailTemplateDirective, _DataTableBodyCellComponent, _DataTableSelectionComponent, _DataTableColumnHeaderDirective, _DataTableColumnCellDirective, _DataTableColumnCellTreeToggle, _DatatableFooterDirective, _DatatableGroupHeaderTemplateDirective, _DataTableSummaryRowComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
          },
          exports: function exports() {
            return [_DatatableComponent, _DatatableRowDetailDirective, _DatatableGroupHeaderDirective, _DatatableRowDetailTemplateDirective, _DataTableColumnDirective, _DataTableColumnHeaderDirective, _DataTableColumnCellDirective, _DataTableColumnCellTreeToggle, _DataTableFooterTemplateDirective, _DatatableFooterDirective, _DataTablePagerComponent, _DatatableGroupHeaderTemplateDirective];
          }
        });
      })();

      var _ClickType;

      (function (ClickType) {
        ClickType["single"] = "single";
        ClickType["double"] = "double";
      })(_ClickType || (_ClickType = {}));

      if (typeof document !== 'undefined' && !document.elementsFromPoint) {
        document.elementsFromPoint = _elementsFromPoint;
      }
      /*tslint:disable*/

      /**
       * Polyfill for `elementsFromPoint`
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
       * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
       * https://gist.github.com/oslego/7265412
       */


      function _elementsFromPoint(x, y) {
        var elements = [];
        var previousPointerEvents = [];
        var current; // TODO: window.getComputedStyle should be used with inferred type (Element)

        var i;
        var d; //if (document === undefined) return elements;
        // get all elements via elementFromPoint, and remove them from hit-testing in order

        while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
          // push the element and its current style
          elements.push(current);
          previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
          }); // add "pointer-events: none", to get to the underlying element

          current.style.setProperty('pointer-events', 'none', 'important');
        } // restore the previous pointer-events values


        for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
          elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
        } // return our results


        return elements;
      }
      /*tslint:enable*/

      /*
       * Public API Surface of ngx-datatable
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=swimlane-ngx-datatable.js.map

      /***/

    },

    /***/
    49344:
    /*!*********************************************************************!*\
      !*** ./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasePortalHost": function BasePortalHost() {
          return (
            /* binding */
            _BasePortalHost
          );
        },

        /* harmony export */
        "ComponentPortal": function ComponentPortal() {
          return (
            /* binding */
            _ComponentPortal
          );
        },

        /* harmony export */
        "DefaultGlobalConfig": function DefaultGlobalConfig() {
          return (
            /* binding */
            _DefaultGlobalConfig
          );
        },

        /* harmony export */
        "DefaultNoAnimationsGlobalConfig": function DefaultNoAnimationsGlobalConfig() {
          return (
            /* binding */
            _DefaultNoAnimationsGlobalConfig
          );
        },

        /* harmony export */
        "DefaultNoComponentGlobalConfig": function DefaultNoComponentGlobalConfig() {
          return (
            /* binding */
            _DefaultNoComponentGlobalConfig
          );
        },

        /* harmony export */
        "Overlay": function Overlay() {
          return (
            /* binding */
            _Overlay
          );
        },

        /* harmony export */
        "OverlayContainer": function OverlayContainer() {
          return (
            /* binding */
            _OverlayContainer
          );
        },

        /* harmony export */
        "OverlayRef": function OverlayRef() {
          return (
            /* binding */
            _OverlayRef
          );
        },

        /* harmony export */
        "TOAST_CONFIG": function TOAST_CONFIG() {
          return (
            /* binding */
            _TOAST_CONFIG
          );
        },

        /* harmony export */
        "Toast": function Toast() {
          return (
            /* binding */
            _Toast
          );
        },

        /* harmony export */
        "ToastContainerDirective": function ToastContainerDirective() {
          return (
            /* binding */
            _ToastContainerDirective
          );
        },

        /* harmony export */
        "ToastContainerModule": function ToastContainerModule() {
          return (
            /* binding */
            _ToastContainerModule
          );
        },

        /* harmony export */
        "ToastInjector": function ToastInjector() {
          return (
            /* binding */
            _ToastInjector
          );
        },

        /* harmony export */
        "ToastNoAnimation": function ToastNoAnimation() {
          return (
            /* binding */
            _ToastNoAnimation
          );
        },

        /* harmony export */
        "ToastNoAnimationModule": function ToastNoAnimationModule() {
          return (
            /* binding */
            _ToastNoAnimationModule
          );
        },

        /* harmony export */
        "ToastPackage": function ToastPackage() {
          return (
            /* binding */
            _ToastPackage
          );
        },

        /* harmony export */
        "ToastRef": function ToastRef() {
          return (
            /* binding */
            _ToastRef
          );
        },

        /* harmony export */
        "ToastrComponentlessModule": function ToastrComponentlessModule() {
          return (
            /* binding */
            _ToastrComponentlessModule
          );
        },

        /* harmony export */
        "ToastrModule": function ToastrModule() {
          return (
            /* binding */
            _ToastrModule
          );
        },

        /* harmony export */
        "ToastrService": function ToastrService() {
          return (
            /* binding */
            _ToastrService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      47762);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["toast-component", ""];

      function Toast_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Toast_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
        }
      }

      function Toast_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
        }
      }

      function Toast_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function Toast_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
        }
      }

      function Toast_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
        }
      }

      function ToastNoAnimation_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
        }
      }

      function ToastNoAnimation_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
        }
      }

      function ToastNoAnimation_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ToastNoAnimation_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
        }
      }

      function ToastNoAnimation_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
        }
      }

      var _ToastContainerDirective = /*#__PURE__*/function () {
        function _ToastContainerDirective(el) {
          _classCallCheck(this, _ToastContainerDirective);

          this.el = el;
        }

        _createClass(_ToastContainerDirective, [{
          key: "getContainerElement",
          value: function getContainerElement() {
            return this.el.nativeElement;
          }
        }]);

        return _ToastContainerDirective;
      }();

      _ToastContainerDirective.ɵfac = function ToastContainerDirective_Factory(t) {
        return new (t || _ToastContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _ToastContainerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ToastContainerDirective,
        selectors: [["", "toastContainer", ""]],
        exportAs: ["toastContainer"]
      });

      _ToastContainerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastContainerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[toastContainer]',
            exportAs: 'toastContainer'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();

      var _ToastContainerModule = function _ToastContainerModule() {
        _classCallCheck(this, _ToastContainerModule);
      };

      _ToastContainerModule.ɵfac = function ToastContainerModule_Factory(t) {
        return new (t || _ToastContainerModule)();
      };

      _ToastContainerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ToastContainerModule
      });
      _ToastContainerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastContainerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_ToastContainerDirective],
            exports: [_ToastContainerDirective]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ToastContainerModule, {
          declarations: [_ToastContainerDirective],
          exports: [_ToastContainerDirective]
        });
      })();
      /**
       * Everything a toast needs to launch
       */


      var _ToastPackage = /*#__PURE__*/function () {
        function _ToastPackage(toastId, config, message, title, toastType, toastRef) {
          var _this27 = this;

          _classCallCheck(this, _ToastPackage);

          this.toastId = toastId;
          this.config = config;
          this.message = message;
          this.title = title;
          this.toastType = toastType;
          this.toastRef = toastRef;
          this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.toastRef.afterClosed().subscribe(function () {
            _this27._onAction.complete();

            _this27._onTap.complete();
          });
        }
        /** Fired on click */


        _createClass(_ToastPackage, [{
          key: "triggerTap",
          value: function triggerTap() {
            this._onTap.next();

            if (this.config.tapToDismiss) {
              this._onTap.complete();
            }
          }
        }, {
          key: "onTap",
          value: function onTap() {
            return this._onTap.asObservable();
          }
          /** available for use in custom toast */

        }, {
          key: "triggerAction",
          value: function triggerAction(action) {
            this._onAction.next(action);
          }
        }, {
          key: "onAction",
          value: function onAction() {
            return this._onAction.asObservable();
          }
        }]);

        return _ToastPackage;
      }();

      var _DefaultNoComponentGlobalConfig = {
        maxOpened: 0,
        autoDismiss: false,
        newestOnTop: true,
        preventDuplicates: false,
        countDuplicates: false,
        resetTimeoutOnDuplicate: false,
        includeTitleDuplicates: false,
        iconClasses: {
          error: 'toast-error',
          info: 'toast-info',
          success: 'toast-success',
          warning: 'toast-warning'
        },
        // Individual
        closeButton: false,
        disableTimeOut: false,
        timeOut: 5000,
        extendedTimeOut: 1000,
        enableHtml: false,
        progressBar: false,
        toastClass: 'ngx-toastr',
        positionClass: 'toast-top-right',
        titleClass: 'toast-title',
        messageClass: 'toast-message',
        easing: 'ease-in',
        easeTime: 300,
        tapToDismiss: true,
        onActivateTick: false,
        progressAnimation: 'decreasing'
      };

      var _TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ToastConfig');
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       */


      var _ComponentPortal = /*#__PURE__*/function () {
        function _ComponentPortal(component, injector) {
          _classCallCheck(this, _ComponentPortal);

          this.component = component;
          this.injector = injector;
        }
        /** Attach this portal to a host. */


        _createClass(_ComponentPortal, [{
          key: "attach",
          value: function attach(host, newestOnTop) {
            this._attachedHost = host;
            return host.attach(this, newestOnTop);
          }
          /** Detach this portal from its host */

        }, {
          key: "detach",
          value: function detach() {
            var host = this._attachedHost;

            if (host) {
              this._attachedHost = undefined;
              return host.detach();
            }
          }
          /** Whether this portal is attached to a host. */

        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
          /**
           * Sets the PortalHost reference without performing `attach()`. This is used directly by
           * the PortalHost when it is performing an `attach()` or `detach()`.
           */

        }, {
          key: "setAttachedHost",
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }]);

        return _ComponentPortal;
      }();
      /**
       * Partial implementation of PortalHost that only deals with attaching a
       * ComponentPortal
       */


      var _BasePortalHost = /*#__PURE__*/function () {
        function _BasePortalHost() {
          _classCallCheck(this, _BasePortalHost);
        }

        _createClass(_BasePortalHost, [{
          key: "attach",
          value: function attach(portal, newestOnTop) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal, newestOnTop);
          }
        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost();
            }

            this._attachedPortal = undefined;

            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = undefined;
            }
          }
        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
        }]);

        return _BasePortalHost;
      }();
      /**
       * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       *
       * This is the only part of the portal core that directly touches the DOM.
       */


      var DomPortalHost = /*#__PURE__*/function (_BasePortalHost2) {
        _inherits(DomPortalHost, _BasePortalHost2);

        var _super = _createSuper(DomPortalHost);

        function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
          var _this28;

          _classCallCheck(this, DomPortalHost);

          _this28 = _super.call(this);
          _this28._hostDomElement = _hostDomElement;
          _this28._componentFactoryResolver = _componentFactoryResolver;
          _this28._appRef = _appRef;
          return _this28;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         */


        _createClass(DomPortalHost, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal, newestOnTop) {
            var _this29 = this;

            var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);

            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the ChangeDetector for that component to the application (which
            // happens automatically when using a ViewContainer).

            componentRef = componentFactory.create(portal.injector); // When creating a component outside of a ViewContainer, we need to manually register
            // its ChangeDetector with the application. This API is unfortunately not yet published
            // in Angular core. The change detector must also be deregistered when the component
            // is destroyed to prevent memory leaks.

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(function () {
              _this29._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            }); // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.

            if (newestOnTop) {
              this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
            } else {
              this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
            }

            return componentRef;
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return DomPortalHost;
      }(_BasePortalHost);
      /** Container inside which all toasts will render. */


      var _OverlayContainer = /*#__PURE__*/function () {
        function _OverlayContainer(_document) {
          _classCallCheck(this, _OverlayContainer);

          this._document = _document;
        }

        _createClass(_OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._containerElement && this._containerElement.parentNode) {
              this._containerElement.parentNode.removeChild(this._containerElement);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var container = this._document.createElement('div');

            container.classList.add('overlay-container');

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return _OverlayContainer;
      }();

      _OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || _OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
      };

      _OverlayContainer.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function OverlayContainer_Factory() {
          return new _OverlayContainer((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
        },
        token: _OverlayContainer,
        providedIn: "root"
      });

      _OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */


      var _OverlayRef = /*#__PURE__*/function () {
        function _OverlayRef(_portalHost) {
          _classCallCheck(this, _OverlayRef);

          this._portalHost = _portalHost;
        }

        _createClass(_OverlayRef, [{
          key: "attach",
          value: function attach(portal) {
            var newestOnTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this._portalHost.attach(portal, newestOnTop);
          }
          /**
           * Detaches an overlay from a portal.
           * @returns Resolves when the overlay has been detached.
           */

        }, {
          key: "detach",
          value: function detach() {
            return this._portalHost.detach();
          }
        }]);

        return _OverlayRef;
      }();
      /* tslint:disable:no-non-null-assertion */

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
       */


      var _Overlay = /*#__PURE__*/function () {
        function _Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
          _classCallCheck(this, _Overlay);

          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._appRef = _appRef;
          this._document = _document; // Namespace panes by overlay container

          this._paneElements = new Map();
        }
        /**
         * Creates an overlay.
         * @returns A reference to the created overlay.
         */


        _createClass(_Overlay, [{
          key: "create",
          value: function create(positionClass, overlayContainer) {
            // get existing pane if possible
            return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
          }
        }, {
          key: "getPaneElement",
          value: function getPaneElement() {
            var positionClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var overlayContainer = arguments.length > 1 ? arguments[1] : undefined;

            if (!this._paneElements.get(overlayContainer)) {
              this._paneElements.set(overlayContainer, {});
            }

            if (!this._paneElements.get(overlayContainer)[positionClass]) {
              this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
            }

            return this._paneElements.get(overlayContainer)[positionClass];
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(positionClass, overlayContainer) {
            var pane = this._document.createElement('div');

            pane.id = 'toast-container';
            pane.classList.add(positionClass);
            pane.classList.add('toast-container');

            if (!overlayContainer) {
              this._overlayContainer.getContainerElement().appendChild(pane);
            } else {
              overlayContainer.getContainerElement().appendChild(pane);
            }

            return pane;
          }
          /**
           * Create a DomPortalHost into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal host.
           * @returns A portal host for the given DOM element.
           */

        }, {
          key: "_createPortalHost",
          value: function _createPortalHost(pane) {
            return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
          }
          /**
           * Creates an OverlayRef for an overlay in the given DOM element.
           * @param pane DOM element for the overlay
           */

        }, {
          key: "_createOverlayRef",
          value: function _createOverlayRef(pane) {
            return new _OverlayRef(this._createPortalHost(pane));
          }
        }]);

        return _Overlay;
      }();

      _Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || _Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
      };

      _Overlay.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Overlay_Factory() {
          return new _Overlay((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_OverlayContainer), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
        },
        token: _Overlay,
        providedIn: "root"
      });

      _Overlay.ctorParameters = function () {
        return [{
          type: _OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * Reference to a toast opened via the Toastr service.
       */


      var _ToastRef = /*#__PURE__*/function () {
        function _ToastRef(_overlayRef) {
          _classCallCheck(this, _ToastRef);

          this._overlayRef = _overlayRef;
          /** Count of duplicates of this toast */

          this.duplicatesCount = 0;
          /** Subject for notifying the user that the toast has finished closing. */

          this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** triggered when toast is activated */

          this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** notifies the toast that it should close before the timeout */

          this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** notifies the toast that it should reset the timeouts */

          this._resetTimeout = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** notifies the toast that it should count a duplicate toast */

          this._countDuplicate = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(_ToastRef, [{
          key: "manualClose",
          value: function manualClose() {
            this._manualClose.next();

            this._manualClose.complete();
          }
        }, {
          key: "manualClosed",
          value: function manualClosed() {
            return this._manualClose.asObservable();
          }
        }, {
          key: "timeoutReset",
          value: function timeoutReset() {
            return this._resetTimeout.asObservable();
          }
        }, {
          key: "countDuplicate",
          value: function countDuplicate() {
            return this._countDuplicate.asObservable();
          }
          /**
           * Close the toast.
           */

        }, {
          key: "close",
          value: function close() {
            this._overlayRef.detach();

            this._afterClosed.next();

            this._manualClose.next();

            this._afterClosed.complete();

            this._manualClose.complete();

            this._activate.complete();

            this._resetTimeout.complete();

            this._countDuplicate.complete();
          }
          /** Gets an observable that is notified when the toast is finished closing. */

        }, {
          key: "afterClosed",
          value: function afterClosed() {
            return this._afterClosed.asObservable();
          }
        }, {
          key: "isInactive",
          value: function isInactive() {
            return this._activate.isStopped;
          }
        }, {
          key: "activate",
          value: function activate() {
            this._activate.next();

            this._activate.complete();
          }
          /** Gets an observable that is notified when the toast has started opening. */

        }, {
          key: "afterActivate",
          value: function afterActivate() {
            return this._activate.asObservable();
          }
          /** Reset the toast timouts and count duplicates */

        }, {
          key: "onDuplicate",
          value: function onDuplicate(resetTimeout, countDuplicate) {
            if (resetTimeout) {
              this._resetTimeout.next();
            }

            if (countDuplicate) {
              this._countDuplicate.next(++this.duplicatesCount);
            }
          }
        }]);

        return _ToastRef;
      }();
      /** Custom injector type specifically for instantiating components with a toast. */


      var _ToastInjector = /*#__PURE__*/function () {
        function _ToastInjector(_toastPackage, _parentInjector) {
          _classCallCheck(this, _ToastInjector);

          this._toastPackage = _toastPackage;
          this._parentInjector = _parentInjector;
        }

        _createClass(_ToastInjector, [{
          key: "get",
          value: function get(token, notFoundValue, flags) {
            if (token === _ToastPackage) {
              return this._toastPackage;
            }

            return this._parentInjector.get(token, notFoundValue, flags);
          }
        }]);

        return _ToastInjector;
      }();

      var _ToastrService = /*#__PURE__*/function () {
        function _ToastrService(token, overlay, _injector, sanitizer, ngZone) {
          _classCallCheck(this, _ToastrService);

          this.overlay = overlay;
          this._injector = _injector;
          this.sanitizer = sanitizer;
          this.ngZone = ngZone;
          this.currentlyActive = 0;
          this.toasts = [];
          this.index = 0;
          this.toastrConfig = Object.assign(Object.assign({}, token["default"]), token.config);

          if (token.config.iconClasses) {
            this.toastrConfig.iconClasses = Object.assign(Object.assign({}, token["default"].iconClasses), token.config.iconClasses);
          }
        }
        /** show toast */


        _createClass(_ToastrService, [{
          key: "show",
          value: function show(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show successful toast */

        }, {
          key: "success",
          value: function success(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.success || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show error toast */

        }, {
          key: "error",
          value: function error(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.error || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show info toast */

        }, {
          key: "info",
          value: function info(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.info || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show warning toast */

        }, {
          key: "warning",
          value: function warning(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.warning || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /**
           * Remove all or a single toast by id
           */

        }, {
          key: "clear",
          value: function clear(toastId) {
            // Call every toastRef manualClose function
            var _iterator19 = _createForOfIteratorHelper(this.toasts),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var toast = _step19.value;

                if (toastId !== undefined) {
                  if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                  }
                } else {
                  toast.toastRef.manualClose();
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
          /**
           * Remove and destroy a single toast by id
           */

        }, {
          key: "remove",
          value: function remove(toastId) {
            var found = this._findToast(toastId);

            if (!found) {
              return false;
            }

            found.activeToast.toastRef.close();
            this.toasts.splice(found.index, 1);
            this.currentlyActive = this.currentlyActive - 1;

            if (!this.toastrConfig.maxOpened || !this.toasts.length) {
              return false;
            }

            if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
              var p = this.toasts[this.currentlyActive].toastRef;

              if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
              }
            }

            return true;
          }
          /**
           * Determines if toast message is already shown
           */

        }, {
          key: "findDuplicate",
          value: function findDuplicate() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var resetOnDuplicate = arguments.length > 2 ? arguments[2] : undefined;
            var countDuplicates = arguments.length > 3 ? arguments[3] : undefined;
            var includeTitleDuplicates = this.toastrConfig.includeTitleDuplicates;

            var _iterator20 = _createForOfIteratorHelper(this.toasts),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var toast = _step20.value;
                var hasDuplicateTitle = includeTitleDuplicates && toast.title === title;

                if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
                  toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
                  return toast;
                }
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }

            return null;
          }
          /** create a clone of global config and apply individual settings */

        }, {
          key: "applyConfig",
          value: function applyConfig() {
            var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object.assign(Object.assign({}, this.toastrConfig), override);
          }
          /**
           * Find toast object by id
           */

        }, {
          key: "_findToast",
          value: function _findToast(toastId) {
            for (var i = 0; i < this.toasts.length; i++) {
              if (this.toasts[i].toastId === toastId) {
                return {
                  index: i,
                  activeToast: this.toasts[i]
                };
              }
            }

            return null;
          }
          /**
           * Determines the need to run inside angular's zone then builds the toast
           */

        }, {
          key: "_preBuildNotification",
          value: function _preBuildNotification(toastType, message, title, config) {
            var _this30 = this;

            if (config.onActivateTick) {
              return this.ngZone.run(function () {
                return _this30._buildNotification(toastType, message, title, config);
              });
            }

            return this._buildNotification(toastType, message, title, config);
          }
          /**
           * Creates and attaches toast data to component
           * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
           */

        }, {
          key: "_buildNotification",
          value: function _buildNotification(toastType, message, title, config) {
            if (!config.toastComponent) {
              throw new Error('toastComponent required');
            } // max opened and auto dismiss = true
            // if timeout = 0 resetting it would result in setting this.hideTime = Date.now(). Hence, we only want to reset timeout if there is
            // a timeout at all


            var duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);

            if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
              return duplicate;
            }

            this.previousToastMessage = message;
            var keepInactive = false;

            if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
              keepInactive = true;

              if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
              }
            }

            var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
            this.index = this.index + 1;
            var sanitizedMessage = message;

            if (message && config.enableHtml) {
              sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, message);
            }

            var toastRef = new _ToastRef(overlayRef);
            var toastPackage = new _ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
            var toastInjector = new _ToastInjector(toastPackage, this._injector);
            var component = new _ComponentPortal(config.toastComponent, toastInjector);
            var portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
            toastRef.componentInstance = portal.instance;
            var ins = {
              toastId: this.index,
              title: title || '',
              message: message || '',
              toastRef: toastRef,
              onShown: toastRef.afterActivate(),
              onHidden: toastRef.afterClosed(),
              onTap: toastPackage.onTap(),
              onAction: toastPackage.onAction(),
              portal: portal
            };

            if (!keepInactive) {
              this.currentlyActive = this.currentlyActive + 1;
              setTimeout(function () {
                ins.toastRef.activate();
              });
            }

            this.toasts.push(ins);
            return ins;
          }
        }]);

        return _ToastrService;
      }();

      _ToastrService.ɵfac = function ToastrService_Factory(t) {
        return new (t || _ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_TOAST_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _ToastrService.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ToastrService_Factory() {
          return new _ToastrService((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_TOAST_CONFIG), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_Overlay), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.INJECTOR), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
        },
        token: _ToastrService,
        providedIn: "root"
      });

      _ToastrService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_TOAST_CONFIG]
          }]
        }, {
          type: _Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastrService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_TOAST_CONFIG]
            }]
          }, {
            type: _Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, null);
      })();

      var _Toast = /*#__PURE__*/function () {
        function _Toast(toastrService, toastPackage, ngZone) {
          var _this31 = this;

          _classCallCheck(this, _Toast);

          this.toastrService = toastrService;
          this.toastPackage = toastPackage;
          this.ngZone = ngZone;
          /** width of progress bar */

          this.width = -1;
          /** a combination of toast type and options.toastClass */

          this.toastClasses = '';
          /** controls animation */

          this.state = {
            value: 'inactive',
            params: {
              easeTime: this.toastPackage.config.easeTime,
              easing: 'ease-in'
            }
          };
          this.message = toastPackage.message;
          this.title = toastPackage.title;
          this.options = toastPackage.config;
          this.originalTimeout = toastPackage.config.timeOut;
          this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
          this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this31.activateToast();
          });
          this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this31.remove();
          });
          this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this31.resetTimeout();
          });
          this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this31.duplicatesCount = count;
          });
        }
        /** hides component when waiting to be displayed */


        _createClass(_Toast, [{
          key: "displayStyle",
          get: function get() {
            if (this.state.value === 'inactive') {
              return 'none';
            }

            return;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
            this.sub1.unsubscribe();
            this.sub2.unsubscribe();
            this.sub3.unsubscribe();
            clearInterval(this.intervalId);
            clearTimeout(this.timeout);
          }
          /**
           * activates toast and sets timeout
           */

        }, {
          key: "activateToast",
          value: function activateToast() {
            var _this32 = this;

            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'active'
            });

            if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
              this.outsideTimeout(function () {
                return _this32.remove();
              }, this.options.timeOut);
              this.hideTime = new Date().getTime() + this.options.timeOut;

              if (this.options.progressBar) {
                this.outsideInterval(function () {
                  return _this32.updateProgress();
                }, 10);
              }
            }
          }
          /**
           * updates progress bar width
           */

        }, {
          key: "updateProgress",
          value: function updateProgress() {
            if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
              return;
            }

            var now = new Date().getTime();
            var remaining = this.hideTime - now;
            this.width = remaining / this.options.timeOut * 100;

            if (this.options.progressAnimation === 'increasing') {
              this.width = 100 - this.width;
            }

            if (this.width <= 0) {
              this.width = 0;
            }

            if (this.width >= 100) {
              this.width = 100;
            }
          }
        }, {
          key: "resetTimeout",
          value: function resetTimeout() {
            var _this33 = this;

            clearTimeout(this.timeout);
            clearInterval(this.intervalId);
            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'active'
            });
            this.outsideTimeout(function () {
              return _this33.remove();
            }, this.originalTimeout);
            this.options.timeOut = this.originalTimeout;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.outsideInterval(function () {
                return _this33.updateProgress();
              }, 10);
            }
          }
          /**
           * tells toastrService to remove this toast after animation time
           */

        }, {
          key: "remove",
          value: function remove() {
            var _this34 = this;

            if (this.state.value === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'removed'
            });
            this.outsideTimeout(function () {
              return _this34.toastrService.remove(_this34.toastPackage.toastId);
            }, +this.toastPackage.config.easeTime);
          }
        }, {
          key: "tapToast",
          value: function tapToast() {
            if (this.state.value === 'removed') {
              return;
            }

            this.toastPackage.triggerTap();

            if (this.options.tapToDismiss) {
              this.remove();
            }
          }
        }, {
          key: "stickAround",
          value: function stickAround() {
            if (this.state.value === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.options.timeOut = 0;
            this.hideTime = 0; // disable progressBar

            clearInterval(this.intervalId);
            this.width = 0;
          }
        }, {
          key: "delayedHideToast",
          value: function delayedHideToast() {
            var _this35 = this;

            if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state.value === 'removed') {
              return;
            }

            this.outsideTimeout(function () {
              return _this35.remove();
            }, this.options.extendedTimeOut);
            this.options.timeOut = this.options.extendedTimeOut;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.outsideInterval(function () {
                return _this35.updateProgress();
              }, 10);
            }
          }
        }, {
          key: "outsideTimeout",
          value: function outsideTimeout(func, timeout) {
            var _this36 = this;

            if (this.ngZone) {
              this.ngZone.runOutsideAngular(function () {
                return _this36.timeout = setTimeout(function () {
                  return _this36.runInsideAngular(func);
                }, timeout);
              });
            } else {
              this.timeout = setTimeout(function () {
                return func();
              }, timeout);
            }
          }
        }, {
          key: "outsideInterval",
          value: function outsideInterval(func, timeout) {
            var _this37 = this;

            if (this.ngZone) {
              this.ngZone.runOutsideAngular(function () {
                return _this37.intervalId = setInterval(function () {
                  return _this37.runInsideAngular(func);
                }, timeout);
              });
            } else {
              this.intervalId = setInterval(function () {
                return func();
              }, timeout);
            }
          }
        }, {
          key: "runInsideAngular",
          value: function runInsideAngular(func) {
            if (this.ngZone) {
              this.ngZone.run(function () {
                return func();
              });
            } else {
              func();
            }
          }
        }]);

        return _Toast;
      }();

      _Toast.ɵfac = function Toast_Factory(t) {
        return new (t || _Toast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _Toast.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Toast,
        selectors: [["", "toast-component", ""]],
        hostVars: 5,
        hostBindings: function Toast_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_click_HostBindingHandler() {
              return ctx.tapToast();
            })("mouseenter", function Toast_mouseenter_HostBindingHandler() {
              return ctx.stickAround();
            })("mouseleave", function Toast_mouseleave_HostBindingHandler() {
              return ctx.delayedHideToast();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@flyInOut", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
          }
        },
        attrs: _c0,
        decls: 5,
        vars: 5,
        consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alertdialog", "aria-live", "polite", 3, "innerHTML"], ["role", "alertdialog", "aria-live", "polite"], [1, "toast-progress"]],
        template: function Toast_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Toast_button_0_Template, 3, 0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Toast_div_1_Template, 3, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_2_Template, 1, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Toast_div_3_Template, 2, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Toast_div_4_Template, 2, 2, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        encapsulation: 2,
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('flyInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('inactive', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 0
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 1
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('removed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 0
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('inactive => active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}')), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active => removed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}'))])]
        }
      });

      _Toast.ctorParameters = function () {
        return [{
          type: _ToastrService
        }, {
          type: _ToastPackage
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      _Toast.propDecorators = {
        toastClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['@flyInOut']
        }],
        displayStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.display']
        }],
        tapToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['click']
        }],
        stickAround: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseenter']
        }],
        delayedHideToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseleave']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Toast, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
            animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('flyInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('inactive', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
              opacity: 0
            })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
              opacity: 1
            })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('removed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
              opacity: 0
            })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('inactive => active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}')), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active => removed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}'))])],
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: _ToastrService
          }, {
            type: _ToastPackage
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['@flyInOut']
          }],
          displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.display']
          }],
          tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
          }],
          stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter']
          }],
          delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseleave']
          }]
        });
      })();

      var _DefaultGlobalConfig = Object.assign(Object.assign({}, _DefaultNoComponentGlobalConfig), {
        toastComponent: _Toast
      });

      var _ToastrModule = /*#__PURE__*/function () {
        function _ToastrModule() {
          _classCallCheck(this, _ToastrModule);
        }

        _createClass(_ToastrModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: _ToastrModule,
              providers: [{
                provide: _TOAST_CONFIG,
                useValue: {
                  "default": _DefaultGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return _ToastrModule;
      }();

      _ToastrModule.ɵfac = function ToastrModule_Factory(t) {
        return new (t || _ToastrModule)();
      };

      _ToastrModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ToastrModule
      });
      _ToastrModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastrModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
            declarations: [_Toast],
            exports: [_Toast],
            entryComponents: [_Toast]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ToastrModule, {
          declarations: function declarations() {
            return [_Toast];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
          },
          exports: function exports() {
            return [_Toast];
          }
        });
      })();

      var _ToastrComponentlessModule = /*#__PURE__*/function () {
        function _ToastrComponentlessModule() {
          _classCallCheck(this, _ToastrComponentlessModule);
        }

        _createClass(_ToastrComponentlessModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: _ToastrModule,
              providers: [{
                provide: _TOAST_CONFIG,
                useValue: {
                  "default": _DefaultNoComponentGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return _ToastrComponentlessModule;
      }();

      _ToastrComponentlessModule.ɵfac = function ToastrComponentlessModule_Factory(t) {
        return new (t || _ToastrComponentlessModule)();
      };

      _ToastrComponentlessModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ToastrComponentlessModule
      });
      _ToastrComponentlessModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastrComponentlessModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ToastrComponentlessModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
          }
        });
      })();

      var _ToastNoAnimation = /*#__PURE__*/function () {
        function _ToastNoAnimation(toastrService, toastPackage, appRef) {
          var _this38 = this;

          _classCallCheck(this, _ToastNoAnimation);

          this.toastrService = toastrService;
          this.toastPackage = toastPackage;
          this.appRef = appRef;
          /** width of progress bar */

          this.width = -1;
          /** a combination of toast type and options.toastClass */

          this.toastClasses = '';
          /** controls animation */

          this.state = 'inactive';
          this.message = toastPackage.message;
          this.title = toastPackage.title;
          this.options = toastPackage.config;
          this.originalTimeout = toastPackage.config.timeOut;
          this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
          this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this38.activateToast();
          });
          this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this38.remove();
          });
          this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this38.resetTimeout();
          });
          this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this38.duplicatesCount = count;
          });
        }
        /** hides component when waiting to be displayed */


        _createClass(_ToastNoAnimation, [{
          key: "displayStyle",
          get: function get() {
            if (this.state === 'inactive') {
              return 'none';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
            this.sub1.unsubscribe();
            this.sub2.unsubscribe();
            this.sub3.unsubscribe();
            clearInterval(this.intervalId);
            clearTimeout(this.timeout);
          }
          /**
           * activates toast and sets timeout
           */

        }, {
          key: "activateToast",
          value: function activateToast() {
            var _this39 = this;

            this.state = 'active';

            if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
              this.timeout = setTimeout(function () {
                _this39.remove();
              }, this.options.timeOut);
              this.hideTime = new Date().getTime() + this.options.timeOut;

              if (this.options.progressBar) {
                this.intervalId = setInterval(function () {
                  return _this39.updateProgress();
                }, 10);
              }
            }

            if (this.options.onActivateTick) {
              this.appRef.tick();
            }
          }
          /**
           * updates progress bar width
           */

        }, {
          key: "updateProgress",
          value: function updateProgress() {
            if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
              return;
            }

            var now = new Date().getTime();
            var remaining = this.hideTime - now;
            this.width = remaining / this.options.timeOut * 100;

            if (this.options.progressAnimation === 'increasing') {
              this.width = 100 - this.width;
            }

            if (this.width <= 0) {
              this.width = 0;
            }

            if (this.width >= 100) {
              this.width = 100;
            }
          }
        }, {
          key: "resetTimeout",
          value: function resetTimeout() {
            var _this40 = this;

            clearTimeout(this.timeout);
            clearInterval(this.intervalId);
            this.state = 'active';
            this.options.timeOut = this.originalTimeout;
            this.timeout = setTimeout(function () {
              return _this40.remove();
            }, this.originalTimeout);
            this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.intervalId = setInterval(function () {
                return _this40.updateProgress();
              }, 10);
            }
          }
          /**
           * tells toastrService to remove this toast after animation time
           */

        }, {
          key: "remove",
          value: function remove() {
            var _this41 = this;

            if (this.state === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.state = 'removed';
            this.timeout = setTimeout(function () {
              return _this41.toastrService.remove(_this41.toastPackage.toastId);
            });
          }
        }, {
          key: "tapToast",
          value: function tapToast() {
            if (this.state === 'removed') {
              return;
            }

            this.toastPackage.triggerTap();

            if (this.options.tapToDismiss) {
              this.remove();
            }
          }
        }, {
          key: "stickAround",
          value: function stickAround() {
            if (this.state === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.options.timeOut = 0;
            this.hideTime = 0; // disable progressBar

            clearInterval(this.intervalId);
            this.width = 0;
          }
        }, {
          key: "delayedHideToast",
          value: function delayedHideToast() {
            var _this42 = this;

            if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state === 'removed') {
              return;
            }

            this.timeout = setTimeout(function () {
              return _this42.remove();
            }, this.options.extendedTimeOut);
            this.options.timeOut = this.options.extendedTimeOut;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.intervalId = setInterval(function () {
                return _this42.updateProgress();
              }, 10);
            }
          }
        }]);

        return _ToastNoAnimation;
      }();

      _ToastNoAnimation.ɵfac = function ToastNoAnimation_Factory(t) {
        return new (t || _ToastNoAnimation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
      };

      _ToastNoAnimation.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ToastNoAnimation,
        selectors: [["", "toast-component", ""]],
        hostVars: 4,
        hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_click_HostBindingHandler() {
              return ctx.tapToast();
            })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler() {
              return ctx.stickAround();
            })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler() {
              return ctx.delayedHideToast();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
          }
        },
        attrs: _c0,
        decls: 5,
        vars: 5,
        consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]],
        template: function ToastNoAnimation_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        encapsulation: 2
      });

      _ToastNoAnimation.ctorParameters = function () {
        return [{
          type: _ToastrService
        }, {
          type: _ToastPackage
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
        }];
      };

      _ToastNoAnimation.propDecorators = {
        toastClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class']
        }],
        displayStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.display']
        }],
        tapToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['click']
        }],
        stickAround: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseenter']
        }],
        delayedHideToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseleave']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastNoAnimation, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
          }]
        }], function () {
          return [{
            type: _ToastrService
          }, {
            type: _ToastPackage
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
          }];
        }, {
          toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
          }],
          displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.display']
          }],
          tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
          }],
          stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter']
          }],
          delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseleave']
          }]
        });
      })();

      var _DefaultNoAnimationsGlobalConfig = Object.assign(Object.assign({}, _DefaultNoComponentGlobalConfig), {
        toastComponent: _ToastNoAnimation
      });

      var _ToastNoAnimationModule = /*#__PURE__*/function () {
        function _ToastNoAnimationModule() {
          _classCallCheck(this, _ToastNoAnimationModule);
        }

        _createClass(_ToastNoAnimationModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: _ToastNoAnimationModule,
              providers: [{
                provide: _TOAST_CONFIG,
                useValue: {
                  "default": _DefaultNoAnimationsGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return _ToastNoAnimationModule;
      }();

      _ToastNoAnimationModule.ɵfac = function ToastNoAnimationModule_Factory(t) {
        return new (t || _ToastNoAnimationModule)();
      };

      _ToastNoAnimationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ToastNoAnimationModule
      });
      _ToastNoAnimationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastNoAnimationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
            declarations: [_ToastNoAnimation],
            exports: [_ToastNoAnimation],
            entryComponents: [_ToastNoAnimation]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ToastNoAnimationModule, {
          declarations: function declarations() {
            return [_ToastNoAnimation];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
          },
          exports: function exports() {
            return [_ToastNoAnimation];
          }
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-toastr.js.map

      /***/

    },

    /***/
    88259:
    /*!**********************************************************!*\
      !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
      \**********************************************************/

    /***/
    function _(module) {
      /*!
      * sweetalert2 v11.0.18
      * Released under the MIT License.
      */
      (function (global, factory) {
        true ? module.exports = factory() : 0;
      })(this, function () {
        'use strict';

        var DismissReason = Object.freeze({
          cancel: 'cancel',
          backdrop: 'backdrop',
          close: 'close',
          esc: 'esc',
          timer: 'timer'
        });
        var consolePrefix = 'SweetAlert2:';
        /**
         * Filter the unique values into a new array
         * @param arr
         */

        var uniqueArray = function uniqueArray(arr) {
          var result = [];

          for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) === -1) {
              result.push(arr[i]);
            }
          }

          return result;
        };
        /**
         * Capitalize the first letter of a string
         * @param str
         */


        var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
        /**
         * Convert NodeList to Array
         * @param nodeList
         */


        var toArray = function toArray(nodeList) {
          return Array.prototype.slice.call(nodeList);
        };
        /**
         * Standardise console warnings
         * @param message
         */


        var warn = function warn(message) {
          console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
        };
        /**
         * Standardise console errors
         * @param message
         */


        var error = function error(message) {
          console.error("".concat(consolePrefix, " ").concat(message));
        };
        /**
         * Private global state for `warnOnce`
         * @type {Array}
         * @private
         */


        var previousWarnOnceMessages = [];
        /**
         * Show a console warning, but only if it hasn't already been shown
         * @param message
         */

        var warnOnce = function warnOnce(message) {
          if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn(message);
          }
        };
        /**
         * Show a one-time console warning about deprecated params/methods
         */


        var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
          warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
        };
        /**
         * If `arg` is a function, call it (with no arguments or context) and return the result.
         * Otherwise, just pass the value through
         * @param arg
         */


        var callIfFunction = function callIfFunction(arg) {
          return typeof arg === 'function' ? arg() : arg;
        };

        var hasToPromiseFn = function hasToPromiseFn(arg) {
          return arg && typeof arg.toPromise === 'function';
        };

        var asPromise = function asPromise(arg) {
          return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
        };

        var isPromise = function isPromise(arg) {
          return arg && Promise.resolve(arg) === arg;
        };

        var isJqueryElement = function isJqueryElement(elem) {
          return typeof elem === 'object' && elem.jquery;
        };

        var isElement = function isElement(elem) {
          return elem instanceof Element || isJqueryElement(elem);
        };

        var argsToParams = function argsToParams(args) {
          var params = {};

          if (typeof args[0] === 'object' && !isElement(args[0])) {
            Object.assign(params, args[0]);
          } else {
            ['title', 'html', 'icon'].forEach(function (name, index) {
              var arg = args[index];

              if (typeof arg === 'string' || isElement(arg)) {
                params[name] = arg;
              } else if (arg !== undefined) {
                error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
              }
            });
          }

          return params;
        };

        var swalPrefix = 'swal2-';

        var prefix = function prefix(items) {
          var result = {};

          for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
          }

          return result;
        };

        var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
        var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

        var getContainer = function getContainer() {
          return document.body.querySelector(".".concat(swalClasses.container));
        };

        var elementBySelector = function elementBySelector(selectorString) {
          var container = getContainer();
          return container ? container.querySelector(selectorString) : null;
        };

        var elementByClass = function elementByClass(className) {
          return elementBySelector(".".concat(className));
        };

        var getPopup = function getPopup() {
          return elementByClass(swalClasses.popup);
        };

        var getIcon = function getIcon() {
          return elementByClass(swalClasses.icon);
        };

        var getTitle = function getTitle() {
          return elementByClass(swalClasses.title);
        };

        var getHtmlContainer = function getHtmlContainer() {
          return elementByClass(swalClasses['html-container']);
        };

        var getImage = function getImage() {
          return elementByClass(swalClasses.image);
        };

        var getProgressSteps = function getProgressSteps() {
          return elementByClass(swalClasses['progress-steps']);
        };

        var getValidationMessage = function getValidationMessage() {
          return elementByClass(swalClasses['validation-message']);
        };

        var getConfirmButton = function getConfirmButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
        };

        var getDenyButton = function getDenyButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
        };

        var getInputLabel = function getInputLabel() {
          return elementByClass(swalClasses['input-label']);
        };

        var getLoader = function getLoader() {
          return elementBySelector(".".concat(swalClasses.loader));
        };

        var getCancelButton = function getCancelButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
        };

        var getActions = function getActions() {
          return elementByClass(swalClasses.actions);
        };

        var getFooter = function getFooter() {
          return elementByClass(swalClasses.footer);
        };

        var getTimerProgressBar = function getTimerProgressBar() {
          return elementByClass(swalClasses['timer-progress-bar']);
        };

        var getCloseButton = function getCloseButton() {
          return elementByClass(swalClasses.close);
        }; // https://github.com/jkup/focusable/blob/master/index.js


        var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";

        var getFocusableElements = function getFocusableElements() {
          var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
          .sort(function (a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));

            if (a > b) {
              return 1;
            } else if (a < b) {
              return -1;
            }

            return 0;
          });
          var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
            return el.getAttribute('tabindex') !== '-1';
          });
          return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
            return isVisible(el);
          });
        };

        var isModal = function isModal() {
          return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
        };

        var isToast = function isToast() {
          return document.body.classList.contains(swalClasses['toast-shown']);
        };

        var isLoading = function isLoading() {
          return getPopup().hasAttribute('data-loading');
        };

        var states = {
          previousBodyPadding: null
        };

        var setInnerHtml = function setInnerHtml(elem, html) {
          // #1926
          elem.textContent = '';

          if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
            toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
          }
        };

        var hasClass = function hasClass(elem, className) {
          if (!className) {
            return false;
          }

          var classList = className.split(/\s+/);

          for (var i = 0; i < classList.length; i++) {
            if (!elem.classList.contains(classList[i])) {
              return false;
            }
          }

          return true;
        };

        var removeCustomClasses = function removeCustomClasses(elem, params) {
          toArray(elem.classList).forEach(function (className) {
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
              elem.classList.remove(className);
            }
          });
        };

        var applyCustomClass = function applyCustomClass(elem, params, className) {
          removeCustomClasses(elem, params);

          if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
              return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
            }

            addClass(elem, params.customClass[className]);
          }
        };

        var getInput = function getInput(popup, inputType) {
          if (!inputType) {
            return null;
          }

          switch (inputType) {
            case 'select':
            case 'textarea':
            case 'file':
              return getChildByClass(popup, swalClasses[inputType]);

            case 'checkbox':
              return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

            case 'radio':
              return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

            case 'range':
              return popup.querySelector(".".concat(swalClasses.range, " input"));

            default:
              return getChildByClass(popup, swalClasses.input);
          }
        };

        var focusInput = function focusInput(input) {
          input.focus(); // place cursor at end of text in text input

          if (input.type !== 'file') {
            // http://stackoverflow.com/a/2345915
            var val = input.value;
            input.value = '';
            input.value = val;
          }
        };

        var toggleClass = function toggleClass(target, classList, condition) {
          if (!target || !classList) {
            return;
          }

          if (typeof classList === 'string') {
            classList = classList.split(/\s+/).filter(Boolean);
          }

          classList.forEach(function (className) {
            if (target.forEach) {
              target.forEach(function (elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
              });
            } else {
              condition ? target.classList.add(className) : target.classList.remove(className);
            }
          });
        };

        var addClass = function addClass(target, classList) {
          toggleClass(target, classList, true);
        };

        var removeClass = function removeClass(target, classList) {
          toggleClass(target, classList, false);
        };

        var getChildByClass = function getChildByClass(elem, className) {
          for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
              return elem.childNodes[i];
            }
          }
        };

        var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
          if (value === "".concat(parseInt(value))) {
            value = parseInt(value);
          }

          if (value || parseInt(value) === 0) {
            elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
          } else {
            elem.style.removeProperty(property);
          }
        };

        var show = function show(elem) {
          var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
          elem.style.display = display;
        };

        var hide = function hide(elem) {
          elem.style.display = 'none';
        };

        var setStyle = function setStyle(parent, selector, property, value) {
          var el = parent.querySelector(selector);

          if (el) {
            el.style[property] = value;
          }
        };

        var toggle = function toggle(elem, condition, display) {
          condition ? show(elem, display) : hide(elem);
        }; // borrowed from jquery $(elem).is(':visible') implementation


        var isVisible = function isVisible(elem) {
          return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
        };

        var allButtonsAreHidden = function allButtonsAreHidden() {
          return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
        };

        var isScrollable = function isScrollable(elem) {
          return !!(elem.scrollHeight > elem.clientHeight);
        }; // borrowed from https://stackoverflow.com/a/46352119


        var hasCssAnimation = function hasCssAnimation(elem) {
          var style = window.getComputedStyle(elem);
          var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
          var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
          return animDuration > 0 || transDuration > 0;
        };

        var animateTimerProgressBar = function animateTimerProgressBar(timer) {
          var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var timerProgressBar = getTimerProgressBar();

          if (isVisible(timerProgressBar)) {
            if (reset) {
              timerProgressBar.style.transition = 'none';
              timerProgressBar.style.width = '100%';
            }

            setTimeout(function () {
              timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
              timerProgressBar.style.width = '0%';
            }, 10);
          }
        };

        var stopTimerProgressBar = function stopTimerProgressBar() {
          var timerProgressBar = getTimerProgressBar();
          var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = '100%';
          var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
        }; // Detect Node env


        var isNodeEnv = function isNodeEnv() {
          return typeof window === 'undefined' || typeof document === 'undefined';
        };

        var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

        var resetOldContainer = function resetOldContainer() {
          var oldContainer = getContainer();

          if (!oldContainer) {
            return false;
          }

          oldContainer.remove();
          removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
          return true;
        };

        var resetValidationMessage = function resetValidationMessage() {
          if (Swal.isVisible()) {
            Swal.resetValidationMessage();
          }
        };

        var addInputChangeListeners = function addInputChangeListeners() {
          var popup = getPopup();
          var input = getChildByClass(popup, swalClasses.input);
          var file = getChildByClass(popup, swalClasses.file);
          var range = popup.querySelector(".".concat(swalClasses.range, " input"));
          var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
          var select = getChildByClass(popup, swalClasses.select);
          var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
          var textarea = getChildByClass(popup, swalClasses.textarea);
          input.oninput = resetValidationMessage;
          file.onchange = resetValidationMessage;
          select.onchange = resetValidationMessage;
          checkbox.onchange = resetValidationMessage;
          textarea.oninput = resetValidationMessage;

          range.oninput = function () {
            resetValidationMessage();
            rangeOutput.value = range.value;
          };

          range.onchange = function () {
            resetValidationMessage();
            range.nextSibling.value = range.value;
          };
        };

        var getTarget = function getTarget(target) {
          return typeof target === 'string' ? document.querySelector(target) : target;
        };

        var setupAccessibility = function setupAccessibility(params) {
          var popup = getPopup();
          popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
          popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

          if (!params.toast) {
            popup.setAttribute('aria-modal', 'true');
          }
        };

        var setupRTL = function setupRTL(targetElement) {
          if (window.getComputedStyle(targetElement).direction === 'rtl') {
            addClass(getContainer(), swalClasses.rtl);
          }
        };
        /*
         * Add modal + backdrop to DOM
         */


        var init = function init(params) {
          // Clean up the old popup container if it exists
          var oldContainerExisted = resetOldContainer();
          /* istanbul ignore if */

          if (isNodeEnv()) {
            error('SweetAlert2 requires document to initialize');
            return;
          }

          var container = document.createElement('div');
          container.className = swalClasses.container;

          if (oldContainerExisted) {
            addClass(container, swalClasses['no-transition']);
          }

          setInnerHtml(container, sweetHTML);
          var targetElement = getTarget(params.target);
          targetElement.appendChild(container);
          setupAccessibility(params);
          setupRTL(targetElement);
          addInputChangeListeners();
        };

        var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
          // DOM element
          if (param instanceof HTMLElement) {
            target.appendChild(param); // Object
          } else if (typeof param === 'object') {
            handleObject(param, target); // Plain string
          } else if (param) {
            setInnerHtml(target, param);
          }
        };

        var handleObject = function handleObject(param, target) {
          // JQuery element(s)
          if (param.jquery) {
            handleJqueryElem(target, param); // For other objects use their string representation
          } else {
            setInnerHtml(target, param.toString());
          }
        };

        var handleJqueryElem = function handleJqueryElem(target, elem) {
          target.textContent = '';

          if (0 in elem) {
            for (var i = 0; (i in elem); i++) {
              target.appendChild(elem[i].cloneNode(true));
            }
          } else {
            target.appendChild(elem.cloneNode(true));
          }
        };

        var animationEndEvent = function () {
          // Prevent run in Node env

          /* istanbul ignore if */
          if (isNodeEnv()) {
            return false;
          }

          var testEl = document.createElement('div');
          var transEndEventNames = {
            WebkitAnimation: 'webkitAnimationEnd',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
          };

          for (var i in transEndEventNames) {
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
              return transEndEventNames[i];
            }
          }

          return false;
        }(); // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js


        var measureScrollbar = function measureScrollbar() {
          var scrollDiv = document.createElement('div');
          scrollDiv.className = swalClasses['scrollbar-measure'];
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };

        var renderActions = function renderActions(instance, params) {
          var actions = getActions();
          var loader = getLoader();
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton(); // Actions (buttons) wrapper

          if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
            hide(actions);
          } // Custom class


          applyCustomClass(actions, params, 'actions'); // Render buttons

          renderButton(confirmButton, 'confirm', params);
          renderButton(denyButton, 'deny', params);
          renderButton(cancelButton, 'cancel', params);
          handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

          if (params.reverseButtons) {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
          } // Loader


          setInnerHtml(loader, params.loaderHtml);
          applyCustomClass(loader, params, 'loader');
        };

        function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
          if (!params.buttonsStyling) {
            return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          }

          addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

          if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses['default-outline']);
          }

          if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses['default-outline']);
          }

          if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses['default-outline']);
          }
        }

        function renderButton(button, buttonType, params) {
          toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
          setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

          button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
          // Add buttons custom classes

          button.className = swalClasses[buttonType];
          applyCustomClass(button, params, "".concat(buttonType, "Button"));
          addClass(button, params["".concat(buttonType, "ButtonClass")]);
        }

        function handleBackdropParam(container, backdrop) {
          if (typeof backdrop === 'string') {
            container.style.background = backdrop;
          } else if (!backdrop) {
            addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
          }
        }

        function handlePositionParam(container, position) {
          if (position in swalClasses) {
            addClass(container, swalClasses[position]);
          } else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
          }
        }

        function handleGrowParam(container, grow) {
          if (grow && typeof grow === 'string') {
            var growClass = "grow-".concat(grow);

            if (growClass in swalClasses) {
              addClass(container, swalClasses[growClass]);
            }
          }
        }

        var renderContainer = function renderContainer(instance, params) {
          var container = getContainer();

          if (!container) {
            return;
          }

          handleBackdropParam(container, params.backdrop);
          handlePositionParam(container, params.position);
          handleGrowParam(container, params.grow); // Custom class

          applyCustomClass(container, params, 'container');
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateProps = {
          promise: new WeakMap(),
          innerParams: new WeakMap(),
          domCache: new WeakMap()
        };
        var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

        var renderInput = function renderInput(instance, params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(instance);
          var rerender = !innerParams || params.input !== innerParams.input;
          inputTypes.forEach(function (inputType) {
            var inputClass = swalClasses[inputType];
            var inputContainer = getChildByClass(popup, inputClass); // set attributes

            setAttributes(inputType, params.inputAttributes); // set class

            inputContainer.className = inputClass;

            if (rerender) {
              hide(inputContainer);
            }
          });

          if (params.input) {
            if (rerender) {
              showInput(params);
            } // set custom class


            setCustomClass(params);
          }
        };

        var showInput = function showInput(params) {
          if (!renderInputType[params.input]) {
            return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
          }

          var inputContainer = getInputContainer(params.input);
          var input = renderInputType[params.input](inputContainer, params);
          show(input); // input autofocus

          setTimeout(function () {
            focusInput(input);
          });
        };

        var removeAttributes = function removeAttributes(input) {
          for (var i = 0; i < input.attributes.length; i++) {
            var attrName = input.attributes[i].name;

            if (!['type', 'value', 'style'].includes(attrName)) {
              input.removeAttribute(attrName);
            }
          }
        };

        var setAttributes = function setAttributes(inputType, inputAttributes) {
          var input = getInput(getPopup(), inputType);

          if (!input) {
            return;
          }

          removeAttributes(input);

          for (var attr in inputAttributes) {
            input.setAttribute(attr, inputAttributes[attr]);
          }
        };

        var setCustomClass = function setCustomClass(params) {
          var inputContainer = getInputContainer(params.input);

          if (params.customClass) {
            addClass(inputContainer, params.customClass.input);
          }
        };

        var setInputPlaceholder = function setInputPlaceholder(input, params) {
          if (!input.placeholder || params.inputPlaceholder) {
            input.placeholder = params.inputPlaceholder;
          }
        };

        var setInputLabel = function setInputLabel(input, prependTo, params) {
          if (params.inputLabel) {
            input.id = swalClasses.input;
            var label = document.createElement('label');
            var labelClass = swalClasses['input-label'];
            label.setAttribute('for', input.id);
            label.className = labelClass;
            addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement('beforebegin', label);
          }
        };

        var getInputContainer = function getInputContainer(inputType) {
          var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
          return getChildByClass(getPopup(), inputClass);
        };

        var renderInputType = {};

        renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
          if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
            input.value = params.inputValue;
          } else if (!isPromise(params.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
          }

          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          input.type = params.input;
          return input;
        };

        renderInputType.file = function (input, params) {
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          return input;
        };

        renderInputType.range = function (range, params) {
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = params.inputValue;
          rangeInput.type = params.input;
          rangeOutput.value = params.inputValue;
          setInputLabel(rangeInput, range, params);
          return range;
        };

        renderInputType.select = function (select, params) {
          select.textContent = '';

          if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          setInputLabel(select, select, params);
          return select;
        };

        renderInputType.radio = function (radio) {
          radio.textContent = '';
          return radio;
        };

        renderInputType.checkbox = function (checkboxContainer, params) {
          var checkbox = getInput(getPopup(), 'checkbox');
          checkbox.value = 1;
          checkbox.id = swalClasses.checkbox;
          checkbox.checked = Boolean(params.inputValue);
          var label = checkboxContainer.querySelector('span');
          setInnerHtml(label, params.inputPlaceholder);
          return checkboxContainer;
        };

        renderInputType.textarea = function (textarea, params) {
          textarea.value = params.inputValue;
          setInputPlaceholder(textarea, params);
          setInputLabel(textarea, textarea, params);

          var getMargin = function getMargin(el) {
            return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
          };

          if ('MutationObserver' in window) {
            // #1699
            var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

            var outputsize = function outputsize() {
              var textareaWidth = textarea.offsetWidth + getMargin(textarea);

              if (textareaWidth > initialPopupWidth) {
                getPopup().style.width = "".concat(textareaWidth, "px");
              } else {
                getPopup().style.width = null;
              }
            };

            new MutationObserver(outputsize).observe(textarea, {
              attributes: true,
              attributeFilter: ['style']
            });
          }

          return textarea;
        };

        var renderContent = function renderContent(instance, params) {
          var htmlContainer = getHtmlContainer();
          applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

          if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, 'block'); // Content as plain text
          } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, 'block'); // No content
          } else {
            hide(htmlContainer);
          }

          renderInput(instance, params);
        };

        var renderFooter = function renderFooter(instance, params) {
          var footer = getFooter();
          toggle(footer, params.footer);

          if (params.footer) {
            parseHtmlToContainer(params.footer, footer);
          } // Custom class


          applyCustomClass(footer, params, 'footer');
        };

        var renderCloseButton = function renderCloseButton(instance, params) {
          var closeButton = getCloseButton();
          setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

          applyCustomClass(closeButton, params, 'closeButton');
          toggle(closeButton, params.showCloseButton);
          closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
        };

        var renderIcon = function renderIcon(instance, params) {
          var innerParams = privateProps.innerParams.get(instance);
          var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

          if (innerParams && params.icon === innerParams.icon) {
            // Custom or default content
            setContent(icon, params);
            applyStyles(icon, params);
            return;
          }

          if (!params.icon && !params.iconHtml) {
            return hide(icon);
          }

          if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
            return hide(icon);
          }

          show(icon); // Custom or default content

          setContent(icon, params);
          applyStyles(icon, params); // Animate icon

          addClass(icon, params.showClass.icon);
        };

        var applyStyles = function applyStyles(icon, params) {
          for (var iconType in iconTypes) {
            if (params.icon !== iconType) {
              removeClass(icon, iconTypes[iconType]);
            }
          }

          addClass(icon, iconTypes[params.icon]); // Icon color

          setColor(icon, params); // Success icon background color

          adjustSuccessIconBackgoundColor(); // Custom class

          applyCustomClass(icon, params, 'icon');
        }; // Adjust success icon background color to match the popup background color


        var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
          var popup = getPopup();
          var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
          var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

          for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
          }
        };

        var setContent = function setContent(icon, params) {
          icon.textContent = '';

          if (params.iconHtml) {
            setInnerHtml(icon, iconContent(params.iconHtml));
          } else if (params.icon === 'success') {
            setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
          } else if (params.icon === 'error') {
            setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
          } else {
            var defaultIconHtml = {
              question: '?',
              warning: '!',
              info: 'i'
            };
            setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
          }
        };

        var setColor = function setColor(icon, params) {
          if (!params.iconColor) {
            return;
          }

          icon.style.color = params.iconColor;
          icon.style.borderColor = params.iconColor;

          for (var _i7 = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i7 < _arr.length; _i7++) {
            var sel = _arr[_i7];
            setStyle(icon, sel, 'backgroundColor', params.iconColor);
          }

          setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
        };

        var iconContent = function iconContent(content) {
          return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
        };

        var renderImage = function renderImage(instance, params) {
          var image = getImage();

          if (!params.imageUrl) {
            return hide(image);
          }

          show(image, ''); // Src, alt

          image.setAttribute('src', params.imageUrl);
          image.setAttribute('alt', params.imageAlt); // Width, height

          applyNumericalStyle(image, 'width', params.imageWidth);
          applyNumericalStyle(image, 'height', params.imageHeight); // Class

          image.className = swalClasses.image;
          applyCustomClass(image, params, 'image');
        };

        var createStepElement = function createStepElement(step) {
          var stepEl = document.createElement('li');
          addClass(stepEl, swalClasses['progress-step']);
          setInnerHtml(stepEl, step);
          return stepEl;
        };

        var createLineElement = function createLineElement(params) {
          var lineEl = document.createElement('li');
          addClass(lineEl, swalClasses['progress-step-line']);

          if (params.progressStepsDistance) {
            lineEl.style.width = params.progressStepsDistance;
          }

          return lineEl;
        };

        var renderProgressSteps = function renderProgressSteps(instance, params) {
          var progressStepsContainer = getProgressSteps();

          if (!params.progressSteps || params.progressSteps.length === 0) {
            return hide(progressStepsContainer);
          }

          show(progressStepsContainer);
          progressStepsContainer.textContent = '';

          if (params.currentProgressStep >= params.progressSteps.length) {
            warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
          }

          params.progressSteps.forEach(function (step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);

            if (index === params.currentProgressStep) {
              addClass(stepEl, swalClasses['active-progress-step']);
            }

            if (index !== params.progressSteps.length - 1) {
              var lineEl = createLineElement(params);
              progressStepsContainer.appendChild(lineEl);
            }
          });
        };

        var renderTitle = function renderTitle(instance, params) {
          var title = getTitle();
          toggle(title, params.title || params.titleText, 'block');

          if (params.title) {
            parseHtmlToContainer(params.title, title);
          }

          if (params.titleText) {
            title.innerText = params.titleText;
          } // Custom class


          applyCustomClass(title, params, 'title');
        };

        var renderPopup = function renderPopup(instance, params) {
          var container = getContainer();
          var popup = getPopup(); // Width

          if (params.toast) {
            // #2170
            applyNumericalStyle(container, 'width', params.width);
            popup.style.width = '100%';
            popup.insertBefore(getLoader(), getIcon());
          } else {
            applyNumericalStyle(popup, 'width', params.width);
          } // Padding


          applyNumericalStyle(popup, 'padding', params.padding); // Background

          if (params.background) {
            popup.style.background = params.background;
          }

          hide(getValidationMessage()); // Classes

          addClasses(popup, params);
        };

        var addClasses = function addClasses(popup, params) {
          // Default Class + showClass when updating Swal.update({})
          popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

          if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses['toast-shown']);
            addClass(popup, swalClasses.toast);
          } else {
            addClass(popup, swalClasses.modal);
          } // Custom class


          applyCustomClass(popup, params, 'popup');

          if (typeof params.customClass === 'string') {
            addClass(popup, params.customClass);
          } // Icon class (#1842)


          if (params.icon) {
            addClass(popup, swalClasses["icon-".concat(params.icon)]);
          }
        };

        var render = function render(instance, params) {
          renderPopup(instance, params);
          renderContainer(instance, params);
          renderProgressSteps(instance, params);
          renderIcon(instance, params);
          renderImage(instance, params);
          renderTitle(instance, params);
          renderCloseButton(instance, params);
          renderContent(instance, params);
          renderActions(instance, params);
          renderFooter(instance, params);

          if (typeof params.didRender === 'function') {
            params.didRender(getPopup());
          }
        };
        /*
         * Global function to determine if SweetAlert2 popup is shown
         */


        var isVisible$1 = function isVisible$1() {
          return isVisible(getPopup());
        };
        /*
         * Global function to click 'Confirm' button
         */


        var clickConfirm = function clickConfirm() {
          return getConfirmButton() && getConfirmButton().click();
        };
        /*
         * Global function to click 'Deny' button
         */


        var clickDeny = function clickDeny() {
          return getDenyButton() && getDenyButton().click();
        };
        /*
         * Global function to click 'Cancel' button
         */


        var clickCancel = function clickCancel() {
          return getCancelButton() && getCancelButton().click();
        };

        function fire() {
          var Swal = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _construct(Swal, args);
        }
        /**
         * Returns an extended version of `Swal` containing `params` as defaults.
         * Useful for reusing Swal configuration.
         *
         * For example:
         *
         * Before:
         * const textPromptOptions = { input: 'text', showCancelButton: true }
         * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
         * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
         *
         * After:
         * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
         * const {value: firstName} = await TextPrompt('What is your first name?')
         * const {value: lastName} = await TextPrompt('What is your last name?')
         *
         * @param mixinParams
         */


        function mixin(mixinParams) {
          var MixinSwal = /*#__PURE__*/function (_this43) {
            _inherits(MixinSwal, _this43);

            var _super2 = _createSuper(MixinSwal);

            function MixinSwal() {
              _classCallCheck(this, MixinSwal);

              return _super2.apply(this, arguments);
            }

            _createClass(MixinSwal, [{
              key: "_main",
              value: function _main(params, priorityMixinParams) {
                return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
              }
            }]);

            return MixinSwal;
          }(this);

          return MixinSwal;
        }
        /**
         * Shows loader (spinner), this is useful with AJAX requests.
         * By default the loader be shown instead of the "Confirm" button.
         */


        var showLoading = function showLoading(buttonToReplace) {
          var popup = getPopup();

          if (!popup) {
            Swal.fire();
          }

          popup = getPopup();
          var loader = getLoader();

          if (isToast()) {
            hide(getIcon());
          } else {
            replaceButton(popup, buttonToReplace);
          }

          show(loader);
          popup.setAttribute('data-loading', true);
          popup.setAttribute('aria-busy', true);
          popup.focus();
        };

        var replaceButton = function replaceButton(popup, buttonToReplace) {
          var actions = getActions();
          var loader = getLoader();

          if (!buttonToReplace && isVisible(getConfirmButton())) {
            buttonToReplace = getConfirmButton();
          }

          show(actions);

          if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute('data-button-to-replace', buttonToReplace.className);
          }

          loader.parentNode.insertBefore(loader, buttonToReplace);
          addClass([popup, actions], swalClasses.loading);
        };

        var RESTORE_FOCUS_TIMEOUT = 100;
        var globalState = {};

        var focusPreviousActiveElement = function focusPreviousActiveElement() {
          if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
          } else if (document.body) {
            document.body.focus();
          }
        }; // Restore previous active (focused) element


        var restoreActiveElement = function restoreActiveElement(returnFocus) {
          return new Promise(function (resolve) {
            if (!returnFocus) {
              return resolve();
            }

            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function () {
              focusPreviousActiveElement();
              resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900

            window.scrollTo(x, y);
          });
        };
        /**
         * If `timer` parameter is set, returns number of milliseconds of timer remained.
         * Otherwise, returns undefined.
         */


        var getTimerLeft = function getTimerLeft() {
          return globalState.timeout && globalState.timeout.getTimerLeft();
        };
        /**
         * Stop timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var stopTimer = function stopTimer() {
          if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var resumeTimer = function resumeTimer() {
          if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var toggleTimer = function toggleTimer() {
          var timer = globalState.timeout;
          return timer && (timer.running ? stopTimer() : resumeTimer());
        };
        /**
         * Increase timer. Returns number of milliseconds of an updated timer.
         * If `timer` parameter isn't set, returns undefined.
         */


        var increaseTimer = function increaseTimer(n) {
          if (globalState.timeout) {
            var remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
          }
        };
        /**
         * Check if timer is running. Returns true if timer is running
         * or false if timer is paused or stopped.
         * If `timer` parameter isn't set, returns undefined
         */


        var isTimerRunning = function isTimerRunning() {
          return globalState.timeout && globalState.timeout.isRunning();
        };

        var bodyClickListenerAdded = false;
        var clickHandlers = {};

        function bindClickHandler() {
          var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
          clickHandlers[attr] = this;

          if (!bodyClickListenerAdded) {
            document.body.addEventListener('click', bodyClickListener);
            bodyClickListenerAdded = true;
          }
        }

        var bodyClickListener = function bodyClickListener(event) {
          // TODO: replace with event.composedPath()
          for (var el = event.target; el && el !== document; el = el.parentNode) {
            for (var attr in clickHandlers) {
              var template = el.getAttribute(attr);

              if (template) {
                clickHandlers[attr].fire({
                  template: template
                });
                return;
              }
            }
          }
        };

        var defaultParams = {
          title: '',
          titleText: '',
          text: '',
          html: '',
          footer: '',
          icon: undefined,
          iconColor: undefined,
          iconHtml: undefined,
          template: undefined,
          toast: false,
          showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
          },
          hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
          },
          customClass: {},
          target: 'body',
          backdrop: true,
          heightAuto: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: true,
          keydownListenerCapture: false,
          showConfirmButton: true,
          showDenyButton: false,
          showCancelButton: false,
          preConfirm: undefined,
          preDeny: undefined,
          confirmButtonText: 'OK',
          confirmButtonAriaLabel: '',
          confirmButtonColor: undefined,
          denyButtonText: 'No',
          denyButtonAriaLabel: '',
          denyButtonColor: undefined,
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: '',
          cancelButtonColor: undefined,
          buttonsStyling: true,
          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          returnFocus: true,
          showCloseButton: false,
          closeButtonHtml: '&times;',
          closeButtonAriaLabel: 'Close this dialog',
          loaderHtml: '',
          showLoaderOnConfirm: false,
          showLoaderOnDeny: false,
          imageUrl: undefined,
          imageWidth: undefined,
          imageHeight: undefined,
          imageAlt: '',
          timer: undefined,
          timerProgressBar: false,
          width: undefined,
          padding: undefined,
          background: undefined,
          input: undefined,
          inputPlaceholder: '',
          inputLabel: '',
          inputValue: '',
          inputOptions: {},
          inputAutoTrim: true,
          inputAttributes: {},
          inputValidator: undefined,
          returnInputValueOnDeny: false,
          validationMessage: undefined,
          grow: false,
          position: 'center',
          progressSteps: [],
          currentProgressStep: undefined,
          progressStepsDistance: undefined,
          willOpen: undefined,
          didOpen: undefined,
          didRender: undefined,
          willClose: undefined,
          didClose: undefined,
          didDestroy: undefined,
          scrollbarPadding: true
        };
        var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
        var deprecatedParams = {};
        var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
        /**
         * Is valid parameter
         * @param {String} paramName
         */

        var isValidParameter = function isValidParameter(paramName) {
          return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
        };
        /**
         * Is valid parameter for Swal.update() method
         * @param {String} paramName
         */


        var isUpdatableParameter = function isUpdatableParameter(paramName) {
          return updatableParams.indexOf(paramName) !== -1;
        };
        /**
         * Is deprecated parameter
         * @param {String} paramName
         */


        var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
          return deprecatedParams[paramName];
        };

        var checkIfParamIsValid = function checkIfParamIsValid(param) {
          if (!isValidParameter(param)) {
            warn("Unknown parameter \"".concat(param, "\""));
          }
        };

        var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
          if (toastIncompatibleParams.includes(param)) {
            warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
          }
        };

        var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
          if (isDeprecatedParameter(param)) {
            warnAboutDeprecation(param, isDeprecatedParameter(param));
          }
        };
        /**
         * Show relevant warnings for given params
         *
         * @param params
         */


        var showWarningsForParams = function showWarningsForParams(params) {
          if (!params.backdrop && params.allowOutsideClick) {
            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          }

          for (var param in params) {
            checkIfParamIsValid(param);

            if (params.toast) {
              checkIfToastParamIsValid(param);
            }

            checkIfParamIsDeprecated(param);
          }
        };

        var staticMethods = /*#__PURE__*/Object.freeze({
          isValidParameter: isValidParameter,
          isUpdatableParameter: isUpdatableParameter,
          isDeprecatedParameter: isDeprecatedParameter,
          argsToParams: argsToParams,
          isVisible: isVisible$1,
          clickConfirm: clickConfirm,
          clickDeny: clickDeny,
          clickCancel: clickCancel,
          getContainer: getContainer,
          getPopup: getPopup,
          getTitle: getTitle,
          getHtmlContainer: getHtmlContainer,
          getImage: getImage,
          getIcon: getIcon,
          getInputLabel: getInputLabel,
          getCloseButton: getCloseButton,
          getActions: getActions,
          getConfirmButton: getConfirmButton,
          getDenyButton: getDenyButton,
          getCancelButton: getCancelButton,
          getLoader: getLoader,
          getFooter: getFooter,
          getTimerProgressBar: getTimerProgressBar,
          getFocusableElements: getFocusableElements,
          getValidationMessage: getValidationMessage,
          isLoading: isLoading,
          fire: fire,
          mixin: mixin,
          showLoading: showLoading,
          enableLoading: showLoading,
          getTimerLeft: getTimerLeft,
          stopTimer: stopTimer,
          resumeTimer: resumeTimer,
          toggleTimer: toggleTimer,
          increaseTimer: increaseTimer,
          isTimerRunning: isTimerRunning,
          bindClickHandler: bindClickHandler
        });
        /**
         * Hides loader and shows back the button which was hidden by .showLoading()
         */

        function hideLoading() {
          // do nothing if popup is closed
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            return;
          }

          var domCache = privateProps.domCache.get(this);
          hide(domCache.loader);

          if (isToast()) {
            if (innerParams.icon) {
              show(getIcon());
            }
          } else {
            showRelatedButton(domCache);
          }

          removeClass([domCache.popup, domCache.actions], swalClasses.loading);
          domCache.popup.removeAttribute('aria-busy');
          domCache.popup.removeAttribute('data-loading');
          domCache.confirmButton.disabled = false;
          domCache.denyButton.disabled = false;
          domCache.cancelButton.disabled = false;
        }

        var showRelatedButton = function showRelatedButton(domCache) {
          var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

          if (buttonToReplace.length) {
            show(buttonToReplace[0], 'inline-block');
          } else if (allButtonsAreHidden()) {
            hide(domCache.actions);
          }
        };

        function getInput$1(instance) {
          var innerParams = privateProps.innerParams.get(instance || this);
          var domCache = privateProps.domCache.get(instance || this);

          if (!domCache) {
            return null;
          }

          return getInput(domCache.popup, innerParams.input);
        }

        var fixScrollbar = function fixScrollbar() {
          // for queues, do not do this more than once
          if (states.previousBodyPadding !== null) {
            return;
          } // if the body has overflow


          if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
            document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
          }
        };

        var undoScrollbar = function undoScrollbar() {
          if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
            states.previousBodyPadding = null;
          }
        };
        /* istanbul ignore file */


        var iOSfix = function iOSfix() {
          var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

          if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups(); // #1948
          }
        };

        var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
          var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

          if (safari) {
            var bottomPanelHeight = 44;

            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
              getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
            }
          }
        };

        var lockBodyScroll = function lockBodyScroll() {
          // #1246
          var container = getContainer();
          var preventTouchMove;

          container.ontouchstart = function (e) {
            preventTouchMove = shouldPreventTouchMove(e);
          };

          container.ontouchmove = function (e) {
            if (preventTouchMove) {
              e.preventDefault();
              e.stopPropagation();
            }
          };
        };

        var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
          var target = event.target;
          var container = getContainer();

          if (isStylys(event) || isZoom(event)) {
            return false;
          }

          if (target === container) {
            return true;
          }

          if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
          target.tagName !== 'TEXTAREA' && // #2266
          !(isScrollable(getHtmlContainer()) && // #1944
          getHtmlContainer().contains(target))) {
            return true;
          }

          return false;
        };

        var isStylys = function isStylys(event) {
          // #1786
          return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
        };

        var isZoom = function isZoom(event) {
          // #1891
          return event.touches && event.touches.length > 1;
        };

        var undoIOSfix = function undoIOSfix() {
          if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
          }
        }; // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
        // elements not within the active modal dialog will not be surfaced if a user opens a screen
        // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.


        var setAriaHidden = function setAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el === getContainer() || el.contains(getContainer())) {
              return;
            }

            if (el.hasAttribute('aria-hidden')) {
              el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
            }

            el.setAttribute('aria-hidden', 'true');
          });
        };

        var unsetAriaHidden = function unsetAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el.hasAttribute('data-previous-aria-hidden')) {
              el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
              el.removeAttribute('data-previous-aria-hidden');
            } else {
              el.removeAttribute('aria-hidden');
            }
          });
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateMethods = {
          swalPromiseResolve: new WeakMap()
        };
        /*
         * Instance method to close sweetAlert
         */

        function removePopupAndResetState(instance, container, returnFocus, didClose) {
          if (isToast()) {
            triggerDidCloseAndDispose(instance, didClose);
          } else {
            restoreActiveElement(returnFocus).then(function () {
              return triggerDidCloseAndDispose(instance, didClose);
            });
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
          // for some reason removing the container in Safari will scroll the document to bottom

          if (isSafari) {
            container.setAttribute('style', 'display:none !important');
            container.removeAttribute('class');
            container.innerHTML = '';
          } else {
            container.remove();
          }

          if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            unsetAriaHidden();
          }

          removeBodyClasses();
        }

        function removeBodyClasses() {
          removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
        }

        function close(resolveValue) {
          var popup = getPopup();

          if (!popup) {
            return;
          }

          resolveValue = prepareResolveValue(resolveValue);
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
            return;
          }

          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
          removeClass(popup, innerParams.showClass.popup);
          addClass(popup, innerParams.hideClass.popup);
          var backdrop = getContainer();
          removeClass(backdrop, innerParams.showClass.backdrop);
          addClass(backdrop, innerParams.hideClass.backdrop);
          handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

          swalPromiseResolve(resolveValue);
        }

        var prepareResolveValue = function prepareResolveValue(resolveValue) {
          // When user calls Swal.close()
          if (typeof resolveValue === 'undefined') {
            return {
              isConfirmed: false,
              isDenied: false,
              isDismissed: true
            };
          }

          return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
          }, resolveValue);
        };

        var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
          var container = getContainer(); // If animation is supported, animate

          var animationIsSupported = animationEndEvent && hasCssAnimation(popup);

          if (typeof innerParams.willClose === 'function') {
            innerParams.willClose(popup);
          }

          if (animationIsSupported) {
            animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
          } else {
            // Otherwise, remove immediately
            removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
          }
        };

        var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
          globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
          popup.addEventListener(animationEndEvent, function (e) {
            if (e.target === popup) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            }
          });
        };

        var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
          setTimeout(function () {
            if (typeof didClose === 'function') {
              didClose.bind(instance.params)();
            }

            instance._destroy();
          });
        };

        function setButtonsDisabled(instance, buttons, disabled) {
          var domCache = privateProps.domCache.get(instance);
          buttons.forEach(function (button) {
            domCache[button].disabled = disabled;
          });
        }

        function setInputDisabled(input, disabled) {
          if (!input) {
            return false;
          }

          if (input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');

            for (var i = 0; i < radios.length; i++) {
              radios[i].disabled = disabled;
            }
          } else {
            input.disabled = disabled;
          }
        }

        function enableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
        }

        function disableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
        }

        function enableInput() {
          return setInputDisabled(this.getInput(), false);
        }

        function disableInput() {
          return setInputDisabled(this.getInput(), true);
        }

        function showValidationMessage(error) {
          var domCache = privateProps.domCache.get(this);
          var params = privateProps.innerParams.get(this);
          setInnerHtml(domCache.validationMessage, error);
          domCache.validationMessage.className = swalClasses['validation-message'];

          if (params.customClass && params.customClass.validationMessage) {
            addClass(domCache.validationMessage, params.customClass.validationMessage);
          }

          show(domCache.validationMessage);
          var input = this.getInput();

          if (input) {
            input.setAttribute('aria-invalid', true);
            input.setAttribute('aria-describedby', swalClasses['validation-message']);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
          }
        } // Hide block with validation message


        function resetValidationMessage$1() {
          var domCache = privateProps.domCache.get(this);

          if (domCache.validationMessage) {
            hide(domCache.validationMessage);
          }

          var input = this.getInput();

          if (input) {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedby');
            removeClass(input, swalClasses.inputerror);
          }
        }

        function getProgressSteps$1() {
          var domCache = privateProps.domCache.get(this);
          return domCache.progressSteps;
        }

        var Timer = /*#__PURE__*/function () {
          function Timer(callback, delay) {
            _classCallCheck(this, Timer);

            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
          }

          _createClass(Timer, [{
            key: "start",
            value: function start() {
              if (!this.running) {
                this.running = true;
                this.started = new Date();
                this.id = setTimeout(this.callback, this.remaining);
              }

              return this.remaining;
            }
          }, {
            key: "stop",
            value: function stop() {
              if (this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= new Date() - this.started;
              }

              return this.remaining;
            }
          }, {
            key: "increase",
            value: function increase(n) {
              var running = this.running;

              if (running) {
                this.stop();
              }

              this.remaining += n;

              if (running) {
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "getTimerLeft",
            value: function getTimerLeft() {
              if (this.running) {
                this.stop();
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "isRunning",
            value: function isRunning() {
              return this.running;
            }
          }]);

          return Timer;
        }();

        var defaultInputValidators = {
          email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
          },
          url: function url(string, validationMessage) {
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
          }
        };

        function setDefaultInputValidators(params) {
          // Use default `inputValidator` for supported input types if not provided
          if (!params.inputValidator) {
            Object.keys(defaultInputValidators).forEach(function (key) {
              if (params.input === key) {
                params.inputValidator = defaultInputValidators[key];
              }
            });
          }
        }

        function validateCustomTargetElement(params) {
          // Determine if the custom target element is valid
          if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
          }
        }
        /**
         * Set type, text and actions on popup
         *
         * @param params
         * @returns {boolean}
         */


        function setParameters(params) {
          setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

          if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
          }

          validateCustomTargetElement(params); // Replace newlines with <br> in title

          if (typeof params.title === 'string') {
            params.title = params.title.split('\n').join('<br />');
          }

          init(params);
        }

        var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

        var getTemplateParams = function getTemplateParams(params) {
          var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

          if (!template) {
            return {};
          }

          var templateContent = template.content;
          showWarningsForElements(templateContent);
          var result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
          return result;
        };

        var getSwalParams = function getSwalParams(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
            showWarningsForAttributes(param, ['name', 'value']);
            var paramName = param.getAttribute('name');
            var value = param.getAttribute('value');

            if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
              value = false;
            }

            if (typeof defaultParams[paramName] === 'object') {
              value = JSON.parse(value);
            }

            result[paramName] = value;
          });
          return result;
        };

        var getSwalButtons = function getSwalButtons(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
            showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
            var type = button.getAttribute('type');
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

            if (button.hasAttribute('color')) {
              result["".concat(type, "ButtonColor")] = button.getAttribute('color');
            }

            if (button.hasAttribute('aria-label')) {
              result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
            }
          });
          return result;
        };

        var getSwalImage = function getSwalImage(templateContent) {
          var result = {};
          var image = templateContent.querySelector('swal-image');

          if (image) {
            showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

            if (image.hasAttribute('src')) {
              result.imageUrl = image.getAttribute('src');
            }

            if (image.hasAttribute('width')) {
              result.imageWidth = image.getAttribute('width');
            }

            if (image.hasAttribute('height')) {
              result.imageHeight = image.getAttribute('height');
            }

            if (image.hasAttribute('alt')) {
              result.imageAlt = image.getAttribute('alt');
            }
          }

          return result;
        };

        var getSwalIcon = function getSwalIcon(templateContent) {
          var result = {};
          var icon = templateContent.querySelector('swal-icon');

          if (icon) {
            showWarningsForAttributes(icon, ['type', 'color']);

            if (icon.hasAttribute('type')) {
              result.icon = icon.getAttribute('type');
            }

            if (icon.hasAttribute('color')) {
              result.iconColor = icon.getAttribute('color');
            }

            result.iconHtml = icon.innerHTML;
          }

          return result;
        };

        var getSwalInput = function getSwalInput(templateContent) {
          var result = {};
          var input = templateContent.querySelector('swal-input');

          if (input) {
            showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
            result.input = input.getAttribute('type') || 'text';

            if (input.hasAttribute('label')) {
              result.inputLabel = input.getAttribute('label');
            }

            if (input.hasAttribute('placeholder')) {
              result.inputPlaceholder = input.getAttribute('placeholder');
            }

            if (input.hasAttribute('value')) {
              result.inputValue = input.getAttribute('value');
            }
          }

          var inputOptions = templateContent.querySelectorAll('swal-input-option');

          if (inputOptions.length) {
            result.inputOptions = {};
            toArray(inputOptions).forEach(function (option) {
              showWarningsForAttributes(option, ['value']);
              var optionValue = option.getAttribute('value');
              var optionName = option.innerHTML;
              result.inputOptions[optionValue] = optionName;
            });
          }

          return result;
        };

        var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
          var result = {};

          for (var i in paramNames) {
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);

            if (tag) {
              showWarningsForAttributes(tag, []);
              result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
            }
          }

          return result;
        };

        var showWarningsForElements = function showWarningsForElements(template) {
          var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
          toArray(template.children).forEach(function (el) {
            var tagName = el.tagName.toLowerCase();

            if (allowedElements.indexOf(tagName) === -1) {
              warn("Unrecognized element <".concat(tagName, ">"));
            }
          });
        };

        var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
          toArray(el.attributes).forEach(function (attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) {
              warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
            }
          });
        };

        var SHOW_CLASS_TIMEOUT = 10;
        /**
         * Open popup, add necessary classes and styles, fix scrollbar
         *
         * @param params
         */

        var openPopup = function openPopup(params) {
          var container = getContainer();
          var popup = getPopup();

          if (typeof params.willOpen === 'function') {
            params.willOpen(popup);
          }

          var bodyStyles = window.getComputedStyle(document.body);
          var initialBodyOverflow = bodyStyles.overflowY;
          addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

          setTimeout(function () {
            setScrollingVisibility(container, popup);
          }, SHOW_CLASS_TIMEOUT);

          if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
          }

          if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
          }

          if (typeof params.didOpen === 'function') {
            setTimeout(function () {
              return params.didOpen(popup);
            });
          }

          removeClass(container, swalClasses['no-transition']);
        };

        var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
          var popup = getPopup();

          if (event.target !== popup) {
            return;
          }

          var container = getContainer();
          popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
          container.style.overflowY = 'auto';
        };

        var setScrollingVisibility = function setScrollingVisibility(container, popup) {
          if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = 'hidden';
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
          } else {
            container.style.overflowY = 'auto';
          }
        };

        var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
          iOSfix();

          if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
            fixScrollbar();
          } // sweetalert2/issues/1247


          setTimeout(function () {
            container.scrollTop = 0;
          });
        };

        var addClasses$1 = function addClasses$1(container, popup, params) {
          addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

          popup.style.setProperty('opacity', '0', 'important');
          show(popup, 'grid');
          setTimeout(function () {
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup); // and remove the opacity workaround

            popup.style.removeProperty('opacity');
          }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

          addClass([document.documentElement, document.body], swalClasses.shown);

          if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses['height-auto']);
          }
        };

        var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
          if (params.input === 'select' || params.input === 'radio') {
            handleInputOptions(instance, params);
          } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
          }
        };

        var getInputValue = function getInputValue(instance, innerParams) {
          var input = instance.getInput();

          if (!input) {
            return null;
          }

          switch (innerParams.input) {
            case 'checkbox':
              return getCheckboxValue(input);

            case 'radio':
              return getRadioValue(input);

            case 'file':
              return getFileValue(input);

            default:
              return innerParams.inputAutoTrim ? input.value.trim() : input.value;
          }
        };

        var getCheckboxValue = function getCheckboxValue(input) {
          return input.checked ? 1 : 0;
        };

        var getRadioValue = function getRadioValue(input) {
          return input.checked ? input.value : null;
        };

        var getFileValue = function getFileValue(input) {
          return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
        };

        var handleInputOptions = function handleInputOptions(instance, params) {
          var popup = getPopup();

          var processInputOptions = function processInputOptions(inputOptions) {
            return populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
          };

          if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then(function (inputOptions) {
              instance.hideLoading();
              processInputOptions(inputOptions);
            });
          } else if (typeof params.inputOptions === 'object') {
            processInputOptions(params.inputOptions);
          } else {
            error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
          }
        };

        var handleInputValue = function handleInputValue(instance, params) {
          var input = instance.getInput();
          hide(input);
          asPromise(params.inputValue).then(function (inputValue) {
            input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
          })["catch"](function (err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = '';
            show(input);
            input.focus();
            instance.hideLoading();
          });
        };

        var populateInputOptions = {
          select: function select(popup, inputOptions, params) {
            var select = getChildByClass(popup, swalClasses.select);

            var renderOption = function renderOption(parent, optionLabel, optionValue) {
              var option = document.createElement('option');
              option.value = optionValue;
              setInnerHtml(option, optionLabel);
              option.selected = isSelected(optionValue, params.inputValue);
              parent.appendChild(option);
            };

            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1]; // <optgroup> spec:
              // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
              // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
              // check whether this is a <optgroup>

              if (Array.isArray(optionLabel)) {
                // if it is an array, then it is an <optgroup>
                var optgroup = document.createElement('optgroup');
                optgroup.label = optionValue;
                optgroup.disabled = false; // not configurable for now

                select.appendChild(optgroup);
                optionLabel.forEach(function (o) {
                  return renderOption(optgroup, o[1], o[0]);
                });
              } else {
                // case of <option>
                renderOption(select, optionLabel, optionValue);
              }
            });
            select.focus();
          },
          radio: function radio(popup, inputOptions, params) {
            var radio = getChildByClass(popup, swalClasses.radio);
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (isSelected(radioValue, params.inputValue)) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              setInnerHtml(label, radioLabel);
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          }
        };
        /**
         * Converts `inputOptions` into an array of `[value, label]`s
         * @param inputOptions
         */

        var formatInputOptions = function formatInputOptions(inputOptions) {
          var result = [];

          if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
            inputOptions.forEach(function (value, key) {
              var valueFormatted = value;

              if (typeof valueFormatted === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          } else {
            Object.keys(inputOptions).forEach(function (key) {
              var valueFormatted = inputOptions[key];

              if (typeof valueFormatted === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          }

          return result;
        };

        var isSelected = function isSelected(optionValue, inputValue) {
          return inputValue && inputValue.toString() === optionValue.toString();
        };

        var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
          instance.disableButtons();

          if (innerParams.input) {
            handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
          } else {
            confirm(instance, innerParams, true);
          }
        };

        var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
          instance.disableButtons();

          if (innerParams.returnInputValueOnDeny) {
            handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
          } else {
            deny(instance, innerParams, false);
          }
        };

        var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
          instance.disableButtons();
          dismissWith(DismissReason.cancel);
        };

        var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
        /* type is either 'confirm' or 'deny' */
        ) {
          var inputValue = getInputValue(instance, innerParams);

          if (innerParams.inputValidator) {
            handleInputValidator(instance, innerParams, inputValue, type);
          } else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
          } else if (type === 'deny') {
            deny(instance, innerParams, inputValue);
          } else {
            confirm(instance, innerParams, inputValue);
          }
        };

        var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue, type
        /* type is either 'confirm' or 'deny' */
        ) {
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function () {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
          });
          validationPromise.then(function (validationMessage) {
            instance.enableButtons();
            instance.enableInput();

            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else if (type === 'deny') {
              deny(instance, innerParams, inputValue);
            } else {
              confirm(instance, innerParams, inputValue);
            }
          });
        };

        var deny = function deny(instance, innerParams, value) {
          if (innerParams.showLoaderOnDeny) {
            showLoading(getDenyButton());
          }

          if (innerParams.preDeny) {
            var preDenyPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function (preDenyValue) {
              if (preDenyValue === false) {
                instance.hideLoading();
              } else {
                instance.closePopup({
                  isDenied: true,
                  value: typeof preDenyValue === 'undefined' ? value : preDenyValue
                });
              }
            });
          } else {
            instance.closePopup({
              isDenied: true,
              value: value
            });
          }
        };

        var succeedWith = function succeedWith(instance, value) {
          instance.closePopup({
            isConfirmed: true,
            value: value
          });
        };

        var confirm = function confirm(instance, innerParams, value) {
          if (innerParams.showLoaderOnConfirm) {
            showLoading(); // TODO: make showLoading an *instance* method
          }

          if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            var preConfirmPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function (preConfirmValue) {
              if (isVisible(getValidationMessage()) || preConfirmValue === false) {
                instance.hideLoading();
              } else {
                succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
              }
            });
          } else {
            succeedWith(instance, value);
          }
        };

        var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
          if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          if (!innerParams.toast) {
            globalState.keydownHandler = function (e) {
              return keydownHandler(instance, e, dismissWith);
            };

            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
          }
        }; // Focus handling


        var setFocus = function setFocus(innerParams, index, increment) {
          var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

          if (focusableElements.length) {
            index = index + increment; // rollover to first item

            if (index === focusableElements.length) {
              index = 0; // go to last item
            } else if (index === -1) {
              index = focusableElements.length - 1;
            }

            return focusableElements[index].focus();
          } // no visible focusable elements, focus the popup


          getPopup().focus();
        };

        var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
        var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

        var keydownHandler = function keydownHandler(instance, e, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (!innerParams) {
            return; // This instance has already been destroyed
          }

          if (innerParams.stopKeydownPropagation) {
            e.stopPropagation();
          } // ENTER


          if (e.key === 'Enter') {
            handleEnter(instance, e, innerParams); // TAB
          } else if (e.key === 'Tab') {
            handleTab(e, innerParams); // ARROWS - switch focus between buttons
          } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(e.key)) {
            handleArrows(e.key); // ESC
          } else if (e.key === 'Escape') {
            handleEsc(e, innerParams, dismissWith);
          }
        };

        var handleEnter = function handleEnter(instance, e, innerParams) {
          // #720 #721
          if (e.isComposing) {
            return;
          }

          if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
            if (['textarea', 'file'].includes(innerParams.input)) {
              return; // do not submit
            }

            clickConfirm();
            e.preventDefault();
          }
        };

        var handleTab = function handleTab(e, innerParams) {
          var targetElement = e.target;
          var focusableElements = getFocusableElements();
          var btnIndex = -1;

          for (var i = 0; i < focusableElements.length; i++) {
            if (targetElement === focusableElements[i]) {
              btnIndex = i;
              break;
            }
          }

          if (!e.shiftKey) {
            // Cycle to the next button
            setFocus(innerParams, btnIndex, 1);
          } else {
            // Cycle to the prev button
            setFocus(innerParams, btnIndex, -1);
          }

          e.stopPropagation();
          e.preventDefault();
        };

        var handleArrows = function handleArrows(key) {
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();

          if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
            return;
          }

          var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
          var buttonToFocus = document.activeElement[sibling];

          if (buttonToFocus) {
            buttonToFocus.focus();
          }
        };

        var handleEsc = function handleEsc(e, innerParams, dismissWith) {
          if (callIfFunction(innerParams.allowEscapeKey)) {
            e.preventDefault();
            dismissWith(DismissReason.esc);
          }
        };

        var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.toast) {
            handleToastClick(instance, domCache, dismissWith);
          } else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
          }
        };

        var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
          // Closing toast by internal click
          domCache.popup.onclick = function () {
            var innerParams = privateProps.innerParams.get(instance);

            if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
              return;
            }

            dismissWith(DismissReason.close);
          };
        };

        var ignoreOutsideClick = false;

        var handleModalMousedown = function handleModalMousedown(domCache) {
          domCache.popup.onmousedown = function () {
            domCache.container.onmouseup = function (e) {
              domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
              // have any other direct children aside of the popup

              if (e.target === domCache.container) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleContainerMousedown = function handleContainerMousedown(domCache) {
          domCache.container.onmousedown = function () {
            domCache.popup.onmouseup = function (e) {
              domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

              if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
          domCache.container.onclick = function (e) {
            var innerParams = privateProps.innerParams.get(instance);

            if (ignoreOutsideClick) {
              ignoreOutsideClick = false;
              return;
            }

            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
              dismissWith(DismissReason.backdrop);
            }
          };
        };

        function _main(userParams) {
          var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          showWarningsForParams(Object.assign({}, mixinParams, userParams));

          if (globalState.currentInstance) {
            globalState.currentInstance._destroy();
          }

          globalState.currentInstance = this;
          var innerParams = prepareParams(userParams, mixinParams);
          setParameters(innerParams);
          Object.freeze(innerParams); // clear the previous timer

          if (globalState.timeout) {
            globalState.timeout.stop();
            delete globalState.timeout;
          } // clear the restore focus timeout


          clearTimeout(globalState.restoreFocusTimeout);
          var domCache = populateDomCache(this);
          render(this, innerParams);
          privateProps.innerParams.set(this, innerParams);
          return swalPromise(this, domCache, innerParams);
        }

        var prepareParams = function prepareParams(userParams, mixinParams) {
          var templateParams = getTemplateParams(userParams);
          var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

          params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
          params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
          return params;
        };

        var swalPromise = function swalPromise(instance, domCache, innerParams) {
          return new Promise(function (resolve) {
            // functions to handle all closings/dismissals
            var dismissWith = function dismissWith(dismiss) {
              instance.closePopup({
                isDismissed: true,
                dismiss: dismiss
              });
            };

            privateMethods.swalPromiseResolve.set(instance, resolve);

            domCache.confirmButton.onclick = function () {
              return handleConfirmButtonClick(instance, innerParams);
            };

            domCache.denyButton.onclick = function () {
              return handleDenyButtonClick(instance, innerParams);
            };

            domCache.cancelButton.onclick = function () {
              return handleCancelButtonClick(instance, dismissWith);
            };

            domCache.closeButton.onclick = function () {
              return dismissWith(DismissReason.close);
            };

            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

            setTimeout(function () {
              domCache.container.scrollTop = 0;
            });
          });
        };

        var populateDomCache = function populateDomCache(instance) {
          var domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
          };
          privateProps.domCache.set(instance, domCache);
          return domCache;
        };

        var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
          var timerProgressBar = getTimerProgressBar();
          hide(timerProgressBar);

          if (innerParams.timer) {
            globalState$$1.timeout = new Timer(function () {
              dismissWith('timer');
              delete globalState$$1.timeout;
            }, innerParams.timer);

            if (innerParams.timerProgressBar) {
              show(timerProgressBar);
              setTimeout(function () {
                if (globalState$$1.timeout && globalState$$1.timeout.running) {
                  // timer can be already stopped or unset at this point
                  animateTimerProgressBar(innerParams.timer);
                }
              });
            }
          }
        };

        var initFocus = function initFocus(domCache, innerParams) {
          if (innerParams.toast) {
            return;
          }

          if (!callIfFunction(innerParams.allowEnterKey)) {
            return blurActiveElement();
          }

          if (!focusButton(domCache, innerParams)) {
            setFocus(innerParams, -1, 1);
          }
        };

        var focusButton = function focusButton(domCache, innerParams) {
          if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
          }

          if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
          }

          if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
          }

          return false;
        };

        var blurActiveElement = function blurActiveElement() {
          if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur();
          }
        };
        /**
         * Updates popup parameters.
         */


        function update(params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(this);

          if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          }

          var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

          Object.keys(params).forEach(function (param) {
            if (Swal.isUpdatableParameter(param)) {
              validUpdatableParams[param] = params[param];
            } else {
              warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
            }
          });
          var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
          render(this, updatedParams);
          privateProps.innerParams.set(this, updatedParams);
          Object.defineProperties(this, {
            params: {
              value: Object.assign({}, this.params, params),
              writable: false,
              enumerable: true
            }
          });
        }

        function _destroy() {
          var domCache = privateProps.domCache.get(this);
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            return; // This instance has already been destroyed
          } // Check if there is another Swal closing


          if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          } // Check if there is a swal disposal defer timer


          if (globalState.deferDisposalTimer) {
            clearTimeout(globalState.deferDisposalTimer);
            delete globalState.deferDisposalTimer;
          }

          if (typeof innerParams.didDestroy === 'function') {
            innerParams.didDestroy();
          }

          disposeSwal(this);
        }

        var disposeSwal = function disposeSwal(instance) {
          // Unset this.params so GC will dispose it (#1569)
          delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

          delete globalState.keydownHandler;
          delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

          unsetWeakMaps(privateProps);
          unsetWeakMaps(privateMethods);
        };

        var unsetWeakMaps = function unsetWeakMaps(obj) {
          for (var i in obj) {
            obj[i] = new WeakMap();
          }
        };

        var instanceMethods = /*#__PURE__*/Object.freeze({
          hideLoading: hideLoading,
          disableLoading: hideLoading,
          getInput: getInput$1,
          close: close,
          closePopup: close,
          closeModal: close,
          closeToast: close,
          enableButtons: enableButtons,
          disableButtons: disableButtons,
          enableInput: enableInput,
          disableInput: disableInput,
          showValidationMessage: showValidationMessage,
          resetValidationMessage: resetValidationMessage$1,
          getProgressSteps: getProgressSteps$1,
          _main: _main,
          update: update,
          _destroy: _destroy
        });
        var currentInstance;

        var SweetAlert = /*#__PURE__*/function () {
          function SweetAlert() {
            _classCallCheck(this, SweetAlert);

            // Prevent run in Node env
            if (typeof window === 'undefined') {
              return;
            }

            currentInstance = this;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            Object.defineProperties(this, {
              params: {
                value: outerParams,
                writable: false,
                enumerable: true,
                configurable: true
              }
            });

            var promise = this._main(this.params);

            privateProps.promise.set(this, promise);
          } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


          _createClass(SweetAlert, [{
            key: "then",
            value: function then(onFulfilled) {
              var promise = privateProps.promise.get(this);
              return promise.then(onFulfilled);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var promise = privateProps.promise.get(this);
              return promise["finally"](onFinally);
            }
          }]);

          return SweetAlert;
        }(); // Assign instance methods from src/instanceMethods/*.js to prototype


        Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

        Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

        Object.keys(instanceMethods).forEach(function (key) {
          SweetAlert[key] = function () {
            if (currentInstance) {
              var _currentInstance;

              return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
          };
        });
        SweetAlert.DismissReason = DismissReason;
        SweetAlert.version = '11.0.18';
        var Swal = SweetAlert;
        Swal["default"] = Swal;
        return Swal;
      });

      if (typeof this !== 'undefined' && this.Sweetalert2) {
        this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
      }

      "undefined" != typeof document && function (e, t) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
          n.innerHTML = t;
        } catch (e) {
          n.innerText = t;
        }
      }(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9;pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\" \"gap gap gap\";grid-template-rows:auto auto auto .625em;height:100%;padding:.625em .625em 0;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container::after{content:\"\";grid-column:1/4;grid-row:4;height:.625em}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");
      /***/
    },

    /***/
    91796:
    /*!***************************************************************!*\
      !*** ./src/app/advance-table/advance-table-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdvanceTableRoutingModule": function AdvanceTableRoutingModule() {
          return (
            /* binding */
            _AdvanceTableRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _advance_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./advance-table.component */
      66372);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _advance_table_component__WEBPACK_IMPORTED_MODULE_0__.AdvanceTableComponent
      }];

      var _AdvanceTableRoutingModule = function _AdvanceTableRoutingModule() {
        _classCallCheck(this, _AdvanceTableRoutingModule);
      };

      _AdvanceTableRoutingModule.ɵfac = function AdvanceTableRoutingModule_Factory(t) {
        return new (t || _AdvanceTableRoutingModule)();
      };

      _AdvanceTableRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AdvanceTableRoutingModule
      });
      _AdvanceTableRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AdvanceTableRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    66372:
    /*!**********************************************************!*\
      !*** ./src/app/advance-table/advance-table.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdvanceTableComponent": function AdvanceTableComponent() {
          return (
            /* binding */
            _AdvanceTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      49344);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function AdvanceTableComponent_ng_template_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r12 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", row_r12.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", row_r12.firstName, " ", row_r12.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r12.designation);
        }
      }

      function AdvanceTableComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r15 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r15.gender, " ");
        }
      }

      function AdvanceTableComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r16 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r16.phone, " ");
        }
      }

      function AdvanceTableComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r17 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r17.email, " ");
        }
      }

      function AdvanceTableComponent_ng_template_54_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r18.status, " ");
        }
      }

      function AdvanceTableComponent_ng_template_54_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r18.status, " ");
        }
      }

      function AdvanceTableComponent_ng_template_54_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r18.status, " ");
        }
      }

      function AdvanceTableComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdvanceTableComponent_ng_template_54_div_0_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdvanceTableComponent_ng_template_54_div_1_Template, 2, 1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdvanceTableComponent_ng_template_54_div_2_Template, 2, 1, "div", 47);
        }

        if (rf & 2) {
          var row_r18 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r18.status == "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r18.status == "Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r18.status == "Pending");
        }
      }

      function AdvanceTableComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var row_r25 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r25.address, " ");
        }
      }

      function AdvanceTableComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_58_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var row_r27 = restoredCtx.row;
            var rowIndex_r28 = restoredCtx.rowIndex;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);

            return ctx_r29.editRow(row_r27, rowIndex_r28, _r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_58_Template_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var row_r27 = restoredCtx.row;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r31.deleteSingleRow(row_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_59_small_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_59_small_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_59_small_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_59_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r40.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gender_r40.value, " ");
        }
      }

      function AdvanceTableComponent_ng_template_59_option_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var desig_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", desig_r41.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", desig_r41.value, " ");
        }
      }

      function AdvanceTableComponent_ng_template_59_small_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_59_option_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r42.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r42.value, " ");
        }
      }

      function AdvanceTableComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_59_Template_button_click_7_listener() {
            var modal_r32 = ctx.$implicit;
            return modal_r32.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdvanceTableComponent_ng_template_59_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r44.onAddRowSave(ctx_r44.register);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "First name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AdvanceTableComponent_ng_template_59_small_24_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Last name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AdvanceTableComponent_ng_template_59_small_30_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AdvanceTableComponent_ng_template_59_small_38_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "select", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AdvanceTableComponent_ng_template_59_option_47_Template, 2, 2, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Designation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AdvanceTableComponent_ng_template_59_option_56_Template, 2, 2, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, AdvanceTableComponent_ng_template_59_small_64_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "select", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, AdvanceTableComponent_ng_template_59_option_73_Template, 2, 2, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "textarea", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_59_Template_button_click_83_listener() {
            var modal_r32 = ctx.$implicit;
            return modal_r32.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r9.newUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r9.register);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.register.get("firstName").valid && ctx_r9.register.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.register.get("lastName").valid && ctx_r9.register.get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.register.get("phone").valid && ctx_r9.register.get("phone").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.genders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.designationType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.register.get("email").valid && ctx_r9.register.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.statusType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r9.register.valid);
        }
      }

      function AdvanceTableComponent_ng_template_61_small_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_61_small_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_61_small_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_61_option_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r55.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gender_r55.value, " ");
        }
      }

      function AdvanceTableComponent_ng_template_61_option_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var desig_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", desig_r56.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", desig_r56.value, " ");
        }
      }

      function AdvanceTableComponent_ng_template_61_small_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_ng_template_61_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r57.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r57.value, " ");
        }
      }

      function AdvanceTableComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_61_Template_button_click_7_listener() {
            var modal_r47 = ctx.$implicit;
            return modal_r47.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdvanceTableComponent_ng_template_61_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r59.onEditSave(ctx_r59.editForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "First name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AdvanceTableComponent_ng_template_61_small_22_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AdvanceTableComponent_ng_template_61_small_28_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AdvanceTableComponent_ng_template_61_small_36_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AdvanceTableComponent_ng_template_61_option_43_Template, 2, 2, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Designation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, AdvanceTableComponent_ng_template_61_option_52_Template, 2, 2, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, AdvanceTableComponent_ng_template_61_small_60_Template, 2, 0, "small", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "select", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AdvanceTableComponent_ng_template_61_option_69_Template, 2, 2, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "textarea", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_61_Template_button_click_79_listener() {
            var modal_r47 = ctx.$implicit;
            return modal_r47.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r11.selectedRowData == null ? null : ctx_r11.selectedRowData.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r11.selectedRowData == null ? null : ctx_r11.selectedRowData.firstName, " ", ctx_r11.selectedRowData == null ? null : ctx_r11.selectedRowData.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r11.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.editForm.get("firstName").valid && ctx_r11.editForm.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.editForm.get("lastName").valid && ctx_r11.editForm.get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.editForm.get("phone").valid && ctx_r11.editForm.get("phone").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.genders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.designationType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.editForm.get("email").valid && ctx_r11.editForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.statusType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r11.editForm.valid);
        }
      }

      var _AdvanceTableComponent = /*#__PURE__*/function () {
        function _AdvanceTableComponent(fb, modalService, toastr) {
          var _this44 = this;

          _classCallCheck(this, _AdvanceTableComponent);

          this.fb = fb;
          this.modalService = modalService;
          this.toastr = toastr;
          this.rows = [];
          this.scrollBarHorizontal = window.innerWidth < 1200;
          this.newUserImg = 'assets/images/users/user-2.png';
          this.data = [];
          this.filteredData = [];
          this.loadingIndicator = true;
          this.isRowSelected = false;
          this.reorderable = true;
          this.selected = [];
          this.columns = [{
            name: 'First Name'
          }, {
            name: 'Last Name'
          }, {
            name: 'Designation'
          }, {
            name: 'Gender'
          }, {
            name: 'Phone'
          }, {
            name: 'Email'
          }, {
            name: 'Status'
          }, {
            name: 'Address'
          }];
          this.genders = [{
            id: '1',
            value: 'male'
          }, {
            id: '2',
            value: 'female'
          }];
          this.statusType = [{
            id: '1',
            value: 'Active'
          }, {
            id: '2',
            value: 'Completed'
          }, {
            id: '3',
            value: 'Pending'
          }];
          this.designationType = [{
            id: '1',
            value: 'Manager'
          }, {
            id: '2',
            value: 'Team Leader'
          }, {
            id: '3',
            value: 'Clerk'
          }];
          this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl()
          });

          window.onresize = function () {
            _this44.scrollBarHorizontal = window.innerWidth < 1200;
          };
        } // select record using check box


        _createClass(_AdvanceTableComponent, [{
          key: "onSelect",
          value: function onSelect(_ref17) {
            var _this$selected4;

            var selected = _ref17.selected;
            this.selected.splice(0, this.selected.length);

            (_this$selected4 = this.selected).push.apply(_this$selected4, _toConsumableArray(selected));

            if (this.selected.length === 0) {
              this.isRowSelected = false;
            } else {
              this.isRowSelected = true;
            }
          }
        }, {
          key: "deleteSelected",
          value: function deleteSelected() {
            var _this45 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: 'Are you sure?',
              showCancelButton: true,
              confirmButtonColor: '#8963ff',
              cancelButtonColor: '#fb7823',
              confirmButtonText: 'Yes'
            }).then(function (result) {
              if (result.value) {
                _this45.selected.forEach(function (row) {
                  _this45.deleteRecord(row);
                });

                _this45.deleteRecordSuccess(_this45.selected.length);

                _this45.selected = [];
                _this45.isRowSelected = false;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this46 = this;

            this.fetch(function (data) {
              _this46.data = data;
              _this46.filteredData = data;
              setTimeout(function () {
                _this46.loadingIndicator = false;
              }, 500);
            });
            this.register = this.fb.group({
              id: [''],
              img: [''],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('[a-zA-Z]+')]],
              lastName: [''],
              designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
              gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)]],
              status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
              address: ['']
            });
          } // fetch data

        }, {
          key: "fetch",
          value: function fetch(cb) {
            var req = new XMLHttpRequest();
            req.open('GET', 'assets/data/adv-tbl-data.json');

            req.onload = function () {
              var data = JSON.parse(req.response);
              cb(data);
            };

            req.send();
          } // add new record

        }, {
          key: "addRow",
          value: function addRow(content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'lg'
            });
            this.register.patchValue({
              id: this.getId(10, 100),
              img: this.newUserImg
            });
          } // edit record

        }, {
          key: "editRow",
          value: function editRow(row, rowIndex, content) {
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'lg'
            });
            this.editForm.setValue({
              id: row.id,
              img: row.img,
              firstName: row.firstName,
              lastName: row.lastName,
              designation: row.designation,
              phone: row.phone,
              email: row.email,
              gender: row.gender,
              status: row.status,
              address: row.address
            });
            this.selectedRowData = row;
          } // delete single row

        }, {
          key: "deleteSingleRow",
          value: function deleteSingleRow(row) {
            var _this47 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: 'Are you sure?',
              showCancelButton: true,
              confirmButtonColor: '#8963ff',
              cancelButtonColor: '#fb7823',
              confirmButtonText: 'Yes'
            }).then(function (result) {
              if (result.value) {
                _this47.deleteRecord(row);

                _this47.deleteRecordSuccess(1);
              }
            });
          }
        }, {
          key: "deleteRecord",
          value: function deleteRecord(row) {
            this.data = this.arrayRemove(this.data, row.id);
          }
        }, {
          key: "arrayRemove",
          value: function arrayRemove(array, id) {
            return array.filter(function (element) {
              return element.id !== id;
            });
          } // save add new record

        }, {
          key: "onAddRowSave",
          value: function onAddRowSave(form) {
            this.data.push(form.value);
            this.data = _toConsumableArray(this.data);
            form.reset();
            this.modalService.dismissAll();
            this.addRecordSuccess();
          } // save record on edit

        }, {
          key: "onEditSave",
          value: function onEditSave(form) {
            var _this48 = this;

            this.data = this.data.filter(function (value, key) {
              if (value.id == form.value.id) {
                value.firstName = form.value.firstName;
                value.lastName = form.value.lastName;
                value.designation = form.value.designation;
                value.phone = form.value.phone;
                value.gender = form.value.gender;
                value.email = form.value.email;
                value.status = form.value.status;
                value.address = form.value.address;
              }

              _this48.modalService.dismissAll();

              return true;
            });
            this.editRecordSuccess();
          } // filter table data

        }, {
          key: "filterDatatable",
          value: function filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table

            var colsAmt = this.columns.length; // get the key names of each column in the dataset

            var keys = Object.keys(this.filteredData[0]); // assign filtered matches to the active datatable

            this.data = this.filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  // found match, return true to add to result set
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          } // get random id

        }, {
          key: "getId",
          value: function getId(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }, {
          key: "addRecordSuccess",
          value: function addRecordSuccess() {
            this.toastr.success('Add Record Successfully', '');
          }
        }, {
          key: "editRecordSuccess",
          value: function editRecordSuccess() {
            this.toastr.success('Edit Record Successfully', '');
          }
        }, {
          key: "deleteRecordSuccess",
          value: function deleteRecordSuccess(count) {
            this.toastr.error(count + ' Records Deleted Successfully', '');
          }
        }]);

        return _AdvanceTableComponent;
      }();

      _AdvanceTableComponent.ɵfac = function AdvanceTableComponent_Factory(t) {
        return new (t || _AdvanceTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
      };

      _AdvanceTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AdvanceTableComponent,
        selectors: [["app-advance-table"]],
        viewQuery: function AdvanceTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService])],
        decls: 63,
        vars: 20,
        consts: [[1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home", "font-17"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-lg-3", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-5", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "col-lg-4", "p-0"], [1, "header-buttons-left"], [1, "icon-button-demo", "buttons"], [1, "btn", "btn-icon", "icon-left", "btn-primary", "rounded-button", 3, "click"], [1, "material-icons"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "hidden", "click"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType", "select"], ["table", ""], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Name", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Gender", 3, "width"], ["name", "Phone"], ["name", "Email"], ["name", "Status"], ["name", "Address"], ["name", "Actions", "sortable", "false", 3, "width"], ["addRecord", ""], ["editRecord", ""], [1, "data-table-img", 3, "src"], [1, "name-col-style"], [1, "font-12", "text-muted"], ["class", "badge-outline col-green", 4, "ngIf"], ["class", "badge-outline col-red", 4, "ngIf"], ["class", "badge-outline col-indigo", 4, "ngIf"], [1, "badge-outline", "col-green"], [1, "badge-outline", "col-red"], [1, "badge-outline", "col-indigo"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["formControlName", "img", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "First name", "formControlName", "firstName", "required", "", 1, "form-control"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "placeholder", "Last name", "formControlName", "lastName", 1, "form-control"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["type", "number", "placeholder", "Phone", "formControlName", "phone", "required", "", 1, "form-control"], ["formControlName", "gender", "required", "", 1, "form-control"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "designation", "required", "", 1, "form-control"], ["type", "email", "placeholder", "Email", "formControlName", "email", "required", "", 1, "form-control"], ["formControlName", "status", "required", "", 1, "form-control"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["type", "textarea", "placeholder", "Address", "formControlName", "address", 1, "form-control"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "form-text", "text-danger"], [3, "value"], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Phone", "formControlName", "phone", "required", "", 1, "form-control"]],
        template: function AdvanceTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Advance Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdvanceTableComponent_Template_input_keyup_31_listener($event) {
              return ctx.filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_Template_button_click_36_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);

              return ctx.addRow(_r8);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdvanceTableComponent_Template_button_click_39_listener() {
              return ctx.deleteSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ngx-datatable", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function AdvanceTableComponent_Template_ngx_datatable_select_42_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ngx-datatable-column", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ngx-datatable-column", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AdvanceTableComponent_ng_template_46_Template, 6, 4, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ngx-datatable-column", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AdvanceTableComponent_ng_template_48_Template, 1, 1, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ngx-datatable-column", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AdvanceTableComponent_ng_template_50_Template, 1, 1, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ngx-datatable-column", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, AdvanceTableComponent_ng_template_52_Template, 1, 1, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ngx-datatable-column", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AdvanceTableComponent_ng_template_54_Template, 3, 3, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ngx-datatable-column", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AdvanceTableComponent_ng_template_56_Template, 1, 1, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ngx-datatable-column", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, AdvanceTableComponent_ng_template_58_Template, 5, 0, "ng-template", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, AdvanceTableComponent_ng_template_59_Template, 85, 10, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AdvanceTableComponent_ng_template_61_Template, 81, 12, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isRowSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", "checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZhbmNlLXRhYmxlLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /***/
    },

    /***/
    43813:
    /*!*******************************************************!*\
      !*** ./src/app/advance-table/advance-table.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdvanceTableModule": function AdvanceTableModule() {
          return (
            /* binding */
            _AdvanceTableModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _advance_table_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./advance-table-routing.module */
      91796);
      /* harmony import */


      var _advance_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./advance-table.component */
      66372);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      49344);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AdvanceTableModule = function _AdvanceTableModule() {
        _classCallCheck(this, _AdvanceTableModule);
      };

      _AdvanceTableModule.ɵfac = function AdvanceTableModule_Factory(t) {
        return new (t || _AdvanceTableModule)();
      };

      _AdvanceTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AdvanceTableModule
      });
      _AdvanceTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _advance_table_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceTableRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AdvanceTableModule, {
          declarations: [_advance_table_component__WEBPACK_IMPORTED_MODULE_1__.AdvanceTableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _advance_table_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceTableRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_advance-table_advance-table_module_ts-es5.js.map