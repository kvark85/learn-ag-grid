import { AgGridReact} from 'ag-grid-react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Header from './Header'
import Search from './Search'
import VehicleDetails from './VehicleDetails'
import {
  regionValueFormatter,
  priceValueGetter,
  amountValueFormatter,
  AmountCellRenderer,
} from '../helpers';
import { fetchMarks } from "../actions/vehicleActions";
import { getVehiclesTableData } from "../selectors/vehicleSelector";

const GroupedTable = ({ vehiclesTableData }) => {
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

  const StyledTableWrapper = styled.div`
    flex: 1 1 auto;
    min-width: 0;
    padding: 0 16px 16px 16px;
  `;

  return (
    <>
      <Header />
      <Search />
      <StyledTableWrapper>
        <div className="ag-theme-alpine" style={{ height: '100%' }}>
          <AgGridReact {...gridOptions} />
        </div>
      </StyledTableWrapper>
    </>
  )
};

export default connect(
  (state) => ({ vehiclesTableData: getVehiclesTableData(state) }),
  { fetchMarks }
)(GroupedTable);
