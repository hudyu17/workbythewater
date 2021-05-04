import { Component } from 'react';

const audioBank = {
    'Trillium Park': '',
    'Sydney Harbour': '',
    3: ''
}


class AudioBank extends Component {
    render () {
        return (
            audioBank['Trillium Park']
        )
    }
}

export default AudioBank;