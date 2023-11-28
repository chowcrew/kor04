import React from "react";
import { TCProps } from "../interface/translate";
import { Colors } from "../utils/colors";

const Section2 = (props: TCProps) => {
  const { t, font } = props;
  return (
    <div
      style={{ backgroundColor: Colors.BACKGROUND }}
      className="position-relative"
      id="vision"
    >
      <div>
        <div className="container">
          <div
            className="row text-center justify-content-center d-none d-lg-flex"
            style={{ paddingTop: 60, margin: 0 }}
          >
            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div>
                <img
                  src="/assets/img/logo.png"
                  alt="logo"
                  style={{ paddingBottom: 28.32 }}
                  width={212.46}
                />
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: font,
                    fontStyle: 'normal',
                    fontWeight: 300,
                    fontSize: 45,
                    lineHeight: '120%',
                    letterSpacing: '-0.03em',
                    color: Colors.WHITE,
                    marginTop: 37,
                  }}
                >
                  {t.section2.content}
                </h1>
                <img src="/assets/img/vision_bg.png" style={{ width: 453, height: 201, transform: "translateY(-140px)" }} alt="" />
              </div>
            </div>

            <div
              className="col-4"
              style={{ 
                transform: "translateY(-95px)"
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img 
                src="/assets/img/decentralization.png"
                alt="decentralization"
                style={{ width: 97, height: 97 }}
              />
              <h3
                style={{
                  fontFamily: font,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '130%',
                  textTransform: "uppercase",
                  color: Colors.WHITE,
                  marginTop: 8
                }}
              >
                {t.section2.vision[0].title}
              </h3>
              <p
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "140%",
                  color: Colors.LITE_DES_GRAY
                }}
              >
                {t.section2.vision[0].content}
              </p>
            </div>

            <div
              className="col-4"
              style={{ 
                transform: "translateY(-95px)"
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img 
                src="/assets/img/profitability.png"
                alt="decentralization"
                style={{ width: 97, height: 97 }}
              />
              <h3
                style={{
                  fontFamily: font,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '130%',
                  textTransform: "uppercase",
                  color: Colors.WHITE,
                  marginTop: 8
                }}
              >
                {t.section2.vision[1].title}
              </h3>
              <p
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "140%",
                  color: Colors.LITE_DES_GRAY
                }}
              >
                {t.section2.vision[1].content}
              </p>
            </div>

            <div
              className="col-4"
              style={{ 
                transform: "translateY(-95px)"
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img 
                src="/assets/img/valuable.png"
                alt="decentralization"
                style={{ width: 97, height: 97 }}
              />
              <h3
                style={{
                  fontFamily: font,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '130%',
                  textTransform: "uppercase",
                  color: Colors.WHITE,
                  marginTop: 8
                }}
              >
                {t.section2.vision[2].title}
              </h3>
              <p
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "140%",
                  color: Colors.LITE_DES_GRAY
                }}
              >
                {t.section2.vision[2].content}
              </p>
            </div>
          </div>
          {/* mobile */}
          <div
            className="row text-center justify-content-center d-flex d-lg-none"
            style={{
              paddingTop: 127,
              textAlign: "center",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="row text-center justify-content-center d-flex justify-content-cente"
            >
              <div
                style={{
                  border: `1px solid ${Colors.LITE_GRAY}`,
                  width: 12.24,
                  marginBottom: 6
                }}
              ></div>
              <h3
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "130%",
                  textAlign: "center",
                  color: Colors.LITE_GRAY
                }}
              >
                {t.section2.title}
              </h3>
              <h1
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: 23,
                  lineHeight: "120%",
                  textAlign: "center",
                  color: Colors.WHITE,
                  letterSpacing: '-0.03em',
                  marginTop: 27
                }}
              >
                {t.section2.content}
              </h1>
            </div>
            
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              style={{ marginTop: 74 }}
            >
              <img 
                src="/assets/img/decentralization.png"
                alt="decentralization"
                style={{ width: 76, height: 76 }}
              />
              <h3
                style={{
                  fontFamily: font,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 13,
                  lineHeight: '130%',
                  textTransform: "uppercase",
                  color: Colors.WHITE
                }}
              >
                {t.section2.vision[0].title}
              </h3>
              <p
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 11,
                  lineHeight: "140%",
                  color: Colors.LITE_DES_GRAY,
                  marginTop: 9
                }}
              >
                {t.section2.vision[0].content}
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              style={{ marginTop: 84 }}
            >
              <img 
                src="/assets/img/profitability.png"
                alt="decentralization"
                style={{ width: 76, height: 76 }}
              />
              <h3
                style={{
                  fontFamily: font,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 13,
                  lineHeight: '130%',
                  textTransform: "uppercase",
                  color: Colors.WHITE
                }}
              >
                {t.section2.vision[1].title}
              </h3>
              <p
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 11,
                  lineHeight: "140%",
                  color: Colors.LITE_DES_GRAY,
                  marginTop: 9
                }}
              >
                {t.section2.vision[1].content}
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              style={{ marginTop: 84 }}
            >
              <img 
                src="/assets/img/valuable.png"
                alt="decentralization"
                style={{ width: 76, height: 76 }}
              />
              <h3
                style={{
                  fontFamily: font,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 13,
                  lineHeight: '130%',
                  textTransform: "uppercase",
                  color: Colors.WHITE,
                }}
              >
                {t.section2.vision[2].title}
              </h3>
              <p
                style={{
                  fontFamily: font,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 11,
                  lineHeight: "140%",
                  color: Colors.LITE_DES_GRAY,
                  marginTop: 9
                }}
              >
                {t.section2.vision[2].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
