import React from "react";

class Errorboundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasError === true) {
            return <div className="f1">OOOOPs Error</div>
        } else {
            return <>{this.props.children}</>
        }
    }
}
export default Errorboundary;