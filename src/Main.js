import React, { Fragment } from 'react';
import Media from 'react-media';

class Main extends React.Component {
  render() {
    return (
      <div className='header'>
        <Media query="(min-width: 768px)" render={() => (<h1>I'm visible only for Desktop.</h1> )}/> 
        <Media queries={{
          small: "(max-width: 768px)",
          medium: "(min-width: 769px)"
          }}>
          {matches => (
            <div>
              {matches.small && <p>I'm visible for Mobile devices.</p>}
              {matches.medium && <p>I'm visible for Desktop.</p>}
            </div>
          )}
        </Media>               
      </div>

    );
  }
}

export default Main;