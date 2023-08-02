import React from "react";
import TijanGreenIcon from "../atoms/icons/tijan-green-icon";
import TijanRedIcon from "../atoms/icons/tijan-red-icon";
import Header from "../molecules/header";

function Certificates() {
  return (
    <>
      <span id="certificates"></span>
      <Header
        title="Certificates"
        text="My certificates from one of the biggest blockchain academies - Moralis Academy."
      />

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 text-center mt-10 px-10">
        <div className="">
          <div className="card m-8" style={{ textAlign: "center" }}>
            <TijanGreenIcon />
          </div>
        </div>

        <div className="">
          <div className="card m-8" style={{ textAlign: "center" }}>
            <TijanGreenIcon />
          </div>
        </div>

        <div className="sm:col-span-1 m-8">
          <div className="card" style={{ textAlign: "center" }}>
            <TijanRedIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;
