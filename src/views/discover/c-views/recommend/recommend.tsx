import React from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  return (
    <div>
      <h2>Recommend</h2>
    </div>
  );
};

export default Recommend;
