//# Section 7. Debugging React Apps

//# 83. Understanding React Error Messages
//# 84. Analyzing Code Flow & Warnings
/*
import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
*/

//# 85. Working with Breakpoints
//# 86. Using the React DevTools
import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
