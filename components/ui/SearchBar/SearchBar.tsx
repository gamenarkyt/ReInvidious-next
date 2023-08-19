"use client";
import { ChangeEvent, FC, useState } from "react";
import styles from "./SearchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar: FC = () => {
  const [query, setQuery] = useState("");

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <AiOutlineSearch className={styles.searchicon} />
      <input
        className={styles.searchbar}
        type="search"
        placeholder="Search something..."
        value={query}
        onChange={onInputChangeHandler}
      />
    </div>
  );
};
