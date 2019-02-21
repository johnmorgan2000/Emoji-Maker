import React, { Component } from "react";
import { Canvas } from "./Canvas";
import { ToolBar } from "./ToolBar";

const heads = [
        { id: 1, src: "/images/head1.png", alt: "" },
        { id: 2, src: "/images/head2.png", alt: "" },
        { id: 3, src: "/images/head3.png", alt: "" },
        { id: 4, src: "/images/head4.png", alt: "" },
        { id: 5, src: "/images/head5.png", alt: "" }
    ];

const eyes = [
        { id: 1, src: "/images/eyes1.png", alt: "" },
        { id: 2, src: "/images/eyes2.png", alt: "" },
        { id: 3, src: "/images/eyes3.png", alt: "" },
        { id: 4, src: "/images/eyes4.png", alt: "" }
    ];

const mouths = [
    { id: 1, src: "/images/mouth1.png", alt: "" },
    { id: 2, src: "/images/mouth2.png", alt: "" },
    { id: 3, src: "/images/mouth3.png", alt: "" }
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
        this.randomize = this.randomize.bind(this);
    }

    render() {
        return (
            <div className="App">
                
                <Canvas 
                headSrc={this.state.headSrc} 
                eyesSrc={this.state.eyesSrc}
                mouthSrc={this.state.mouthSrc}
                />

                <div className="buttonContainer">
                    <button className="randomBtn" onClick={this.randomize}>Randomize</button>
                </div>
                

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

    randomize(){
        var headId = randomNumberGenerator(1, heads.length);
        var eyesId = randomNumberGenerator(1, eyes.length);
        var mouthId = randomNumberGenerator(1, mouths.length);

        var headSource = getSourceById(headId, heads);
        var mouthSource = getSourceById(mouthId, mouths);
        var eyesSource = getSourceById(eyesId, eyes);

        console.log(headId);

        this.setState({
            selectedHead: headId,
            headSrc: headSource,
            selectedEyes: eyesId,
            eyesSrc: eyesSource,
            selectedMouth: mouthId,
            mouthSrc: mouthSource
        })

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

function getSourceById(id, list){
    for (var i of list){
        if (i.id === id){
            return i.src
        }
    }
}

function randomNumberGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default App;
