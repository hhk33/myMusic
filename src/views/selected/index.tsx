import React from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Tabs from "./components/tabs";

interface IProps {
  children?: ReactNode;
}

const Selected: FC<IProps> = () => {
  return (
    <div>
      <Tabs />
      <Outlet />
    </div>
  );
};

export default Selected;
