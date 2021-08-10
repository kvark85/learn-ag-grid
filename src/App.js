import React from 'react';
import { Counter } from './app/components/counter/Counter';
import {
  Switch,
  Route
} from "react-router-dom";
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './App.css';
import Menu from "./app/components/Menu";
import DragAndDropTable from "./app/components/DragAndDropTable";
import GroupedTable from "./app/components/GroupedTable";

function App() {
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

      <Counter />
    </div>
  );
}

export default App;
