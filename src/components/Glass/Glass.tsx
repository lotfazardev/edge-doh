import React from 'react';
import cn from '@src/utils/helper/cn.helper';
import { GlassProps } from './@types';

function Glass(props: GlassProps) {
  const { className, children, ...rest } = props;
  return (
    <div className={cn('glass', className)} {...rest}>
      {children}
    </div>
  );
}

export default Glass;
