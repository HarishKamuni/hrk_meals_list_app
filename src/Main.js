import axios from 'axios';
import { useState, useEffect } from 'react';
import './style.css';

function Main() {
  const [items, setitems] = useState([]);

  const fetchData = async () => {
    const { data } = await axios(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    );
    // console.log(data.meals);
    setitems(data.meals);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-success italic mb-4">Meals List</h1>
        <div className="items-container">{itemslist}</div>;
      </div>
    </>
  );
}

export default Main;
