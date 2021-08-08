import axios from "axios";

const quoteUrl =
  "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

// get a quote
const getQuotes = async () => {
  const { data } = await axios.get(quoteUrl);
  return data.quotes;
};

export default { getQuotes };
