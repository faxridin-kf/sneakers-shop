import React from 'react';
import axios from 'axios';
import './App.css';
import { Card, Drawer, Header, Search } from './components';

function App() {
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://62036da04d21c200170b9d05.mockapi.io/items').then(({ data }) => {
      setItems(data)
    })
  }, []);
  const addToCart = (obj) => {
    setCartItems([...cartItems, obj])
    console.log(cartItems);
    // setCartItems(prev => [...prev, obj])
  };
  return (
    <>
      <div className='wrapper clear'>
        {cartOpen && <Drawer items={cartItems} onClose={() => setCartOpen(false)} />}
        <Header onClickCart={() => setCartOpen(true)} />
        <div className="content p-40">
          <Search />
        </div>
        <div className='sneakers d-flex flex-wrap'>
          {items.map((item, index) =>
            <Card
              key={index + item}
              title={item.title}
              price={item.price}
              imgUrl={item.imageUrl}
              onFavoriteClick={null}
              onPlusClick={(obj) => addToCart(obj)}
          />)}
        </div>
      </div>
    </>
  );
}

export default App;
