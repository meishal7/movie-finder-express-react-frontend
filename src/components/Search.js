import React, { useState } from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
  min-width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: var(--div-margin);

  .input-area {
    height: 40px;
    width: 40%;
    border-radius: 5px;
    font-size: 20px;
  }
  .header {
    color: white;
  }
  .submit-btn {
    margin-top: var(--btn-margin);
    width: 10%;
    height: 30px;
    font-size: 20px;
    border-radius: 5px;
  }
`;

const Search = ({ onSubmit }) => {
  const [title, setTitle] = useState(" ");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:8080/?id=${title}`);

    const data = await response.json();
    console.log(data);

    onSubmit(data);

    setTitle("");
  };

  return (
    <SearchStyle>
      <h3 className="header">Search for a Movie...</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          className="input-area"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={titleHandler}
        />

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </SearchStyle>
  );
};

export default Search;
