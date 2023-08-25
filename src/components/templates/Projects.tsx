import React from 'react';

function Projects() {
  return (
    <section className="pb-120">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto mb-10 text-center">
          <h2 className="text-4xl leading-normal xl:text-5xl xl:leading-snug font-bold text-white mb-4">
            Project
            <span className="relative z-30">
              <span className="relative z-10"> Highlights</span>
              <svg
                className="absolute right-0 bottom-1"
                width="200"
                height="10"
                viewBox="0 0 243 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7C45.1729 3.98151 151.615 -0.244386 240 7"
                  stroke="#FFD233"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-white text-xl mb-5">
            Delve into the key projects that showcase my skills and expertise.
          </p>
        </div>

        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-7">
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{
              background:
                "url('assets/images/core/security-tokens-t-rex-erc3643.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center">
              <div className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center">
                <h3 className="text-white">
                  <a
                    href="https://eips.ethereum.org/EIPS/eip-3643"
                    className="text-3xl font-semibold text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ERC-3643
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full inline-block bg-new-500"></span>
                  T-REX The leading standard for on-chain Real-World Asset
                  tokenization
                </span>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-3643"
                  className="grid place-content-center transition mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View EIP
                </a>{' '}
                <a
                  href="https://github.com/Aboudjem/ERC-3643"
                  className="grid place-content-center transition mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden lg:col-span-2"
            style={{
              background:
                "url('assets/images/core/erc-6960-house-shared-ownership.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center">
              <div className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center">
                <h3 className="text-white">
                  <a
                    href="https://eips.ethereum.org/EIPS/eip-6960"
                    className="text-3xl font-semibold text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ERC-6960
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full inline-block bg-new-500"></span>
                  DLT Pioneering on-chain fractionalization of real-world
                  assets.
                </span>
                <a
                  href="https://eips.ethereum.org/EIPS/eip-6960"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View EIP
                </a>
                <a
                  href="https://github.com/Aboudjem/ERC-6960"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{
              background:
                "url('assets/images/core/erc-20-evm-inline-assembly-yul.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center">
              <div className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center">
                <h3 className="text-white">
                  <a
                    href="https://github.com/Aboudjem/Yul-ERC20-assembly"
                    className="text-3xl font-semibold text-white"
                  >
                    Inline Assembly ERC20
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full inline-block bg-new-500"></span>
                  A hands-on ERC20 experiment using inline Assembly.
                </span>
                <a
                  href="https://github.com/Aboudjem/Yul-ERC20-assembly"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{
              background:
                "url('assets/images/core/staking-platform-erc20-solidity.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center">
              <div className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center">
                <h3 className="text-white">
                  <a
                    href="https://github.com/Aboudjem/staking-platform-fixed-apy"
                    className="text-3xl font-semibold text-white"
                  >
                    Staking Platform
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full inline-block bg-new-500"></span>
                  Secure, fixed APY with set duration, lockup, and max stake
                  capabilities.
                </span>
                <a
                  href="https://github.com/Aboudjem/staking-platform-fixed-apy"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single Item --> */}
          <div
            className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden"
            style={{
              background:
                "url('assets/images/core/erc1155-evm-yul-assembly.webp') no-repeat center center/cover"
            }}
          >
            <div className="bg-interface-100 bg-opacity-0 transition-opacity duration-500 ease-in-out absolute w-full h-full group-hover:bg-opacity-80 rounded-lg flex flex-col items-center justify-center">
              <div className="transform transition-transform duration-700 ease-in-out translate-y-24 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 max-w-xs flex flex-col items-center justify-center text-center">
                <h3 className="text-white">
                  <a
                    href="https://github.com/Aboudjem/Yul-ERC1155-assembly"
                    className="text-3xl font-semibold text-white"
                  >
                    Pure Yul ERC1155
                  </a>
                </h3>
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full inline-block bg-new-500"></span>
                  Crafted an ERC1155 token entirely with Yul Assembly.
                </span>
                <a
                  href="https://github.com/Aboudjem/Yul-ERC1155-assembly"
                  className="grid place-content-center mt-6 px-3 py-2 border border-new-500 text-new-500 text-sm rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
