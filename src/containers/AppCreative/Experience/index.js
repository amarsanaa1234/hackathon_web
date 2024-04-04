import React from "react";
import Logo from "common/components/UIElements/Logo";
import { Icon } from "react-icons-kit";
import { ic_play_arrow } from "react-icons-kit/md/ic_play_arrow";
import { openModal, closeModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { SectionHeader } from "../appCreative.style";
import FeatureBlock from "common/components/FeatureBlock";
import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  PartnerWrapper,
  VideoWrapper,
  VideoArea,
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from "./experience.style";
import { experiences, event, partnerOrganization } from "common/data/AppCreative";
import PricingPolicy from "containers/AppModern/PricingPolicy";
import backgroundImage from "common/assets/image/appCreative/1_2.png";
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

const Experiences = () => {
  const { slogan, title, features, video_theme, clients } = experiences;

  // modal handler

  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content="ШУТИС-МХТС Sys&CoTech клуб нь 2009 оноос хойш мэдээллийн технологийн чиглэлийн оюутнуудад зориулсан олон ажил, үйл ажиллагааг удирдан зохион байгуулж явуулсаар байна." />
        </SectionHeader>
        <ExperienceMainWrap>
          <SectionHeader>
            <Heading
              content='"Dev Hackathon 2024" тэмцээний ерөнхий ивээн тэтгэгч'
              style={{ marginBottom: 0 }}
            />
          </SectionHeader>
          <SectionHeader style={{ padding: "20px 0px" }}>
            <PricingPolicy>
              <FeatureBlock
                logo
                className="experience__item"
                icon={
                  <NextImage
                    src={event.icon}
                    alt={`Icon ${event.id}`}
                    objectFit="contain"
                    className="experience__image"
                    width={500}
                    height={200}
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={event.title} />}
                description={<Text content={event.description} />}
              />
            </PricingPolicy>
          </SectionHeader>
          <SectionHeader>
            <Heading
              content="Ивээн тэтгэгч байгууллагууд"
              style={{ marginBottom: 0 }}
            />
          </SectionHeader>
          <ExperienceWrapper>
            {features.map((item, index) => (
              <FeatureBlock
                logo
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="experience__item"
                icon={
                  <NextImage
                    src={item.icon}
                    alt={`Icon ${item.id}`}
                    objectFit="contain"
                    className="experience__image"
                    width={200}
                    height={90}
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </ExperienceWrapper>
        </ExperienceMainWrap>
        <SectionHeader>
          <Heading
            content="Хамтран ажиллагч байгууллага"
            style={{ marginBottom: 0 }}
          />
        </SectionHeader>
        <PartnerWrapper>
            <FeatureBlock
              logo
              className="partner__item"
              icon={
                <NextImage
                  src={partnerOrganization.icon}
                  alt={`Icon ${partnerOrganization.id}`}
                  objectFit="contain"
                  className="partner__image"
                  width={200}
                  height={100}
                />
              }
              iconPosition="left"
              title={<Heading as="h4" content={partnerOrganization.title} />}
              description={<Text content={partnerOrganization.description} />}
            />
          </PartnerWrapper>
        <ClientWrapper>
          {/*<div className="client__text">*/}
          {/*  <Text as="span" content={"Ивээн тэтгэгч байгууллагууд"} />*/}
          {/*</div>*/}
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  target="_blank"
                  logoSrc={item.logo}
                  title={item.name}
                  logoStyle={{ height: 60 }}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  target="_blank"
                  logoSrc={item.logo}
                  title={item.name}
                  logoStyle={{ height: 60 }}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide3__key${item.id}`}
                  href={item.link}
                  target="_blank"
                  logoSrc={item.logo}
                  title={item.name}
                  logoStyle={{ height: 60 }}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
