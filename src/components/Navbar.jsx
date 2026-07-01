import React from 'react';

export default function Navbar({ wishlistCount, onWishlistClick, onAccountClick, setView }) {
  const handleNavClick = (e, name, filter = 'all') => {
    e.preventDefault();
    setView({ name, filter });
  };

  const handleLookbookClick = (e, id) => {
    e.preventDefault();
    setView({ name: 'lookbook', id });
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="nav-mark">
          <span className="mnl">MNL</span>
          <span className="lumiere">LUMIERE</span>
        </a>
        <div className="nav-links">
          <div className="nav-item-shop">
            <a href="#" className="nav-shop-link" onClick={(e) => handleNavClick(e, 'catalog', 'all')}>shop</a>
            <div className="mega-menu">
              <div className="mega-menu-inner">
                <div className="mega-menu-cols">
                  <div className="mega-menu-col">
                    <h4>Featured</h4>
                    <ul>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'new')}>New Arrivals</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'bestseller')}>Best Sellers</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'archive')}>Archive Drops</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'giftcards')}>Gift Cards</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h4>Ready to Wear</h4>
                    <ul>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'men')}>Men's Streetwear</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'women')}>Women's Streetwear</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'outerwear')}>Outerwear</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'tops')}>Tops</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'accessories')}>Accessories</a></li>
                      <li><a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'all')}>All Collection</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h4>Collections</h4>
                    <ul>
                      <li><a href="#" onClick={(e) => handleLookbookClick(e, 'foundation')}>The Foundation</a></li>
                      <li><a href="#" onClick={(e) => handleLookbookClick(e, 'caps')}>Caps Collection</a></li>
                      <li><a href="#" onClick={(e) => handleLookbookClick(e, 'manila_grit')}>Manila Grit</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mega-menu-editorial">
                  <div className="editorial-card" onClick={(e) => handleLookbookClick(e, 'caps')}>
                    <img src="images/pursuit_cap.png" alt="Caps Editorial" />
                    <div className="editorial-overlay">
                      <span className="editorial-tag">MNL — 2026</span>
                      <span className="editorial-title">Signature Caps</span>
                    </div>
                  </div>
                  <div className="editorial-card" onClick={(e) => handleLookbookClick(e, 'manila_grit')}>
                    <img src="images/editorial_look_2.png" alt="Editorial look 2" />
                    <div className="editorial-overlay">
                      <span className="editorial-tag">New Season</span>
                      <span className="editorial-title">Manila Asphalt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" onClick={(e) => handleNavClick(e, 'foundation')}>the foundation</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'manifesto')}>manifesto</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'about')}>about</a>
        </div>
        <div className="nav-icons">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={onAccountClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </div>
          <div className="cart-icon-wrapper" id="cart-trigger" onClick={onWishlistClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            <span className={`cart-badge ${wishlistCount > 0 ? 'active' : ''}`} id="cart-badge-count">{wishlistCount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
