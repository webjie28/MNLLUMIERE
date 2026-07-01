import React from 'react';

export default function FoundationPage() {
  return (
    <section style={{ paddingTop: '60px' }}>
      <div className="wrap">
        <div className="grid-head" style={{ borderBottom: '1px solid var(--sand)', paddingBottom: '24px', marginBottom: '48px' }}>
          <div className="section-head" style={{ margin: 0 }}>
            <p className="eyebrow">Design Language</p>
            <h2 className="section-title" style={{ fontFamily: 'var(--display)', fontWeight: 700, letterSpacing: '-0.02em' }}>The Foundation</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
          <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '2px', background: 'var(--sand)' }}>
            <img src="images/new_arrival_4.png" alt="Foundation Silhouette" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 600, marginBottom: '20px' }}>Signature Silhouettes</h3>
            <p style={{ color: 'var(--stone)', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
              The Foundation represents the core design DNA of MNL Lumiere. Each pattern is drafted from scratch in our Manila studio, focusing on the perfect drape, drop shoulder silhouettes, and structured boxy crops.
            </p>
            <p style={{ color: 'var(--stone)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
              Our garments are built to look oversized yet hold a clean, architectural structure. They sit comfortably on the shoulders while falling straight to create a modern streetwear posture.
            </p>
            <div style={{ borderTop: '1px solid var(--sand)', paddingTop: '24px', display: 'flex', gap: '40px' }}>
              <div className="spec">
                <span className="val" style={{ fontFamily: 'var(--mono)', fontSize: '20px', color: 'var(--ink)' }}>Double-Knee</span>
                <span className="lab" style={{ fontSize: '10px', color: 'var(--stone)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Panelling Spec</span>
              </div>
              <div className="spec">
                <span className="val" style={{ fontFamily: 'var(--mono)', fontSize: '20px', color: 'var(--ink)' }}>Drop Shoulder</span>
                <span className="lab" style={{ fontSize: '10px', color: 'var(--stone)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sleeve Cut</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', borderTop: '1px solid var(--sand)', paddingTop: '56px' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>I. 450GSM Cotton</h4>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: '1.7' }}>
              Knitted from 100% premium long-staple cotton French Terry. The interior features a dense loopback structure that offers breathability for tropical Manila weather while maintaining heavy, structural fall.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>II. Garment Wash</h4>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: '1.7' }}>
              Every piece undergoes a custom carbon wash process. This pre-shrinks the fabric, softens the hand-feel, and creates a vintage, lived-in patina along the seams.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>III. Local Tailoring</h4>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: '1.7' }}>
              Made in limited quantities in our partnering home-grown workshops across Manila. We believe in providing ethical wages and supporting the rich tailoring heritage of Filipino pattern-makers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
