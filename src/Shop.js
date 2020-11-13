import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems]  = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        
        const items = await data.json();

        console.log(items);
        setItems(items);
    };

  return (
    <div>
      <h1>Shop page</h1>
      {items.map(item => (
           <Link to={`/shop/${item.id}`}>
             <h6 key={item.id}>{item.title}</h6>
           </Link>
      ))};
    </div>
  );
}

export default Shop;
