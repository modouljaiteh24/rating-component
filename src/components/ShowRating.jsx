import React from "react";
import Button from "./Button";

const ShowRating = ({ rating, setRating, handleSubmit }) => {
  const button1 = () => {
    setRating(1);
  };

  const button2 = () => {
    setRating(2);
  };

  const button3 = () => {
    setRating(3);
  };

  const button4 = () => {
    setRating(4);
  };

  const button5 = () => {
    setRating(5);
  };

  return (
    <div className="rating-container">
      <div className="star-icon-wrapper">
        <img src="./images/icon-star.svg" alt="Rating Star Icon" />
      </div>

      <h3>How did we do?</h3>

      {/* <img src="./public/images/check.png" /> */}
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons">
        <Button
          className={rating == 1 ? "active" : ""}
          title="1"
          onClick={button1}
        />
        <Button
          className={rating == 2 ? "active" : ""}
          title="2"
          onClick={button2}
        />
        <Button
          className={rating == 3 ? "active" : ""}
          title="3"
          onClick={button3}
        />
        <Button
          className={rating == 4 ? "active" : ""}
          title="4"
          onClick={button4}
        />
        <Button
          className={rating == 5 ? "active" : ""}
          title="5"
          onClick={button5}
        />
      </div>

      <div className="submit-button-wrapper">
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShowRating;
