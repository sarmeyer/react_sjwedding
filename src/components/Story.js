import React, {Component} from 'react';
import '../main.css';

export default class Story extends Component {

  render() {
    return (
      <div className="story" id="Story">
      <img className="lavender" src="https://cdn.monq.com/wp-content/uploads/2016/05/Lavender.png" alt="No Image Available"/>
      <h1>Our Story</h1>
        <h4>ADDING ANOTHER CHAPTER TO OUR STORY</h4>
        <p>
        Once upon a time there was a guy, who had just moved to Denver Colorado. He got invited by a college friend to check out the Boulder bars one Friday night, and he of course obliged. That same night there was a girl, who had had a long day of classes and decided to bake herself a chocolate cake. Her roommate tried to convince her to go out to the bars with her and her friend, but she was skeptical since she had a cake to polish off.
        You know how fairy tales go… guy walks in with a bottle of Whiskey as girl takes her cake out of the oven. They talk, they laugh, they go out, guy does not give girl his number so she tracks him down on Facebook for a second date and the rest is history...
        It has been quite a journey for us and we cannot wait to start this new chapter in the book of life. To share this celebration with our close family and friends is so special!
        </p>
      </div>
    );
  };
};
