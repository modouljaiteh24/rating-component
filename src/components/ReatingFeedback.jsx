import React from "react";

const ReatingFeedback = ({ rating }) => {
  return (
    <div className="rating-feedback-container">
      <img
        src="./images/illustration-thank-you.svg"
        alt="Thank you illustrator"
      />

      <div className="rating-result">
        You selected <span id="rating">{rating}</span> out of 5
      </div>

      <h3>Thank you!</h3>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <div className="submit-button-wrapper">
        <a href="/">
          <button className="submit">Rate Again</button>
        </a>
      </div>
    </div>
  );
};

export default ReatingFeedback;
