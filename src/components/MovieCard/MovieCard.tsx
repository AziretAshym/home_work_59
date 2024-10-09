
const MovieCard = () => {
  return (
    <div className={'mb-3 d-flex justify-content-between border p-3 rounded-2'} style={{width: '400px'}}>
      <input type="text" value={'as'} style={{width: '290px'}}/>
      <button type={"button"} className={'border-0 bg-body d-inline-block'}>
        <img src="https://cdn-icons-png.flaticon.com/128/1617/1617543.png" alt="delete" className={'w-25'}/>
      </button>
    </div>
  );
};

export default MovieCard;