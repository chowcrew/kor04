import React from "react";
import Link from "next/link";
import { TCProps } from "../interface/translate";
import { Colors } from "../utils/colors";

const Footer = (props: TCProps) => {
  const { t, font } = props;
  return (
    <div style={{ backgroundColor: Colors.BLACK }}>
      <div className="d-none d-lg-block container position-relative" style={{ padding: "74px 0" }}>
        {/* pc */}
        <div>
          <img src="assets/img/logo.png" alt="" width={145} />
          <br />
          <div
            style={{
              display: "flex",
              marginTop: 32.45
            }}
          >
            <p style={{
              fontFamily: font,
              fontWeight: 400,
              fontSize: 12,
              letterSpacing: 0.6,
              color: Colors.SEMI_WHITE
            }}>
              {t.footer.policy}
            </p>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 d-none d-lg-block" style={{textAlign: "right", padding: "74px 0"}}>
          <img
            src="/assets/img/telegram.png"
            alt="telegram"
            style={{ marginRight: 21.31 }}
            role="button"
          />
          <img src="/assets/img/twitter.png" alt="twitter" role="button" />
          <br />
          <p
            style={{
              fontStyle: "normal",
              color: Colors.SEMI_WHITE,
              fontSize: 12,
              fontFamily: font,
              letterSpacing: 0.6,
              fontWeight: 400,
              marginTop: 26.25
            }}
            className="d-inline-block mb-0"
          >
            {t.footer.copyright}
          </p>
        </div>
      </div>
      {/* mobile */}
      <div className="d-lg-none container position-relative" style={{ padding: "38px 28px" }}>
        <div className="d-lg-none">
          <img src="/assets/img/logo.png" width={85.64} height={26.66} alt="" />
          <p style={{
            fontFamily: font,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 9,
            letterSpacing: 0.4,
            marginTop: 5.34,
            color: Colors.WHITE
          }}>
            {t.footer.copyright}
          </p>
          <div style={{ display: "flex", marginTop: 26 }}>
            <img
              src="/assets/img/discord.png"
              alt="discord"
              role="button"
              width={19.37}
              height={19.37}
            />
            <img
              src="/assets/img/twitter.png"
              alt="twitter"
              role="button"
              width={19.37}
              height={19.37}
              style={{ marginLeft: 10.95 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 21.63
            }}
          >
            <Link href="">
              <p style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: 0.6,
                textDecorationLine: "underline",
                color: Colors.SEMI_WHITE
              }}>
                {t.footer.policy}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
