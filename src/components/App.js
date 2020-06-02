import React, { lazy, Suspense } from 'react';

import User from './User';

import './App.css';

const Employees = lazy(() => import('./Employees'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Employees />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
