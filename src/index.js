import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

// function Test() {
//   const [rating, setRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="#761350" onSetRating={setRating} />
//       <p>This movie was rated {rating} stars</p>
//     </div>
//   );
// }

/* <StarRating
      maxRating={10}
      messages={[
        "Unwatchable",
        "Dissapointing",
        "Terrible",
        "Bad",
        "Meh",
        "Ok",
        "Decent",
        "Nice",
        "Good",
        "Amazing",
      ]}
      defaultRating={5}
      color="#96F353"
    />
    <StarRating maxRating={10} size={24} color="#1F7F0F" showMessage={false} />
    <Test /> */

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
