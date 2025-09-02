'use client';

import { useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    const { theme, mounted } = useTheme();

    useEffect(() => {
        if (!mounted) return; // Don't initialize canvas until theme is mounted
        
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        
        const particleColor = theme === 'dark' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.3)';
        const lineColor = theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.2)';

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        const mouse = {
            x: null,
            y: null,
            radius: 150
        };

        window.addEventListener('mousemove', event => {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        let particlesArray = [];
        
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
                this.originalSize = size;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                
                // Mouse interaction - particles move away from mouse
                if (mouse.x !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        // Increase size when mouse is near
                        this.size = this.originalSize * 2;
                        
                        // Move particle away from mouse
                        if (distance > 0) {
                            this.x -= (dx / distance) * 2;
                            this.y -= (dy / distance) * 2;
                        }
                    } else {
                        this.size = this.originalSize;
                    }
                }
                
                this.x += this.directionX;
                this.y += this.directionY;
            }
        }

        function init() {
            particlesArray = [];
            // Reduce particle count significantly - from 9000 to 30000 divisor
            let numberOfParticles = Math.min((canvas.width * canvas.height) / 30000, 50);
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 3) + 1; // Smaller particles
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 2) - 1; // Slower movement
                let directionY = (Math.random() * 2) - 1;
                
                particlesArray.push(new Particle(x, y, directionX, directionY, size, particleColor));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    // Increase connection distance threshold
                    if (distance < (canvas.width/4) * (canvas.height/4)) {
                        opacityValue = 1 - (distance/50000);
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 0.5; // Thinner lines
                        ctx.globalAlpha = opacityValue;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        window.addEventListener('resize', resizeCanvas);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, mounted]);

    // Don't render canvas until theme is mounted
    if (!mounted) {
        return null;
    }

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
};

export default ParticleCanvas;
