import React from "react";
import type { FC, ReactNode } from "react";

import { ElContainer } from "./style.ts";

interface IProps {
  children?: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return <ElContainer>{children}</ElContainer>;
};

export default Container;
