import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Header,
  HeroSection,
  AssemblyFeature,
  PopularProjects,
  CustomerReviews,
  TrustIndicators,
  HowItWorks,
  GetHelpToday,
  NewsletterModal,
  Footer
} from './components';

function App() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  // Show newsletter modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletterModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AssemblyFeature />
      <TrustIndicators />
      <PopularProjects />
      <CustomerReviews />
      <HowItWorks />
      <GetHelpToday />
      <Footer />
      
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </div>
  );
}

export default App;