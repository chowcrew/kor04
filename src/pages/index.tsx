import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import useTranslate from "../hooks/useTranslate";
import { TranslateProps } from "../interface/translate";
import { Colors } from "../utils/colors";

const Home: NextPage<TranslateProps> = (props: TranslateProps) => {
  const { t, font } = useTranslate(props);
  return (
    <div
      style={{ backgroundColor: Colors.BACKGROUND }}
      className="overflow-hidden"
    >
      <Header t={t} font={font} />
      <Section1 t={t} font={font} />
      <Section2 t={t} font={font} />
      {/* <Section3 t={t} font={font} />
      <Section4 t={t} font={font} />
      <Section5 t={t} font={font} />
      <Section6 t={t} font={font} /> */}
      <Footer t={t} font={font} />
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))._nextI18Next
        .initialI18nStore,
      // Will be passed to the page component as props
    },
  };
}
