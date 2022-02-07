import React from 'react';
import sneaker from './assets/sneakers/1.jpg'
import './App.css';
import { Card, Drawer, Header, Search } from './components';
const arr = [
  { name: 'hello', price: 3093 },
  { name: 'sneakers', price: 3093 },
  { name: 'bro', price: 3093 },
  { name: 'koca style', price: 3093 },
]
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
          {arr.map((obj, index) => <Card
            key={index + obj}
            title={obj.name}
            price={obj.price}
            imgUrl={sneaker}
            onClick={() => console.log(obj)}
          />)}
        </div>
      </div>
    </>
  );
}

export default App;
