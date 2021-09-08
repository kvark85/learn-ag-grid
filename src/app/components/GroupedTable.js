import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Header from './Header'
import Search from './Search'
import VehicleDetails from './VehicleDetails'
import Aside from './Aside';
import { Button } from "@blueprintjs/core";
import {
  regionValueFormatter,
  priceValueGetter,
  amountValueFormatter,
  AmountCellRenderer,
} from '../helpers';
import { fetchMarks } from "../actions/vehicleActions";
import { getVehiclesTableData } from "../selectors/vehicleSelector";

const GroupedTable = ({ vehiclesTableData }) => {
  const [isAsideVisible, setAside] = useState(true);
  const gridOptions = {
    masterDetail: true,
    detailCellRenderer: 'vehicleDetails',
    frameworkComponents: {
      amountCellRenderer: AmountCellRenderer,
      vehicleDetails: VehicleDetails
    },
    defaultColDef: {
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 200,
    },
    columnDefs: [
      {
        headerName: 'Mark',
        field: 'markName',
        cellRenderer: "agGroupCellRenderer",
        rowGroup: true
      },
      {
        headerName: 'Region',
        field: 'regionName',
        valueFormatter: regionValueFormatter
      },
      {
        headerName: 'City',
        field: 'locationCityName',
        rowGroup: true
      },
      {
        headerName: 'Model',
        field: 'title',
      },
      {
        headerName: 'USD',
        valueGetter: priceValueGetter,
        valueFormatter: amountValueFormatter,
        cellRenderer: 'amountCellRenderer'
      },
      {
        headerName: 'Travel Route',
      },
    ],
    rowData: vehiclesTableData
  };

  const MainSection = styled.section`
    display: flex;
    flex: 1 1 auto;
    padding: 0 16px 16px 16px;
  `;

  const StyledTableWrapper = styled.div`
    flex: 1 1 auto;
    background-color: #75a1ee;
  `;
  const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    border-top: 1px solid #DADCDE;
    border-bottom: 1px solid #DADCDE;
    border-right: 1px solid #DADCDE;
  `;

  return (
    <>
      <Header />
      <Search />
      <MainSection>
        <StyledTableWrapper>
          <div className="ag-theme-alpine" style={{ height: '100%' }}>
            <AgGridReact {...gridOptions} />
          </div>
        </StyledTableWrapper>

        <StyledButtonWrapper>
          <Button
            minimal={true}
            icon={isAsideVisible ? 'double-chevron-right' : 'double-chevron-left'}
            onClick={() => setAside(!isAsideVisible)}
          />
        </StyledButtonWrapper>
        {isAsideVisible && <Aside />}
      </MainSection>
    </>
  )
};

export default connect(
  (state) => ({ vehiclesTableData: getVehiclesTableData(state) }),
  { fetchMarks }
)(GroupedTable);
