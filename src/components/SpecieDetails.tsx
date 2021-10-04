import React from "react";

export const SpecieDetails = ({ specie }) => {
  return (
    <>
      <div>
        {specie.local_names.map((n: string, i: number) => (
          <span key={n}>
            {i > 0 && ", "}
            <i>{n}</i>
          </span>
        ))}
      </div>
      <div>{specie.description}</div>
    </>
  );
};
