import React, { Component } from "react";
import { Canvas } from "./Canvas";
import { ToolBar } from "./ToolBar";

const inv = {
    heads: [
        { id: 1, src: "/images/blank_face.png", alt: "" },
        { id: 2, src: "/images/blank_face.png", alt: "" },
        { id: 3, src: "/images/blank_face.png", alt: "" }
    ]
};
class App extends Component {
    constructor(props){
        super(props);
        this.state = {tab: "head", selected: 0};
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    render() {
        return (
            <div className="App">
                <Canvas />
                <ToolBar emojis={inv} toggleSelected={this.toggleSelected} selected={this.state.selected}/>
            </div>
        );
    }

    toggleSelected(id) {
        this.setState({selected: id});
    }
}

export default App;
