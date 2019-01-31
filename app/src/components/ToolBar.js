import React from "react";
import "../css/toolbar.css";
import EmojiPart from "./EmojiPart";

export class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="toolbar">
                <button className="leftBtn">L</button>
                <div className="parts">
                    {this.props.emojis.map(emoji => (
                        <EmojiPart />
                    ))}
                </div>
                <button className="rightBtn">R</button>
            </div>
        );
    }
}
