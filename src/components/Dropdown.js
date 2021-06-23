import { useState } from 'react'
import styled from "styled-components";
import Input from './Input.js';

const DropdownSelect = styled.select`
font-size: ${(p) => p.size ? p.theme.fontSizes[p.size] : p.theme.fontSizes.default};
font-family: ${(p) => p.theme.fonts};
font-weight: ${(p) => p.theme.fontWeight};
color: ${(p) => p.theme.colors.text};
padding: 10px;
border-radius: 5px;
margin: 0.25em;
padding: 0.25em 0.25em;
`;

const Dropdown = ({ options, defaultOption, size, showInput, setShowInput, customValue, ...props }) => {
    const [selected, setSelected] = useState(defaultOption);
    return (
        <div>
            <DropdownSelect size={size} value={selected} onChange={(e) => handleSelect(e, setSelected, setShowInput, customValue)}>
                {options.map((option, key) => { return (<option value={option} key={key}>{option}</option>) })}
            </DropdownSelect>
            {showInput && <Input size={size} placeholder={customValue} />}
        </div>
    )
}

const handleSelect = (event, setSelected, setShowInput, customValue) => {
    let selectedValue = event.target.value;
    setSelected(selectedValue);
    if (setShowInput) {
        let showInputVal = (selectedValue === customValue) ? true : false;
        setShowInput(showInputVal);
    }
}

export default Dropdown;