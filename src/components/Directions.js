import React, {Component} from 'react';
import '../main.css';

export default class Directions extends Component {

  render() {
    return (
      <div className="directions" id="Directions">
      <img className="poppy" src="https://s3-us-west-1.amazonaws.com/siteimages27/poppy.png" alt="No Image Available"/>
        <h1>Getting There</h1>
          <h3>TO BOULDER</h3>
            <h4>By Plane</h4>
              <p>For those traveling by air, the closest major airport is Denver International Airport (DIA). The airport is approximately 45 miles (70km) from the city of Boulder.
              There are a few smaller airports near Boulder, notably Boulder Municipal Airport (WBU) and Rocky Mountain Metropolitan Airport (BJC)</p>
            <h4>By Bus</h4>
              <p>The Regional Transportation District (RTD) offers cost and time effective solutions getting around Boulder, Denver and the airport.
              Getting to and from the airport ($9.00 per person per leg)
              DIA to downtown Boulder : AB Bus Boulder / US 36 to Denver Airport Station
              DIA to downtown Denver : A Line Train Union Station to Denver Airport Station
              Getting to and from Boulder and Denver ($4.50 per person per leg)
              Flatiron Flyer (FF1 & FF2) Denver-Boulder Station
              See the RTD website for more information</p>
            <h4>By Car</h4>
              <p>Driving by car is the best option to travel freely around Colorado. There are numerous car rental businesses at the airport, including Enterprise, Hertz, and Budget.</p>

          <h3>ACCOMMODATIONS</h3>
            <h4>CHAUTAUQUA COTTAGES</h4>
              <p>900 Baseline Rd, Boulder, CO 80302, USA
              303.442.3282</p>

            <h4>HOTEL BOULDERADO</h4>
              <p>2115 13th St, Boulder, CO 80302, USA
              303-442-4344</p>

            <h4>ST JULIEN HOTEL & SPA</h4>
              <p>900 Walnut St, Boulder, CO 80302, USA
              1-877-303-0900</p>

            <h4>BOULDER UNIVERSITY INN</h4>
              <p>1632 Broadway, Boulder, CO 80302, USA
              303.417.1700</p>

            <h4>THE BRADLEY BOULDER INN</h4>
              <p>2040 16th St, Boulder, CO 80302, USA
              303.417.1700</p>

            <h4>OTHER OPTIONS</h4>
              <p>AirBnB or your preferred travel website (Expedia, Priceline, Travelocity) offer a variety of choices and prices</p>
      </div>
    );
  };
};
