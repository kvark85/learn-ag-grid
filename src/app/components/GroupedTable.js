import { AgGridReact} from 'ag-grid-react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { vehicleDataTable } from '../slices/vehicleSlice';
import Header from './Header'
import Search from './Search'
import {
  regionValueFormatter,
  priceValueGetter,
  amountValueFormatter,
  AmountCellRenderer,
} from '../helpers';

const GroupedTable = () => {
  const gridOptions = {
    frameworkComponents: {
      amountCellRenderer: AmountCellRenderer,
    },
    defaultColDef: {
      sortable: true,
      filter: true,
      flex: 1,
    },
    columnDefs: [
      {
        headerName: 'Mark',
        field: 'markName',
        minWidth: 200,
        rowGroup: true
      },
      {
        headerName: 'Region',
        field: 'regionName',
        minWidth: 200,
        valueFormatter: regionValueFormatter
      },
      {
        headerName: 'City',
        field: 'locationCityName',
        minWidth: 200,
        rowGroup: true
      },
      {
        headerName: 'Model',
        field: 'title',
        minWidth: 200,
      },
      {
        headerName: 'USD',
        minWidth: 200,
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
