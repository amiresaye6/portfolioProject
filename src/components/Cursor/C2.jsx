import { useState, useEffect } from 'react';
import cursorImages from './cursorImages';

const CursorFollower2 = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorImage, setCursorImage] = useState('');

  useEffect(() => {
    const updateCursorImage = () => {
      const storedCursor = sessionStorage.getItem('cursor');
      if (storedCursor && cursorImages[storedCursor]) {
        setCursorImage(cursorImages[storedCursor]);
      }
    };

    // Initial update
    updateCursorImage();

    // Update cursor image on sessionStorage change
    window.addEventListener('storage', updateCursorImage);

    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX *1.1 + 2, y: event.clientY * 1.1 + 2 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('storage', updateCursorImage);
    };
  }, [cursorImage]); // Update when cursorImage changes

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        width: '40px',
        height: '40px',
        backgroundImage: `url(${cursorImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default CursorFollower2;
