import React, { useState } from 'react';

export default function AccountModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      setUser({ name: formData.name || 'Member', email: formData.email });
    } else {
      setUser({ name: formData.email.split('@')[0] || 'Member', email: formData.email });
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: '', email: '' });
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-container" style={{ maxWidth: '440px' }}>
        <button id="modal-close" className="modal-close" onClick={onClose}>&times;</button>
        <div style={{ padding: '40px' }}>
          
          {isLoggedIn ? (
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Member Club</span>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '26px', margin: '14px 0' }}>Welcome, {user.name}</h3>
              <p style={{ fontSize: '13px', color: 'var(--stone)', marginBottom: '32px' }}>{user.email}</p>
              
              <div style={{ background: 'var(--sand)', padding: '20px', borderRadius: '2px', textAlign: 'left', marginBottom: '32px' }}>
                <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Speed Club Status
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600' }}>Bronze Tier Member</p>
                <p style={{ fontSize: '12px', color: 'var(--stone)', marginTop: '4px' }}>Free shipping & early access to drops activated.</p>
              </div>

              <button className="modal-cta" style={{ width: '100%' }} onClick={handleLogout}>
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>MNL Speed Club</span>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '26px', marginTop: '10px' }}>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </h3>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {isSignUp && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--stone)' }}>Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      style={{ background: 'transparent', border: '1px solid var(--sand)', padding: '12px', fontSize: '14px', borderRadius: '2px', color: 'var(--ink)', outline: 'none' }}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--stone)' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    style={{ background: 'transparent', border: '1px solid var(--sand)', padding: '12px', fontSize: '14px', borderRadius: '2px', color: 'var(--ink)', outline: 'none' }}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--stone)' }}>Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    style={{ background: 'transparent', border: '1px solid var(--sand)', padding: '12px', fontSize: '14px', borderRadius: '2px', color: 'var(--ink)', outline: 'none' }}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <button type="submit" className="modal-cta" style={{ width: '100%', marginTop: '12px' }}>
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </button>
              </form>

              <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--stone)', marginTop: '24px' }}>
                {isSignUp ? 'Already a member?' : 'New to Speed Club?'}{' '}
                <span
                  style={{ color: 'var(--gold)', cursor: 'pointer', fontWeight: '500' }}
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign In' : 'Create Account'}
                </span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
