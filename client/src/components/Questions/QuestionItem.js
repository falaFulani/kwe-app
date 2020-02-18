import React from "react";

export const QuestionItem = ({ question }) => {
  const { id, title, decription } = question;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {title} {""}
      </h3>
    </div>
  );
};
