import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import {FaPlay} from 'react-icons/fa'

const AnimatedButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        onClick={() => setOpen(true)}
        href="#!"
        className="video-icon popup-youtube popup-video-btn text-decoration-none"
      >
        <i><FaPlay/></i>
      </a>
    </>
  );
};

export default dynamic(() => Promise.resolve(AnimatedButton), { ssr: false });
