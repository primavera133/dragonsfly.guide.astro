import React from "react";

import { iSpecie } from "../types/specie";

export const Species = ({ data }: { data: iSpecie[] }) => {
  return (
    <ul>
      {data.map((s) => (
        <li key={s.scientific_name}>
          <div>
            <a href={`/specie/${s.scientific_name}`}>
              <strong>{s.scientific_name}</strong>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};
