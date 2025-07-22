 import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(r => r.json())
      .then(setUser);
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <section>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </section>
  );
}

export default UserProfile;