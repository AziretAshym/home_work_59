import React, { useState } from "react";

const MovieForm = ({ addNewMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (movieTitle.trim().length !== 0) {
      addNewMovie(movieTitle);
      setMovieTitle("");
    } else {
      alert("Fill in this field!");
    }
  };

  return (
    <>
      <form
        className={"d-flex p-3 gap-3 mb-5 card"}
        style={{ width: "400px" }}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          value={movieTitle}
          className="form-control"
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder={"Movie title"}
          required
        />
        <button type={"submit"} className={"btn btn-primary w-25"}>
          Add
        </button>
      </form>
    </>
  );
};

export default MovieForm;
