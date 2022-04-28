import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((imgs) => {
      setTimeout(() => {
        setState({ loading: false, data: imgs });
      }, 1000);
    });
  }, [category]); // si cambia la categoria el useEffec cambiara, se vovlera a cambiar

  //setTimeout(() => setState({ loading: false, data: [1, 2, 3, 4] }), 3000);

  return state;
};
