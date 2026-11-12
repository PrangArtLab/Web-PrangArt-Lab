import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const addHoverState = () => setHovering(true);
    const removeHoverState = () => setHovering(false);

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, input, textarea').forEach((element) => {
      element.addEventListener('mouseenter', addHoverState);
      element.addEventListener('mouseleave', removeHoverState);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, input, textarea').forEach((element) => {
        element.removeEventListener('mouseenter', addHoverState);
        element.removeEventListener('mouseleave', removeHoverState);
      });
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracotta/80 bg-terracotta/10 transition-all duration-200 md:block ${hovering ? 'scale-150' : 'scale-100'}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${hovering ? 1.8 : 1})` }}
    />
  );
}
