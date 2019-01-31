// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component{

    constructor(props){
        super(props);
        this.state = {
            timesClicked: 0
        }
    }

    handleOnClick = () => {
        this.setState({timesClicked: this.state.timesClicked + 1})
    }

    render(){
        return(
            <button onClick={this.handleOnClick}><span>{this.state.timesClicked}</span></button>
        )
    }
}

export default DigitalClicker;