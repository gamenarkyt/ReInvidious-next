"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { InvidiousApi } from "@/services/invidious.service";
import { AiFillEye } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { VideoCard } from "@/components/business/VideoCard/VideoCard";
import { Chip } from "@/components/ui/Chip/Chip";
import { Loader } from "@/components/ui/Loader/Loader";
import { roundViews } from "@/utils/roundViews";
import styles from "./page.module.scss";

const VideoPage = ({}) => {
  const params = useParams();
  const videoId = params["videoId"] as string;
  const {
    data: videoData,
    isFetching,
    error,
  } = useQuery("get trends", () => InvidiousApi.getVideo(videoId));
  const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);

  const onClickDescriptionHandler = () => {
    setDescriptionIsOpen(!descriptionIsOpen);
  };

  const getVideoUrl = () => {
    const videoUrl = videoData?.formatStreams.filter(
      (vid) => vid.resolution === "720p"
    );
    if (!videoUrl) {
      return "";
    }
    return videoUrl[0]["url"];
  };

  if (isFetching) return <Loader />;
  if (error) return "Error";
  if (!videoData?.formatStreams) return "Data not found";

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <video className={styles.videoplayer} src={getVideoUrl()} controls />
        <span className={styles.videoname}>{videoData.title}</span>
        <div className={styles.videoinfo}>
          <Chip>
            <AiFillEye />
            {roundViews(videoData.viewCount)}
          </Chip>
          <Chip>
            <BiLike />
            {videoData.likeCount}
          </Chip>
          <Chip>
            <BiDislike />
            {videoData.dislikeCount}
          </Chip>
        </div>
        <div
          onClick={onClickDescriptionHandler}
          className={`${styles.description} ${
            descriptionIsOpen ? styles.active : ""
          } `}
        >
          description description description description description
          description
        </div>
      </div>
      <div className={styles.submain}>
        {videoData.recommendedVideos.map((recvideo) => {
          return (
            <VideoCard
              videoName={recvideo.title}
              channelName={recvideo.author}
              channelUrl={recvideo.authorUrl}
              channelVerified={false}
              dateAgo="0"
              thumbnailUrl={recvideo.videoThumbnails[0]["url"]}
              videoDuration={recvideo.lengthSeconds}
              videoId={recvideo.videoId}
              videoViews={recvideo.viewCount}
              key={recvideo.title}
            />
          );
        })}
      </div>
    </div>
  );
};
export default VideoPage;
