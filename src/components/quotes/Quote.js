import React from 'react';
import PropTypes from 'prop-types';

function Quote({ image, name, quote }) {
  return (
    <section>
      <h3>{name}</h3>
      <img src={image}></img>
      <p>{quote}</p>
    </section>
  );
}
Quote.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Quote;
