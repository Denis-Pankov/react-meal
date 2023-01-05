import { useParams, useHistory, useRouteMatch, useLocation } from 'react-router-dom';

function Movie() {
  // const valueParams = useParams();
  // console.log(valueParams);
  // const valueHistory = useHistory();
  // console.log(valueHistory);
  const valueRouteMatch = useRouteMatch(); // вытащить параметры из url, плюс узнать точная ли ссылка isExact
  console.log(valueRouteMatch); // {path: '/movies/:id', url: '/movies/1234', isExact: true, params: {id: '1234'}}
  const valueLocation = useLocation(); // вытащить данные поиска и хэша
  console.log(valueLocation); // {pathname: '/movies/1234', search: '', hash: '', state: undefined}
  /* Если http://localhost:3000/movies/1234?lang=ru&api=5548787 ====>>>>>> {pathname: '/movies/1234', search: '?lang=ru&api=5548787', hash: '', state: undefined}*/
  const { id } = useParams(); // можем деструктурировать и использовать уже конкретный id/title/name
  const { goBack } = useHistory(); 
  return (
    <>
      <h1>Some Movie {id}</h1>
      <button
        className='btn'
        onClick={goBack}
      >
        Go Back
      </button>
    </>
  );
}

export { Movie };
