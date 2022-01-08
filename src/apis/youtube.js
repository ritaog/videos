import axios from "axios";
import { apiKey } from "./config/api_key";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    type: "video",
    part: "snippet",
    key: apiKey(),
  },
});
