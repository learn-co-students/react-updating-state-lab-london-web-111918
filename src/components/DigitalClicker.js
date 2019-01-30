// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }
    
    handleClick = () => {
        this.state.timesClicked += 1
        this.setState({
            timesClicked: this.state.timesClicked
        })
    }

    render(){
        return(
        <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
        )
    }
}

export default DigitalClicker