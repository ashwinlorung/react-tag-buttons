# react-tag-button

`TagButtons` is a simple uncontrolled react component that has a list of tags which toggles between selected and deselected state. By default, basic styles are applied, but can be overridden depending on your design requirements.

## Demo
A Demo is available [here](http://ashwinrai.com/work/TagButtons/TagButtonsDemo.html).

## Installation

1. Install `react-tag-buttons` using npm. `npm install react-tag-buttons`
2. Import `react-input-range` to use `TagButtons` component.
3. Optionally, import `react-tag-buttons/lib/css/styles.css` if you want to apply the default styling.

## Usage

Basic implementation:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import TagButtons from 'react-tag-buttons';


const tagsList = [
    {id:1, text:"Apple"},
    {id:2, text:"Ball"},
    {id:3, text:"Cat"},
    {id:4, text:"Dog"},
    {id:5, text:"Engineer"}
];

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDataSource: []
        };
    }

    onTagClick = (currSelectedState, id, text) => {
        let {selectedDataSource} = this.state;
        if(!currSelectedState){
            selectedDataSource.push({id:id, text:text});
        }else{
            selectedDataSource = selectedDataSource.filter((item)=>{return item.id !== id});
        }
        this.setState({
            selectedDataSource: selectedDataSource
        });
    };

    render() {
        const {selectedDataSource} = this.state;

        return (
            <div>
                <TagButtons
                    dataSource={tagsList}
                    selectedDataSource={selectedDataSource}
                    onTagClick={this.onTagClick}
                />
                <div>
                    <h4>Selected Tags</h4>
                    <div>
                        {selectedDataSource.map((item)=>{return <p>{item.text}</p>})}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```


## API

### TagButtons#props

#### dataSource: array

List of objects which is to be displayed as tags.
e.g 
```
dataSource = [{
  ssn : 123456789,
  name: "Ashwin"
}]
```

#### dataSourceConfig: object

This is the configuration for our item in dataSource. It is an object which takes three properties: 

##### id :- that property of item object in our dataSource which has the unique id

##### text :- that property of the item object in our dataSource which has the text

##### view :- that property of the item object in our dataSource which has the jsx to be rendered

e.g
``` 
dataSourceConfig = {
  id: "ssn",
  text: "name"
}
```
custom view e.g 
``` 
dataSource = [{
  ssn : 123456789,
  name: "Ashwin",
  display: <div><p>Ashwin</p></div>
}]

dataSourceConfig = {
  id: "ssn",
  text: "name",
  view: "display"
}
```

#### onTagClick: function

Called everytime a tag is clicked.

#### classPrefix: string

Adds a prefix to the all the classes, default is "selectable"

## Future scope

#### I have plans to introduce more configurations and options and also add in diffent types of styles for tags and list
