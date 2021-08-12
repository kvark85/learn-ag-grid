import { AgGridReact} from 'ag-grid-react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { vehicleDataTable } from '../slices/vehicleSlice';
import Header from './Header'
import Search from './Search'

const TABLE_WIDTH = '100%';
const TABLE_HEIGHT = '100%';

const GroupedTable = () => {
  const gridOptions = {
    defaultColDef: {
      sortable: true,
    },
    columnDefs: [
      { headerName: 'Mark', field: 'markName', width: 200, rowGroup: true },
      { headerName: 'Region', field: 'regionName', width: 200, rowGroup: true },
      { headerName: 'City', field: 'cityLocative', width: 200, rowGroup: true },
      { headerName: 'USD', field: 'USD', width: 200 },
      { headerName: 'Travel Route', field: 'travelRoute', width: 200 },
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
        <div
          className="ag-theme-alpine"
          style={{
            width: TABLE_WIDTH,
            height: TABLE_HEIGHT,
          }}
        >
          <AgGridReact {...gridOptions} />
        </div>
      </StyledTableWrapper>
    </>
  )
};

export default GroupedTable;
