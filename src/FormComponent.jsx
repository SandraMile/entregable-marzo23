import React, { useState } from 'react';
import Card from './Card';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 3 || color.length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setShowCard(false);
    } else {
      setErrorMessage("");
      setShowCard(true);
    }
  };

  return (
    <div>
      <h2>Elige un color</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingresa tu color favorito (formato HEX)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">ENVIAR</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {showCard && <Card name={name} color={color} />}
    </div>
  );
};

export default FormComponent;