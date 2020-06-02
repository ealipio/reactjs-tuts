import React, { useEffect, useState } from 'react';

import axios from 'axios';
import User from './User';

import './App.css';

function App() {
  console.log("---")
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'http://dummy.restapiexample.com/api/v1/employees';
      const payload = { token: 'dsdvsdvdsv', data: { name: 'eisson' } };
      const result = await axios({
        method: 'get',
        url,
        data: payload,
      });
      const { data } = result.data;
      console.log("+++++")
      setUsers(data);
    }
    console.log("***")
    //fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <User />
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
