//import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  state = {
    Time: 0,
    person: {
      fullName: "",
      bio: "",
      profession: "",
      imgSrc: "",
    },
    showState: false,
  };
  profilePage = () => {
    this.setState({
      person: {
        fullName: "Remilekun Wahab",
        bio: "I'm passionate about building visually captivating designs that are easy and enjoyable to use",
        profession: "product designer",
        imgSrc: "image.png",
      },
      showState: !this.state.showState,
    });
  };
  tick() {
    this.setState((state) => ({
      Time: state.Time + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.showState && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <h2>{this.state.person.bio}</h2>
            <h3>{this.state.person.profession}</h3>
            <h4> this component was mounted {this.state.Time}s ago</h4>
            <img src={this.state.person.imgSrc} alt="" />
          </div>
        )}

        <button onClick={this.profilePage}></button>
      </div>
    );
  }
}

export default App;
