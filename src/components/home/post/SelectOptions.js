import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function SelectOptions({ idx }) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <div>
        <input
          type="radio"
          id={"like" + idx}
          name={"like" + idx}
          checked={"like" + idx === selectedOption}
          onClick={() => setSelectedOption("like" + idx)}
        />
        <label htmlFor={"like" + idx}>
          <ThumbUpIcon /> Like
        </label>
      </div>
      <div>
        <input
          type="radio"
          id={"dislike" + idx}
          name={"dislike" + idx}
          checked={"dislike" + idx === selectedOption}
          onClick={() => setSelectedOption("dislike" + idx)}
        />
        <label htmlFor={"dislike" + idx}>
          <ThumbDownIcon /> Dislike
        </label>
      </div>
    </>
  );
}

export default SelectOptions;
