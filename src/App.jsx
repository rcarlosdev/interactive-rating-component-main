import { useState } from "react";
import thankYou from "./assets/illustration-thank-you.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <!-- Rating state start --> */}
      <div className="card">
        <form action="">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          1 2 3 4 5<button>Submit</button>
        </form>
      </div>
      {/* <!-- Rating state end --> */}

      {/* <!-- Thank you state start --> */}
      <img src={thankYou} alt="thank you" />
      <p>You selected "Add rating here" out of 5</p>

      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      {/* <!-- Thank you state end --> */}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/rcarlosdev" target="_blank">
          rcarlosdev
        </a>
        .
      </div>
    </div>
  );
}

export default App;
