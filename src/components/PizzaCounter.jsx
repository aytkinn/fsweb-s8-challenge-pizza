export default function PizzaCounter({
  increaseCounter,
  decreaseCounter,
  pizzaCounter,
}) {
  return (
    <div className="pizzaForm-pizzaCounter">
      <button type="button" onClick={decreaseCounter}>
        -
      </button>
      <p>{pizzaCounter}</p>
      <button type="button" onClick={increaseCounter}>
        +
      </button>
    </div>
  );
}
