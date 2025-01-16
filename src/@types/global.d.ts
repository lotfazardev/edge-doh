/* eslint-disable no-unused-vars */
import { CloudflareEnv } from '../../env';

export declare global {
  namespace NodeJS {
    interface ProcessEnv extends CloudflareEnv {
      [key: string]: string | undefined;
      NODE_ENV: 'development' | 'production';
      ANALYZE: 'true' | 'false';
    }
  }
}
