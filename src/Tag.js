/***
 * @Authors:
 *      Ashwin Rai (ashwinrai.com)
 *      Nikhil Chougule
 ***/

/*** Imports ***/

/* Library imports */
import React from 'react';
import {PropTypes} from "prop-types";

/* Component imports */

/* Style imports */

/*** End Imports ***/


const Tag = (props) => {

    const onClick = () => {
        props.onClick(props.isSelected, props.id, props.text)
    };

    const wrprClass = "selectable-tag" + ((props.isSelected)?" selected":'');
    return (
        <div className={wrprClass} onClick={onClick} key={props.id}>
            <span className="selectable-tag-content">{props.text}</span>
        </div>
    );
};

Tag.propTypes = {
    id : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func,
    isSelected: PropTypes.bool
};

Tag.defaultProps = {

};

export default Tag;