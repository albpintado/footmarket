import React from "react";

type SearchButtonProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setFilterQuery: (filterQuery: string) => void;
};

export const SearchButton = ({
  isOpen,
  setIsOpen,
  setFilterQuery,
}: SearchButtonProps): JSX.Element => {
  const classes = isOpen
    ? "fa-solid fa-xmark close-form"
    : "fa-solid fa-magnifying-glass open-form";

  const changeButton = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    setFilterQuery("");
  };

  return (
    <button
      aria-label="search-button"
      className={classes}
      onClick={changeButton}
    ></button>
  );
};
