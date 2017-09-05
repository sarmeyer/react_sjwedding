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
          <span className="sophie">Sophie</span>
          <span className="and">&</span>
          <span className="jack">Jack</span>
        </div>
        <Clock
          deadline={this.state.deadline}
        />
      </div>
    )
  }
}

export default App;
