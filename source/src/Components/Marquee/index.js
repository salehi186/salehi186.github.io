import React, { useEffect, useState } from "react";
import "./index.css";

export const Marquee = ({ duration = 1000, animation = "lightSpeedIn", children }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const IntervalId = setTimeout(
      () => setIndex(index + 1 < children.length ? index + 1 : 0),
      duration
    );
  }, [children, index]);
  return <span className={animation}>{children[index]}</span>;
};

