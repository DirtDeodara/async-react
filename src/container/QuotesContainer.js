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
    loading: true,
    quotes: []
  }

  fetchQuotes = () => {
    return getQuotes(this.props.count)
      .then(quotes => {
        this.setState({ quotes, loading: false, error: null });
      })
      .catch(err => this.setState({ error: err, loading: false }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.count !== this.props.count) {
      this.setState({ loading: true });
      this.fetchQuotes();
    }
  }

  render() {
    if(this.state.error) return <h2>{this.state.error.message}</h2>;
    if(this.state.loading) return <h1>Shiz be loading</h1>;
    return (
      <Quotes quotes={this.state.quotes}/>
    );
  }
}
