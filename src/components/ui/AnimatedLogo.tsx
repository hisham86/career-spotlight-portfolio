
import { useEffect, useRef } from 'react';

const AnimatedLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateSize = () => {
      canvas.width = 60;
      canvas.height = 60;
    };
    
    updateSize();
    
    // Animation variables
    let animationFrameId: number;
    let particlesArray: Particle[] = [];
    const numberOfParticles = 15;
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(0, 120, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    // Create particles
    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    // Draw the letter H
    function drawH() {
      if (!ctx) return;
      const lineWidth = 3;
      const color = 'rgba(0, 120, 255, 1)';
      
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      
      // Left vertical line
      ctx.beginPath();
      ctx.moveTo(15, 10);
      ctx.lineTo(15, 50);
      ctx.stroke();
      
      // Right vertical line
      ctx.beginPath();
      ctx.moveTo(45, 10);
      ctx.lineTo(45, 50);
      ctx.stroke();
      
      // Middle horizontal line
      ctx.beginPath();
      ctx.moveTo(15, 30);
      ctx.lineTo(45, 30);
      ctx.stroke();
    }
    
    // Animation loop
    function animate() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      drawH();
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
    />
  );
};

export default AnimatedLogo;
