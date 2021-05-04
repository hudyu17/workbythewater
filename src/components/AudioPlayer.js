import { Component } from 'react';
// import AudioService from './AudioService';

class AudioPlayer extends Component {
    
    render () {
        return (
            <div class='audio-player'>
                <audio controls preload="auto" class="audio_volume_only">
                    <source src='https://us4.internet-radio.com/proxy/wsjf?mp=/stream' type="audio/mpeg" />
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