/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly DB_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }