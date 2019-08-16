import React from 'react';
import PropTypes from 'prop-types';

function Quote({ image, character, quote }) {
  return (
    <section>
      <h3>{character}</h3>
      <img src={image}></img>
      <p>{quote}</p>
    </section>
  );
}
Quote.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;
