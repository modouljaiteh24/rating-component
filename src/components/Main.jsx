import React, { useState } from "react";
import Button from "./Button";
import ReatingFeedback from "./ReatingFeedback";
import ShowRating from "./ShowRating";

const Main = () => {
  const [showRating, setShowRating] = useState(true);
  const [rating, setRating] = useState(0);
  const handleSubmit = () => {
    if (rating > 0 && rating <= 5) {
      setShowRating(false);
    } else {
      alert("Please click rating");
    }
  };

  return (
    <div>
      <main>
        <h1>Interactive Rating Component</h1>
        <div className="card">
          {showRating ? (
            <ShowRating
              rating={rating}
              handleSubmit={handleSubmit}
              setRating={setRating}
            />
          ) : (
            <ReatingFeedback rating={rating} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
