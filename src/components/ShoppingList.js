 import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShoppingList({ items }) {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - <Link to={`/profile/${item.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;