const Movie = ({ rank, movieCd, movieNm, openDt }) => {
  return (
    <li className="list-group-item">
      <div>{movieNm}</div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <span>순위: {rank}</span>
        <span>개봉일: {openDt}</span>
      </div>
    </li>
  );
};
export default Movie;
