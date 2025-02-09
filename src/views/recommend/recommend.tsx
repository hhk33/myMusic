import React from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  return (
    <div>
      <h1>Recommend</h1>
    </div>
  );
};

export default Recommend;