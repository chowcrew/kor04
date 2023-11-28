import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { TCProps } from "../interface/translate";
import { Colors } from "../utils/colors";
import { Locale, Locale3 } from "../interface/locale";
import { useRouter } from "next/router";
import SlideNav from "./SlideNav";
import { useScroll } from "../hooks/useScroll";
import { WalletContext } from "../context/walletContext";
import { WalletContextType } from "../context/@types/wallet";

const HeaderSwap = (props: TCProps) => {
  const { t, font } = props;
  const { scrollY } = useScroll();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [index, setIndex] = useState(0);
  const { locale, push } = useRouter();
  const { wallet, getWallet, removeWallet } = useContext(WalletContext) as WalletContextType;
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
                <li className="d-inline-block" style={{ marginLeft: 32 }}>
                  {
                    wallet === ''
                    ?
                    <div onClick={getWallet} style={{cursor:"pointer"}}>
                      <a
                        className="text-decoration-none text-white nav-item"
                        style={{ fontFamily: "Lato", paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 8, background: "linear-gradient(#E71F19, #FF5E59)" }}
                      >
                        {t.swapHeader.connect}
                      </a>
                    </div>
                    :
                    <div onClick={removeWallet} style={{cursor:"pointer"}}>
                      <a
                        className="text-decoration-none text-white nav-item"
                        style={{ fontFamily: "Lato", paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 8, background: "linear-gradient(#E71F19, #FF5E59)" }}
                      >
                        {t.swapHeader.disconnect}
                      </a>
                    </div>
                  }
                </li>
              </ul>
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
          <Link href="#main">
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
          {
                    wallet === ''
                    ? <div onClick={getWallet} style={{cursor:"pointer"}}>
                    <a
                      className="text-decoration-none text-white nav-item"
                      style={{ fontFamily: "Lato", marginRight: 16, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 8, background: "linear-gradient(#E71F19, #FF5E59)" }}
                    >
                      {t.swapHeader.connect}
                    </a>
                  </div>
                  :<div onClick={removeWallet} style={{cursor:"pointer"}}>
                  <a
                    className="text-decoration-none text-white nav-item"
                    style={{ fontFamily: "Lato", marginRight: 16, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 8, background: "linear-gradient(#E71F19, #FF5E59)" }}
                  >
                    {t.swapHeader.disconnect}
                  </a>
                </div>}
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

export default HeaderSwap;
