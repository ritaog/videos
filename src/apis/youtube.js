import axios from "axios";
const KEY = "AIzaSyD8spJxzvmHj3LODgWKcZTipZuV8GAoaBY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    type: "video",
    part: "snippet",
    key: KEY,
  },
});
