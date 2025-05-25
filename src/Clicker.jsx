import { useEffect, useState } from "react";

export default function Clicker() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0)
  );

  useEffect(() => {
    // getting or retieving the item from local storage
    // using nullish coalescing operator it means if the count is null or Nan then
    //we can specify what the below part should be like 0 or 1
    // localStorage.getItem("count") in this case this will output value
    // Nan and by using nullish we can make that value 0 0r 1
  }, []);

  useEffect(() => {
    // Setting the item ie; count in the local storage
    localStorage.setItem("count", count);
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Click Count:{count} </h1>
      <button onClick={buttonClick}>Click me</button>
    </div>
  );
}

//Localstorage for storing data locally on the browser
