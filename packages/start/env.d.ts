declare global {
  interface ImportMetaEnv extends Record<`VITE_${string}`, any>, SolidStartMetaEnv {
    BASE_URL: string;
    MODE: string;
    DEV: boolean;
    PROD: boolean;
    SSR: boolean;
  }

  interface SolidStartMetaEnv {
    START_SSR: string;
    START_ISLANDS: string;
    START_DEV_OVERLAY: string;
    SERVER_BASE_URL: string;
  }
}

export { };
