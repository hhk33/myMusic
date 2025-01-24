import styled from "styled-components";

export const ElContainer = styled.div`
  display: flex;
  height: calc(100vh - ${(props) => props.theme.size.playerHeight});
`;
