import React, { Component } from "react";
import { ToolBar } from "./ToolBar";

const inv = {
    heads: [
        {id: 1, src: "/images/blank_face.png", alt: "" },
        {id: 2, src: "/images/blank_face.png", alt: "" },
        {id: 3, src: "/images/blank_face.png", alt: "" }
    ]
};
class App extends Component {
    render() {
        return (
            <div className="App">
                <ToolBar emojis={inv} />
            </div>
        );
    }
}

export default App;
