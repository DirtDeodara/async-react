export const getQuotes = (count = 5) => {
  return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`)
    .then(res => {
      if(!res.ok) throw 'Unable to do the thing you want me to do. Which, probably, is to Fetch some data from somewhere. But, believe me, its user error.';
      return res.json();
    })
    .then(quotes => {
      return quotes.map(quote => ({
        quote: quote.quote,
        image: quote.image,
        character: quote.character
      }));
    });
};
