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
                    {this.props.emojis.heads.map(emoji => (
                        <EmojiPart id={emoji.id} 
                        selected={this.props.selected} 
                        onClick={()=> this.props.toggleSelected(emoji.id)}/>))
                    }
                </div>
            </div>
        );
    }

    


}
