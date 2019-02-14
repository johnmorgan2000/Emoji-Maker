import React from "react";
import "../css/toolbar.css";
import EmojiPart from "./EmojiPart";

export class ToolBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="toolbar">
                <div className="parts">
                    {this.props.emojis.map((emoji, key) => (
                        <EmojiPart 
                        key={key}
                        id={emoji.id} 
                        selected={this.props.selected}
                        src={emoji.src}
                        onClick={()=> this.props.toggleSelected(emoji.id,emoji.src, this.props.part)}/>))
                    }
                </div>
            </div>
        );
    }

    


}
