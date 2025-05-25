const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Core Web Vitals
      getCLS(onPerfEntry);  // Cumulative Layout Shift
      getFID(onPerfEntry);  // First Input Delay
      getLCP(onPerfEntry);  // Largest Contentful Paint
      
      // Additional metrics
      getFCP(onPerfEntry);
      getTTFB(onPerfEntry);
      
      // Initialize custom tracking
      if (typeof window !== 'undefined') {
        trackCustomMetrics();
      }
    });
  }
};

// Custom metrics tracking
function trackCustomMetrics() {
  const potteryTiming = {
    productListLoaded: false,
    heroImageLoaded: false,
    cartReady: false
  };

  function logPotteryTiming() {
    if (process.env.NODE_ENV === 'development') {
      console.log('Pottery Component Load Status:', {
        products: potteryTiming.productListLoaded,
        hero: potteryTiming.heroImageLoaded,
        cart: potteryTiming.cartReady
      });
    }
  }

  // Event listeners
  window.addEventListener('ProductListLoaded', () => {
    potteryTiming.productListLoaded = true;
    logPotteryTiming();
  });

  window.addEventListener('HeroImageLoaded', () => {
    potteryTiming.heroImageLoaded = true;
    logPotteryTiming();
  });

  window.addEventListener('CartReady', () => {
    potteryTiming.cartReady = true;
    logPotteryTiming();
  });
}

// E-commerce event tracking
export function trackPotteryEvent(eventName, metadata = {}) {
  if (typeof window !== 'undefined') {
    const eventData = {
      ...metadata,
      site: 'ClayCraft Pottery',
      timestamp: new Date().toISOString()
    };

    if (process.env.NODE_ENV === 'development') {
      console.log(`Pottery Event: ${eventName}`, eventData);
    }

    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    }
  }
}

export default reportWebVitals;