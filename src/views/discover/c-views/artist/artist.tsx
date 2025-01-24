import React from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Singer: FC<IProps> = () => {
  return (
    <div>
        <h1>singer</h1>
    </div>
  );
};

export default Singer;