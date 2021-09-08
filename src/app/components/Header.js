import { Button } from "@blueprintjs/core";
import logo from '../../images/logo.png';
import styled from 'styled-components'

const Search = () => {
  const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: 45px;
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
      <img src={logo} alt="Logo" />
      <StyledHeaderText>Moto search</StyledHeaderText>
      <StyledCog icon="cog" minimal={true} />
    </StyledHeader>
  )
};

export default Search;
