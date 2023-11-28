import { Translate, TranslateProps } from "../interface/translate";
import { useRouter } from "next/router";

const useTranslate = (props: TranslateProps) => {
  const { locale } = useRouter();
  const t = props[locale ? locale : "ko"]["common"];
  const font: "Lato" | "NotoSansKR" = locale // 로케일이 none이면 기본 한국어
    ? locale === "en" // 영어면
      ? "Lato" // 라토
      : "NotoSansKR" // 아니면 한국
    : "NotoSansKR";
  return { t, font };
};

export default useTranslate;
