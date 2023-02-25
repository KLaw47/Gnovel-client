import React, { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { getUsers } from '../../utils/data/userData';

function CollectionView() {
  const [users, setUsers] = useState([]);

  const getAllTheUsers = () => {
    getUsers().then(setUsers);
  };

  useEffect(() => {
    getAllTheUsers();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {users.map((user) => (
        <UserCard key={user.id} userObj={user} onUpdate={getAllTheUsers} />
      ))}
    </div>
  );
}

export default CollectionView;
