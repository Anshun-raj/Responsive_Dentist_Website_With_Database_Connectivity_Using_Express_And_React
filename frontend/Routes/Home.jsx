import React, { useLayoutEffect, useState } from "react";
import "../Style/Home.css";
function Home() {
  const [isAppoin, setIsAppoin] = useState(false);
  useLayoutEffect(() => {
    console.log("State changed");
  }, [setIsAppoin]);
  function alertMsg()
  {
    alert("Your Appointment has been fixed");
  }

  return (
    <div className="home">
      <div className="homeData">
        <h2>Make Your Smile Shine</h2>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Deleniti,
          Dolores. Ad Rerum Eum Assumenda Mollitia Autem Quo Nulla, Consequatur
          Quisquam Est? Dolorem Fugiat Fugit Amet Dolores Provident Velit Eos
          Est.
        </p>
        <button className="btn" onDoubleClick={alertMsg} onClick={() => setIsAppoin(!isAppoin)}>
          {isAppoin ? "Appoinment Done!" : "Make Appoinment"}
        </button>
      </div>
    </div>
  );
}

export default Home;
