import styled from "styled-components";

const inputSize = {
  small: 12,
  medium: 24,
  large: 36,
  default: 24,
};

const InputBox = styled.input`
  width: ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) * 9}px;
  height: ${(p) => inputSize[`${p.size}`] ?? inputSize["default"]}px;
  font-size: ${(p) => inputSize[`${p.size}`] ?? inputSize["default"]}px;
  color: ${(p) => p.fontColor ?? "black"};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "text")};
  margin: ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) / 3}px
    ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) / 3}px;
  padding: 10px;
  border: ${(p) => p.border ?? "1px solid black"};
  border-radius: 3px;
  
  :placeholder{
    color: ${(p) => p.placeholderColor ?? "black"}
  }
  :disabled {
    background: #EEEEEE;
  }
`;

const Label = styled.label`
  display: inline-block;
  font-size: ${(p) => inputSize[`${p.size}`] ?? inputSize["default"]}px;
  min-width: ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) * 6}px;
  max-width: ${(p) => (inputSize[`${p.size}`] ?? inputSize["default"]) * 6}px;
  text-align: left;
`;

const Input = ({ label, size, setValue, placeholder, ...props }) => (
  <>
    {label && <Label size={size}>{label}:</Label>}
    <InputBox
      size={size}
      name={label ?? placeholder}
      placeholder={placeholder}
      onChange={setValue ? (e) => setValue(e.target.value) : null}
      {...props}
    />
  </>
);

export default Input;
