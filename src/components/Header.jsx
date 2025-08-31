import { Link } from 'react-router-dom';
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/">
          <img src="../images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" className="logo" />
        </Link>
        <nav>
          <Link to="/">Anasayfa</Link>
          <span> - </span>
          <Link to="/order">Sipariş Oluştur</Link>
        </nav>
      </div>
    </header>
  );
}
