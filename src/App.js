import React, { Component } from 'react';
import './main.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'August 18, 2018',
      newDeadline: ''
    }
  }

  render() {
    return(
      <div className="App">
        <div className="page-title">
          <img className="title-image"src="https://s3-us-west-1.amazonaws.com/siteimages27/Screen+Shot+2017-09-13+at+10.57.44+AM.png"/>
        </div>
        <Clock
          deadline={this.state.deadline}
        />
      </div>
    )
  }
}

export default App;
