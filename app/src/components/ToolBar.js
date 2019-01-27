import React from 'react';
import '../css/style.css';


export class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { overFlowing: false };
    }

    render() {
        return (
        <div className="toolbar">
            <button className="leftBtn">L</button>
            <button className="rightBtn">R</button>
        </div>
        );
    }
}

