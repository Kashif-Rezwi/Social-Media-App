import React from "react";

function MenuOption({ title, handleChange, selectedMenu }) {
  return (
    <div>
      <input
        disabled={title === "Analytics"}
        type="radio"
        id={title}
        name={title}
        checked={title === selectedMenu}
        onClick={() => handleChange(title)}
      />
      <label
        style={{
          cursor: title === "Analytics" && "default",
          border: title === "Analytics" && "1px solid gray",
          color: title === "Analytics" && "gray",
        }}
        htmlFor={title}
      >
        {title}
      </label>
    </div>
  );
}

export default MenuOption;
