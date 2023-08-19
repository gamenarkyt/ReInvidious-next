"use client";
import { FC } from "react";
import styles from "./Header.module.scss";
import { SearchBar } from "../ui/SearchBar/SearchBar";

// import { SearchBar } from "@src/components/ui/SearchBar/SearchBar";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <span onClick={() => {}}>ReInvidious</span>
      <SearchBar />
    </div>
  );
};
