import React, {Component} from 'react';
import '../main.css';

export default class Story extends Component {

  render() {
    return (
      <div className="story" id="Story">
      <img className="lavender" src="https://cdn.monq.com/wp-content/uploads/2016/05/Lavender.png" alt="No Image Available"/>
      <h1>Our Story</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum tincidunt risus, vel iaculis orci sollicitudin eu. Aliquam mollis, nunc nec mattis ultrices, arcu mauris pulvinar justo, a tincidunt risus mi eget ante. Vivamus ut sagittis magna. Integer gravida pellentesque ultrices. Nunc consequat ut quam eget dignissim. Phasellus pellentesque tincidunt quam efficitur suscipit. Mauris quis sem nec magna auctor fermentum nec nec justo. Vivamus nunc risus, commodo eget sem sit amet, faucibus vulputate mauris. Maecenas sagittis, urna eget iaculis finibus, mauris nulla consectetur sem, ac sagittis lacus ipsum at orci. Suspendisse non consequat neque. In fermentum a sem eget ultricies. Duis vehicula sem ut nulla porttitor, at facilisis libero varius. Nam ut eros dolor. Curabitur tempor purus vitae nunc tempus, at ullamcorper velit viverra. Integer sapien ligula, dictum sit amet est porta, pretium malesuada elit. Nullam venenatis molestie vehicula.
        </p>
      </div>
    );
  };
};
