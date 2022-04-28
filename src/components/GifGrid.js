import React from "react";
import { useFetchGifs } from "../hooks/useFetchGif";
import { GidGridItem } from "./GidGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  /*  const [img, setImg] = useState([]);
  // es cuando lanza la aplicacion por primera vez, hara lo siguiente
 
 */
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">cargando....</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GidGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
