
import React, { useEffect, useRef } from 'react';

const GlowingCircle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    // Animation variables
    let animationFrameId: number;
    let rotation = 0;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    // Draw glowing circle with color segments
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create background gradient
      ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Save context for rotation
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      // Draw outer circle
      ctx.beginPath();
      ctx.arc(0, 0, radius + 3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(50, 50, 50, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw blue arc
      ctx.beginPath();
      ctx.arc(0, 0, radius, -Math.PI * 0.5, Math.PI * 0.1);
      ctx.strokeStyle = 'rgba(0, 162, 255, 0.9)';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(0, 162, 255, 0.8)';
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Draw orange arc
      ctx.beginPath();
      ctx.arc(0, 0, radius, Math.PI * 0.5, Math.PI * 1.1);
      ctx.strokeStyle = 'rgba(255, 102, 0, 0.9)';
      ctx.shadowColor = 'rgba(255, 102, 0, 0.8)';
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Draw center circle
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(30, 30, 30, 0.9)';
      ctx.fill();
      
      // Draw center logo (a simple plus symbol)
      ctx.beginPath();
      ctx.moveTo(-15, 0);
      ctx.lineTo(15, 0);
      ctx.moveTo(0, -15);
      ctx.lineTo(0, 15);
      ctx.strokeStyle = 'rgba(80, 80, 80, 0.7)';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      // Draw light beams
      const blueBeamAngle = -Math.PI * 0.2;
      const orangeBeamAngle = Math.PI * 0.8;
      
      // Blue light beam
      ctx.beginPath();
      ctx.moveTo(Math.cos(blueBeamAngle) * radius, Math.sin(blueBeamAngle) * radius);
      ctx.lineTo(Math.cos(blueBeamAngle) * radius * 5, Math.sin(blueBeamAngle) * radius * 5);
      ctx.strokeStyle = 'rgba(0, 162, 255, 0.1)';
      ctx.lineWidth = 80;
      ctx.stroke();
      
      // Orange light beam
      ctx.beginPath();
      ctx.moveTo(Math.cos(orangeBeamAngle) * radius, Math.sin(orangeBeamAngle) * radius);
      ctx.lineTo(Math.cos(orangeBeamAngle) * radius * 5, Math.sin(orangeBeamAngle) * radius * 5);
      ctx.strokeStyle = 'rgba(255, 102, 0, 0.1)';
      ctx.lineWidth = 80;
      ctx.stroke();
      
      // Restore context
      ctx.restore();
      
      // Clock hands
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Hour hand
      ctx.rotate(rotation * 12);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -radius * 0.5);
      ctx.strokeStyle = 'rgba(180, 180, 180, 0.7)';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      // Minute hand
      ctx.rotate(rotation * 3 - rotation * 12);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -radius * 0.6);
      ctx.strokeStyle = 'rgba(220, 220, 220, 0.8)';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      ctx.restore();
      
      // Update rotation
      rotation += 0.001;
      
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
    <div className="w-full h-[300px] overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
};

export default GlowingCircle;
