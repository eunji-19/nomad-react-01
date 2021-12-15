import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const fetchCoin = () => {
    console.log("HERE");
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  };
  useEffect(fetchCoin, []);
  return (
    <div>
      <h2>The Coins 😎 ({coins.length})</h2>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((item, index) => (
          <option id={item.name} value={index}>
            {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
