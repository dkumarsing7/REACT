import { useState } from "react";

// ...

// ...

function Accordion() {
  const handleClick = (e) => {
    const content = e.target.children;
    const answer = content;
    console.log(answer);
  };
  return (
    <div>
      <div onClick={handleClick} className="box">
        <div className="question">
          <h1>Question 1</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            impedit!
          </h2>
        </div>
        <div className="answer">
          <h1>Answer 1</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quas ullam, fugit qui optio praesentium rerum? Eligendi ipsa sit
            reiciendis?
          </h2>
        </div>
      </div>

      <div className="box">
        <div className="question">
          <h1>Question 1</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            impedit!
          </h2>
        </div>
        <div className="answer">
          <h1>Answer 1</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quas ullam, fugit qui optio praesentium rerum? Eligendi ipsa sit
            reiciendis?
          </h2>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Accordion />
    </>
  );
}
