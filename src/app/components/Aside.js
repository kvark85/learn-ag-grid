import styled from "styled-components";
import { Tab, Tabs, Tag } from "@blueprintjs/core";

const Aside = () => {
  const AsideContainer = styled.aside`
    width: 320px;
    border-top: 1px solid #DADCDE;
    border-bottom: 1px solid #DADCDE;
    border-right: 1px solid #DADCDE;
  `;

  const StyledDiv1 = styled.div`
    height: 35px;
    border-bottom: 1px solid #DADCDE;
    color: #000000;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 35px;
    padding: 0 16px;
  `;
  const StyledTag = styled(Tag)`
    margin-left: 16px;
  `;
  const StyledDiv2 = styled.div`
    //height: 30px;
    height: 300px;
    border-bottom: 1px solid #DADCDE;
  `;

  return (
   <AsideContainer>
     <StyledDiv1>
       Text1 & Text2
       <StyledTag round={true}>{'COMMUNICATIONS'}</StyledTag>
     </StyledDiv1>
     <StyledDiv2>

       <Tabs id="TabsExample" >
         <Tab large={false} id="ng" title="Tab1" panel={<div>111aaa</div>} />
         <Tab large={false} id="mb" title="Tab2" panel={<div>222bbb</div>} panelClassName="ember-panel" />
         <Tabs.Expander />
       </Tabs>
     </StyledDiv2>
     <div>333</div>
     <div>444</div>
     <div>555</div>
   </AsideContainer>
  )
};

export default Aside
