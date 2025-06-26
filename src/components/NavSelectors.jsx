import "../styles/NavSelectors.css";
import { customAlphabet } from "nanoid";

const selectors = [
  "Yeni! Bowl",
  "Pizza",
  "Burger",
  "Kızartmalar",
  "Fast Food",
  "Gazlı İçecek",
];
const generateId = customAlphabet("123456789", 10);

export default function NavSelectors({ handleSelector, activeSelector }) {
  return (
    <div className="navSelectors">
      {selectors.map((item, index) => (
        <div key={generateId()} className="navSelector">
          <button
            onClick={() => handleSelector(index)}
            className={index === activeSelector ? "active" : ""}
          >
            <img
              key={generateId()}
              src={`./images/iteration-2-images/icons/${index + 1}.svg`}
              alt=""
            />
            <p key={generateId()}>{item}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
