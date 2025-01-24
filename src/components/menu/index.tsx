import React from "react";
import type { FC, ReactNode } from "react";

import { ElMenu } from "./style";

interface IProps {
  children?: ReactNode;
}

const Menu: FC<IProps> = () => {
  return <ElMenu></ElMenu>;
};

export default Menu;
