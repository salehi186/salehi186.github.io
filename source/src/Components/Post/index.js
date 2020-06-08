import React from "react";
import "./index.css";
export const Post = ({ head, body, link }) => {
  return (
    <div className="post">
      {head}
      <h3>{body}</h3>
      <a href={link} target="_blank">
        read more
      </a>
    </div>
  );
};
