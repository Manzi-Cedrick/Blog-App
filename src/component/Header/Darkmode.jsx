import React from "react";
import { FaToggleOn } from "react-icons/fa";
function Darkmode(props) {
  return (
    <div className="absolute right-5">
      <FaToggleOn
        className="text-4xl"
        onClick={()=>props.onToggleDarkMode((prevDarkmode) => !prevDarkmode)}
      />
    </div>
  );
}

export default Darkmode;
