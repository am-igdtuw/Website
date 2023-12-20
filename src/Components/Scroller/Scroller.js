import React, { useState, useEffect } from 'react';
import { ScrollToTopButtonContainer, ArrowIcon } from './ScrollerCss'; 

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <ScrollToTopButtonContainer>
        {isVisible && (
          <ArrowIcon onClick={scrollToTop}>
            ▲ {/* Unicode character for an upward arrow */}
          </ArrowIcon>
        )}
      </ScrollToTopButtonContainer>
    );
  };
  
  export default ScrollToTopButton;