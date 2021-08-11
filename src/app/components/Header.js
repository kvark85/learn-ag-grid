import { Button } from "@blueprintjs/core";
import styled from 'styled-components'

const Header = () => {
  const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    height: 46.5px;
    border-bottom: 1px solid #DADCDE;
  `;
  const StyledHeaderText = styled.div`
    flex: 1 1 auto;
    padding-left: 16px;
    color: #10161A;
    font-size: 18px;
    letter-spacing: 0;
  `;
  const StyledCog = styled(Button)`
    margin-right: 16px;
  `;

  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="Logo" />
      <StyledHeaderText>Moto search</StyledHeaderText>
      <StyledCog icon="cog" minimal={true} />
    </StyledHeader>
  )
};

export default Header;
