import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input.js";

const DropdownSelect = styled.select`
  font-size: ${(p) =>
    p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
  font-family: ${(p) => p.theme.fonts};
  font-weight: ${(p) => p.theme.fontWeight};
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.secondary};
  padding: 10px;
  border-radius: 5px;
  margin: 0.25em;
  padding: 0.25em 0.25em;
  display: inline-block;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: ${p => p.theme.fontSizes.small};
  }
  ${p => p.width && `
    max-width: ${p.width};
  `}
`;

const DropdownContainer = styled.div`
  display: inline-block;
`;

const ShortInputBox = styled(Input)`
  width: 50px;
`;

const Dropdown = ({
  id,
  options,
  defaultOption,
  size,
  width,
  showInput,
  setShowInput,
  customValue,
  feedValueToParent
}) => {
  const [selected, setSelected] = useState();

  const handleSelect = (event, customValue) => {
    let selectedValue = event.target.value;
    setSelected(selectedValue);
    feedValueToParent && feedValueToParent(selectedValue);
    if (setShowInput) {
      setShowInput(selectedValue === customValue);
    }
  };

  const handleInput = (event) => {
    let input = event.target.value;
    feedValueToParent && feedValueToParent(input);
  };

  useEffect(() => {
    setSelected(defaultOption)
  }, [defaultOption])

  return (
    <DropdownContainer>
      <DropdownSelect
        id={id}
        size={size}
        value={selected}
        width={width}
        onChange={(e) => handleSelect(e, customValue)}
      >
        {options.map((option, key) => {
          return (
            <option value={option.id || option} key={key}>
              {option.value || option}
            </option>
          );
        })}
      </DropdownSelect>
      {showInput &&
        <ShortInputBox size={size} onChange={(e) => handleInput(e)} placeholder={"%"} />}
    </DropdownContainer>
  );
};

export default Dropdown;
