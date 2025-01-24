import React from "react";
import type { FC, ReactNode } from "react";

import { ElPlayer } from "./style";

interface IProps {
  children?: ReactNode;
}

const ComponentName: FC<IProps> = () => {
  return <ElPlayer></ElPlayer>;
};

export default ComponentName;
