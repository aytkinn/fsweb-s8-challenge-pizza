import extraIngrediants from "../data/extraIngrediants";

export default function PizzaExtras({ choosenExtras, handleChange }) {
  return (
    <div className="pizzaForm-extras">
      <p id="checkbox-array-label">Ek Malzemeler</p>
      <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>

      <div className="checkbox-array">
        {extraIngrediants.map((topping, index) => (
          <label key={index} className="checkbox-array-item">
            <input
              type="checkbox"
              name="choosenExtras"
              value={topping}
              onChange={handleChange}
              checked={choosenExtras.includes(topping)}
            />
            {topping}
          </label>
        ))}
      </div>
    </div>
  );
}
