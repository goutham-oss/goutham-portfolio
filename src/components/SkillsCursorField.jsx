import React, { useEffect, useRef } from 'react';

export default function SkillsCursorField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let mouseX = -9999;
    let mouseY = -9999;
    let cursorX = -9999;
    let cursorY = -9999;
    let isInside = false;
    let ringOpacity = 0;
    let targetRingOpacity = 0;
    let ringPulse = 0;
    let animationFrameId;

    const section = canvas.parentElement;

    function resize() {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resize);
    resize();

    const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 50);
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * (width || window.innerWidth);
        this.y = init ? Math.random() * (height || 800) : (height + 10);
        this.radius = Math.random() * 1.5 + 0.7;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = -(Math.random() * 0.35 + 0.15);
        this.isSilver = Math.random() > 0.65;
        this.baseAlpha = this.isSilver ? (Math.random() * 0.14 + 0.12) : (Math.random() * 0.18 + 0.14);
        this.alpha = this.baseAlpha;
        this.phase = Math.random() * Math.PI * 2;
      }
      update() {
        this.phase += 0.015;
        this.x += this.vx + Math.sin(this.phase) * 0.18;
        this.y += this.vy;
        if (!isReduced && isInside && cursorX > 0 && cursorY > 0) {
          const dx = this.x - cursorX;
          const dy = this.y - cursorY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 140;
          if (dist < repelRadius && dist > 0.01) {
            const force = (1 - dist / repelRadius) * 1.4;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
            this.alpha = Math.min(0.45, this.baseAlpha + (1 - dist / repelRadius) * 0.2);
          } else {
            this.alpha += (this.baseAlpha - this.alpha) * 0.05;
          }
        } else {
          this.alpha += (this.baseAlpha - this.alpha) * 0.05;
        }
        if (this.y < -20) this.reset();
        if (this.x < -20) this.x = width + 10;
        if (this.x > width + 20) this.x = -10;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isSilver
          ? `rgba(230, 230, 230, ${this.alpha})`
          : `rgba(142, 142, 142, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseEnter = (e) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (cursorX < 0) {
        cursorX = mouseX;
        cursorY = mouseY;
      }
      isInside = true;
      targetRingOpacity = 1;
    };

    const handleMouseMove = (e) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isInside = true;
      targetRingOpacity = 1;
    };

    const handleMouseLeave = () => {
      isInside = false;
      targetRingOpacity = 0;
    };

    if (section) {
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      if (!isReduced) {
        cursorX += (mouseX - cursorX) * 0.085;
        cursorY += (mouseY - cursorY) * 0.085;
        ringOpacity += (targetRingOpacity - ringOpacity) * 0.06;
      } else {
        ringOpacity = 0;
      }

      if (ringOpacity > 0.01 && cursorX > -50 && cursorX < width + 50) {
        ringPulse += 0.035;
        const dynamicRadius = 38 + Math.sin(ringPulse) * 3;
        const haloGrad = ctx.createRadialGradient(
          cursorX,
          cursorY,
          dynamicRadius * 0.2,
          cursorX,
          cursorY,
          dynamicRadius * 2.8
        );
        haloGrad.addColorStop(0, `rgba(230, 230, 230, ${0.08 * ringOpacity})`);
        haloGrad.addColorStop(0.5, `rgba(142, 142, 142, ${0.04 * ringOpacity})`);
        haloGrad.addColorStop(1, 'rgba(13, 13, 13, 0)');
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, dynamicRadius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cursorX, cursorY, dynamicRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(230, 230, 230, ${0.55 * ringOpacity})`;
        ctx.lineWidth = 1.25;
        ctx.stroke();
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (section) {
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="skills-cursor-field"
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
