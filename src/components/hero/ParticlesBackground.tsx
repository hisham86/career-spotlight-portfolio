
import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Enhanced dark theme animation effect with orange color scheme
  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const particlesContainer = document.querySelector('.particles-container');
    
    if (!particlesContainer) return;
    
    // Create particles
    for (let i = 0; i < 80; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 1-5px
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 30}s`;
      
      // Random duration
      particle.style.animationDuration = `${Math.random() * 15 + 15}s`;
      
      // Random color (orange/amber hues with increased opacity for dark theme)
      const hue = Math.random() * 30 + 15; // 15-45 (orange to amber)
      const saturation = Math.random() * 30 + 70; // 70-100%
      const lightness = Math.random() * 40 + 60; // 60-100%
      particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.6 + 0.3})`;
      
      // Add to container
      particlesContainer.appendChild(particle);
      particles.push(particle);
    }
    
    // Enhanced Canvas animation for dark theme with orange accents
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Animation variables
    let animationFrameId: number;
    const points: { x: number; y: number; vx: number; vy: number; radius: number; connections: number[] }[] = [];
    const maxDistance = 180; // Increased connection distance for dark theme
    
    // Create points with varying sizes
    for (let i = 0; i < 120; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5, // Varying point sizes
        connections: [],
      });
    }
    
    // Draw function with enhanced visuals for dark theme
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update points
      points.forEach((point, i) => {
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        // Reset connections
        point.connections = [];
        
        // Find connections
        points.forEach((otherPoint, j) => {
          if (i !== j) {
            const dx = point.x - otherPoint.x;
            const dy = point.y - otherPoint.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              point.connections.push(j);
            }
          }
        });
      });
      
      // Draw connections with gradient opacity based on distance
      points.forEach((point, i) => {
        point.connections.forEach(j => {
          if (i < j) { // Draw each connection only once
            const otherPoint = points[j];
            const dx = point.x - otherPoint.x;
            const dy = point.y - otherPoint.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacity * 0.15})`; // Orange color
            ctx.lineWidth = Math.min(point.radius, otherPoint.radius) * 0.5;
            ctx.stroke();
          }
        });
      });
      
      // Draw points with glow effect
      points.forEach(point => {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius * 4
        );
        gradient.addColorStop(0, 'rgba(249, 115, 22, 0.3)'); // Orange color
        gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.8)'; // Orange color
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasSize);
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Enhanced background animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />
      <div className="particles-container" />
      
      {/* Enhanced background gradient for dark theme with orange accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-[180px] opacity-15 animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-amber-700 rounded-full filter blur-[150px] opacity-15 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-[120px] opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </>
  );
};

export default ParticlesBackground;
