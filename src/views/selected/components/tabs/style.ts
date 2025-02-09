import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  .tab {
    position: relative;
    margin-right: 20px;
  }

  .tab.active {
    color: #000;
    font-weight: bold;
  }
  .tab.active::after {
    content: "";
    display: block;
    width: 70%;
    height: 2px;
    margin-top: 3px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.color.primary};
  }
`;
