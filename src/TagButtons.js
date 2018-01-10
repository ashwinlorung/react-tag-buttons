/***
 * @Authors:
 *      Ashwin Rai (ashwinrai.com)
 *      Nikhil Chougule
 ***/

/*** Imports ***/

/* Library imports */
import React, {cloneElement, Component} from 'react';
import {PropTypes} from "prop-types";

/* Component imports */
import Tag from "./Tag";

/* Style imports */
import "./styles.css";
/*** End Imports ***/

class TagButtons extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const {
                dataSource,
                dataSourceConfig,
                selectedDataSource,
                onTagClick
            } = this.props
        ;
        return (
            <div className={"selectable-tags-list"}>
                {
                    dataSource.map((item, index)=>{
                        let child;
                        if(item[dataSourceConfig.view]){
                            child = item[dataSourceConfig.view];
                        }else{
                            child = <Tag key={index} id={item[dataSourceConfig.id]} text={item[dataSourceConfig.text]}/>;
                        }
                        const childProps = {
                            index: index,
                            onClick: onTagClick,
                            isSelected: !!(selectedDataSource.find((selectedItem)=>{return (item[dataSourceConfig.id] === selectedItem[dataSourceConfig.id]);})),
                            ...child.props
                        };
                        return cloneElement(child, childProps);
                    })
                }
            </div>
        );
    }
}

TagButtons.PropTypes = {
    dataSource: PropTypes.array.isRequired,
    dataSourceConfig: PropTypes.object,
    selectedDataSource: PropTypes.array,
    onTagClick: PropTypes.func
};

TagButtons.defaultProps = {
    dataSource: [],
    dataSourceConfig: {id: "id", text: "text", view: "view"},
    selectedDataSource: []
};

export default TagButtons;
