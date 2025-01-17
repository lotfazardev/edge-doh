/* eslint-disable no-unused-vars */
export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      NODE_ENV: 'development' | 'production';
      ANALYZE: 'true' | 'false';
    }
  }
}
