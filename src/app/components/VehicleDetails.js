import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

const VehicleDetails = (params) => {
  const vehicle = params.vehicles.find((vehicle) => vehicle.id=== params.data.id);

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

  return (
    <StyledDetailWrapper>
      <StyledPhoto>
        {' photo '}
      </StyledPhoto>
      <StyledDetailInformation>
        {`Description: ${vehicle.autoData.description}`}
      </StyledDetailInformation>
    </StyledDetailWrapper>
  );
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehicles,
})

export default connect(mapStateToProps)(VehicleDetails);
