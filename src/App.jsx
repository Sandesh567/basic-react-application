import { useState } from "react";
import Clicker from "./Clicker";

export default function () {
  const [hasClicker, setHasClicker] = useState(true);

  const toggleClick = () => {
    setHasClicker(!hasClicker);
  };

  return (
    <>
      <button onClick={toggleClick}>
        {hasClicker ? "Hide" : "Show"}Clicker
      </button>
      {hasClicker && <Clicker />}
    </>
  );
}
