 import React, { useState } from 'react';

function ItemForm({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ItemForm;