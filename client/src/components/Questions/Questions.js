import React, { useContext, Fragment } from "react";
import QuestionContext from "../../Context/Questions/QuestionsContext";

export const Questions = () => {
  const questionContext = useContext(QuestionContext);

  const { questions } = questionContext;
  return (
    <Fragment>
      {questions.map(question => (
        <h3>{questions.title}</h3>
      ))}
    </Fragment>
  );
};
export default Questions;
