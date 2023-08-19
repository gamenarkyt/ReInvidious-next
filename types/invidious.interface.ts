export interface ITrendVideoI {
  type: string;
  title: string;
  videoId: string;
  author: string;
  authorId: string;
  authorUrl: string;
  authorVerified: boolean;
  videoThumbnails: any[];
  description: string;
  descriptionHtml: string;
  viewCount: number;
  viewCountText: string;
  published: number;
  publishedText: string;
  lengthSeconds: number;
  liveNow: boolean;
  premium: boolean;
  isUpcoming: boolean;
}

export interface IVideoI {
  type: string;
  title: string;
  videoId: string;
  videoThumbnails: any[];
  storyboards: any[];
  description: string;
  descriptionHtml: string;
  published: number;
  publishedText: string;
  keywords: any[];
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  paid: boolean;
  premium: boolean;
  isFamilyFriendly: boolean;
  allowedRegions: any[];
  genre: string;
  genreUrl: string;
  author: string;
  authorId: string;
  authorUrl: string;
  authorThumbnails: any[];
  subCountText: string;
  lengthSeconds: number;
  allowRatings: boolean;
  rating: number;
  isListed: boolean;
  liveNow: boolean;
  isUpcoming: boolean;
  dashUrl: string;
  adaptiveFormats: any[];
  formatStreams: any[];
  captions: any[];
  recommendedVideos: {
    videoId: string;
    title: string;
    videoThumbnails: any;
    author: string;
    authorUrl: string;
    authorId: string;
    lengthSeconds: number;
    viewCountText: string;
    viewCount: number;
  }[];
}
