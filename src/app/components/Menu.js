import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, ButtonGroup } from "@blueprintjs/core";
import styled from 'styled-components'

const Menu = () => {
  const history = useHistory();
  const [isAsideVisible, toggleAside] = useState(false);
  const handleToggleAside = () => toggleAside(!isAsideVisible);

  const Aside = styled.aside`
    flex: 0 1 auto;
    background-color: #f8f8f8;
    text-align: center;
    position: relative;
    border-right: 1px solid #DADCDE;
  `;
  const StyledButton = styled(Button)`
    position: absolute;
 
    bottom: ${isAsideVisible ? '8px' : '0'};
    right: ${isAsideVisible ? '8px' : '-30px'};
  `;
  const StyledButtonGroup = styled(ButtonGroup)`margin: 48px 16px`;

  return (
    <Aside>
      <StyledButton
        icon={isAsideVisible ? 'caret-left' : 'caret-right'}
        onClick={handleToggleAside}
      />

      {
        isAsideVisible &&
        <StyledButtonGroup vertical={true}>
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
        </StyledButtonGroup>
      }

    </Aside>
  )
};

export default Menu;
