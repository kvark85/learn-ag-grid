import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchMarks } from '../../slices/vehicleSlice';
import styled from 'styled-components'
import {
  Switch,
  Route
} from "react-router-dom";
import 'normalize.css/normalize.css';
import Menu from "../Menu";
import DragAndDropTable from "../DragAndDropTable";
import GroupedTable from "../GroupedTable";

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchMarks()));

  const StyledApp = styled.div`
    display: flex;
    min-height: 100vh;
  `;
  const StyledContent = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  `;

  return (
    <StyledApp>
      <Menu />

      <StyledContent>
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
      </StyledContent>
    </StyledApp>
  );
}

export default App;
