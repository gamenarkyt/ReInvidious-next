"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "@/components/ui/SearchBar/SearchBar";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [query, setQuery] = useState("");

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <div className={styles.mainpage}>
      <nav>
        <Link className={styles.navitem} href="/popular">
          Popular
        </Link>
        <Link className={styles.navitem} href="/trending">
          Trending
        </Link>
      </nav>
      <div className={styles.searchcontainer}>
        <div className={styles.searchbar}>
          <AiOutlineSearch className={styles.searchicon} />
          <input
            className={styles.searchbar}
            type="search"
            placeholder="Search something..."
            value={query}
            onChange={onInputChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}
