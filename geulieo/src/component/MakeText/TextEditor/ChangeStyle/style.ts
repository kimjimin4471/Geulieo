import styled from "styled-components";

export const Title = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  color: #b8b8b8;
`;

export const SettingOption = styled.div`
  width: 100%;
`;

export const SettingOptionRow = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Key = styled.span`
  font-size: 14px;
  font-family: "Roboto";
  color: #b3b3b3;
  margin-right: 7px;
`;

export const ValueInput = styled.input`
  width: 40px;
  font-family: "Roboto";
  font-size: 14px;
  color: black;
  outline: none;
  border: none;
`;

export const DeleteButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 12px;
  cursor: pointer;
  align-self: center;
`;

export const FontColorContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Color = styled.div<{
  color: string;
}>`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background-color: ${({ color }) => color};
  border: 1px solid #c4c4c4;
`;

export const ColorInput = styled.input`
  width: 60px;
  height: 20px;
  font-size: 14px;
  color: black;
  border: none;
  outline: none;
  background-color: white;
`;
