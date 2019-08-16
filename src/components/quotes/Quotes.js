import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteElements = quotes.map(({ image, name, quote }) => {
    <li key={quote}>
      <Quote
        image={image}
        quote={quote}
        name={name}
      />
    </li>;
  });

  return (
    <ul>
      {quoteElements}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
  }))
};

export default Quotes;
