"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "@/components/business/VideoCard/VideoCard";
import { useQuery } from "react-query";
import { Loader } from "@/components/ui/Loader/Loader";
import { InvidiousApi } from "@/services/invidious.service";

export default function TrendPage() {
  const {
    data: trendVideos,
    isLoading,
    error,
  } = useQuery("get trends", () => InvidiousApi.getTrending()); /////////// edit to piped service
  // const [data, setData] = useState<ITrendingVideo[]>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(
  //       "https://invidious.tiekoetter.com/api/v1/trending"
  //     );
  //     setTrendVideos(data);
  //   };
  //   fetchData();
  // }, []);

  if (isLoading) return <Loader />;
  if (error) return `Error: `;
  if (!trendVideos) return "Data not found";

  return (
    <div className={styles.mainpage}>
      <div className={styles.container}>
        {trendVideos.length &&
          trendVideos.map((video) => {
            return (
              <VideoCard
                channelName={video.author}
                channelUrl={video.authorUrl}
                channelVerified={video.authorVerified}
                dateAgo={video.publishedText}
                videoDuration={video.lengthSeconds}
                thumbnailUrl={video.videoThumbnails[0]["url"]}
                videoId={video.videoId}
                videoName={video.title}
                videoViews={video.viewCount}
                key={video.title}
              />
            );
          })}
      </div>
    </div>
  );
}
