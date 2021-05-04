import { Component } from 'react';
import VideoService from './VideoService';


class VideoPlayer extends Component {
    // state = {
    //     videos: [

    //     ]
    // }

    
    render () {
        return (
            // console.log(this.props.name),
            <div class='video-container'>
                <div class='box'>
                    <div class='video-player'>
                        <VideoService name={this.props.name}/>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default VideoPlayer;