import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import './App.css'

export default function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleClick = () => {
    fetchQuote();
  };
  
  return (
       <div id="quote-box">
          <div id="text">{quote}</div>
          <div id="author">- {author}</div>
          <button id="new-quote" onClick={handleClick}>New Quote</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
        </div>
  )
}
