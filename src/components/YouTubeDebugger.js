import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    handleClickBitrate = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }

    handleClickRes = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video, resolution: '720p' }
        }
      })
    }

    render () {
      return (
        <div>
          <button className='bitrate' onClick={this.handleClickBitrate}>Update Bitrate to 12bit</button>
          <button className='resolution' onClick={this.handleClickRes}>Update Resolution to 720p</button>
        </div>

      )
    }
}

export default YouTubeDebugger
