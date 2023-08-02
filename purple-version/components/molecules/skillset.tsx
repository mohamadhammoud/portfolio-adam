import React from "react";

interface IProps {
  text: string;
  icon: React.ReactNode;
}

function Skillset({ text, icon }: IProps) {
  return (
    <>
      <div className="skill-set">{icon}</div>
      <div className="mt-4">{text}</div>
    </>
  );
}

export default Skillset;
