import React, { useState } from 'react';

export default function Navbar({ wishlistCount, onWishlistClick, onAccountClick, setView }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (e, name, filter = 'all') => {
    e.preventDefault();
    setView({ name, filter });
    setIsMobileOpen(false); // Close mobile menu after navigation
  };

  const handleLookbookClick = (e, id) => {
    e.preventDefault();
    setView({ name: 'lookbook', id });
    setIsMobileOpen(false);
  };

  return (
    <>
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
            {/* Mobile Menu Toggle Icon */}
            <div className="mobile-menu-trigger" onClick={() => setIsMobileOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <>
          <div className="cart-overlay active" onClick={() => setIsMobileOpen(false)}></div>
          <div className="cart-drawer active" style={{ background: '#121212', color: '#fff', padding: '40px 32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <span className="card-logo-txt" style={{ color: '#fff', letterSpacing: '0.15em' }}>LUMIERE</span>
              <button 
                onClick={() => setIsMobileOpen(false)} 
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '32px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '18px', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <a href="#" onClick={(e) => handleNavClick(e, 'home')} style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'catalog', 'all')} style={{ color: '#fff', textDecoration: 'none' }}>Shop All</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'foundation')} style={{ color: '#fff', textDecoration: 'none' }}>The Foundation</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'manifesto')} style={{ color: '#fff', textDecoration: 'none' }}>Manifesto</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'about')} style={{ color: '#fff', textDecoration: 'none' }}>About IG</a>
              
              <div style={{ height: '1px', background: '#222', margin: '16px 0' }}></div>
              
              <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileOpen(false); onAccountClick(); }} style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '14px' }}>
                Account Portal
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
