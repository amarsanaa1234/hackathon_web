import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";

const playPluse = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const BannerWrapper = styled.div`
  padding-top: 80px;
  min-height: 850px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1199px) {
    min-height: auto;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 70px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(850px - 80px);
    @media only screen and (min-width: 1367px) {
      max-width: 1380px;
    }
    @media only screen and (max-width: 1199px) {
      padding-top: 80px;
      padding-bottom: 0px;
      min-height: auto;
    }
    @media only screen and (max-width: 991px) {
      padding-top: 92px;
      padding-bottom: 5px;
    }
    @media only screen and (max-width: 768px) {
      padding-bottom: 10px;
    }
  }
  // .bakground_image{
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: contain;
  //   object-position: center;
  // }
`;

export const BannerContent = styled.div`
  width: 54%;
  flex-shrink: 0;
  margin-top: -70px;
  @media only screen and (max-width: 1366px) {
    width: 48%;
  }
  @media only screen and (max-width: 1219px) {
    flex-shrink: 0;
    width: 56%;
    margin-top: 0px;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (max-width: 624px) {
    width: 100%;
  }
  h1 {
    font-size: 72px;
    line-height: 1.25;
    font-weight: 700;
    color: ${themeGet("colors.white", "#ffffff")};
    margin-bottom: 20px;
    letter-spacing: -2px;
    @media only screen and (max-width: 1366px) {
      font-size: 52px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 36px;
      line-height: 1.35;
    }
    @media only screen and (max-width: 480px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 20px;
    line-height: 2;
    color: #ffffff;
    padding-right: 70px;
    @media only screen and (max-width: 1366px) {
      font-size: 18px;
      padding-right: 0;
    }
    @media only screen and (max-width: 1199px) {
      padding-right: 50px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 16px;
      line-height: 1.8;
    }
    @media only screen and (max-width: 480px) {
      padding-right: 0;
    }
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  margin-left: -140px;
  margin-top: -80px;
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;
export const BannerImageMobile = styled.div`
  display: none;
  @media only screen and (max-width: 1199px) {
    display: block;
  }
  @media only screen and (max-width: 991px) {
    margin-right: -40px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    &.primary {
      background-color: rgba(14, 14, 33, .7);
      color: ${themeGet("colors.white")};
      font-size: 15px;
      min-height: 55px;
      &:hover {
        box-shadow: 0px 9px 20px -5px rgba(14, 14, 33, .7);
      }
    }

    &.text {
      font-size: 17px;
      color: rgba(14, 14, 33, .7);
      letter-spacing: -0.3px;
      font-weight: 700;
      margin-left: 5px;
      .btn-icon {
        svg {
          width: auto;
          height: 32px;
        }
      }
    }
  }
`;

export const VideoWrapper = styled.div`
  max-width: 100%;
  position: relative;
  width: 900px;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default BannerWrapper;
