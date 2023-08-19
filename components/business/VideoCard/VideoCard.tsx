import { FC, MouseEvent } from "react";
import styles from "./VideoCard.module.scss";
import { AiFillEye } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { secondsToTime } from "../../../utils/secondToTime";
import { roundViews } from "../../../utils/roundViews";
import { Chip } from "../../ui/Chip/Chip";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  thumbnailUrl: string;
  videoId: string;
  videoName: string;
  videoDuration: number;
  videoViews: number;
  dateAgo: string;
  // channelAvatar: string;
  channelName: string;
  channelUrl: string;
  channelVerified: boolean;
}

export const VideoCard: FC<IProps> = ({
  thumbnailUrl,
  videoId,
  videoName,
  videoDuration,
  videoViews,
  dateAgo,
  // channelAvatar,
  channelName,
  channelUrl,
  channelVerified,
}) => {
  const onVideoClickHandler = () => {
    console.log("NAvigate to video", videoId);
    window.open("/watch?videoId=" + videoId, "_blank");
  };

  const onChannelClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const nextLink = `/channel?channelId=${channelUrl.replace(
      "/channel/",
      ""
    )}`;
    window.open(nextLink, "_blank");
  };

  return (
    <Link className={styles.videocard} href={`/watch/${videoId}`}>
      <div className={styles.thumbnailcontainer}>
        <Image
          className={styles.thumbnail}
          src={thumbnailUrl}
          alt="thumbnail"
          width={300}
          height={200}
        />
      </div>
      <span className={styles.videoname}>{videoName}</span>
      <div className={styles.videoinfo}>
        <Chip>{secondsToTime(videoDuration)}</Chip>
        <Chip>
          <AiFillEye />
          {roundViews(videoViews)}
        </Chip>
        <Chip>{dateAgo}</Chip>
      </div>
      <Link href={channelUrl} className={styles.channelinfo}>
        {/* <img
          className={styles.avatar}
          src={channelAvatar}
          alt="channel avatar"
        /> */}
        <Chip fontSize="18px">
          {channelName} {channelVerified && <BiCheck />}
        </Chip>
      </Link>
    </Link>
  );
};
