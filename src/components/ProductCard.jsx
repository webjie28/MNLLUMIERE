import React, { useState } from 'react';

const PRODUCT_COLORS = {
  "Owners Club Sweatpant": [
    { name: "Sky Blue", hex: "#92c9e8" },
    { name: "Sienna", hex: "#8d4622" },
    { name: "Chalk", hex: "#f5ece1" },
    { name: "Jet Black", hex: "#1c1c1c" }
  ],
  "MNL Track Jacket v2": [
    { name: "Ink black", hex: "#111111" },
    { name: "Slate grey", hex: "#8a8579" },
    { name: "Sand", hex: "#dfd9cf" }
  ],
  "Asphalt Arch Tee": [
    { name: "Cream sand", hex: "#f3ede3" },
    { name: "Carbon black", hex: "#1f1f1e" },
    { name: "Sky Blue", hex: "#92c9e8" }
  ],
  "Vintage Windbreaker": [
    { name: "Carbon black", hex: "#1e1e1e" },
    { name: "Grey storm", hex: "#7d8285" }
  ],
  "Grit Heavy Cargo Pant": [
    { name: "Stone grey", hex: "#8a8b8c" },
    { name: "Tan", hex: "#c2b29c" },
    { name: "Ink black", hex: "#111111" }
  ],
  "Lumiere Motor Discipline Hoodie": [
    { name: "Gold trim", hex: "#d4af37" },
    { name: "Ink black", hex: "#1c1c1c" },
    { name: "Slate grey", hex: "#8c8c8c" }
  ]
};

export default function ProductCard({ item, onClick }) {
  const swatches = PRODUCT_COLORS[item.name] || [
    { name: item.color || "Default", hex: "#23231f" }
  ];

  const [selectedColor, setSelectedColor] = useState(swatches[0]);

  const handleCardClick = () => {
    // Return the item with updated selected colorway details
    onClick({
      ...item,
      color: selectedColor.name
    });
  };

  const handleSwatchClick = (e, colorObj) => {
    e.stopPropagation(); // Avoid triggering card click
    setSelectedColor(colorObj);
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="product-thumb">
        {item.tag && <span className="tag">{item.tag}</span>}
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div style={{ padding: '16px 0 0', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <p className="product-name" style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '500' }}>{item.name}</p>
        <div className="product-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '12px', color: 'var(--stone)', fontFamily: 'var(--mono)' }}>{selectedColor.name}</span>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>{item.price}</span>
        </div>
        
        {/* Color Swatches Selection */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto' }}>
          {swatches.map((colorObj) => (
            <button
              key={colorObj.name}
              title={colorObj.name}
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: colorObj.hex,
                border: selectedColor.name === colorObj.name ? '1.5px solid var(--ink)' : '1px solid var(--sand)',
                padding: 0,
                cursor: 'pointer',
                outline: 'none',
                boxShadow: selectedColor.name === colorObj.name ? '0 0 0 2px var(--cream), 0 0 0 3.5px var(--ink)' : 'none',
                transition: 'all 0.15s ease'
              }}
              onClick={(e) => handleSwatchClick(e, colorObj)}
            />
          ))}
          {swatches.length > 1 && (
            <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--stone)', marginLeft: '4px' }}>
              +{swatches.length} Colors
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
