import { useHistory } from "react-router-dom";
import { Button, ButtonGroup } from "@blueprintjs/core";
import React from "react";

const Menu = () => {
  const history = useHistory();

  return (
    <aside className="application-aside">
      <ButtonGroup vertical={true} style={{ minWidth: 120 }}>
        <Button
          onClick={() => history.push("/grouped-table")}
          rightIcon={'caret-right'}
          text={'Grouped table'}
        />
        <Button
          onClick={() => history.push("/drag-and-drop")}
          rightIcon={'caret-right'}
          text={'Drag & Drop'}
        />
      </ButtonGroup>
    </aside>
  )
};

export default Menu;
