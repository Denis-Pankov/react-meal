import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from './MealList';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button
        className='btn btn-back purple'
        onClick={goBack}
      >
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
