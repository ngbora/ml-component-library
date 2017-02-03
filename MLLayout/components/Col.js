'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Col;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _flexboxGrid = require('../flexboxGrid.css');

var _flexboxGrid2 = _interopRequireDefault(_flexboxGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModificatorType = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]);

var propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: _react.PropTypes.number,
  smOffset: _react.PropTypes.number,
  mdOffset: _react.PropTypes.number,
  lgOffset: _react.PropTypes.number,
  reverse: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function getClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.reverse) {
    extraClasses.push(_flexboxGrid2.default.reverse);
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return _flexboxGrid2.default[Number.isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]];
  }).concat(extraClasses).join(' ');
}

function Col(props) {
  var className = getClassNames(props);

  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, className));
}

Col.propTypes = propTypes;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ModificatorType, 'ModificatorType', 'src/MLLayout/components/Col.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/MLLayout/components/Col.js');

  __REACT_HOT_LOADER__.register(classMap, 'classMap', 'src/MLLayout/components/Col.js');

  __REACT_HOT_LOADER__.register(getClassNames, 'getClassNames', 'src/MLLayout/components/Col.js');

  __REACT_HOT_LOADER__.register(Col, 'Col', 'src/MLLayout/components/Col.js');
}();

;