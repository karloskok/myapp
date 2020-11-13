import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Item({match}) {

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);


    const fetchItem = async() => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${match.params.id}`);
        const it = await data.json();

        console.log(it);
        setItem(it);
    };

    

  return (
    <div>
      {
          item.map(item => (
            <div key={item.id}>
              <h3>ID: {item.id}</h3>
              <h2>Title: {item.title}</h2>
              <h4>Url: {item.url}</h4>
              <img src={item.url} />
            </div>
            )
          )
        }
    </div>
  );
}

export default Item;
