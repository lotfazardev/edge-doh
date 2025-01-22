import { ElementProps } from '@src/@types';

export interface PingProps extends ElementProps<HTMLParagraphElement> {
  domain: string;
}

export type PingState = {
  anyError?: boolean;
  ping: number;
  ip: string;
};
