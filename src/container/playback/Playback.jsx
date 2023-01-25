import React from "react";
import { Button, Form, Input } from "antd";

import "./Playback.scss";
import { useState } from "react";

const PlaybackComponent = (props) => {
  const magnet = window.localStorage.getItem("magnet");
  const link = "http://localhost:3001/watch/stream?mglink=";

  return (
    <div>
      <div className="videoContainer">
        <video controls width={600} autoPlay>
          <source src={link + encodeURIComponent(magnet)} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PlaybackComponent;
