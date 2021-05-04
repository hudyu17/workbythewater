import { Component } from 'react';

const linkBank = {
        'Venice': 'https://youtu.be/K_Vg94nBiaY',
        'Tofino': 'https://youtu.be/SBj-U5c-DAY',
        'Lerwick': 'https://youtu.be/YE5e6Rc7tD0',
        'Skarsvag': 'https://youtu.be/c4kpeZHcke8',
        'Sydney': 'https://youtu.be/gchEUACCJv4',
        'Rio': 'https://youtu.be/iwUpbWatPTU',
        'Koh Samui': 'https://youtu.be/-b3a-bxkdxw',
        'Boston': 'https://youtu.be/BatBeSUiJUM',
        'Earth': 'https://youtu.be/EEIk7gwjgIM'
    }

class LinkBank extends Component {
    link = linkBank[this.props.name]
    render () {
        console.log(this.props.name);
        return (
            <a class='hrb-link' href={this.link} target='blank'>Video Link</a>
        )
    }
}

export default LinkBank;