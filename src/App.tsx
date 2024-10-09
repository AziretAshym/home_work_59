import "./App.css";
import Movies from "./containers/Movies/Movies.tsx";

const App = () => {
  return (
    <>
      <div className="container mt-5 align-items-center">
        <div className="row">
          <div className="col">
            <Movies />
          </div>
          <div className="col">Jokes</div>
        </div>
      </div>
    </>
  );
};

export default App;
