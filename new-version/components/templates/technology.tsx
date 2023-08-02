import React from "react";
import Header from "../molecules/header";
import SkillsetCollection from "../organisms/skillset-collection";

function Technology() {
  return (
    <>
      <div id="skillset">
        <Header title="Skillset" text="Technologies I use in my development" />
        <SkillsetCollection />
      </div>
    </>
  );
}

export default Technology;
