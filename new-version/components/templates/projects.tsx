import React from "react";
import CoinFlipIcon from "../atoms/icons/coin-flip-icon";
import CollaborativeWhiteboardIcon from "../atoms/icons/collaborative-whiteboard-icon";
import CryptoTrackerIcon from "../atoms/icons/crypto-tracker-icon";
import DiamondHandsIcon from "../atoms/icons/diamond-hands-icon";
import MobileWalletIcon from "../atoms/icons/mobile-wallet-icon";
import SimpleChatIcon from "../atoms/icons/simple-chat-icon";
import Header from "../molecules/header";
import ProjectCard from "../molecules/project-card";

function Projects() {
  return (
    <div id="projects">
      <Header title="Projects" text="Take a look at my blockchain projects:" />

      <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 text-center mt-10 px-10">
        <div className="">
          <ProjectCard
            icon={<CollaborativeWhiteboardIcon />}
            technologies={[
              "REACT",
              "TYPESCRIPT",
              "NODEJS",
              "SOCKET.IO",
              "MORALIS",
            ]}
            title="Collaborative Whiteboard"
            description="An online collaborative whiteboard app, with private and public rooms for people to chat and draw in real-time. They can also mint NFTs!"
          />
        </div>

        <div>
          <ProjectCard
            icon={<SimpleChatIcon />}
            technologies={[
              "REACT",
              "TYPESCRIPT",
              "NODEJS",
              "SOCKET.IO",
              "MORALIS",
            ]}
            title="Simple Chat"
            description="Chat groups with limitations based on your token balances, built in Moralis 7-day challenge."
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 text-center mt-10 px-10">
        <div>
          <ProjectCard
            icon={<CoinFlipIcon />}
            technologies={[
              "REACT",
              "TYPESCRIPT",
              "NODEJS",
              "SOCKET.IO",
              "MORALIS",
            ]}
            title="Coin Flip"
            description="Multiplayer Coin Flip game using smart contracts and chainlink VRF to determine a winner in decentralized way."
          />
        </div>
        <div>
          <ProjectCard
            icon={<DiamondHandsIcon />}
            technologies={[
              "REACT",
              "TYPESCRIPT",
              "NODEJS",
              "SOCKET.IO",
              "MORALIS",
            ]}
            title="Diamond Hands"
            description="Funny blockchain game that prevents you to panic sell your cryptos by locking them in smart contract."
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 text-center mt-10 px-10">
        <div>
          <ProjectCard
            icon={<CryptoTrackerIcon />}
            technologies={[
              "REACT",
              "TYPESCRIPT",
              "NODEJS",
              "SOCKET.IO",
              "MORALIS",
            ]}
            title="Crypto Tracker"
            description="Users can see all statistics about top 250 cryptos and create their own personal portfolio."
          />
        </div>

        <div>
          <ProjectCard
            icon={<MobileWalletIcon />}
            technologies={[
              "REACT",
              "TYPESCRIPT",
              "NODEJS",
              "SOCKET.IO",
              "MORALIS",
            ]}
            title="Mobile Wallet"
            description="Shows on-chain stats off user's address. User can add personal contacts for easy assets transfer."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
