import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Employees = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'http://dummy.restapiexample.com/api/v1/employees';
      // https://api.github.com/users/ealipio
      const payload = { token: 'dsdvsdvdsv', data: { name: 'eisson' } };
      const result = await axios({
        method: 'get',
        url,
        data: payload,
      });
      const { data } = result.data;
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {users.map((v, i) => (
        <li key={v.id}>{v.employee_name}</li>
      ))}
    </ul>
  );
};

export default Employees;
