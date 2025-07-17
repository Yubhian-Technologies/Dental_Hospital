import React from 'react';
import DesktopApp from './DesktopApp';
import MobileApp from './components/MobileApp';

function App() {
  // Check URL parameters for forced view
  const urlParams = new URLSearchParams(window.location.search);
  const forceView = urlParams.get('view');
  
  // Check device type
  const isMobile = window.innerWidth <= 768;
  
  // Determine which version to show
  if (forceView === 'mobile') {
    return <MobileApp />;
  } else if (forceView === 'desktop') {
    return <DesktopApp />;
  } else {
    // Auto-detect based on screen size
    return isMobile ? <MobileApp /> : <DesktopApp />;
  }
}

export default App;
