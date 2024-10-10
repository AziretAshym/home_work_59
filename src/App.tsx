import "./App.css";
import Movies from "./containers/Movies/Movies.tsx";
import Jokes from "./containers/Jokes/Jokes.tsx";

const App = () => {
  return (
    <>
      <div className="container mt-5 align-items-center">
        <div className="row gap-5">
          <div className="col border p-5 rounded-4">
            <Movies />
          </div>
          <div className="col border p-5 rounded-4">
            <Jokes />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
