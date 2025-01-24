import React from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Mine: FC<IProps> = () => {
  return (
    <div>
      <h1>我的</h1>
    </div>
  );
};

export default Mine;