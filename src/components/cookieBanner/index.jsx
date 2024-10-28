// CookieBanner.js
import React, { useState, useEffect } from 'react';
import './styles.css';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div className="cookie-overlay" />

      {/* Banner de cookies */}
      <div className="Cookie-banner-container">
            
            <div className='cookie-banner-parrafo'>
                  Esta página web utiliza cookies propias y de terceros para fines
                  técnicos y analíticos, así como para elaborar perfiles en base a tus hábitos de
                  navegación y mostrarte publicidad relacionada con tus preferencias.
            </div>
            
            <div className='cookie-banner-botones-container'>
                  <button className='btn-aceptar' onClick={acceptCookies}>Aceptar</button>
                  <button className='btn-rechazar' onClick={rejectCookies}>Rechazar</button>
            </div>
            
      </div>
    </>
  );
};