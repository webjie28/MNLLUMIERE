import React, { useState } from 'react';

export default function LookbookModal({ isOpen, onClose, item, onAddToCloset }) {
  if (!isOpen || !item) return null;

  const [selectedSize, setSelectedSize] = useState('M');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const handleAdd = () => {
    // Pass selected size to closet
    onAddToCloset({ ...item, selectedSize });
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-container">
        <button id="modal-close" className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-content-grid">
          <div className="modal-gallery">
            <div className="modal-gallery-img">
              <span className="img-label">Look perspective</span>
              <img src={item.image} alt={`${item.name} perspective`} />
            </div>
            <div className="modal-gallery-img">
              <span className="img-label">Detail close-up</span>
              <img src={item.detail_image || item.image} alt={`${item.name} details`} />
            </div>
          </div>
          <div className="modal-info">
            <span className="category">{item.category}</span>
            <h3>{item.name}</h3>
            <p className="color">{item.color}</p>
            <p className="price">{item.price}</p>

            {/* Size Selector */}
            <div className="size-selector-section">
              <div className="size-header">
                <span>Select Size</span>
                <span className="size-guide-trigger">Size Guide</span>
              </div>
              <div className="sizes-grid">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="modal-cta" style={{ width: '100%', marginBottom: '28px' }} onClick={handleAdd}>
              Add to Closet
            </button>

            {/* Product Details Accordions */}
            <div className="accordions-container">
              <div className={`accordion-item ${activeAccordion === 'details' ? 'active' : ''}`}>
                <div className="accordion-trigger" onClick={() => toggleAccordion('details')}>
                  <span>Product Details</span>
                  <span className="icon">{activeAccordion === 'details' ? '−' : '+'}</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    <p>Designed with wide leg cuffed fits, custom hardware, and vintage-finish screen prints. Pre-shrunk and garment dyed for an authentic luxury feel.</p>
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${activeAccordion === 'composition' ? 'active' : ''}`}>
                <div className="accordion-trigger" onClick={() => toggleAccordion('composition')}>
                  <span>Composition & Care</span>
                  <span className="icon">{activeAccordion === 'composition' ? '−' : '+'}</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    <ul>
                      <li>100% Premium Cotton French Terry</li>
                      <li>Heavyweight 450GSM loopback knit</li>
                      <li>Machine wash cold with like colors</li>
                      <li>Hang dry recommended, do not iron print</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${activeAccordion === 'shipping' ? 'active' : ''}`}>
                <div className="accordion-trigger" onClick={() => toggleAccordion('shipping')}>
                  <span>Shipping & Returns</span>
                  <span className="icon">{activeAccordion === 'shipping' ? '−' : '+'}</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    <p>Free standard shipping across Metro Manila. Standard delivery is 2-4 business days. 7-day hassle-free exchange window on all unworn items.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
