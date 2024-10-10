import { useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    let response = await fetch("https://api.chucknorris.io/jokes/random");

    if (response.ok) {
      let joke = await response.json();
      setJoke(joke);
    }
  };

  const showJoke = () => {
    void getJoke();
  };

  const res = Object.values(joke);

  return (
    <div
      className={"d-flex justify-content-center align-items-center flex-column"}
    >
      <div className={"card p-3 mb-5"}>{res[6]}</div>
      <button
        onClick={showJoke}
        type={"button"}
        className={"btn btn-primary mb-5"}
      >
        Create new joke
      </button>
    </div>
  );
};

export default Jokes;
