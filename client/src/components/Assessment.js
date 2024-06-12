import React, { useState, useEffect } from "react";

const Assessment = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  return (
    <div>
      <h1>Evaluación Diagnóstica</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.questionText}</p>
          {question.options.map((option, idx) => (
            <div key={idx}>
              <input
                type="radio"
                id={`q${index}_o${idx}`}
                name={`q${index}`}
                value={option}
              />
              <label htmlFor={`q${index}_o${idx}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Assessment;
