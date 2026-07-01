import React from 'react';

export default function WishlistDrawer({ isOpen, onClose, wishlist, onRemove }) {
  const calculateTotal = () => {
    const sum = wishlist.reduce((acc, item) => {
      const val = parseInt(item.price.replace(/[₱,]/g, '')) || 0;
      return acc + val;
    }, 0);
    return '₱' + sum.toLocaleString('en-US');
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>My Closet Wishlist</h3>
          <button id="cart-close" className="cart-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="cart-items-list">
          {wishlist.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--stone)', fontFamily: 'var(--mono)', padding: '40px 0', fontSize: '13px' }}>
              Your closet is empty.
            </p>
          ) : (
            wishlist.map((item, index) => (
              <div key={item.id + '-' + index} className="cart-item-row">
                <div className="cart-item-thumb">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span className="color">{item.color} {item.selectedSize ? `— Size ${item.selectedSize}` : ''}</span>
                  <span className="price">{item.price}</span>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(index)}>Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total Value</span>
            <span>{calculateTotal()}</span>
          </div>
          <button className="checkout-btn">Reserve Collection</button>
        </div>
      </div>
    </>
  );
}
