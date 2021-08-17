import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { fetchImages } from "../actions/vehicleActions";

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
    min-width: 300px;
    padding: 18px;
    white-space: initial;
  `;
  const StyledDetailInformation = styled.div`
    flex: 1 1 auto;
    padding: 18px;
    white-space: initial;
  `;
  const StyledImage = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <StyledDetailWrapper>
      <StyledPhoto>
        {images && <StyledImage src={images[0]?.formats[0]} alt="Foro of vehicle" />}
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
