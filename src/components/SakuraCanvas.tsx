import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swing: number;
  swingSpeed: number;
}

export const SakuraCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalCount = Math.min(Math.floor(width / 40), 28);
    const petals: Petal[] = [];

    const createPetal = (): Petal => ({
      x: Math.random() * width,
      y: Math.random() * -height - 100, // Spawn above screen with delay
      size: Math.random() * 7 + 6,
      speedX: Math.random() * 0.35 + 0.15, // Slower horizontal drift
      speedY: Math.random() * 0.45 + 0.25, // Delayed, gentle vertical fall
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.012,
      opacity: Math.random() * 0.45 + 0.3,
      swing: Math.random() * Math.PI * 2,
      swingSpeed: Math.random() * 0.008 + 0.004,
    });

    for (let i = 0; i < petalCount; i++) {
      const petal = createPetal();
      petal.y = Math.random() * height; // Spread initially
      petals.push(petal);
    }

    const drawPetalShape = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.globalAlpha = opacity;

      // Authentic Sakura Petal Path (With Notch Cleft at the Top)
      context.beginPath();
      context.moveTo(0, size); // Stem base
      
      // Left petal edge curving up
      context.bezierCurveTo(-size * 0.8, size * 0.4, -size * 0.8, -size * 0.6, -size * 0.25, -size);
      
      // Iconic Sakura notched tip
      context.quadraticCurveTo(0, -size * 0.65, size * 0.25, -size);
      
      // Right petal edge curving back down
      context.bezierCurveTo(size * 0.8, -size * 0.6, size * 0.8, size * 0.4, 0, size);
      context.closePath();

      // Soft Sakura Blossom Gradient
      const grad = context.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, '#FFE4E1'); // Soft top highlight
      grad.addColorStop(0.5, '#FFB7C5'); // Cherry blossom pink
      grad.addColorStop(1, '#DE5D83'); // Deep stem tone

      context.fillStyle = grad;
      context.fill();
      context.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Physics updates
        p.swing += p.swingSpeed;
        const currentSpeedX = p.speedX + Math.sin(p.swing) * 0.6;
        p.x += currentSpeedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Reset if off canvas
        if (p.y > height + 20 || p.x > width + 20) {
          petals[i] = createPetal();
          petals[i].y = -20;
          petals[i].x = Math.random() * (width + 200) - 100;
        }

        drawPetalShape(ctx, p.x, p.y, p.size, p.rotation, p.opacity);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-90"
    />
  );
};