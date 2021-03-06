import React from "react";

export const GidGridItem = ({ title, id, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
