import React from "react";
import ChainlinkIcon from "../atoms/icons/chainlink-icon";
import GanacheIcon from "../atoms/icons/ganache-icon";
import HardhatIcon from "../atoms/icons/hardhat-icon";
import IPFSIcon from "../atoms/icons/ipfs-icon";
import JSIcon from "../atoms/icons/js-icon";
import MoralisIcon from "../atoms/icons/moralis-icon";
import NextjsIcon from "../atoms/icons/nextjs-icon";
import NodejsIcon from "../atoms/icons/nodejs-icon";
import ReactIcon from "../atoms/icons/react-icon";
import SocketIcon from "../atoms/icons/socket-icon";
import SolidityIcon from "../atoms/icons/solidity-icon";
import TruffleIcon from "../atoms/icons/truffle-icon";
import TSIcon from "../atoms/icons/ts-icon";
import WaffleIcon from "../atoms/icons/waffle-icon";
import Skillset from "../molecules/skillset";

function SkillsetCollection() {
  return (
    <>
      <div className="grid gap-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 text-center mt-20">
        <div className="">
          <Skillset text="Solidity" icon={<SolidityIcon />} />
        </div>

        <div className="">
          <Skillset text="Waffle" icon={<WaffleIcon />} />
        </div>

        <div className="">
          <Skillset text="IPFS" icon={<IPFSIcon />} />
        </div>

        <div className="">
          <Skillset text="Chainlink" icon={<ChainlinkIcon />} />
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-3 grid-cols-2 text-center mt-10">
        <div className="">
          <Skillset text="Hardhat" icon={<HardhatIcon />} />
        </div>

        <div className="">
          <Skillset text="Truffle" icon={<TruffleIcon />} />
        </div>

        <div className="col-span-2 md:col-span-1">
          <Skillset text="Ganache" icon={<GanacheIcon />} />
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 text-center mt-20">
        <div className="">
          <Skillset text="JavaScript" icon={<JSIcon />} />
        </div>

        <div className="">
          <Skillset text="NodeJs" icon={<NodejsIcon />} />
        </div>

        <div className="">
          <Skillset text="React.js" icon={<ReactIcon />} />
        </div>

        <div className="">
          <Skillset text="Moralis" icon={<MoralisIcon />} />
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-3 grid-cols-2 text-center mt-10">
        <div className="">
          <Skillset text="TypeScript" icon={<TSIcon />} />
        </div>

        <div className="">
          <Skillset text="Socket.io" icon={<SocketIcon />} />
        </div>

        <div className="col-span-2 md:col-span-1">
          <Skillset text="Next.js" icon={<NextjsIcon />} />
        </div>
      </div>
    </>
  );
}

export default SkillsetCollection;
