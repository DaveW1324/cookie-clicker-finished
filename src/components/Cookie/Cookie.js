import React, { Component } from 'react';
import './Cookie.css';
import cookieImg from '../../assets/cookieImg.png';

class Cookie extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  updateCount() {
    // common error
    // this.setState({ count: this.state.count++ })
    this.setState({ count: this.state.count + 1 });

    // if count is >= X, change the css somehow...
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className='cookie'>
        {/* What are all the ways you can write event handlers? */}
        <img src={ cookieImg } onClick={ () => this.updateCount() }/>
        <h2>Score: { this.state.count }</h2>
        <button onClick={ () => this.resetCount() }>Reset</button>
      </div>
    );
  }
}

export default Cookie;