import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function CatalogPage({ filter, catalogData, onProductClick }) {
  const [subFilter, setSubFilter] = useState('All');
  const [displayProducts, setDisplayProducts] = useState([]);
  const [pageTitle, setPageTitle] = useState('Catalog Lookbook');

  // Hardcoded Gift Card items
  const giftCards = [
    {
      "id": "gift-1",
      "name": "Digital Gift Card (₱1,000)",
      "category": "Gift Drop",
      "price": "₱1,000",
      "tag": "",
      "color": "Digital Code",
      "image": "images/editorial_look_1.png",
      "detail_image": "images/editorial_look_1.png"
    },
    {
      "id": "gift-2",
      "name": "Digital Gift Card (₱2,500)",
      "category": "Gift Drop",
      "price": "₱2,500",
      "tag": "",
      "color": "Digital Code",
      "image": "images/editorial_look_2.png",
      "detail_image": "images/editorial_look_2.png"
    },
    {
      "id": "gift-3",
      "name": "Digital Gift Card (₱5,000)",
      "category": "Gift Drop",
      "price": "₱5,000",
      "tag": "",
      "color": "Digital Code",
      "image": "images/new_arrival_6.png",
      "detail_image": "images/new_arrival_6.png"
    }
  ];

  useEffect(() => {
    // Reset sub-category filter on main filter change
    setSubFilter('All');
  }, [filter]);

  useEffect(() => {
    let filtered = [...catalogData];

    if (filter === 'outerwear') {
      filtered = catalogData.filter(item => item.category.toLowerCase() === 'outerwear');
      setPageTitle('Outerwear Collection');
    } else if (filter === 'tops') {
      filtered = catalogData.filter(item => item.category.toLowerCase() === 'tops');
      setPageTitle('Tops & Sweaters');
    } else if (filter === 'accessories') {
      filtered = catalogData.filter(item => item.category.toLowerCase() === 'accessories');
      setPageTitle('Apparel Accessories');
    } else if (filter === 'bestseller') {
      filtered = catalogData.filter(item => item.tag === 'BESTSELLER');
      setPageTitle('Best Sellers');
    } else if (filter === 'archive') {
      filtered = catalogData.filter(item => item.tag === 'LIMITED');
      setPageTitle('Archive Drops');
    } else if (filter === 'women') {
      filtered = catalogData.filter(item => item.category.toLowerCase() === 'women');
      setPageTitle("Women's Streetwear");
    } else if (filter === 'men') {
      filtered = catalogData.filter(item => item.category.toLowerCase() !== 'women');
      setPageTitle("Men's Streetwear");
    } else if (filter === 'new') {
      filtered = catalogData.filter(item => item.tag === 'NEW');
      setPageTitle("New Arrivals");
    } else if (filter === 'giftcards') {
      filtered = giftCards;
      setPageTitle("Digital Gift Vouchers");
    } else {
      setPageTitle("All Collection");
    }

    // Apply secondary sub-filter (All, Outerwear, Tops, Accessories)
    if (subFilter !== 'All' && filter !== 'giftcards') {
      filtered = filtered.filter(item => item.category.toLowerCase() === subFilter.toLowerCase());
    }

    setDisplayProducts(filtered);
  }, [filter, subFilter, catalogData]);

  return (
    <section id="shop" style={{ paddingTop: '60px' }}>
      <div className="wrap">
        <div className="grid-head" style={{ borderBottom: '1px solid var(--sand)', paddingBottom: '24px' }}>
          <div className="section-head" style={{ margin: 0 }}>
            <p className="eyebrow">MNL Lumiere</p>
            <h2 className="section-title" style={{ fontFamily: 'var(--display)', fontWeight: 700, letterSpacing: '-0.02em' }}>{pageTitle}</h2>
          </div>
          {filter !== 'giftcards' && (
            <div className="grid-filters">
              <span className={subFilter === 'All' ? 'active' : ''} onClick={() => setSubFilter('All')}>All</span>
              <span className={subFilter === 'Outerwear' ? 'active' : ''} onClick={() => setSubFilter('Outerwear')}>Outerwear</span>
              <span className={subFilter === 'Tops' ? 'active' : ''} onClick={() => setSubFilter('Tops')}>Tops</span>
              <span className={subFilter === 'Accessories' ? 'active' : ''} onClick={() => setSubFilter('Accessories')}>Accessories</span>
            </div>
          )}
        </div>

        <div className="product-grid" style={{ marginTop: '48px' }}>
          {displayProducts.length === 0 ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--stone)', fontFamily: 'var(--mono)', padding: '40px 0' }}>
              No items found.
            </p>
          ) : (
            displayProducts.map(item => (
              <ProductCard key={item.id} item={item} onClick={onProductClick} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
