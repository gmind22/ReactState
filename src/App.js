import React, { Component } from 'react';
import './App.css'; // Import the stylesheet

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/366241920_6460692047332146_3379507976951943117_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEdqdGa5euiZOY2mzw-8JkbT0xLSfrjPHxPTEtJ-uM8fKBh51AWRbV7foOUMh6DsJZWsNOMwtUzefLZ0ZlbrDy9&_nc_ohc=K9w5doV4XMwAX_WpVRe&_nc_ht=scontent-los2-1.xx&oh=00_AfD78DYAm4ad6IEn0dcIC8Et0vaeiBIcjWLDFojLtkE8Gw&oe=65B3E79A', 
      profession: 'Software Developer',
    },
    show: false,
    mountTime: new Date(),
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate(); // Force a re-render to update the mount time
    }, 1000); // Update every 1 second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App">
        <div className="profile-container">
          <button onClick={this.toggleShow} className="toggle-button">
            {show ? 'Hide Profile' : 'Show Profile'}
          </button>

          {show && (
            <div className="profile">
              <img src={person.imgSrc} alt={person.fullName} className="profile-image" />
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <p>Profession: {person.profession}</p>
            </div>
          )}

          <p className="mount-time">Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
