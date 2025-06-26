import "./styles/Success.css";

export default function Success({ form }) {
  const initalPrice = 85;
  return (
    <div className="success-main">
      <header>
        <img src="/images/iteration-1-images/logo.svg" alt="" />
        <p className="ital1">lezzetin yolda</p>
        <h2>SİPARİŞİNİZ ALINDI!</h2>
      </header>
      <div className="successContent">
        <div className="finalCheckout">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="generalInfo">
            <p>Boyut: {form.pizzaSize}</p>
            <p>Hamur: {form.pizzaDoughThickness}</p>
            <p>Ek Malzemeler: {form.choosenExtras.join(", ")}</p>
          </div>
          <div className="checkoutInfo">
            <h2>Sipariş Toplamı</h2>
            <section>
              <span>Seçimler</span>
              <span>{form.choosenExtras.length * 5}</span>
            </section>
            <section>
              <span>Toplam</span>
              <span>{form.choosenExtras.length * 5 + initalPrice}</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
