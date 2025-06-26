import "../styles/Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <div className="cardsLeft">
        <div className="bigCard">
          <h2>Özel Lezzetio</h2>
          <p>Position:Absolute Acı Pizza</p>
          <button>SİPARİŞ VER</button>
        </div>
      </div>
      <div className="cardsRight">
        <div className="smallCard">
          <h3>Hackathlon</h3>
          <h3>Burger Menü</h3>
          <button>SİPARİŞ VER</button>
        </div>
        <div className="smallCard">
          <h3>Viiiiiim kadar</h3>
          <h3>hızlı kurye</h3>
          <button>SİPARİŞ VER</button>
        </div>
      </div>
    </div>
  );
}
