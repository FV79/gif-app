import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
  // const categories = ["Marvel", "DC", "Harry Potter"];

  const [categories, setCategories] = useState(["Harry Potter"]);

  /* const handleAdd = () => {
    //setCategories([...categories, "Dragon ball"]);
    setCategories((cats, i) => [...cats, `Dragon ball`]);
  }; */

  return (
    <div>
      <h2>Hola</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </div>
  );
};
