import { AgGridReact} from 'ag-grid-react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { vehicleDataTable } from '../slices/vehicleSlice';
import Header from './Header'
import Search from './Search'
import VehicleDetails from './VehicleDetails'
import {
  regionValueFormatter,
  priceValueGetter,
  amountValueFormatter,
  AmountCellRenderer,
} from '../helpers';

const GroupedTable = () => {
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
    rowData: useSelector(vehicleDataTable)
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

export default GroupedTable;
