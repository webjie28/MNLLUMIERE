import React from 'react';

export default function AboutPage() {
  return (
    <section style={{ paddingTop: '60px' }}>
      <div className="wrap">
        <div className="grid-head" style={{ borderBottom: '1px solid var(--sand)', paddingBottom: '24px', marginBottom: '48px' }}>
          <div className="section-head" style={{ margin: 0 }}>
            <p className="eyebrow">Studio Profile</p>
            <h2 className="section-title" style={{ fontFamily: 'var(--display)', fontWeight: 700, letterSpacing: '-0.02em' }}>About MNL Lumiere</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', marginBottom: '80px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>Motorsport meets Underground Manila</h3>
            <p style={{ color: 'var(--stone)', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
              Established in Manila, MNL Lumiere was born from a desire to combine vintage racing culture with premium, heavyweight street wear. The result is a clean yet swagger-filled collection designed for daily urban utility.
            </p>
            <p style={{ color: 'var(--stone)', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
              Our design team operates out of Manila, sourcing locally, creating original silhouettes, and working closely with local craftspeople to tailoring limited releases.
            </p>
            <p style={{ color: 'var(--stone)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
              We design with intentionality, emphasizing details that stand out: industrial loop tabs, double-knee panel detailing, and pre-shrunk heavyweight fabrics.
            </p>
          </div>

          <div style={{ background: 'var(--sand)', padding: '40px', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '1px solid var(--stone-light)', paddingBottom: '8px' }}>
              Underground Stockists
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
              <li style={{ fontSize: '14px', marginBottom: '10px', color: 'var(--ink)' }}>
                <strong>MNL Lumiere Studio</strong> <br />
                <span style={{ fontSize: '12px', color: 'var(--stone)' }}>Quezon City, Metro Manila</span>
              </li>
              <li style={{ fontSize: '14px', marginBottom: '10px', color: 'var(--ink)' }}>
                <strong>Asphalt Records & Apparel</strong> <br />
                <span style={{ fontSize: '12px', color: 'var(--stone)' }}>Poblacion, Makati</span>
              </li>
            </ul>

            <h4 style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px', borderBottom: '1px solid var(--stone-light)', paddingBottom: '8px' }}>
              Inquiries & Support
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--ink)' }}>
              Email: <strong>studio@mnllumiere.com</strong> <br />
              Instagram: <strong>@mnllumiere</strong>
            </p>
          </div>
        </div>

        <div style={{ aspectRatio: '21/9', overflow: 'hidden', borderRadius: '2px', background: 'var(--sand)' }}>
          <img src="images/editorial_look_1.png" alt="Editorial look model" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
