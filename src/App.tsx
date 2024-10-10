import "./App.css";
import Movies from "./containers/Movies/Movies.tsx";
import Jokes from "./containers/Jokes/Jokes.tsx";
import { useState } from 'react';

const App = () => {

  const [page, setPage] = useState<boolean>(false)

  return (
    <>
      <div className="container d-flex flex-column mt-5 align-items-center">
        <button type={"button"} className={'btn btn-warning justify-content-center mb-5'}
                onClick={() => setPage(!page)}>Change ex
        </button>
        {page ? <Movies/> : <Jokes/>}
      </div>
    </>
  );
};

export default App;
