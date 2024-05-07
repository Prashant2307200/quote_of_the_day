import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState(''); 

  const fetchQuote = async () => {
    try {
      const quoteRes = await fetch('http://localhost:3000/quote/');
      const { quote,author } = await quoteRes.json();
      setQuote(quote);
    } catch (err) {
      console.error('Error fetching quote: ' + err);
    }
  };

  const handleOnSearch = async (e) => {
    e.preventDefault();
    try {
      const quoteRes = await fetch(`http://localhost:3000/quote/search?author=${author}`);
      const quote = await quoteRes.json();
      if (quote.length > 0) { 
        setQuote(quote[0].quote);
      } else {
        setQuote('Sorry, no quote found for this author');
      }
    } catch (err) {
      console.error('Error fetching quote: ' + err);
    }
  };
  
  useEffect(() => {
    fetchQuote();
  }, []);

  const handleOnChange = (e) => {
    setAuthor(e.target.value); // Update the author state with the input value
  };

  return (
    <div className="App">
      <h1>Quote of the Day!</h1>
      <form onSubmit={handleOnSearch}> 
        <input type="text" placeholder="Search by author" value={author} onChange={handleOnChange} />
        <button type="submit">Search</button>
      </form>
      <button onClick={fetchQuote}>Get random Quote</button>
      <div className="quote">
        {quote}
        <hr/>
        {/**<div className='author'>- {author}</div>*/}
      </div>
    </div>
  );
}

export default App;
