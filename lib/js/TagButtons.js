"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _Tag = require("./Tag");

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /***
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Authors:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      Ashwin Rai (ashwinrai.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      Nikhil Chougule
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ***/

/*** Imports ***/

/* Library imports */


/* Component imports */


// /* Style imports */
// import "./styles.css";
/*** End Imports ***/

var TagButtons = function (_Component) {
    _inherits(TagButtons, _Component);

    function TagButtons(props) {
        _classCallCheck(this, TagButtons);

        return _possibleConstructorReturn(this, (TagButtons.__proto__ || Object.getPrototypeOf(TagButtons)).call(this, props));
    }

    _createClass(TagButtons, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                dataSource = _props.dataSource,
                dataSourceConfig = _props.dataSourceConfig,
                selectedDataSource = _props.selectedDataSource,
                onTagClick = _props.onTagClick,
                classPrefix = _props.classPrefix;

            return _react2.default.createElement(
                "div",
                { className: classPrefix + "-tags-list" },
                dataSource.map(function (item, index) {
                    var child = void 0;
                    if (item[dataSourceConfig.view]) {
                        child = item[dataSourceConfig.view];
                    } else {
                        child = _react2.default.createElement(_Tag2.default, { key: index, id: item[dataSourceConfig.id], text: item[dataSourceConfig.text] });
                    }
                    var childProps = _extends({
                        index: index,
                        onClick: onTagClick,
                        isSelected: !!selectedDataSource.find(function (selectedItem) {
                            return item[dataSourceConfig.id] === selectedItem[dataSourceConfig.id];
                        }),
                        classPrefix: classPrefix
                    }, child.props);
                    return (0, _react.cloneElement)(child, childProps);
                })
            );
        }
    }]);

    return TagButtons;
}(_react.Component);

TagButtons.propTypes = {
    dataSource: _propTypes.PropTypes.array.isRequired,
    dataSourceConfig: _propTypes.PropTypes.object,
    selectedDataSource: _propTypes.PropTypes.array,
    onTagClick: _propTypes.PropTypes.func,
    classPrefix: _propTypes.PropTypes.string
};

TagButtons.defaultProps = {
    dataSource: [],
    dataSourceConfig: { id: "id", text: "text", view: "view" },
    selectedDataSource: [],
    classPrefix: "selectable"
};

exports.default = TagButtons;