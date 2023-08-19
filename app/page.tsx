"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [trendVideos, setTrendVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://invidious.tiekoetter.com/api/v1/trending"
      );
      setTrendVideos(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.mainpage}>
      <Link href="/popular">Popular</Link>
      <Link href="/trending">Trending</Link>
      main / search page
    </div>
  );
}
