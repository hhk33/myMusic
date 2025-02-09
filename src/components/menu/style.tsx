import styled from "styled-components";

export const ElMenu = styled.div`
  width: ${(props) => props.theme.size.menuWidth};
  height: 100%;
  background-color: #eee;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    .logo-title {
      margin-left: 10px;
      font-weight: bold;
    }
  }

  .menu-group {
    .menu-item {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 0;
      margin: 10px 0;
      padding: 10px 20px;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      transition: all 0.2s;
      color: ${(props) => props.theme.color.grayText};
      .icon {
        font-size: 16px;
        margin-left: 15px;
      }
      p {
        margin-left: 10px;
      }
    }

    .menu-item::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.color.primary};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: -1;
    }

    .menu-item:hover {
      color: #fff;
    }

    .menu-item:hover::before {
      transform: scaleX(1);
    }

    .active {
      color: #fff;
      background-color: ${(props) => props.theme.color.primary};
    }
  }

  .menu-group::after {
    content: "";
    display: block;
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid ${(props) => props.theme.color.grayStroke};
    padding-top: 10px;
  }
`;
