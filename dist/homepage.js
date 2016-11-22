'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clicker = function (_React$Component) {
  (0, _inherits3.default)(Clicker, _React$Component);

  function Clicker() {
    (0, _classCallCheck3.default)(this, Clicker);
    return (0, _possibleConstructorReturn3.default)(this, (Clicker.__proto__ || (0, _getPrototypeOf2.default)(Clicker)).apply(this, arguments));
  }

  (0, _createClass3.default)(Clicker, [{
    key: 'render',
    value: function render() {
      var styles = { color: 'red', width: '100vw', height: '150vh' };
      return _react2.default.createElement(
        'div',
        null,
        'Yayyyyy!'
      );
    }
  }]);
  return Clicker;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Clicker, null), document.getElementById('react-container'));