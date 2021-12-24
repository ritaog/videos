import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const { thumbnails, description, title } = video.snippet;

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={thumbnails.medium.url} alt={description} />

      <div className="header" style={{ marginLeft: "20px" }}>
        {title}
      </div>
    </div>
  );
};

export default VideoItem;
