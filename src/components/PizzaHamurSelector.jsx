export default function PizzaHamurSelector({
  pizzaDoughThickness,
  handleChange,
}) {
  return (
    <div className="pizzaForm-hamur">
      <label htmlFor="pizza-hamur">
        Hamur Seç:<span className="error">*</span>
      </label>

      <select
        onChange={handleChange}
        name="pizzaDoughThickness"
        id="pizza-hamur"
        value={pizzaDoughThickness}
        required
      >
        <option value="ince">İnce Hamur</option>
        <option value="standart">Standart Hamur</option>
        <option value="kalin">Kalin Hamur</option>
      </select>
    </div>
  );
}
