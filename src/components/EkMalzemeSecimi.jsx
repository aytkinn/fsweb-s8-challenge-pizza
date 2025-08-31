import React from 'react';

export default function EkMalzemeSecimi({ malzemeler, secilenMalzemeler, handleChange }) {
  return (
    <div>
      <h3>Ek Malzemeler (En az 4, en fazla 10)</h3>
      <div className="malzeme-grid">
        {malzemeler.map((malzeme) => (
          <label key={malzeme}>
            <input
              type="checkbox"
              name="extraMalzeme"
              value={malzeme}
              checked={secilenMalzemeler.includes(malzeme)}
              onChange={handleChange}
            />
            {malzeme.charAt(0).toUpperCase() + malzeme.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
}