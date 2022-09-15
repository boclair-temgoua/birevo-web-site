import VideoModal from '@components/common/VideoModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiArrowDownLine} from 'react-icons/ri'

const HeroSectionTen = () => {
  return (
    <section
    className="hero-section text-white hero-ten"
    style={{
      background:
        "url('/cyber_banner_img.png')no-repeat center center",
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-10">
          <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
            <h1 className="fw-bold display-5 text-white">
              Quiety is Frist priority Your Cyber Security
            </h1>
            <p className="lead">
              Velit officia consequat duis enim velit mollit Exercitation
              veniam consequat sunt nostrud amet.
            </p>
            <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
              <Link href="/request-demo" >
                  <a className="btn btn-primary">Discover More</a>
              </Link>
              <VideoModal className="true" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 mt-5">
          <div className="hero-img position-relative">
            <Image
              src="/cyber_banner_image.svg"
              alt="hero"
              width={546}
              height={367}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="cyber-down-btn text-center position-relative d-none d-lg-block">
          <Link href="#cyber-about">
            <a className="text-primary">
                <RiArrowDownLine/>
            </a>
          </Link>
      </div>
    </div>
  </section>
  )
}

export default HeroSectionTen