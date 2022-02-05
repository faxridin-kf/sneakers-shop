import React from 'react';
import './App.css';
import { Card, Drawer, Header, Search } from './components';

function App() {
  return (
    <>
      <div className='wrapper clear'>
        <Drawer />
        <Header />
        <div className="content p-40">
          <Search />
        </div>
        <div className='sneakers d-flex'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
