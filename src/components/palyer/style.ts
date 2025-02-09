import styled from "styled-components";

export const ElPlayer = styled.div`
  width: 100%;
  height: ${(props) => props.theme.size.playerHeight};
  border-top: 1px solid ${(props) => props.theme.color.grayStroke};
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.normalBackground};
`;
