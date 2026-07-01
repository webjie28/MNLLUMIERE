import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home({ catalogData, onProductClick, setView }) {
  // Filter bestsellers for the homepage display
  const bestSellers = catalogData.filter(item => item.tag === 'BESTSELLER' || item.tag === 'NEW').slice(0, 6);

  return (
    <>
      <header className="hero">
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-grain"></div>
        <div className="hero-stripe"></div>
        <div className="hero-inner">
          <p className="hero-eyebrow">Manila — Est. underground</p>
          <div className="hero-mark">
            <span className="mnl">MNL</span>
            <span className="lumiere">LUMIERE</span>
          </div>
          <div className="hero-rule"></div>
          <p className="hero-sub">Vintage streetwear discipline, cut for the streets of Manila. Clean aesthetics, raw attitude.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'catalog', filter: 'all' }); }} className="hero-cta">
            Explore the Collection
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </header>

      <section id="shop">
        <div className="wrap">
          <div className="grid-head">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Seasonal Drops</p>
              <h2 className="section-title" style={{ fontFamily: 'var(--display)', fontWeight: 600 }}>Featured Pieces</h2>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'catalog', filter: 'all' }); }} style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              View All ({catalogData.length})
            </a>
          </div>

          <div className="product-grid">
            {bestSellers.map(item => (
              <ProductCard key={item.id} item={item} onClick={onProductClick} />
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-stripe"></div>
        <div className="wrap">
          <div className="manifesto-inner">
            <p className="eyebrow">Manila Streetwear Discipline</p>
            <blockquote className="manifesto-quote">
              "We design for the asphalt walkers, and the concrete dreamers. Raw finishes, heavy fabrics, and structured cuts. Cut and sewn ethically in the heart of Manila."
            </blockquote>
            <cite className="manifesto-cite">MNL Lumiere Design Dept</cite>
          </div>
          <div className="manifesto-grid">
            <div className="manifesto-cell">
              <div className="num">01</div>
              <div className="label">Heavy Fabrics</div>
              <div className="desc">We build clothing using 450GSM loopback French terry cotton. Thick structure, premium fall.</div>
            </div>
            <div className="manifesto-cell">
              <div className="num">02</div>
              <div className="label">Speed Discipline</div>
              <div className="desc">Inspired by vintage utility graphics, clean typography, and raw architectural lines.</div>
            </div>
            <div className="manifesto-cell">
              <div className="num">03</div>
              <div className="label">Manila Made</div>
              <div className="desc">Every piece is designed, patterned, cut, and tailored locally in the Philippines. Support local.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="foundation" id="foundation">
        <div className="wrap">
          <div className="foundation-grid">
            <div className="foundation-visual">
              <img src="images/editorial_look_2.png" alt="Foundation design theme" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="foundation-text">
              <p className="eyebrow">Brand Pillars</p>
              <h2 className="section-title">The Foundation Collection</h2>
              <p>The Foundation represents our signature cuts. Drop shoulder shapes, boxy crop tees, and double-knee panels designed to be oversized yet structural.</p>
              <p>Constructed in limited runs, we do not restock archive items. Each drop is a unique design record.</p>
              <div className="foundation-specs">
                <div className="spec">
                  <span className="val">100%</span>
                  <span className="lab">Premium Cotton</span>
                </div>
                <div className="spec">
                  <span className="val">450G</span>
                  <span className="lab">French Terry Weight</span>
                </div>
                <div className="spec">
                  <span className="val">Manila</span>
                  <span className="lab">Cut & Sewn Origin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="wrap">
          <div className="newsletter-inner">
            <p className="eyebrow">Stay Tuned</p>
            <h2 className="section-title" style={{ fontFamily: 'var(--display)', fontWeight: 600 }}>Unlock Next Drop Alerts</h2>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">
                Notify Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
