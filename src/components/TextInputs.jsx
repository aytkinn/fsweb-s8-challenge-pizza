export default function TextInputs({
  userName,
  handleChange,
  userNote,
  errors,
}) {
  return (
    <div className="pizzaForm-textInputs">
      <div className="pizzaForm-name">
        <label htmlFor="costumer-name">İsim - Soyad:</label>
        <input
          name="userName"
          type="text"
          id="costumer-name"
          value={userName}
          onChange={handleChange}
        />
        {errors.userName && <p className="error">{errors.userName}</p>}
      </div>
      <div className="pizzaForm-not">
        <label htmlFor="costumer-name">Siparis Notu</label>
        <p>Siparişine eklemek istediğin bir not var mı?</p>
        <textarea
          id="costumer-note"
          name="userNote"
          rows="5"
          cols="33"
          value={userNote}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
