import axios from "axios";
import { IChannel, ITrendVideoI, IVideoI } from "@/types/invidious.interface";

const INSTANCE = "invidious.tiekoetter.com";

let BASE_URL: string = `https://${INSTANCE}/api/v1/`;

export const InvidiousApi = {
  async getTrending(): Promise<ITrendVideoI[]> {
    console.log("Fetch to ", BASE_URL + "/trending");
    // BASE_URL = "te";

    const response = await axios.get<ITrendVideoI[]>(`${BASE_URL}trending`);
    return response.data;
  },
  async getChannel(channelId: string | undefined): Promise<IChannel> {
    if (typeof channelId == undefined) {
      channelId = "UCNPUUqi4kqjeaScWtsvfyvw";
    }
    const response = await axios.get<IChannel>(
      `${BASE_URL}channels/${channelId}`
    );
    return response.data;
  },
  async getVideo(videoId: string | undefined): Promise<IVideoI> {
    if (typeof videoId == undefined) {
      videoId = "flSHNGJK8UE";
    }
    const response = await axios.get<IVideoI>(`${BASE_URL}videos/${videoId}`);
    console.log(response.data);

    return response.data;
  },
};
