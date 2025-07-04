import React from "react";

const Button = ({ onClick, title, className }) => {
  return (
    <div>
      {" "}
      <button className={className} onClick={onClick}>
        {title}
      </button>
      {/* <button
          onClick={() => setRating(2)}
          className={rating == 2 ? "active" : ""}
        >
          2
        </button>
        <button
          onClick={() => setRating(3)}
          className={rating == 3 ? "active" : ""}
        >
          3
        </button>
        <button
          onClick={() => setRating(4)}
          className={rating == 4 ? "active" : ""}
        >
          4
        </button>
        <button
          onClick={() => setRating(5)}
          className={rating == 5 ? "active" : ""}
        >
          5
        </button> */}
    </div>
  );
};

export default Button;
