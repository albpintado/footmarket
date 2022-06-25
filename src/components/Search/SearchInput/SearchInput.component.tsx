import React from "react";

type SearchInputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({
  handleChange,
}: SearchInputProps): JSX.Element => {
  return (
    <input type="text" placeholder="Buscar" onChange={handleChange}></input>
  );
};
