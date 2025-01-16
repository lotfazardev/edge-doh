import { ContainerProps } from './@types';
import cn from '@src/utils/helper/cn.helper';

function Container(props: ContainerProps) {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cn('container mx-auto max-w-[600px] px-6', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Container;
