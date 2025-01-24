import React from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Ranking: FC<IProps> = () => {
  return (
    <div>
      <h1>ranking</h1>
    </div>
  );
};

export default Ranking;
