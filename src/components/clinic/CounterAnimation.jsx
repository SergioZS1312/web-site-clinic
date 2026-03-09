'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CounterAnimation component
 * Animates a number from 0 to target value when scrolled into view
 * 
 * @param {number} target - The target number to count to
 * @param {string} suffix - Optional suffix (e.g., "+", "%")
 * @param {string} prefix - Optional prefix (e.g., "$")
 * @param {number} duration - Animation duration in milliseconds (default: 2000)
 * @param {string} className - Additional CSS classes
 */
export default function CounterAnimation({ 
  target, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  className = '' 
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
