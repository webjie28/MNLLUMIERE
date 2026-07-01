import React from 'react';

export default function ManifestoPage() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--cream)', paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
          <p className="eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Brand Creed</p>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '48px', fontWeight: 600, letterSpacing: '-0.02em', margin: '20px 0 32px', color: 'var(--cream)' }}>
            The Manila Discipline
          </h2>
          <div style={{ width: '48px', height: '2px', background: 'var(--gold)', margin: '0 auto 40px' }}></div>
          <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: '24px', lineHeight: '1.6', color: 'var(--stone-light)' }}>
            "We do not design for the runway. We design for the midnight asphalt, the hum of vintage engines, and the grit of Manila streets. Sleek lines with a raw posture."
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', borderTop: '1px solid rgba(255, 249, 238, 0.1)', paddingTop: '64px' }}>
          <div style={{ background: 'rgba(255,249,238,0.02)', padding: '40px 32px', border: '1px solid rgba(255,249,238,0.05)', borderRadius: '2px' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold-light)', display: 'block', marginBottom: '16px' }}>01 / SPEED DISCIPLINE</span>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Precision & Velocity</h3>
            <p style={{ fontSize: '13px', color: 'var(--stone-light)', lineHeight: '1.7' }}>
              Inspired by vintage utility structures. Clean graphics, functional panel overlays, and industrial zip pulls that recall late-night runs on Manila asphalt.
            </p>
          </div>
          <div style={{ background: 'rgba(255,249,238,0.02)', padding: '40px 32px', border: '1px solid rgba(255,249,238,0.05)', borderRadius: '2px' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold-light)', display: 'block', marginBottom: '16px' }}>02 / CONCRETE SWAGGER</span>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Effortless Stature</h3>
            <p style={{ fontSize: '13px', color: 'var(--stone-light)', lineHeight: '1.7' }}>
              Designed to look clean from a distance, yet full of detail up close. Unstructured shoulders, oversized drops, and muted, custom-dyed earth tones suited for the city.
            </p>
          </div>
          <div style={{ background: 'rgba(255,249,238,0.02)', padding: '40px 32px', border: '1px solid rgba(255,249,238,0.05)', borderRadius: '2px' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold-light)', display: 'block', marginBottom: '16px' }}>03 / LIMITED ARCHIVES</span>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Zero Restocks</h3>
            <p style={{ fontSize: '13px', color: 'var(--stone-light)', lineHeight: '1.7' }}>
              We release garments in finite quantities. Each piece is a design capsule made for those who appreciate collector-level underground fashion. Once gone, it joins the archive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
