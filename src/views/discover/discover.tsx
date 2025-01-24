import React, { Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <h1>Discover</h1>
      <Suspense>
        <Outlet /> {/* 子路由出口 */}
      </Suspense>
    </div>
  );
};

export default Discover;
