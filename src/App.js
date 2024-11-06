import { useEffect, useState } from 'react';
//import './App.css';
import Movie from './components/Movie.js';

// https://api.coinpaprika.com/v1/tickers?limit=10

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // 비동기 통신의 시점을 정한다.
    fetch(
      'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8344c161e851343f33ceb78f3de3fc62&targetDt=20241105',
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.boxOfficeResult.dailyBoxOfficeList));
    console.log(movies);
    setLoading(false);
    console.log('useEffect!!');
  }, []);

  const onChangeSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const getSearchMovies = () => {
    return search === ''
      ? movies
      : movies.filter((movie) => movie.movieNm.includes(search));
  };

  return (
    <div className="App container">
      <h1>🎮The Movies🎮</h1>
      {loading ? <strong>Loading....</strong> : null}

      <div className="searchBar">
        <input
          type="text"
          placeholder="검색할 영화 입력..."
          onChange={onChangeSearch}
          value={search}
        />
      </div>

      <ul className="list-group">
        {getSearchMovies().map((movie) => (
          <Movie key={movie.movieCd} {...movie} />
        ))}
      </ul>
    </div>
  );
}

export default App;
