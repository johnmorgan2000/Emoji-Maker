import React from 'react';
import "../css/canvas.css";

export class Canvas extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="canvas">
                <img id="head" src={this.props.headSrc} />
                <img id="eyes" src={this.props.eyesSrc} />
                <img id="mouth" src={this.props.mouthSrc} />
            </div>
        )
    }
}
