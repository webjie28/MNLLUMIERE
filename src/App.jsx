import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WishlistDrawer from './components/WishlistDrawer';
import LookbookModal from './components/LookbookModal';
import AccountModal from './components/AccountModal';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import LookbookPage from './pages/LookbookPage';
import FoundationPage from './pages/FoundationPage';
import ManifestoPage from './pages/ManifestoPage';
import AboutPage from './pages/AboutPage';
import catalogJSON from './data/apparel_catalog.json';

export default function App() {
  const [view, setView] = useState({ name: 'home', filter: 'all' });
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mnl_wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse wishlist:', e);
      }
    }
  }, []);

  // Sync wishlist updates with localStorage
  const saveWishlist = (newList) => {
    setWishlist(newList);
    localStorage.setItem('mnl_wishlist', JSON.stringify(newList));
  };

  const handleProductClick = (item) => {
    setActiveProduct(item);
    setIsModalOpen(true);
  };

  const handleAddToCloset = (item) => {
    const exists = wishlist.some(w => w.id === item.id);
    if (!exists) {
      const updated = [...wishlist, item];
      saveWishlist(updated);
    }
    setIsModalOpen(false);
    setIsCartOpen(true); // Auto-slide open the drawer
  };

  const handleRemoveFromWishlist = (index) => {
    const updated = [...wishlist];
    updated.splice(index, 1);
    saveWishlist(updated);
  };

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <>
      <Navbar 
        wishlistCount={wishlist.length} 
        onWishlistClick={() => setIsCartOpen(!isCartOpen)} 
        onAccountClick={() => setIsAccountOpen(true)}
        setView={setView} 
      />

      {view.name === 'home' && (
        <Home 
          catalogData={catalogJSON} 
          onProductClick={handleProductClick} 
          setView={setView} 
        />
      )}

      {view.name === 'catalog' && (
        <CatalogPage 
          filter={view.filter} 
          catalogData={catalogJSON} 
          onProductClick={handleProductClick} 
        />
      )}

      {view.name === 'lookbook' && (
        <LookbookPage 
          id={view.id} 
        />
      )}

      {view.name === 'foundation' && (
        <FoundationPage />
      )}

      {view.name === 'manifesto' && (
        <ManifestoPage />
      )}

      {view.name === 'about' && (
        <AboutPage />
      )}

      <WishlistDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        wishlist={wishlist} 
        onRemove={handleRemoveFromWishlist} 
      />

      <LookbookModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        item={activeProduct} 
        onAddToCloset={handleAddToCloset} 
      />

      <AccountModal 
        isOpen={isAccountOpen} 
        onClose={() => setIsAccountOpen(false)} 
      />

      <Footer setView={setView} />
    </>
  );
}
