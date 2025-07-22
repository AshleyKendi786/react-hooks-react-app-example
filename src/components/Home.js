 import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(setUsers);
  }, []);

  return (
    <section>
      <h1>Home</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default Home;