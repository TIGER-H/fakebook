import { useEffect, useState } from "react";
import quoteService from "../../services/quotes";
import "./quote.scss";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

export const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [color, setColor] = useState("#73A857");

  const getRandomItem = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const getRandomQuote = () => {
    return quotes[getRandomItem(quotes)];
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const qs = await quoteService.getQuotes();
      setQuotes(qs);
      setQuote(qs[getRandomItem(quotes)]);
    };
    fetchQuotes();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setQuote(getRandomQuote());
    setColor(colors[getRandomItem(colors)]);
  };

  return (
    <div
      className="quote-box"
      style={{ backgroundColor: color, transition: "all 1s ease" }}
    >
      <div className="quote-text">
        <span
          className="quoteText"
          style={{ color: color, transition: "all 1s ease" }}
        >
          {quote.quote}
        </span>
        <div
          className="quoteAuthor"
          style={{ color: color, transition: "all 1s ease" }}
        >
          - {quote.author}
        </div>
        <div className="quoteButtons">
          <a
            target="_blank"
            href={
              `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` +
              encodeURIComponent('"' + quote.quote + '" ' + quote.author)
            }
            className="quoteButton"
            style={{ backgroundColor: color, transition: "all 1s ease" }}
          >
            twitter
          </a>
          <a
            href="/"
            className="quoteButton"
            style={{ backgroundColor: color, transition: "all 1s ease" }}
          >
            Back
          </a>
          <a
            href=""
            className="quoteButton newQuote"
            onClick={handleClick}
            style={{ backgroundColor: color, transition: "all 1s ease" }}
          >
            New quote
          </a>
        </div>
      </div>
    </div>
  );
};
