import React, { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase';

export default function AccountModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [step, setStep] = useState(1);
  const [agreePromo, setAgreePromo] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message.includes('auth/invalid-credential') ? 'Invalid email or password.' : err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update display name with first and last name
      const fullName = `${firstName} ${lastName}`.trim();
      await updateProfile(userCredential.user, {
        displayName: fullName || 'Prestige Member'
      });
      setCurrentUser({
        ...userCredential.user,
        displayName: fullName
      });
      setIsSignUp(false); // Go to profile or close
      setStep(1);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message.includes('auth/email-already-in-use') ? 'Email is already registered.' : err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setErrorMsg('');
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Background Overlay Scrim */}
      <div className="cart-overlay active" onClick={onClose}></div>

      {currentUser ? (
        /* Profile Details Panel (Slide-out drawer style) */
        <div className="cart-drawer active account-drawer" style={{ background: '#1c1c1c', color: '#fff' }}>
          <div className="cart-header" style={{ borderBottom: '1px solid #333' }}>
            <h3 style={{ color: '#fff', fontSize: '16px', letterSpacing: '0.1em' }}>MY PROFILE</h3>
            <button className="cart-close-btn" style={{ color: '#fff' }} onClick={onClose}>&times;</button>
          </div>
          <div style={{ padding: '40px 24px', textAlign: 'center' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)', fontSize: '10px' }}>SPEED CLUB</span>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', color: '#fff', margin: '12px 0 6px' }}>
              {currentUser.displayName || currentUser.email.split('@')[0]}
            </h2>
            <p style={{ color: 'var(--stone)', fontSize: '13px', marginBottom: '32px' }}>{currentUser.email}</p>

            <div style={{ background: '#262626', padding: '24px', borderRadius: '4px', textAlign: 'left', marginBottom: '40px', border: '1px solid #333' }}>
              <p style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
                LUMIERE PRESTIGE STATUS
              </p>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Active Member</h4>
              <p style={{ fontSize: '12px', color: 'var(--stone)', marginTop: '6px', lineHeight: '1.5' }}>
                ✓ Early access to upcoming archive drops is activated.<br />
                ✓ Free shipping on orders above ₱3,500.
              </p>
            </div>

            <button 
              className="checkout-btn" 
              style={{ width: '100%', border: '1px solid #444', color: '#fff', background: 'transparent' }} 
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : isSignUp ? (
        /* Registration Hub Layout: Left Card, Right form (Fullscreen modal look) */
        <div className="account-fullscreen-modal">
          <button className="account-modal-close" onClick={onClose}>&times;</button>
          
          <div className="account-modal-inner-grid">
            {/* Left Side: Glowing Silver Metallic Membership Card */}
            <div className="account-card-showcase">
              <div className="prestige-metall-card">
                <div className="card-gloss"></div>
                <div className="card-top-info">
                  <span className="card-badge-txt">Member</span>
                  <span className="card-logo-txt">LUMIERE</span>
                </div>
                
                {/* Large Reflective Metallic "L" Logo */}
                <div className="card-insignia">L</div>
                
                <div className="card-footer-info">
                  <div className="card-holder">
                    <span>{firstName || 'FIRST'} {lastName || 'LAST'}</span>
                  </div>
                  <span className="card-prestige-label">PRESTIGE</span>
                </div>
              </div>
            </div>

            {/* Right Side: Signup Fields */}
            <div className="account-form-panel">
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--stone)', letterSpacing: '0.1em' }}>
                1 / 2 &nbsp; Details
              </span>
              <div style={{ width: '100%', height: '1px', background: '#333', margin: '8px 0 28px' }}></div>

              {errorMsg && <p style={{ color: '#ff6b6b', fontSize: '13px', marginBottom: '16px' }}>{errorMsg}</p>}

              <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="input-line-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-line-group">
                  <label>First name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your first name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="input-line-group">
                  <label>Last name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your last name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="input-line-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    required 
                    placeholder="Choose password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <label className="checkbox-label" style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer', marginTop: '4px' }}>
                  <input 
                    type="checkbox" 
                    style={{ marginTop: '3px' }}
                    checked={agreePromo}
                    onChange={(e) => setAgreePromo(e.target.checked)}
                  />
                  <span style={{ fontSize: '12px', color: 'var(--stone)', lineHeight: '1.5' }}>
                    Subscribe to receive email updates about Lumiere product launches, promotions and exclusive discounts.
                  </span>
                </label>

                <button type="submit" className="prestige-submit-btn" disabled={loading}>
                  {loading ? 'Processing...' : 'Create Account'}
                </button>
              </form>

              <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--stone)', marginTop: '24px' }}>
                Already got an account?{' '}
                <span 
                  style={{ color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => { setIsSignUp(false); setErrorMsg(''); }}
                >
                  Login here
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Sign In Mode Drawer (Prestige slide-out look) */
        <div className="cart-drawer active account-drawer" style={{ background: '#121212', color: '#fff' }}>
          <button className="cart-close-btn" style={{ color: '#fff', top: '24px', right: '24px' }} onClick={onClose}>&times;</button>
          
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '26px', letterSpacing: '0.15em', fontWeight: '700', color: '#fff', margin: 0 }}>
                LUMIERE
              </h2>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.25em', color: 'var(--stone)', textTransform: 'uppercase' }}>
                PRESTIGE
              </span>
            </div>

            {errorMsg && <p style={{ color: '#ff6b6b', fontSize: '13px', marginBottom: '16px', textAlign: 'center' }}>{errorMsg}</p>}

            <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="input-line-group">
                <input 
                  type="email" 
                  required 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-line-group">
                <input 
                  type="password" 
                  required 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <p style={{ textAlign: 'right', fontSize: '11px', color: 'var(--stone)', cursor: 'pointer', margin: 0 }}>
                Forgot your password?
              </p>

              <button type="submit" className="prestige-submit-btn" style={{ background: '#fff', color: '#000' }} disabled={loading}>
                {loading ? 'Signing in...' : 'Sign in'}
              </button>

              <button 
                type="button" 
                className="prestige-submit-btn" 
                style={{ background: 'transparent', border: '1px solid #444', color: '#fff' }}
                onClick={() => { setIsSignUp(true); setErrorMsg(''); }}
              >
                Create an account
              </button>
            </form>

            <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--stone)', marginTop: '64px', textDecoration: 'underline', cursor: 'pointer' }} onClick={onClose}>
              Explore Prestige
            </p>
          </div>
        </div>
      )}
    </>
  );
}
