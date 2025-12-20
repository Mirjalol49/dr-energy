import React, { useEffect, useRef, memo } from 'react';

/**
 * SnowEffect Component
 * Renders an animated snowfall effect using HTML5 Canvas
 * Optimized for performance with proper cleanup and memoization
 */
const SnowEffect = memo(() => {
  const canvasRef = useRef(null);
  const snowflakesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true // Performance optimization for animations
    });
    if (!ctx) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    /**
     * Draw a realistic 6-pointed snowflake
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} radius - Snowflake radius
     * @param {number} rotation - Rotation angle in radians
     * @param {number} opacity - Opacity value (0-1)
     */
    const drawSnowflake = (x, y, radius, rotation, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
      ctx.lineWidth = radius / 8;
      ctx.lineCap = 'round';

      // Draw 6 main branches
      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.rotate((Math.PI / 3) * i);

        // Main branch
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -radius);
        ctx.stroke();

        // Side branches
        ctx.beginPath();
        ctx.moveTo(0, -radius * 0.6);
        ctx.lineTo(-radius * 0.25, -radius * 0.75);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -radius * 0.6);
        ctx.lineTo(radius * 0.25, -radius * 0.75);
        ctx.stroke();

        ctx.restore();
      }

      // Center circle
      ctx.beginPath();
      ctx.arc(0, 0, radius / 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    /**
     * Create a single snowflake with random properties
     * @returns {Object} Snowflake object
     */
    const createSnowflake = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight - window.innerHeight,
      radius: Math.random() * 4 + 3, // 3-7px for good visibility
      speed: Math.random() * 0.8 + 0.3, // 0.3-1.1 px/frame
      wind: Math.random() * 0.4 - 0.2, // -0.2 to 0.2 horizontal drift
      opacity: Math.random() * 0.4 + 0.4, // 0.4-0.8
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02, // Slow rotation
    });

    // Initialize snowflakes (60 for good balance of visual effect and performance)
    const snowflakeCount = 60;
    snowflakesRef.current = Array.from({ length: snowflakeCount }, createSnowflake);

    /**
     * Animation loop - updates and draws all snowflakes
     */
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      snowflakesRef.current.forEach((flake) => {
        // Update position
        flake.y += flake.speed;
        flake.x += flake.wind;
        flake.rotation += flake.rotationSpeed;

        // Reset snowflake if it goes off screen
        if (flake.y > window.innerHeight + 20) {
          flake.y = -20;
          flake.x = Math.random() * window.innerWidth;
        }
        if (flake.x > window.innerWidth + 20) {
          flake.x = -20;
        } else if (flake.x < -20) {
          flake.x = window.innerWidth + 20;
        }

        // Draw the snowflake
        drawSnowflake(flake.x, flake.y, flake.radius, flake.rotation, flake.opacity);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // Empty dependency array - only run on mount/unmount

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
      role="presentation"
    />
  );
});

// Display name for debugging
SnowEffect.displayName = 'SnowEffect';

export default SnowEffect;
