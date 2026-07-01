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
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'foundation' }); }}>The foundation</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'manifesto' }); }}>Manifesto</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'about' }); }}>About</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'about' }); }}>Shipping</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'about' }); }}>Returns</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'about' }); }}>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MNL Lumiere — Manila, Philippines</span>
          <a href="https://www.instagram.com/mnllumiere/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--stone)', textDecoration: 'none' }}>IG @mnllumiere</a>
        </div>
      </div>
    </footer>
  );
}
