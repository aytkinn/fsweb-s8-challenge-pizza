import "../styles/PizzaFooter.css";

export default function PizzaFooter() {
  return (
    <div className="pizzaFooter">
      <p className="pizzaFooter-name">Position Absolute Acı Pizza</p>
      <span className="pizzaFooter-details">
        <p className="pizzaFooter-fiyat">85.50₺</p>
        <span>
          <p className="pizzaFooter-score">4.9</p>
          <p className="pizzaFooter-ratingCount">(200)</p>
        </span>
      </span>
    </div>
  );
}
