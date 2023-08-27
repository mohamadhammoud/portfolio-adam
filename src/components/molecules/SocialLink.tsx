import React from 'react';

interface IProps {
  text: string;
  link: string;
  icon: React.ReactElement;
}

function SocialLink({ text, link, icon }: IProps) {
  return (
    <a
      href={link}
      className="group-hover:bg-new-500 group-hover:border-transparent transition-all flex space-x-3 p-8 rounded-xl border border-dashed bg-[#0A1429] border-[#3A3E4E] items-center justify-center"
    >
      {icon}
      <span className="text-white transition-all group-hover:text-interface-100 text-2xl font-semibold">
        {text}
      </span>
    </a>
  );
}

export default SocialLink;
