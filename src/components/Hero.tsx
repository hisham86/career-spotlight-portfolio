
import { ArrowDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ threshold: 0.2 });
  const ctaRef = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particles animation effect
  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const particlesContainer = document.querySelector('.particles-container');
    
    if (!particlesContainer) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 20}s`;
      
      // Random duration
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      // Random color (blue/purple hues)
      const hue = Math.random() * 60 + 200; // 200-260 (blue to purple)
      const saturation = Math.random() * 20 + 70; // 70-90%
      const lightness = Math.random() * 30 + 60; // 60-90%
      particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.5 + 0.2})`;
      
      // Add to container
      particlesContainer.appendChild(particle);
      particles.push(particle);
    }
    
    // Canvas animation
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
    const points: { x: number; y: number; vx: number; vy: number; connections: number[] }[] = [];
    
    // Create points
    for (let i = 0; i < 100; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      });
    }
    
    // Draw function
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
            
            if (distance < 150) {
              point.connections.push(j);
            }
          }
        });
      });
      
      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      
      points.forEach((point, i) => {
        point.connections.forEach(j => {
          if (i < j) { // Draw each connection only once
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(points[j].x, points[j].y);
          }
        });
      });
      
      ctx.stroke();
      
      // Draw points
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
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
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="particles-container" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10 animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-600 rounded-full filter blur-[120px] opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="max-w-3xl">
            <p className="inline-block mb-4 px-3 py-1 text-sm font-medium text-primary bg-primary/20 rounded-full animate-fade-in backdrop-blur-sm">
              Senior Product Manager
            </p>
            
            <h1 
              ref={titleRef}
              className="reveal-text text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 glow-text"
            >
              Crafting impactful products that shape the future of technology.
            </h1>
            
            <p 
              ref={subtitleRef}
              className="reveal-text text-lg md:text-xl text-foreground/80 max-w-2xl mb-8"
            >
              I'm Hisham, a product leader with a passion for creating user-centric experiences that drive business growth. Specializing in product strategy, UX design, and cross-functional team leadership.
            </p>
            
            <div 
              ref={ctaRef}
              className="reveal-text flex flex-wrap gap-4"
            >
              <a href="#experience" className="btn-primary">
                View My Experience
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="reveal-text flex-shrink-0 order-first md:order-last mx-auto md:mx-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
              <img
                src="/lovable-uploads/5af4de58-0fa2-42c1-bb36-658229e9c51f.png"
                alt="Hisham - Senior Product Manager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-4 ring-primary/20 rounded-full"></div>
              
              {/* Animated glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-indigo-500/30 rounded-full blur-xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#experience" className="text-primary/60 hover:text-primary transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
