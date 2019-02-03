import React from "react";
import "../css/toolbar.css";
import EmojiPart from "./EmojiPart";

export class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tab: "head", selected: 0};
        this.toggleSelected = this.toggleSelected.bind(this);

    }

    render() {
        return (
            <div className="toolbar">
                <div className="parts">
                    {this.props.emojis.heads.map(emoji => (
                        <EmojiPart id={emoji.id} 
                        selected={this.state.selected} 
                        onClick={()=> this.toggleSelected(emoji.id)}/>))
                    }
                </div>
            </div>
        );
    }

    toggleSelected(id) {
        this.setState({selected: id});
    }


}
