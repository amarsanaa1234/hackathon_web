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
import {VideoArea} from "../Experience/experience.style";
import {experiences} from "../../../common/data/AppCreative";
import { ic_play_arrow } from "react-icons-kit/md/ic_play_arrow";
import logo from "../../../common/assets/image/appCreative/2024MainLogo.png"
const { slogan, title, features, video_theme, clients } = experiences;
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
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
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
      {/* <NextImage
          layout='fill'
          objectFit='cover'
          src={backgroundImage}
          alt="Picture of the author"
          id="bakground_image"
        /> */}

      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading as="h1" content={`"Dev Hackathon <2024/>"`} />
          </Fade>
          <Fade up delay={200}>
            <Text
              style={{
                lineHeight: "1.6",
              }}
              content={`“Dev Hackathon <2024/>” Оюутан залуусын чөлөөт цагийг зөв боловсон үр дүнтэй өнгөрүүлэх, мэдлэг боловсрол бүтээлч сэтгэлгээг хөгжүүлэх, ажлын байранд бэлтгэх, улмаар улс орны хөгжилд нөлөөлөхүйц бүтээлүүдийг технологийн шийдлээр бий болгох зорилготойгоор "..." сэдвийн хүрээнд зохион байгуулагдаж байна`}
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <AnchorLink className="primary" href="#normalCount" offset={73}>
                <Button
                  href="#normalCount"
                  className="primary"
                  title="Тэмцээнд бүртгүүлэх"
                />
              </AnchorLink>
              <div onClick={handleVideoModal}>
                <Button
                  className="text"
                  variant="textButton"
                  icon={<Icon icon={playCircle} />}
                  iconPosition="left"
                  title="Хакатон гэж юу вэ?"
                />
              </div>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <VideoArea onClick={handleVideoModal}>
          <NextImage src={video_theme} alt="Microsoft" />
          <Button
              className="video__btn"
              icon={<Icon className="plus" icon={ic_play_arrow} />}
          />
        </VideoArea>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
