import { Component } from 'react';

const videoBank = {
    'Venice': <iframe 
            id='1'
            width="100%"
            height="100%"
            frameborder="0" 
            allowfullscreen="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            width="100%" height="100%" 
            src="https://www.youtube.com/embed/K_Vg94nBiaY?controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
            >
        </iframe>,
    'Tofino': <iframe 
            id='2'
            frameborder="0" 
            allowfullscreen="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            width="100%" height="100%" 
            src="https://www.youtube.com/embed/SBj-U5c-DAY?&vq=hd1080&controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
            >
        </iframe>,
    'Lerwick': <iframe
        id='3' 
        frameborder="0" 
        allowfullscreen="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/YE5e6Rc7tD0?controls=0&amp;start=7306&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
        >
    </iframe>,
    'Skarsvag': <iframe 
        id='4'
        frameborder="0" 
        allowfullscreen="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/c4kpeZHcke8?&vq=hd1080&controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
        >
    </iframe>,
    'Sydney': <iframe 
        id='5'
        frameborder="0" 
        allowfullscreen="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/gchEUACCJv4?&vq=hd1080&controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
        >
    </iframe>,
    'Rio': <iframe 
        id='6'
        frameborder="0" 
        allowfullscreen="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/iwUpbWatPTU?&vq=hd1080&controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
        >
    </iframe>,
    'Koh Samui': <iframe 
        id='7'
        frameborder="0" 
        allowfullscreen="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/-b3a-bxkdxw?&vq=hd1080&controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
        >
    </iframe>,
    'Boston': <iframe 
        id='8'
        frameborder="0" 
        allowfullscreen="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/BatBeSUiJUM?&vq=hd1080&controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
        >
    </iframe>,
    'Earth': <iframe 
        id='9'
        frameborder="0" 
        allowfullscreen="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/EEIk7gwjgIM?&vq=hd1080&controls=0&allowfullscreen=1&Zmodestbranding=1&autoplay=1&mute=1&controls=0&disablekb=1&showinfo=0&playersinline=1&enablejsapi=1;" 
        >
    </iframe>
}

class VideoBank extends Component {
    render () {
        return (
            videoBank[this.props.name]
        )
    }
}

export default VideoBank;