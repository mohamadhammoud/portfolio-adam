"use client";
import React, { useEffect, useState } from "react";
import ConsoleDiv from "../atoms/consolediv";
import AdamImage from "../atoms/icons/AdamImage";
import Introduction from "../atoms/introduction";
import NativeButton from "../atoms/nativebutton";
import Navbar from "../molecules/Navbar";

function Home() {
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const loadNeonCursor = async () => {
      try {
        const { neonCursor } = await import(
          "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js"
        );
        const el = document.getElementById("app");
        if (el) {
          neonCursor({
            el: el,
            shaderPoints: 16,
            curvePoints: 80,
            curveLerp: 0.5,
            radius1: 5,
            radius2: 30,
            velocityTreshold: 10,
            sleepRadiusX: 100,
            sleepRadiusY: 100,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025,
          });
        }
      } catch (error) {
        console.error("Failed to load external module", error);
      }
    };
    if (!isloaded) {
      setIsLoaded(true);
      loadNeonCursor();
    }
  }, []);

  return (
    <div
      className=""
      id="app" 
    >
      <div
        className="w-full flex flex-col items-center text-center justify-center"
        id="hero"
      >
          <Navbar></Navbar>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "50vh",
          }}
        >
          <AdamImage />
        </div>
        <div>
          <div style={{ fontSize: "1.5em" }}>Adam Boudjemaa</div>
          <ConsoleDiv></ConsoleDiv>
        </div>

        <Introduction></Introduction>
        <div className="mt-6 text-center">
          <NativeButton style={{ width: 250 }}>
            Looking to hire? Get in touch!
          </NativeButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
