'use client';

import { FC } from "react";

const FilterError: FC<{ error: Error }> = ({ error }) => (
  <div id="error">
    <h2>An error ocurred!</h2>
    <p>{error.message}</p>
  </div>
);

export default FilterError;
