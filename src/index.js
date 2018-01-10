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



ReactDom.render(
    <TagButtons
        dataSource={tagsList}
        selectedDataSource={[{id:2}]}
    />,
    document.getElementById("root")
);