import React, { Component } from 'react';
import './main.css';
import Clock from './Clock';
import MyMenuBar from './Menu';

export default class App extends Component {
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
        <div>
          <MyMenuBar/>
          </div>
        <div className="page-title">
          <img className="title-image"src="https://s3-us-west-1.amazonaws.com/siteimages27/Screen+Shot+2017-09-13+at+1.51.51+PM.png"/>
        </div>
        <Clock
          deadline={this.state.deadline}
        />
      </div>
    )
  }
};
