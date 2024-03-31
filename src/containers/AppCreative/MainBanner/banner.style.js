import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";


const BannerWrapper = styled.div`
  padding-top: 80px;
  min-height: 850px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
    .TextAnimation{
        font-size: 120px;
        position: absolute;
        top: 449px;
        right: 399px;
        animation: mymove 10s linear 2s infinite alternate;
        opacity: 0;
    }
    
    .animation1, .animation2, .animation3{
        width: calc(100% - 99%);
        height: calc(100% - 90%);
        border-radius: 25px;
        background-color: #a9fd00;
        position: absolute;
        z-index: 100;
    }
    #div1{
        right: 737px; top:479px;
        animation: myfirst1 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
    }
    #div2{
        right: 698px; top:479px;
        transform: rotate(-20deg);
        animation: myfirst2 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
    }
    #div3{
        right: 674px; top:479px;
        transform: rotate(20deg);
        animation: myfirst3 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
    }
    #div4{
        right: 674px; top:479px;
        transform: rotate(20deg);
        animation: myfirst4 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
    }
    @keyframes mymove {
        0%  {opacity: 0;}
        25%  {opacity: 0;}
        50%  {opacity: 1;}
        75%  {opacity: 0;}
        100% {opacity: 0;}
    }
    
    @media only screen and (max-width: 2109px) {
        @keyframes myfirst1 {
            0% {
                right: 737px;
                top: 479px;
            }
            25% {
                transform: rotate(60deg);
                right: 687px;
                top: 459px;
            }
            50% {
                transform: rotate(60deg);
                right: 687px;
                top: 459px;
            }
            75% {
                transform: rotate(60deg);
                right: 687px;
                top: 459px;
            }
            100% {
                right: 737px;
                top: 479px;
            }
        }
        @keyframes myfirst2 {
            0% {
                right: 698px;
                top: 479px;
            }
            25% {
                transform: rotate(-60deg);
                right: 298px;
                top: 461px;
            }
            50% {
                transform: rotate(-60deg);
                right: 298px;
                top: 461px;
            }
            75% {
                transform: rotate(-60deg);
                right: 298px;
                top: 461px;
            }
            100% {
                right: 698px;
                top: 479px;
            }
        }
        @keyframes myfirst3 {
            0% {
                right: 674px;
                top: 479px;
            }
            25% {
                transform: rotate(60deg);
                right: 298px;
                top: 499px;
            }
            50% {
                transform: rotate(60deg);
                right: 298px;
                top: 499px;
            }
            75% {
                transform: rotate(60deg);
                right: 298px;
                top: 499px;
            }
            100% {
                right: 674px;
                top: 479px;
            }
        }
        @keyframes myfirst4 {
            0% {
                right: 674px;
                top: 479px;
            }
            25% {
                transform: rotate(10deg);
                right: 358px;
                top: 477px;
            }
            50% {
                transform: rotate(10deg);
                right: 358px;
                top: 477px;
            }
            75% {
                transform: rotate(10deg);
                right: 358px;
                top: 477px;
            }
            100% {
                right: 674px;
                top: 479px;
            }
        }
    }
    @media only screen and (max-width: 1199px) {
        .animation1, .animation2, .animation3{
            width: calc(100% - 98.7%);
            height: calc(100% - 90%);
            border-radius: 25px;
            background-color: #a9fd00;
            position: absolute;
            z-index: 100;
        }
        min-height: auto;
    }
    @media only screen and (max-width: 929px) {
        .TextAnimation{
            font-size: 120px;
            position: absolute;
            top: 449px;
            right: 299px;
        }
        @keyframes myfirst1 {
            0%  {right: 637px; top:479px;}
            25%  {transform: rotate(60deg);right: 587px; top:459px;}
            50%  {transform: rotate(60deg);right: 587px; top:459px;}
            75%  {transform: rotate(60deg);right: 587px; top:459px;}
            100% {right: 637px; top:479px;}
        }
        @keyframes myfirst2 {
            0%  {right: 598px; top:479px;}
            25%  {transform: rotate(-60deg);right: 198px; top:461px;}
            50%  {transform: rotate(-60deg);right: 198px; top:461px;}
            75%  {transform: rotate(-60deg);right: 198px; top:461px;}
            100% {right: 598px; top:479px;}
        }
        @keyframes myfirst3 {
            0%  {right: 574px; top:479px;}
            25%  {transform: rotate(60deg);right: 198px; top:499px;}
            50%  {transform: rotate(60deg);right: 198px; top:499px;}
            75%  {transform: rotate(60deg);right: 198px; top:499px;}
            100% {right: 574px; top:479px;}
        }
        @keyframes myfirst4 {
            0%  {right: 574px; top:479px;}
            25%  {transform: rotate(10deg);right: 258px; top:477px;}
            50%  {transform: rotate(10deg);right: 258px; top:477px;}
            75%  {transform: rotate(10deg);right: 258px; top:477px;}
            100% {right: 574px; top:479px;}
        }
    }
    @media only screen and (max-width: 746px) {
        .animation1, .animation2, .animation3 {
            width: calc(100% - 98.7%);
            height: calc(100% - 94%);
        }
        #div1{
            right: 437px; top:479px;
            animation: myfirst1 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        #div2{
            right: 408px; top:479px;
            animation: myfirst2 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        #div3{
            right: 394px; top:479px;
            animation: myfirst3 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        #div4{
            right: 394px; top:479px;
            animation: myfirst4 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        .TextAnimation {
            font-size: 80px;
            right: 199px;
        }
        @keyframes myfirst1 {
            0%  {right: 437px; top:479px;}
            25%  {transform: rotate(60deg);right: 387px; top:459px;}
            50%  {transform: rotate(60deg);right: 387px; top:459px;}
            75%  {transform: rotate(60deg);right: 387px; top:459px;}
            100% {right: 437px; top:479px;}
        }
        @keyframes myfirst2 {
            0%  {right: 408px; top:479px;}
            25%  {transform: rotate(-60deg);right: 138px; top:461px;}
            50%  {transform: rotate(-60deg);right: 138px; top:461px;}
            75%  {transform: rotate(-60deg);right: 138px; top:461px;}
            100% {right: 408px; top:479px;}
        }
        @keyframes myfirst3 {
            0%  {right: 394px; top:479px;}
            25%  {transform: rotate(60deg);right: 138px; top:485px;}
            50%  {transform: rotate(60deg);right: 138px; top:485px;}
            75%  {transform: rotate(60deg);right: 138px; top:485px;}
            100% {right: 394px; top:479px;}
        }
        @keyframes myfirst4 {
            0%  {right: 394px; top:479px;}
            25%  {transform: rotate(10deg);right: 178px; top:470px;}
            50%  {transform: rotate(10deg);right: 178px; top:470px;}
            75%  {transform: rotate(10deg);right: 178px; top:470px;}
            100% {right: 394px; top:479px;}
        }
    }
    @media only screen and (max-width: 510px) {
        .TextAnimation{
            top: 400px;
            right: 100px;
        }
        .animation1, .animation2, .animation3 {
            width: calc(100% - 97.7%);
            height: calc(100% - 94%);
        }
        #div1{
            right: 437px; top:479px;
            animation: myfirst1 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        #div2{
            right: 408px; top:479px;
            animation: myfirst2 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        #div3{
            right: 394px; top:479px;
            animation: myfirst3 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        #div4{
            right: 394px; top:479px;
            animation: myfirst4 10s cubic-bezier(0.71, 0, 0.27, 1.01) 2s infinite alternate;
        }
        @keyframes myfirst1 {
            0%  {right: 270px; top:410px;}
            25%  {transform: rotate(60deg);right: 245px; top:400px;}
            50%  {transform: rotate(60deg);right: 245px; top:400px;}
            75%  {transform: rotate(60deg);right: 245px; top:400px;}
            100% {right: 270px; top:410px;}
        }
        @keyframes myfirst2 {
            0%  {right: 250px; top:410px;}
            25%  {transform: rotate(-60deg);right: 43px; top:400px;}
            50%  {transform: rotate(-60deg);right: 43px; top:400px;}
            75%  {transform: rotate(-60deg);right: 43px; top:400px;}
            100% {right: 250px; top:410px;}
        }
        @keyframes myfirst3 {
            0%  {right: 235px; top:410px;}
            25%  {transform: rotate(60deg);right: 43px; top:420px;}
            50%  {transform: rotate(60deg);right: 43px; top:420px;}
            75%  {transform: rotate(60deg);right: 43px; top:420px;}
            100% {right: 235px; top:410px;}
        }
        @keyframes myfirst4 {
            0%  {right: 235px; top:410px;}
            25%  {transform: rotate(10deg);right: 78px; top:410px;}
            50%  {transform: rotate(10deg);right: 78px; top:410px;}
            75%  {transform: rotate(10deg);right: 78px; top:410px;}
            100% {right: 235px; top:410px;}
        }
    }
  > div.container {
    display: flex;
    align-items: center;
      justify-content: space-around;
    min-height: calc(850px - 80px);
    @media only screen and (min-width: 1367px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 768px) {
        min-height: calc(850px - 160px);
    }
  }
`;

export const BannerContent = styled.div`
  width: 90%;
  flex-shrink: 0;
  margin-top: -70px;
    display: flex;
    justify-content: center;
  h1 {
    font-size: 120px;
    line-height: 1.25;
    font-weight: 700;
    color: ${themeGet("colors.white", "#ffffff")};
    margin-bottom: 20px;
    letter-spacing: -2px;
    @media only screen and (max-width: 1262px) {
      font-size: 100px;
    }
    @media only screen and (max-width: 997px) {
      font-size: 80px;
    }
    @media only screen and (max-width: 690px) {
      height: 300px;
    }
  @media only screen and (max-width: 510px) {
      font-size: 60px;
  }
  }
    h2{
        font-size: 120px;
        line-height: 1.25;
        font-weight: 700;
        color: ${themeGet("colors.white", "#ffffff")};
        margin-bottom: 20px;
        letter-spacing: -2px;
    }
    @media only screen and (max-width: 746px) {
        h2 {
            font-size: 80px;
        }
    }
    @media only screen and (max-width: 510px) {
        h2 {
            font-size: 60px;
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
