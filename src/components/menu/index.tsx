import React from "react";
import type { FC, ReactNode } from "react";
import { HeatMapOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import { ElMenu } from "./style";
import { MenuList } from "@/common/local-data";
import { PrimaryColor } from "@/assets/theme/index";

interface IProps {
  children?: ReactNode;
}

const Menu: FC<IProps> = () => {
  const renderMenuItems = (group: (typeof MenuList)[number]) => {
    return group.map((item) => (
      <NavLink className="menu-item" key={item.path} to={item.path}>
        <item.icon className="icon" />
        <p>{item.title}</p>
      </NavLink>
    ));
  };

  const renderMenuGroups = () => {
    return MenuList.map((group, index) => (
      <div className="menu-group" key={index}>
        {renderMenuItems(group)}
      </div>
    ));
  };

  return (
    <ElMenu>
      <div className="logo">
        <HeatMapOutlined style={{ fontSize: "30px", color: PrimaryColor }} />
        <p className="logo-title">MyMusic</p>
      </div>
      <div className="menu-list">{renderMenuGroups()}</div>
    </ElMenu>
  );
};

export default Menu;
