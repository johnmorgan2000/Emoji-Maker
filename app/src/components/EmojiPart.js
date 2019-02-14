import React, { Component } from "react";
import "../css/emoji-part.css";

export class EmojiPart extends Component {

    render() {
        var className;
        if (this.props.selected === this.props.id) {
            className = "emoji-part active";
        } else {
            className = "emoji-part";
        }

        return (
            <div className={className} onClick={this.props.onClick}>
                <img src={this.props.src}/>
            </div>
        );
    }

}

export default EmojiPart;
