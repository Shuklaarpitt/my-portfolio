import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particlesArray = [];

    // Interaction Settings
    const mouse = {
      x: null,
      y: null,
      radius: 80 // TUNED: Much smaller "Fear" radius (was 200)
    };

    const handleResize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        
        // Physics Variables
        this.density = (Math.random() * 40) + 10; // TUNED: Higher density = faster reaction
        this.angle = Math.random() * 360;
        this.angleSpeed = Math.random() * 0.05 + 0.01; // Faster wave motion
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        // --- 1. Fast Mouse Interaction (The "Fear") ---
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;

        // If mouse is VERY close
        if (distance < mouse.radius) {
          // TUNED: "15" is a high speed multiplier. They will dart away FAST.
          this.x -= forceDirectionX * force * this.density * 0.6; 
          this.y -= forceDirectionY * force * this.density * 0.6;
        } else {
          // --- 2. Snap Back (The "Liquid Healing") ---
          if (this.x !== this.baseX) {
             let dx = this.x - this.baseX;
             this.x -= dx / 10; // TUNED: Lower number = Faster return (Snap back)
          }
          if (this.y !== this.baseY) {
             let dy = this.y - this.baseY;
             this.y -= dy / 10;
          }
          
          // --- 3. Constant Jitter/Flow ---
          // This keeps them moving even when you don't touch them
          this.x += Math.cos(this.angle) * 0.8; 
          this.y += Math.sin(this.angle) * 0.8; 
          this.angle += this.angleSpeed;
        }
        
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      // Ultra-High Density for the "Thorne" look
      let numberOfParticles = (width * height) / 2000; 

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1; // Tiny particles (1px - 3px)
        let x = Math.random() * width;
        let y = Math.random() * height;
        
        // Detailed Thorne Color Mix
        let color;
        let r = Math.random();
        
        if (r > 0.92) color = '#ff5f56'; // Red (Rare pop)
        else if (r > 0.85) color = '#ffbd2e'; // Orange (Occasional)
        else if (r > 0.6) color = '#00d4ff'; // Cyan (Common)
        else color = '#1a2a6c'; // Dark Blue/Purple (Deep background)

        particlesArray.push(new Particle(x, y, size, color));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      requestAnimationFrame(animate);
    };

    // Event Listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    // Reset mouse when leaving so particles don't get stuck
    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    handleResize();
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
        background: 'transparent'
      }}
    />
  );
};

export default ParticleBackground;