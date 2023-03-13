import './App.css';
import React from 'react';
import { useMouseFollower } from './hooks/useMouseFollower';

function App() {

  const {position, setEnabled, enabled} = useMouseFollower();


  return (
    <div>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </div>
  );
}

export default App;
