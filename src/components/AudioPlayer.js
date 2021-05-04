import { Component } from 'react';
// import AudioService from './AudioService';

class AudioPlayer extends Component {
    
    render () {
        return (
            <div class='audio-player'>
                <audio controls preload="auto" class="audio_volume_only">
                    <source src='http://live.jazz.fm:8000/stream?type=http&nocache=1205' type="audio/mpeg" />
                    This text displays if the audio tag isn't supported.
                </audio>
                <div>
                    {/* <AudioService name={''}/> */}
                </div>
            </div>
        )
        
    }
}

export default AudioPlayer;