import t from "../public/locales/ko/common.json";
export type Translate = typeof t;

export type TranslateNamespace = {
  [index: string]: Translate;
};

export type TranslateProps = {
  [index: string]: TranslateNamespace;
  en: TranslateNamespace;
  ko: TranslateNamespace;
};

export interface TCProps {
  t: Translate;
  font: "Lato" | "NotoSansKR";
  // font: "Lato" | "NotoSansJP" | "NotoSansKR";
}
