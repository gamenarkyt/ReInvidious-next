"use client";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import { VideoCard } from "@/components/business/VideoCard/VideoCard";
import { Chip } from "@/components/ui/Chip/Chip";
import { Loader } from "@/components/ui/Loader/Loader";
import { InvidiousApi } from "@/services/invidious.service";
import styles from "./page.module.scss";

export const ChannelPage = () => {
  const params = useParams();
  const channelId = params["channelId"] as string;
  const {
    data: channel,
    isLoading,
    error,
    refetch,
  } = useQuery("get channel info", () => InvidiousApi.getChannel(channelId), {
    keepPreviousData: false,
  });

  if (isLoading) return <Loader />;
  if (error) return `Error: `;
  if (!channel?.authorThumbnails) return "Data not found";

  return (
    <div className={styles.container}>
      <img
        src={channel.authorBanners[0]["url"]}
        className={styles.banner}
      ></img>
      <div className={styles.channelcard}>
        <img
          className={styles.channelavatar}
          src={channel.authorThumbnails[0]["url"]}
          alt="channel avatar"
        />
        <div className={styles.channelinfo}>
          <div className={styles.channelstatistics}>
            <Chip fontSize="18px">{channel.author}</Chip>
            <Chip>{channel.subCount} subs</Chip>
          </div>
          <Chip>{channel.description}</Chip>
        </div>
      </div>
      <div className={styles.channelvideos}>
        {channel.latestVideos.map((channelVideo) => {
          return (
            <div>video</div>
            // <VideoCard
            //   key={channelVideo.title}
            //   channelAvatar={channelVideo}
            //   videoUrl={channelVideo.url}
            //   channelName={channelVideo.uploaderName}
            //   channelUrl={channelVideo.uploaderUrl}
            //   channelVerified={channelVideo.uploaderVerified}
            //   dateAgo={channelVideo.uploadedDate}
            //   thumbnailUrl={channelVideo.thumbnail}
            //   videoDuration={channelVideo.duration}
            //   videoName={channelVideo.title}
            //   videoViews={channelVideo.views}
            // />
          );
        })}
      </div>
    </div>
  );
};

export default ChannelPage;
