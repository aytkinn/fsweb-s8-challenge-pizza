export default function Checkout({
  checkoutSum,
  choosenExtras,
  extraPrice,
  isValid,
}) {
  return (
    <div className="pizzaForm-checkout">
      <div className="pizzaForm-checkoutTexts">
        <h3>Sipariş Toplamı</h3>
        <span>
          <p className="pizzaCheckout-extras">Seçimler</p>
          <p>{choosenExtras.length * extraPrice}</p>
        </span>
        <span style={{ color: "red" }}>
          <p className="pizzaCheckout-extras">Toplam</p>
          <p>{checkoutSum}</p>
        </span>
      </div>
      <button type="submit" disabled={!isValid}>
        SİPARİŞ VER
      </button>
    </div>
  );
}
