import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../components/quotes/Quotes';
import { getQuotes } from '../services/simpsonApi';

export default class QuotesContainer extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  }
  state = {
    error: null,
    quotes: []
  }

  fetchQuotes = () => {
    return getQuotes(this.props.count)
      .then(quotes => {
        this.setState({ quotes });
      })
      .catch(err => this.setState({ error: err }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }
  render() {
    return (
      <Quotes quotes={this.state.quotes}/>
    );
  }
}
