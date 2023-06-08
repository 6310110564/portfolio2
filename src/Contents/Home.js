import React, {Component} from 'react';
import Social from '../Components/Social';
import profilepic from '../img/profile.jpg';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
        <div className="condiv home">
            <img src={profilepic} alt="profile" className="profilepic" />
            <ReactTypingEffect text={['I am Arissara','I am computer engineering student']} speed={200} eraseDelay={300} className="typingeffect"/>
            <p>Computer Engineering Student, The Facullty of Engineering, Prince of Songkla University</p>
            <Social />
        </div>
        );
    }
}

export default Home;