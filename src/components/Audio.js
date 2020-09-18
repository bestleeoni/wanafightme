import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

const Player = () => (
    <AudioPlayer
      autoPlay
      src="./audio/podcast.m4a"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );
