import { en } from '../i18n/locales/en';

declare module '*.json' {
  const value: any;
  export default value;
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Translation = typeof en;
export type TranslationKeys = keyof typeof en;
