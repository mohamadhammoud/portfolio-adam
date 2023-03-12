import React from "react";

interface IProps {
  title: string;
  text: string;
}
function Header({ title, text }: IProps) {
  return (
    <div className="md:text-lg lg:text-xl text-white-600 text-center mt-20">
      <div
        style={{
          fontSize: 64,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: 24,
        }}
        className="mt-10"
      >
        {text}
      </div>
    </div>
  );
}

export default Header;
