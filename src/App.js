import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1 >
          Helloo
        </h1>
        <Button />
        <List />
      </div>
    </ErrorBoundary>
  );
}

export default App;
