import React, { useState } from 'react';
import { useStore } from 'effector-react';
import $marks from "../effectorStores/marksStore";
import { Button } from "@blueprintjs/core";
import { MenuItem } from "@blueprintjs/core";
import { MultiSelect } from "@blueprintjs/select";
import styled from 'styled-components'
import { fetchVehiclesFx } from '../effectorEventsAndEffects/eventsAndEffects';

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
    padding-right: 16px;
  `;

const StyledSearchInputWrapper = styled.div`
    width: 50%;
  `;

const Header = () => {
  const marks = useStore($marks);
  const [selectedMarks, setMarks] = useState([{ name: 'BMW', value: 9 }]);
  const loading = useStore(fetchVehiclesFx.pending);

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

  const handleSearchClick = () => fetchVehiclesFx(selectedMarks);

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

      <Button
        icon="cube-add"
        intent="primary"
        loading={loading}
        disabled={selectedMarks.length === 0}
        onClick={handleSearchClick}
      >
        Search vehicles
      </Button>
    </StyledHeader>
  )
};

export default Header;
