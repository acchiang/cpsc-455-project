import { useState } from "react";
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

const Dropdown = ({
  options,
  defaultOption,
  size,
  width,
  showInput,
  setShowInput,
  customValue,
  feedValueToParent,
  ...props
}) => {
  const [selected, setSelected] = useState(defaultOption);

  const handleSelect = (event, customValue) => {
    let selectedValue = event.target.value;
    setSelected(selectedValue);
    feedValueToParent && feedValueToParent(selectedValue);
    if (setShowInput) {
      setShowInput(selectedValue === customValue);
    }
  };
  return (
    <DropdownContainer>
      <DropdownSelect
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
      {showInput && <Input size={size} placeholder={customValue} />}
    </DropdownContainer>
  );
};

export default Dropdown;
