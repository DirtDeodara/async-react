import React, { Component } from 'react';
import QuotesContainer from '../container/QuotesContainer';

export default class App extends Component {
  state = {
    inputCount: '',
    count: 5
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({
      count: state.inputCount,
      inputCount: ''
    }));
  }

  handleChange = ({ target }) => {
    this.setState({ inputCount: Number.parseInt(target.value) });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.inputCount} onChange={this.handleChange}></input>
          <button>FETCH</button>
        </form>
        <QuotesContainer count={this.state.count}/>
      </>
    );
  }
}
  
