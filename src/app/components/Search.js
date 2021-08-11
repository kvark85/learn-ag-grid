import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Button } from "@blueprintjs/core";
import { MenuItem } from "@blueprintjs/core";
import { MultiSelect } from "@blueprintjs/select";
import { marksSelector } from '../slices/vehicleSlice';
import styled from 'styled-components'

const Header = () => {
  const marks = useSelector(marksSelector);
  const [selectedMarks, setMarks] = useState([]);

  const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    min-height: 45px;
    padding: 16px;
  `;
  const StyledHeaderText = styled.div`
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0;
  `;
  const StyledSearchWrapper = styled.div`
    flex: 1 1 auto;
    padding-left: 16px;
  `;

  const StyledSearchInputWrapper = styled.div`
    width: 50%;
  `;

  const MarkMultiSelect = MultiSelect.ofType();

  const filterMark = (query, mark, _index) => {
    const normalizedMark = mark.name.toLowerCase();
    const normalizedQuery = query.toLowerCase();

    return normalizedMark.indexOf(normalizedQuery) >= 0;
  };

  const isMarkSelected = (mark) => {
    return selectedMarks.map(({ name }) => name ).includes(mark.name)
  }

  const renderMark = ({ name }, { handleClick, modifiers }) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }

    return (
      <MenuItem
        icon={isMarkSelected({ name }) ? "tick" : "blank"}
        key={name}
        onClick={handleClick}
        text={name}
      />
    );
  };

  const renderTag = ({ name }) => name;

  const handleTagRemove = (name) => deleteMark({ name });

  const clearButton = selectedMarks.length > 0 ?
    <Button icon="cross" minimal={true} onClick={() => setMarks([])} /> : undefined;

  const deleteMark = (mark) => setMarks(selectedMarks.filter(({ name }) => name !== mark.name));

  const handleMarkSelect = (mark) => {
    if (isMarkSelected(mark)) {
      return deleteMark(mark);
    }
    setMarks([...selectedMarks, mark]);
  };

  return (
    <StyledHeader>
      <StyledHeaderText>Select manufacturer and region</StyledHeaderText>
      <StyledSearchWrapper>
        <StyledSearchInputWrapper>
          <MarkMultiSelect
            itemPredicate={filterMark}
            itemRenderer={renderMark}
            items={marks}
            fill={true}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={handleMarkSelect}
            popoverProps={{ minimal: true }}
            tagRenderer={renderTag}
            tagInputProps={{
              onRemove: handleTagRemove,
              rightElement: clearButton,
            }}
            selectedItems={selectedMarks}
          />
        </StyledSearchInputWrapper>
      </StyledSearchWrapper>

      <Button icon="cube-add" intent="primary" >Search vehicles</Button>
    </StyledHeader>
  )
};

export default Header;
