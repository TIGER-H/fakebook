import { useState } from "react";
import "./portfolio.scss";

// example dummy data
const list = [
  {
    id: "Luda",
    title: "Luda",
  },
  {
    id: "Exy",
    title: "Exy",
  },
  {
    id: "Seola",
    title: "Seola",
  },
];

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      key={id}
      className={active ? "p-list active" : "p-list"}
      onClick={() => setSelected(id)}
      style={{ fontWeight: 500, letterSpacing: 2 }}
    >
      {title}
    </li>
  );
};

export const Portfolio = () => {
  const [selected, setSelected] = useState("Luda");
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://pbs.twimg.com/media/E7iaRd6XMAImobf?format=jpg&name=small"
            alt="photo here "
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://pbs.twimg.com/media/EM3zBKpVAAAAFYn?format=jpg&name=small"
            alt="photo here "
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://pbs.twimg.com/media/E7iaoWxXIAIrEbc?format=jpg&name=small"
            alt="photo here "
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://pbs.twimg.com/media/E7iaoWxXIAIrEbc?format=jpg&name=small"
            alt="photo here "
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://pbs.twimg.com/media/E7iaoWxXIAIrEbc?format=jpg&name=small"
            alt="photo here "
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://pbs.twimg.com/media/E7iaoWxXIAIrEbc?format=jpg&name=small"
            alt="photo here "
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};
