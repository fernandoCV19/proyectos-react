import { useEffect, useState } from 'react';

export function useMouseFollower(){
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('effect', { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({x: clientX, y: clientY});
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    } 

    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  return {setEnabled, position, enabled}
}