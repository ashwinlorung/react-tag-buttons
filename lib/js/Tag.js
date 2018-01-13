"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component imports */

/* Style imports */

/*** End Imports ***/

/***
 * @Authors:
 *      Ashwin Rai (ashwinrai.com)
 *      Nikhil Chougule
 ***/

/*** Imports ***/

/* Library imports */
var Tag = function Tag(props) {

    var onClick = function onClick() {
        props.onClick(props.isSelected, props.id, props.text);
    };

    var wrprClass = props.classPrefix + "-tag " + (props.isSelected ? " selected" : '');
    return _react2.default.createElement(
        "div",
        { className: wrprClass, onClick: onClick, key: props.id },
        _react2.default.createElement(
            "span",
            { className: props.classPrefix + "-tag-content" },
            props.text
        )
    );
};

Tag.propTypes = {
    id: _propTypes.PropTypes.number.isRequired,
    text: _propTypes.PropTypes.string.isRequired,
    onClick: _propTypes.PropTypes.func,
    isSelected: _propTypes.PropTypes.bool
};

Tag.defaultProps = {};

exports.default = Tag;