"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { InvidiousApi } from "@/services/invidious.service";

const page = ({}) => {
  const searchParams = useParams();
  const videoId = searchParams["videoId"] as string;
  const {
    data: videoData,
    isLoading,
    error,
  } = useQuery("get trends", () => InvidiousApi.getVideo(videoId));
  // const [videoData, setVideoData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(
  //       `https://invidious.tiekoetter.com/api/v1/videos/${videoId}`
  //     );
  //     setVideoData(data);
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  if (!videoData?.videoThumbnails) return "Loading...";
  if (isLoading) return "loading";
  if (error) return `${error.message}`;

  return (
    <div>
      <Image
        alt="test"
        width={400}
        height={200}
        src={videoData.videoThumbnails[0]["url"]}
        // src='https://r4.wallpaperflare.com/wallpaper/626/913/146/cyberpunk-skyscraper-upside-down-animated-movies-wallpaper-6f13244f1d114a1e998a42c94e3c5194.jpg'
      />
      <span>{videoData.title}</span>
      <span>{videoData.videoId}</span>
    </div>
  );
};

export default page;
