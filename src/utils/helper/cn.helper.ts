import clsx, { ClassArray } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(...args: ClassArray) {
  return twMerge(clsx(...args));
}
