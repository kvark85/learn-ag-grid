import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchData } from './app/slices/vehicleSlice';
import {
  Switch,
  Route
} from "react-router-dom";
import 'normalize.css/normalize.css';
import Menu from "./app/components/Menu";
import DragAndDropTable from "./app/components/DragAndDropTable";
import GroupedTable from "./app/components/GroupedTable";

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()));

  return (
    <div className="App">
      <Menu />

      <div className="content-wrapper">
        <Switch>
          <Route path="/grouped-table">
            <GroupedTable />
          </Route>
          <Route path="/drag-and-drop">
            <DragAndDropTable />
          </Route>
          <Route path="/">
            <GroupedTable />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
