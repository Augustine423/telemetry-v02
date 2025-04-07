import { useEffect, useRef, useState } from "react";

export const usePopupPosition = (isOpen, triggerRef) => {
  const popupRef = useRef(null);
  const [popupStyle, setPopupStyle] = useState({});

  const calculatePosition = () => {
    if (!triggerRef.current || !popupRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popupHeight = 132; // Approximate popup height (3 buttons * 44px each)
    const spaceBelow = window.innerHeight - triggerRect.bottom;
    
    let topPosition, positionClass;
    
    if (spaceBelow < popupHeight && triggerRect.top > popupHeight) {
      // Position above the trigger
      positionClass = 'top';
      topPosition = triggerRect.top - popupHeight - 8;
    } else {
      // Position below the trigger
      positionClass = 'bottom';
      topPosition = triggerRect.bottom + 8;
    }

    setPopupStyle({
      top: `${topPosition}px`,
      right: `${window.innerWidth - triggerRect.right}px`,
      positionClass
    });
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      
      const handleScroll = () => calculatePosition();
      const handleResize = () => calculatePosition();

      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen]);

  return { popupRef, popupStyle };
};