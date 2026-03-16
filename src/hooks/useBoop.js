import { useState, useEffect, useCallback } from 'react';
import { useSpring } from 'react-spring'; // Since the rule mentioned react-spring for useBoop.
// Wait, the rules mentioned: "Spring Physics: Use the custom `useBoop` hook (via `react-spring`)..."
// Let me install react-spring then too. I'll make the file and add it later.

export function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const [isBooped, setIsBooped] = useState(false);

  // We actually need framer-motion or react-spring. The current package.json has framer-motion.
  // The rule strictly says: "Spring Physics: Use the custom `useBoop` hook (via `react-spring`)"
  // Okay, I will install react-spring now to be compliant, or I can use framer-motion spring physics if I can't.
  // I'll install react-spring just in case I need to.
  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });

  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = useCallback(() => {
    setIsBooped(true);
  }, []);

  return [style, trigger];
}
