import React from "react";
import { TCProps } from "../interface/translate";
import { Colors } from "../utils/colors";
import Lottie from 'react-lottie';
import Link from "next/link";

const Section1 = (props: TCProps) => {
  const { t, font } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: {"v":"5.5.2","fr":30,"ip":0,"op":90,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Ball","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[100]},{"t":70,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":0,"k":250,"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.689],"y":[1]},"o":{"x":[0.213],"y":[1.081]},"t":10,"s":[255]},{"i":{"x":[0.284],"y":[1]},"o":{"x":[0.918],"y":[0]},"t":24,"s":[242.838]},{"i":{"x":[0.348],"y":[1]},"o":{"x":[0.589],"y":[-0.009]},"t":50,"s":[426.703]},{"t":60,"s":[409.703]}],"ix":4}},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[113.99999999999997,113.99999999999997,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[28.594,28.594],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.297,-72.703],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":90,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Mouse","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":0,"k":250,"ix":3},"y":{"a":0,"k":250,"ix":4}},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"f","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,-58.818],[0,0],[-58.818,0],[0,0],[0,58.818],[0,0],[58.818,0]],"o":[[0,0],[-58.818,0],[0,0],[0,58.818],[0,0],[58.818,0],[0,0],[0,-58.818],[0,0]],"v":[[0.5,-186.5],[0.5,-186.5],[-106,-80],[-106,81],[0.5,187.5],[0.5,187.5],[107,81],[107,-80],[0.5,-186.5]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-47.696,0],[0,-47.696],[0,0],[47.696,0],[0,47.696],[0,0]],"o":[[47.696,0],[0,0],[0,47.696],[-47.696,0],[0,0],[0,-47.696]],"v":[[0,-167],[86.5,-80.5],[86.5,80.5],[0,167],[-86.5,80.5],[-86.5,-80.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":18,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":90,"st":0,"bm":0}],"markers":[]},
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="main">
      <div className=" d-none d-lg-block">
      <div
        style={{
          backgroundColor: "#0A1721",
        }}>
        <img
          style={{
            objectFit: "contain",
            width: "100%",
          }}
          src="/assets/img/section1_background.png"
        />
        <div className="position-absolute start-50" style={{
          bottom: "10%",
          transform: "translateX(-40px)"
        }}>
          <p
            style={{
              fontFamily: 'Lato',
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              color: Colors.WHITE,
              opacity: 0.74
            }}
          >Scroll Down</p>
          <Link href="#vision">
            <Lottie options={defaultOptions}
                    height={43}
                    width={60}/>
          </Link>
        </div>
      </div>
      <div
        className="container"
      >
        <div className="row">
          <div className="col-12">
            <div
              className="container position-absolute"
              style={{
                top: '32%'
              }}
            >
              <div className="row">
                <div className="col-12">
                  <h1 style={{
                    fontFamily: 'Lato',
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: 70,
                    lineHeight: '110%',
                    color: Colors.WHITE
                  }}>
                    {t.section1.title}
                  </h1>
                  <p style={{
                    fontFamily: 'Lato',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: '130%',
                    color: Colors.DRAK_GRAY,
                    marginTop: 20
                  }}>
                    {t.section1.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
      {/* mobile */}
      <div
        className="row text-center justify-content-center d-flex d-lg-none"
        style={{
          paddingTop: 177,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: font,
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 36,
            lineHeight: "110%",
            textAlign: "center",
            color: Colors.WHITE
          }}
        >
          {t.section1.title}
        </h1>
        <h3
          style={{
            fontFamily: font,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 11,
            lineHeight: "140%",
            textAlign: "center",
            color: Colors.DRAK_GRAY,
            marginTop: 22
          }}
        >
          {t.section1.content}
        </h3>

        <img src="/assets/img/mobile-background.png" width={"100vw"} alt="" />
      </div>
    </div>
  );
};

export default Section1;
