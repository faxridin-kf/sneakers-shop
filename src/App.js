import React from 'react';
import axios from 'axios';
import './App.css';
import { Card, Drawer, Header, Search } from './components';

function App() {
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState(
    [{
      "id": "1",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "2",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "3",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "4",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "5",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }, {
      "id": "6",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "7",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "8",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "9",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "10",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }, {
      "id": "11",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "12",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "13",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "14",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "15",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }, {
      "id": "16",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "17",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "18",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "18",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "20",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }, {
      "id": "22",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "23",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "24",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "25",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "26",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }, {
      "id": "27",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "28",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "29",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "30",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "31",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }, {
      "id": "32",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "33",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "34",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "35",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "36",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }, {
      "id": "37",
      "parentId": 3,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/3.jpg",
      "price": 8499
    }, {
      "id": "38",
      "parentId": 2,
      "title": "Мужские Кроссовки Nike Air Max 270",
      "imageUrl": "img/sneakers/2.jpg",
      "price": 15600
    }, {
      "id": "39",
      "parentId": 1,
      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
      "imageUrl": "img/sneakers/1.jpg",
      "price": 12999
    }, {
      "id": "40",
      "parentId": "5",
      "title": "Кроссовки Future Rider",
      "imageUrl": "img/sneakers/5.jpg",
      "price": 16999
    }, {
      "id": "41",
      "parentId": "6",
      "title": "Кроссовки Black Edition",
      "imageUrl": "img/sneakers/6.jpg",
      "price": 16999
    }]
  );
  // React.useEffect(() => {
  //   axios.get('https://62036da04d21c200170b9d05.mockapi.io/items').then(({ data }) => {
  //     setItems(data)
  //   })
  // }, []);
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
