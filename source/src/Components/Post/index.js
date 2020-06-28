import React from "react";
import "./index.css";
export const Post = ({ content, link }) => {
  return (
    <div className="post">
      {content}
      <a href={link} target="_blank">
        read more
      </a>
    </div>
  );
};
