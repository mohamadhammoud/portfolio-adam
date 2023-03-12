import React from "react";
import ArrowRightIcon from "../atoms/icons/arrow-right-icon";
import ChainIcon from "../atoms/icons/chain-icon";
import NativeButton from "../atoms/nativebutton";

function Github() {
  return (
    <div className="grid gap-20 xl:grid-cols-2 sm:grid-cols-1 text-center m-20 pt-20">
      <div className="text-left">
        <div className="text-white text-6xl md:text-7xl lg:text-8xl">
          You can find my other <span></span> projects at GitHub
        </div>

        <div className="mt-5 text-2xl md:text-3xl lg:text-4xl">
          Take a look at my blockchain projects:
        </div>

        <div className="mt-5">
          <NativeButton
            style={{
              width: 150,
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            <div>Github</div>
            <div>
              <ArrowRightIcon />
            </div>
          </NativeButton>
        </div>

        <div className="mt-10">.&nbsp;.&nbsp;.&nbsp;more coming soon!</div>
      </div>

      <div className="">
        <ChainIcon />
      </div>
    </div>
  );
}

export default Github;
