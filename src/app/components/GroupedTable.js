import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useSelector } from 'react-redux';
import {
  vehicleDataTable,
} from '../slices/vehicleSlice';

const TABLE_WIDTH = '100%';
const TABLE_HEIGHT = 700;

const GroupedTable = () => {
  const tableData = useSelector(vehicleDataTable);

  return (
    <div>
      <h3 className="bp3-heading">Table with real data</h3>

      <div
        className="ag-theme-alpine"
        style={{
          width: TABLE_WIDTH,
          height: TABLE_HEIGHT
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
    </div>
  )
};

export default GroupedTable;
