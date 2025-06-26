import "../styles/Footer.css";
import { TwitterLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerContentLeft">
          <div className="leftColL">
            <img
              src="/images/iteration-2-images/footer/logo-footer.svg"
              alt=""
            />
            <ul>
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-1.png"
                  alt=""
                />
                341 Londonderry Roda, Istanbul Türkiye
              </li>
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-2.png"
                  alt=""
                />
                aciktim@teknolojikyemekler.com
              </li>
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-3.png"
                  alt=""
                />
                +90 216 123 45 67
              </li>
            </ul>
          </div>
          <div className="leftColR">
            <h3>Sıcacık Menuler</h3>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 kişilik Hackathlon Pizza</li>
              <li>Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
        </div>
        <div className="footerContentRight">
          <h3>Instagram</h3>
          <div className="footerContentGallery">
            <img
              src="/images/iteration-2-images/footer/insta/li-0.png"
              alt="pizzaFoto"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-1.png"
              alt="sosisFoto"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-2.png"
              alt="pizza2Foto"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-3.png"
              alt="hamburger1"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-4.png"
              alt="hamburger2"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-5.png"
              alt="hamburger3"
            />
          </div>
        </div>
      </div>
      <div className="footerLower">
        <small>&copy; 2025 Teknolojik Yemekler</small>
        <TwitterLogo size={32} />
      </div>
    </footer>
  );
}
