
const MovieForm = () => {
  return (
    <form className={'d-flex p-3 gap-3 mb-5 card'}>
      <input type="text" placeholder={'Movie title'}/>
      <button type={"submit"} className={'btn btn-primary w-25'}>Add</button>
    </form>

  );
};

export default MovieForm;