import React from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { SelectdMenu } from "@/common/local-data";
import { TabsWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Tabs: FC<IProps> = () => {
  return (
    <TabsWrapper>
      {SelectdMenu.map((item) => {
        return <NavLink className={"tab"} to={item.path}>{item.title}</NavLink>;
      })}
    </TabsWrapper>
  );
};

export default Tabs;
