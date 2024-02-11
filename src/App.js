import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?page=1&results=3&seed=abc');
      const data = await response.json();
      setUsers(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {users.length > 0 && (
        <div className="main-card">
          {users.map((user, index) => (
            <div className="card" key={index}>
              <div className="image-container">
                <img src={user.picture.large} alt={`User ${index + 1}`} />
              </div>
              <div className="info-card">
                <h2>{`${user.name.first} ${user.name.last}`}</h2>
                <p>{user.email}</p>
                <p>{`${user.location.city}, ${user.location.country}`}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
