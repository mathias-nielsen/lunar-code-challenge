import * as React from 'react';
import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

interface FilterOptionsProps {
  options: FilterOptionType[];
  title: string;
  setOptions: Dispatch<SetStateAction<any[]>>;
}

export type FilterOptionType = {
  checked: boolean;
  value: string;
}

export const FilterOptions = ({options, title, setOptions}: FilterOptionsProps) => {

  const handleOnChange = (index: number) => () => {
    const temp = [...options];
    const current = temp[index];
    current.checked = !current.checked;
    temp[index] = current;
    setOptions(temp);
  }

  return (
    <StyledContainer>
      { title }
      { options.map((x, index) => {
        return (
          <div key={x.value}>
            <input
              type="checkbox"
              id={x.value}
              name={x.value}
              value={x.value}
              checked={options[index].checked}
              onChange={handleOnChange(index)}
            />
            <label htmlFor={x.value}> {x.value} </label>
          </div>
        );
      })}
    </StyledContainer>
  );
}


const StyledContainer = styled.div`
  margin: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;