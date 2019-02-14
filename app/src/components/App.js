import React, { Component } from "react";
import { Canvas } from "./Canvas";
import { ToolBar } from "./ToolBar";

const heads = [
        { id: 1, src: "/images/yellow-circle.png", alt: "" },
        { id: 2, src: "/images/red-circle.png", alt: "" },
        { id: 3, src: "/images/blue-circle.png", alt: "" }
    ];

const eyes = [
        { id: 1, src: "/images/eyes1.png", alt: "" },
        { id: 2, src: "/images/eyes1.png", alt: "" },
        { id: 3, src: "/images/eyes1.png", alt: "" }
    ];

const mouths = [
    { id: 1, src: "/images/mouth1.png", alt: "" },
    { id: 2, src: "/images/mouth1.png", alt: "" },
    { id: 3, src: "/images/mouth1.png", alt: "" }
];   
class App extends Component {
    constructor(props){
        super(props);
        this.state = {selectedHead: 1, 
            headSrc: heads[0].src, 
            selectedEyes: 1, 
            eyesSrc: eyes[0].src, 
            selectedMouth: 1, 
            mouthSrc: mouths[0].src,
        };
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    render() {
        return (
            <div className="App">
                <Canvas 
                headSrc={this.state.headSrc} 
                eyesSrc={this.state.eyesSrc}
                mouthSrc={this.state.mouthSrc}
                />

                <ToolBar emojis={heads} 
                toggleSelected={this.toggleSelected} 
                selected={this.state.selectedHead}
                part="head"
                />
                <ToolBar emojis={eyes}
                toggleSelected={this.toggleSelected} 
                selected={this.state.selectedEyes}
                part="eyes"
                />
                <ToolBar emojis={mouths}
                toggleSelected={this.toggleSelected} 
                selected={this.state.selectedMouth}
                part="mouth"
                />
            </div>
        );
    }

    toggleSelected(id,src, part) {

        if (part === "head"){
            this.setState({selectedHead: id, headSrc: src });
        }else if (part === "eyes"){
            this.setState({selectedEyes: id, eyesSrc: src, });
        }else if (part === "mouth"){
            this.setState({selectedMouth: id, mouthSrc: src});
        }
        
    }
    
}

export default App;
