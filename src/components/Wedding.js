import React, {Component} from 'react';
import '../main.css';

export default class Wedding extends Component {

  render() {
    return (
      <div className="wedding" id="Wedding">
      <img className="sunflower" src="https://s3-us-west-1.amazonaws.com/siteimages27/sunflower2Cut.png" alt="No Image Available"/>
      <h1>Wedding Details</h1>
        <p>Saturday, August 18, 2018
          2:00 PM
          Attire: Dressy Casual
          </p>
          <h3>CEREMONY</h3>
          <p>Sacred Heart of Mary Church
          6739 S Boulder Rd, Boulder, CO 80303, USA
          2PM - 3PM</p>
          <h3>COCKTAIL HOUR & RECEPTION</h3>
          <p>Lyons Farmette
          4121 Ute Highway, Lyons, CO 80540, USA
          4PM - 6PM</p>
      </div>
    );
  };
};
