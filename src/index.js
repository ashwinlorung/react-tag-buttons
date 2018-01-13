import React from "react";
import ReactDom from "react-dom";
import TagButtons from "./TagButtons";

const tagsList = [
    {id:1, text:"Ashwin"},
    {id:2, text:"Rai"},
    {id:3, text:"Front"},
    {id:4, text:"End"},
    {id:5, text:"Engineer"}
];

function onTagClick (currSelectedState, id, text) {
    alert("tag clicked " + currSelectedState + id + text);
}

ReactDom.render(
    <TagButtons
        dataSource={tagsList}
        selectedDataSource={[{id:2}, {id:4}]}
        onTagClick={onTagClick}
    />,
    document.getElementById("root")
);