// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {

    state = {
        errors: [], 
        user: null, 
        settings: { bitrate: 8, 
                    video: { resolution: '1080p' } 
                } 
    }

    handleBitrateClick = () => {
        console.log(this.state.settings.bitrate)
        this.state.settings.bitrate = 12
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: this.state.settings.bitrate
            }
        })
        console.log(this.state.settings.bitrate)
    }

    handleResClick = () => {
        console.log(this.state.settings.video.resolution)
        this.state.settings.video.resolution = '720p'
        this.setState({
            settings: {
                ...this.state.settings,
                video: { resolution: this.state.settings.video.resolution }
            }
        })
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
                <button className="resolution" onClick={this.handleResClick}>Resolution</button> 
            </div>
        )
    }
}

export default YouTubeDebugger