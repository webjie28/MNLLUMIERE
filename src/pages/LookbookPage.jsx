import React, { useEffect, useState } from 'react';

export default function LookbookPage({ id }) {
  const [lookbookData, setLookbookData] = useState(null);

  const lookbookStories = {
    "foundation": {
      "title": "The Foundation line",
      "description": "Manila Streetwear Discipline. Raw finishings and structural silhouettes.",
      "image1": "images/new_arrival_4.png",
      "image2": "images/new_arrival_12.png"
    },
    "caps": {
      "title": "Signature Caps Collection",
      "description": "Unstructured caps, heavy twill, and race-inspired embroidery.",
      "image1": "images/pursuit_cap.png",
      "image2": "images/editorial_look_2.png"
    },
    "manila_grit": {
      "title": "Manila Grit Collection",
      "description": "Cut and sewn for the concrete of Manila. Malinis pero may swagger.",
      "image1": "images/new_arrival_13.png",
      "image2": "images/new_arrival_14.png"
    }
  };

  useEffect(() => {
    setLookbookData(lookbookStories[id] || lookbookStories["foundation"]);
  }, [id]);

  if (!lookbookData) return null;

  return (
    <section id="shop" style={{ paddingTop: '60px' }}>
      <div className="wrap">
        <div className="grid-head" style={{ borderBottom: '1px solid var(--sand)', paddingBottom: '24px' }}>
          <div className="section-head" style={{ margin: 0 }}>
            <p className="eyebrow">MNL Lumiere Lookbook</p>
            <h2 className="section-title" style={{ fontFamily: 'var(--display)', fontWeight: 700, letterSpacing: '-0.02em' }}>{lookbookData.title}</h2>
          </div>
        </div>

        <div style={{ maxWidth: '800px', margin: '48px auto', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', color: 'var(--stone)', marginBottom: '40px', fontFamily: 'var(--display)', fontStyle: 'italic' }}>
            "{lookbookData.description}"
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '2px' }}>
              <img src={lookbookData.image1} alt="Look 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '2px' }}>
              <img src={lookbookData.image2} alt="Look 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
