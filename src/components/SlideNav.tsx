import Link from "next/link";
import React from "react";
import { TCProps } from "../interface/translate";
import { Colors } from "../utils/colors";

const SlideNav = (props: TCProps & { open: boolean; onClose: () => void }) => {
  const { t, font, open, onClose } = props;
  return (
    <div
      className={`position-fixed top-0 animate__nav d-lg-none`}
      style={{
        backgroundColor: Colors.BACKGROUND,
        height: "100vh",
        width: "100vw",
        zIndex: 3000,
        transform: open ? "translateX(0%)" : "translateX(100%)",
        transition: "all 1s",
      }}
    >
      <div
        style={{ transform: "translateX(-25%)", marginTop: "11%" }}
        className="position-absolute start-50 w-100"
      >
        <ul style={{ listStyle: "none", margin: 0 }} className="ps-0">
          <li style={{ padding: "3.2% 0" }}>
            <Link href="/swap">
              <a
                className="text-decoration-none text-white nav-item"
                style={{
                  fontFamily: "Lato",
                  fontSize: 14,
                }}
                onClick={onClose}
              >
                {t.header.swap!.toUpperCase()}
              </a>
            </Link>
          </li>
          <li style={{ padding: "3.2% 0" }}>
            <Link href="#inquiry">
              <a
                className="text-decoration-none text-white nav-item"
                style={{
                  fontFamily: "Lato",
                  fontSize: 14,
                }}
                onClick={onClose}
              >
                {t.header.inquiry!.toUpperCase()}
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <img
        src="/assets/svg/x_icon.svg"
        alt=""
        width={40}
        height={40}
        style={{ right: 20, top: "3.6%", zIndex: 3001 }}
        className="position-absolute"
        onClick={onClose}
      />
      <div
        style={{ transform: "translateX(-25%)", bottom: "8%" }}
        className="position-absolute start-50 w-100"
      >
        <div>
          <img
            src="/assets/img/telegram.png"
            alt="telegram"
            role="button"
            className="inline-block"
            style={{ marginRight: 27, width: 24, height: 24 }}
          />
          <img
            src="/assets/img/twitter.png"
            alt="twitter"
            role="button"
            className="inline-block"
            style={{ width: 24, height: 24 }}
          />
        </div>
        <div style={{ marginTop: "8%" }}>
          <img src="assets/img/logo.png" alt="" height={33.23} />
          <div
            style={{
              width: 1,
              height: 28,
              margin: "0 14px",
              top: 10,
            }}
            className="position-relative d-inline-block"
          ></div>
        </div>
        <p
          style={{
            color: Colors.WHITE,
            borderRadius: 12,
            fontSize: 10,
            fontFamily: font,
            lineHeight: "220%",
            letterSpacing: 0.4,
            marginTop: 14,
          }}
          className="mb-0"
        >
          {t.footer.copyright}
        </p>
      </div>
    </div>
  );
};

export default SlideNav;
