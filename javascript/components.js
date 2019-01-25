class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { overFlowing: false };
    }

    render() {
        return (
        <div className="toolbar">
            <button className="leftBtn"></button>
            <button className="rightBtn"></button>
        </div>
        );
    }

    

}

ReactDOM.render(<ToolBar />, document.getElementById("emoji-toolbar"));
