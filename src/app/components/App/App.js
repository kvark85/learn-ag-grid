import { useEffect } from 'react';
import { fetchMarksFx } from '../../effectorEventsAndEffects/eventsAndEffects';
import styled from 'styled-components'
import {
  Switch,
  Route
} from "react-router-dom";
import 'normalize.css/normalize.css';
import DragAndDropTable from "../DragAndDropTable";
import GroupedTable from "../GroupedTable";

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

const StyledContent = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
  `;

function App() {
  useEffect(fetchMarksFx);

  return (
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
  );
}

export default App;
