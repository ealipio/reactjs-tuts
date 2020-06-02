import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'http://dummy.restapiexample.com/api/v1/employees';
      const result = await fetch(url);
      const { data } = await result.json();
      setUsers(data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {users.map((v, i) => (
            <li key={v.id}>{v.employee_name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
