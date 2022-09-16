import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';

type DarkModalProps = {
  className: string;
  onlyButton: string;
}

const DarkModal = ({ className, onlyButton }:DarkModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        onClick={() => setOpen(true)}
        href="#!"
        className={` ${
          className
            ? 'text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 text-primary'
            : 'video-icon popup-youtube text-decoration-none'
        }`}
      >
        <IoPlayCircleOutline className={`${onlyButton && 'fa-2x'} text-primary`} />

        {!onlyButton && (
          <span className="ms-1 fw-medium text-primary"> Watch Video</span>
        )}
      </a>
    </>
  );
};

export default dynamic(() => Promise.resolve(DarkModal), { ssr: false });
