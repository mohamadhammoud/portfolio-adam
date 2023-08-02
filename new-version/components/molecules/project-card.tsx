import React from "react";

interface IProps {
  icon: React.ReactElement;
  technologies: string[];
  title: string;
  description: string;
}
function ProjectCard({ icon, technologies, title, description }: IProps) {
  return (
    <div className="card m-2 " style={{ textAlign: "center" }}>
      <div className="rounded shadow-lg w-full">
        <div className="w-full px-2">{icon}</div>
        <div className="px-6 pt-4 pb-2 text-white">
          {technologies.map((tech: string) => (
            <span
              key={"tech"}
              className="inline-block bg-white bg-opacity-10 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="px-6 py-4 text-white">
          <div className="font-bold text-xl mb-2 text-left">{title}</div>
          <p className="text-base text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
