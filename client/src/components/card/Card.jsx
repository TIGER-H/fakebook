import { Link } from "react-router-dom";

export const Card = ({ header, items }) => {
  return (
    <div className="card">
      <h1 className="card header">{header}</h1>
      <ul className="card ul">
        {items.map((item) => (
          <Link to={`/dashboard/${item.toLowerCase()}`}>
            <li className="card li">{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
