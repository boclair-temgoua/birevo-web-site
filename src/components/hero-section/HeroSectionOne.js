/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import VideoModal from '../common/VideoModal';

const HeroSectionOne = () => {
  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient"
      style={{ background: "url('/hero-dot-bg.png')no-repeat center right" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5">
                Get Fully Control and Visibility your Company
              </h1>
              <p className="lead">
                Proactively coordinate quality quality vectors vis-a-vis supply
                chains. Quickly engage client-centric web services.
              </p>
              <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo">
                  <a className="btn btn-primary">Request For Demo</a>
                </Link>
                <VideoModal className="true" />
              </div>
              <div className="row justify-content-lg-start mt-60">
                <h6 className="text-white-70 mb-2">Our Top Clients:</h6>
                <div className="col-4 col-sm-3 my-2 ps-lg-0">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-1.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-2.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-3.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative circle-shape-images">
              <ul className="position-absolute animate-element parallax-element circle-shape-list">
                <li className="layer" data-depth="0.03">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-0 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.02">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-1 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.04">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-2 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.04">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-3 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-4 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-5 hero-1"
                  />
                </li>
              </ul>

              <img
                src="/hero-1.png"
                alt="hero img"
                className="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
