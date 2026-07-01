import React from 'react';

export default function Footer({ setView }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-mark">
            <span className="mnl">MNL</span>
            <span className="lumiere">LUMIERE</span>
            <p>Vintage motorsport meets modern streetwear. Clean aesthetics, raw attitude. Made in Manila.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'catalog', filter: 'outerwear' }); }}>Outerwear</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'catalog', filter: 'tops' }); }}>Tops</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'catalog', filter: 'accessories' }); }}>Accessories</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'catalog', filter: 'new' }); }}>New Season</a>
          </div>
          <div className="footer-col">
            <h4>Brand</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'home' }); }}>The foundation</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'home' }); }}>Manifesto</a>
            <a href="#">Stockists</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MNL Lumiere — Manila, Philippines</span>
          <span>IG @mnllumiere</span>
        </div>
      </div>
    </footer>
  );
}
