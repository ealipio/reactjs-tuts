import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import UserContext from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={{username:"Eisson Alipio"}}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
