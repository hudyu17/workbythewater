import React, { Component } from 'react'
import Map from './components/Map';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoLink from './components/VideoLink';
import AudioPlayer from './components/AudioPlayer';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      harbour: ''
      // harbour_link: 'https://youtu.be/SBj-U5c-DAY'
    };
  }

  // This method will be sent to the child component
  handler = (data) => {
    this.setState({
      harbour: data.name
    });
  }

  // Resets the chosen harbour
  resetState = () => {
    this.setState({
      harbour: ''
    });
  }

  render () {
    // console.log(this.state.harbour_link);
    return (
      <div class='main'>
        {/* <audio autoplay="" controls="" class="react-audio-player " id="audio" preload="metadata" src="https://17453.live.streamtheworld.com/CKGEFM.mp3" title="https://17453.live.streamtheworld.com/CKGEFM.mp3"><p>Your browser does not support the <code>audio</code> element.</p></audio> */}
        {this.state.harbour? 
          <div>
            <div class='top-bar'> 
              <button class='reset-button' onClick={this.resetState}>🌍 back to map</button> 
              <div class='hrb-name'>{this.state.harbour}</div>
              <VideoLink name={this.state.harbour}/>
              <AudioPlayer/>
            </div>
            <VideoPlayer name={this.state.harbour}/> 
          </div>
          : <div class='map-screen'>
              <Header/>
              <Map action={this.handler.bind(this)}/>
            </div> 
        }
      </div>
    );
  }
}

export default App;
