import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityButton = styled.button`
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  border: none;
  cursor: pointer;
`;

const handleDecrease = (value, setValue) => {
  if (value > 0) setValue(value - 1);
};

const handleIncrease = (value, setValue) => {
  setValue(value + 1);
};

const QuantitySelectorInput = styled.input`
  width: 2ch;
  height: 12px;
  font-size: ${(p) => p.theme.fontSizes.small};
  font-family: ${(p) => p.theme.fonts};
  font-weight: ${(p) => p.theme.fontWeight};
  color: ${(p) => p.theme.colors.text};
  cursor: not-allowed;
  margin: 3px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  text-align: center;

  :placeholder {
    color: ${(p) => p.placeholderColor ?? "black"};
  }
  :disabled {
    background: ${(p) => p.theme.colors.background};
  }
`;

const QuantitySelector = ({ value, setValue, disable, ...props }) => (
  <>
    {!disable &&
      <QuantityButton onClick={() => handleDecrease(value, setValue)}>
        <FaMinus />
      </QuantityButton>
    }
    <QuantitySelectorInput value={value} readonly disabled {...props} />
    {!disable &&
    <QuantityButton onClick={() => handleIncrease(value, setValue)}>
      <FaPlus />
    </QuantityButton>
    }
  </>
);

export default QuantitySelector;
