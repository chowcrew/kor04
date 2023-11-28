import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TCProps } from "../interface/translate";
import { Colors } from "../utils/colors";
import { Locale, Locale3 } from "../interface/locale";
import { useRouter } from "next/router";
import SlideNav from "./SlideNav";
import { useScroll } from "../hooks/useScroll";

const Header = (props: TCProps) => {
  const { t, font } = props;
  const { scrollY } = useScroll();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [index, setIndex] = useState(0);
  const { locale, push } = useRouter();
  const locales3 = Object.values(Locale3);
  const setLocaleText = (index: number) => {
    if (0 > index) return locales3[locales3.length + index]?.toUpperCase();
    return locales3[index]?.toUpperCase();
  };
  const locales = Object.values(Locale);
  const getLocale = (index: number) => {
    if (0 > index) return locales[locales.length + index];
    return locales[index];
  };
  useEffect(() => {
    // if (locale === Locale.JAPANESE) setIndex(0);
    if (locale === Locale.ENGLISH) setIndex(0);
    if (locale === Locale.KOREA) setIndex(1);
  }, [locale]);
  return (
    <>
      <nav
        style={{ background: "#000000", zIndex: 2000 }}
        className="fixed-top d-none d-lg-block"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3 col-md-2" style={{ cursor: "pointer" }}>]
              <Link href="/#main">
                <img
                  src="/assets/img/logo.png"
                  alt="logo"
                  style={{ paddingTop: 28, paddingBottom: 28.32 }}
                  width={145}
                />
              </Link>
            </div>
            <div className="col-10 text-end position-relative">
              <ul
                style={{ listStyle: "none", margin: 0 }}
                className="d-inline-block ps-0"
              >
                <li className="d-inline-block" style={{ marginLeft: 32 }}>
                  <Link href="/swap">
                    <a
                      className="text-decoration-none text-white nav-item"
                      style={{ fontFamily: "Lato" }}
                    >
                      {t.header.swap!.toUpperCase()}
                    </a>
                  </Link>
                </li>
                <li className="d-inline-block" style={{ marginLeft: 32 }}>
                  <Link href="https://yesbcoin.io">
                    <a
                      className="text-decoration-none text-white nav-item"
                      style={{ fontFamily: "Lato" }}
                      href="https://yesbcoin.io"
                    >
                      {t.header.inquiry!.toUpperCase()}
                    </a>
                  </Link>
                </li>
              </ul>
              <div
                className="d-inline-block position-relative text-start"
                style={
                  dropdown
                    ? {
                        marginLeft: 45,
                        background: "rgba(255, 255, 255, 0.3)",
                        color: Colors.WHITE,
                        padding: "8px 15px",
                        borderTop: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                        borderLeft: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                        borderRight: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }
                    : {
                        marginLeft: 45,
                        background: "rgba(255, 255, 255, 0.3)",
                        color: Colors.WHITE,
                        padding: "8px 15px",
                        border: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                        borderRadius: 8,
                      }
                }
                role="button"
                onClick={() => setDropdown(!dropdown)}
              >
                <span
                  style={{
                    marginBottom: 0,
                    marginRight: 18,
                    fontFamily: "Lato",
                    fontSize: 14,
                  }}
                >
                  {setLocaleText(index)}
                </span>
                {/* arrow_white_up_2 */}
                <img
                  src={
                    dropdown
                      ? "/assets/svg/arrow_white_up_2.svg"
                      : "/assets/svg/arrow_white_down.svg"
                  }
                  alt="arrow"
                  style={{ width: 16, height: 16 }}
                />
                <div
                  className={`position-absolute text-start start-0 top-100 ${
                    dropdown ? "" : "d-none"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    borderBottom: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                    borderLeft: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                    borderRight: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    color: Colors.WHITE,
                    paddingRight: 15,
                    margin: "0 -1px",
                  }}
                  role="button"
                >
                  <div
                    style={{
                      fontFamily: "Lato",
                      fontSize: 14,
                      padding: "10px 31px 10px 15px",
                    }}
                    className="d-inline-block"
                    onClick={() =>
                      push("/", "/", { locale: getLocale(index - 1) })
                    }
                  >
                    {setLocaleText(index - 1)}
                  </div>
                </div>
              </div>
              <div
                className="d-inline-block position-relative text-start"
                style={{ marginLeft: 41 }}>
                <img
                  src="/assets/img/telegram.png"
                  alt="telegram"
                  role="button"
                  className="inline-block"
                  style={{ marginRight: 20, width: 24, height: 24 }}
                />
                <img
                  src="/assets/img/twitter.png"
                  alt="twitter"
                  role="button"
                  className="inline-block"
                  style={{ width: 24, height: 24 }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile */}
      <nav
        className="position-fixed top-0 start-0 d-block d-lg-none w-100"
        style={{
          zIndex: 2000,
          padding: "30px 0 30px 16px",
          backgroundColor: Colors.BLACK,
        }}
      >
        <div className="container justify-content-center align-middle">
          <Link href="/#main">
            <img
              src="/assets/img/logo.png"
              alt="logo"
              height={24.13}
              style={{
                marginTop: 6
              }}
              className="d-inline-block"
            />
          </Link>
          <div className="float-end">
            <div
              className="d-inline-block position-relative text-start align-middle"
              style={
                dropdown
                  ? {
                      background: "rgba(255, 255, 255, 0.3)",
                      color: Colors.WHITE,
                      padding: "0 7px 0 0",
                      borderTop: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                      borderLeft: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                      borderRight: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      marginRight: 18,
                    }
                  : {
                      background: "rgba(255, 255, 255, 0.3)",
                      color: Colors.WHITE,
                      padding: "0 7px 0 0",
                      border: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                      borderRadius: 8,
                      marginRight: 18,
                    }
              }
              role="button"
              onClick={() => setDropdown(!dropdown)}
            >
              <div
                style={{
                  marginBottom: 0,
                  fontFamily: "Lato",
                  fontSize: 8,
                  padding: "6px 8px 6px 9px",
                }}
                className="d-inline-block align-middle"
              >
                {setLocaleText(index)}
              </div>
              {/* arrow_white_up_2 */}
              <img
                className="d-inline-block"
                src={
                  dropdown
                    ? "/assets/svg/arrow_white_up_2.svg"
                    : "/assets/svg/arrow_white_down.svg"
                }
                alt="arrow"
                style={{ width: 9, height: 9 }}
              />
              <div
                className={`position-absolute text-start start-0 top-100 ${
                  dropdown ? "" : "d-none"
                }`}
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  borderBottom: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                  borderLeft: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                  borderRight: `1px solid ${Colors.HEADER_LOCALE_BACKGROUND}`,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  color: Colors.WHITE,
                  paddingRight: 6,
                  margin: "0 -1px",
                }}
                role="button"
              >
                <div
                  style={{
                    fontFamily: "Lato",
                    fontSize: 8,
                    padding: "6px 17px 6px 9px",
                  }}
                  className="d-inline-block"
                  onClick={() =>
                    push("/", "/", { locale: getLocale(index - 1) })
                  }
                >
                  {setLocaleText(index - 1)}
                </div>
              </div>
            </div>
            <div className="d-inline-block">
              <img
                src="/assets/svg/menu_icon.svg"
                alt=""
                width={40}
                height={40}
                onClick={() => setNav(true)}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* pc */}
      <SlideNav t={t} font={font} open={nav} onClose={() => setNav(!nav)} />
    </>
  );
};

export default Header;
