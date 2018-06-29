import React, { Component } from 'react';

class AccountInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleFirstName(newInput) {
    this.setState({ firstName: newInput });
  }

  handleLastName(newInput) {
    this.setState({ lastName: newInput });
  }

  saveDisplayName() {
    this.setState({ displayName: `${this.state.firstName} ${this.state.lastName}` });
  }

  render() {
    return (
      <div className='account-info'>
        <h2>
          { this.state.displayName ? 'Welcome, ' + this.state.displayName : 'Input a name' }
        </h2>
        <input onChange={ (e) => this.handleFirstName(e.target.value) }/>
        <input onChange={ (e) => this.handleLastName(e.target.value) }/>
        <button onClick={ () => this.saveDisplayName() }>Save</button>
      </div>
    );
  }
}

export default AccountInfo;