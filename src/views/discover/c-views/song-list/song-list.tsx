import React from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Songs: FC<IProps> = () => {
  return (
    <div>
      <h1>歌单</h1>
    </div>
  );
};

export default Songs;
