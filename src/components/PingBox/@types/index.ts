import { ElementProps } from '@src/@types';

export interface PingBoxProps extends ElementProps<HTMLParagraphElement> {
  domain: string;
}

export type PingBoxState = {
  anyError?: boolean;
  ping: number;
  ip: string;
};
