import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import styled from "styled-components";
import { fetchImagesFx } from '../effectorEventsAndEffects/eventsAndEffects';
import { Carousel } from 'react-responsive-carousel';
import { $vehicles } from "../effectorStores/vehiclesStore";
import $images from "../effectorStores/imagesStore";

const StyledDetailWrapper = styled.div`
    display: flex;
    height: 300px;
  `;
const StyledPhoto = styled.div`
    max-width: 300px;
    width: 300px;
    min-width: 300px;
    padding: 18px;
    white-space: initial;
  `;
const StyledDetailInformation = styled.div`
    flex: 1 1 auto;
    padding: 18px;
    white-space: initial;
  `;
const ImageWrapper = styled.div`
    width: calc(300px - (2 * 16px));
    height: calc(300px - (2 * 16px));
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
const StyledImage = styled.img`
    height: auto;
    width: 100%;
  `;

const VehicleDetails = ({ data }) => {
  const vehicles = useStore($vehicles);
  const vehiclesImages = useStore($images)[data.id] || [];
  useEffect(() => {
    if(vehiclesImages.length !== 0) return;

    fetchImagesFx(data.id);
  });
  const vehicle = vehicles.find((vehicle) => vehicle.id === data.id);

  return (
    <StyledDetailWrapper>
      <StyledPhoto>
        <Carousel centerMode={false}>
            {vehiclesImages.map((image, index) => (
              <ImageWrapper key={index}>
                <StyledImage src={image.formats[0]} alt="Foro of vehicle" />
              </ImageWrapper>
            ))}
        </Carousel>
      </StyledPhoto>
      <StyledDetailInformation>
        {`Description: ${vehicle.autoData.description}`}
      </StyledDetailInformation>
    </StyledDetailWrapper>
  );
};

export default VehicleDetails;
