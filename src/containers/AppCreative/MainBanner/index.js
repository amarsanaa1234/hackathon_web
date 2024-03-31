import React from "react";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { playCircle } from "react-icons-kit/fa/playCircle";
import { openModal, closeModal } from "@redq/reuse-modal";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import logoImg from "common/assets/image/appCreative/main_logo_sp.png";
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
  VideoWrapper,
} from "./banner.style";

import bannerImg from "common/assets/image/appCreative/main_logo.png";
import bannerImgMobile from "common/assets/image/appCreative/availableThumb.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import backgroundImage from "common/assets/image/appCreative/1_1.png";

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/oAuGv5_qtlQ"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <div className="sp-img">
            {/*<Fade bottom delay={40}>*/}
            {/*  <NextImage src={logoImg} alt="logo Image" />*/}
            {/*</Fade>*/}
          </div>
          <Fade up delay={100}>
            <Heading as="h1" content={`Dev Hackathon`}/>
          </Fade>
          <div className="TextAnimation">
            <Heading as="h2" content={`2024`}/>
          </div>
        </BannerContent>

        <div id="div1" className="animation1"></div>
        <div id="div2" className="animation2"></div>
        <div id="div3" className="animation3"></div>
        <div id="div4" className="animation3"></div>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
