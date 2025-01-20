'use client';

import { useEffect, useState } from 'react';
import { Gradient } from './gradient/gradient';
import styles from './styles.module.css';
import clsx from 'clsx';
import { MeshProps } from './@types/index';
import cn from '@src/utils/helper/cn.helper';

function Mesh(props: MeshProps) {
  const { children, className, id = 'gradient-canvas', ...rest } = props;
  const [meshGradient, setMeshGradient] = useState<any>(null);

  useEffect(() => {
    const gradient = new Gradient() as any;
    gradient.initGradient(`#${id}`);
    setMeshGradient(gradient);
  }, [id]);

  return (
    <canvas
      className={cn(
        clsx(
          'h-full w-full transition-opacity duration-2000 ease-in-out',
          meshGradient ? 'opacity-100' : 'opacity-0',
          styles['gradient-canvas'],
          className,
        ),
      )}
      id={id}
      data-transition-in
      {...rest}
    >
      {children}
    </canvas>
  );
}

export default Mesh;
