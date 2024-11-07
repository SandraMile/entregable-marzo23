import React from 'react';

const Card = ({ name, color }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '16px' }}>
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div style={{ backgroundColor: color, padding: '8px', color: 'white' }}>
        {color}
      </div>
    </div>
  );
};

export default Card;