
import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AIGlowingSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    // Animation variables
    let animationFrameId: number;
    let rotation = 0;
    const terms = ['AI', 'Machine Learning', 'Lovable', 'Cursor', 'Claude', 'Warp'];
    const termPositions: { term: string; angle: number; distance: number }[] = [];
    
    // Initialize term positions
    terms.forEach((term, index) => {
      const angle = (index / terms.length) * Math.PI * 2;
      termPositions.push({
        term,
        angle,
        distance: 1
      });
    });
    
    // Animation variables
    const centerX = canvas.width / (2 * window.devicePixelRatio);
    const centerY = canvas.height / (2 * window.devicePixelRatio);
    const radius = Math.min(centerX, centerY) * 0.5;
    
    // Draw function
    function draw() {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      // Create background gradient
      const bgGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius * 3
      );
      bgGradient.addColorStop(0, 'rgba(17, 24, 39, 0)');
      bgGradient.addColorStop(1, 'rgba(17, 24, 39, 0.8)');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      // Save context for rotation
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Draw glowing sphere
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0, 'rgba(249, 115, 22, 0.8)'); // Orange core
      gradient.addColorStop(0.7, 'rgba(249, 115, 22, 0.3)');
      gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');
      
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add glow effect
      ctx.shadowColor = 'rgba(249, 115, 22, 0.8)';
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(249, 115, 22, 0.5)';
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Draw orbital paths
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw rotating terms
      const rotationOffset = rotation;
      termPositions.forEach((termPos, index) => {
        const adjustedAngle = termPos.angle + rotationOffset;
        const x = Math.cos(adjustedAngle) * radius * 1.5;
        const y = Math.sin(adjustedAngle) * radius * 1.5;
        
        // Draw term
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(adjustedAngle + Math.PI / 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = 'bold 14px SF Pro Display, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(termPos.term, 0, 0);
        ctx.restore();
        
        // Draw line to center
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x * 0.9, y * 0.9);
        ctx.strokeStyle = `rgba(249, 115, 22, ${0.2 + (0.3 * Math.sin(adjustedAngle + rotation * 5))})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      
      // Restore context
      ctx.restore();
      
      // Update rotation
      rotation += 0.002;
      
      // Continue animation
      animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="reveal-text my-6 relative h-[300px] w-full flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          <span className="glow-text">AI-Powered</span> Experience
        </h3>
        <p className="text-white/70 max-w-md mx-auto text-sm md:text-base">
          Leveraging cutting-edge technologies to deliver exceptional product solutions
        </p>
      </div>
    </div>
  );
};

export default AIGlowingSphere;
