import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { fetchImages } from "../actions/vehicleActions";
import { Carousel } from 'react-responsive-carousel';

const VehicleDetails = ({
  data,
  vehicles,
  images,
  fetchImages
}) => {
  useEffect(() => {
    if(images.length !== 0) return;

    fetchImages(data.id);
  });
  const vehicle = vehicles.find((vehicle) => vehicle.id === data.id);

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

  return (
    <StyledDetailWrapper>
      <StyledPhoto>
        <Carousel centerMode={false}>
            {images.map((image, index) => (
              <ImageWrapper>
                <StyledImage key={index} src={image.formats[0]} alt="Foro of vehicle" />
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

const mapStateToProps = (state, property) => ({
  vehicles: state.vehicleState.vehicles,
  images: state.vehicleState.images[property.data.id] || [],
});

export default connect(mapStateToProps, { fetchImages })(VehicleDetails);
