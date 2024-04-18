import React from "react";
import ReactSelect from "react-select";
type ButtonProps = {
  styling: string;
};
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" />
    </button>
  );
};

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form className="searchbar gap-3" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <ReactSelect className="w-full" />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          width={25}
          className="absolute ml-4"
          alt=""
        />
        <input
          type="text"
          placeholder="Ör:Civic"
          className="searchbar__input rounded text-black"
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <SearchButton styling={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
