import React, { useState } from "react";
import { SearchButton } from "./SearchButton/SearchButton.component";
import { SearchInput } from "./SearchInput/SearchInput.component";

type SearchProps = {
  setFilterQuery: (filterQuery: string) => void;
};

export const Search = ({ setFilterQuery }: SearchProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const htmlId = isOpen ? "search-form-open" : "search-form";
  let timer: NodeJS.Timeout;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    const filterQuery = event.target.value;
    timer = setTimeout(() => setFilterQuery(filterQuery), 1000);
  };

  return (
    <form id={htmlId}>
      {isOpen && <SearchInput handleChange={handleChange} />}
      <SearchButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setFilterQuery={setFilterQuery}
      />
    </form>
  );
};
