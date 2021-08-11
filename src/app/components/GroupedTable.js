import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { vehicleDataTable } from '../slices/vehicleSlice';
import Header from './Header'
import Search from './Search'

const TABLE_WIDTH = '100%';
const TABLE_HEIGHT = '100%';

const GroupedTable = () => {
  const tableData = useSelector(vehicleDataTable);

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
          <AgGridReact
            rowData={tableData}>
            <AgGridColumn
              field="markName"
              sortable={ true }
              filter={ true } rowGroup={true}
            />
            <AgGridColumn
              field="title"
              sortable={ true }
              filter={ true } />
            <AgGridColumn
              field="regionName"
              sortable={ true }
              filter={ true } rowGroup={true} />
            <AgGridColumn
              field="cityLocative"
              sortable={ true }
              filter={ true } rowGroup={true} />
            <AgGridColumn
              field="USD"
              sortable={ true }
              filter={ true } />
            <AgGridColumn
              field="travelRoute"
              sortable={ true }
              filter={ true } />
          </AgGridReact>
        </div>
      </StyledTableWrapper>
    </>
  )
};

export default GroupedTable;
