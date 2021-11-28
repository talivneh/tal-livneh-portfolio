import React from "react";

export default function Nav() {
  const sections = ["Top", "About", "Works", "ContactMe"];

  return (
    <div className="flex justify-end items-center w-screen h-screen z-10 fixed">
      <div className="cell table-cell">
        <ul className="dots space-y-6 mr-5">
          {sections.map((section, index) => (
            <li
              id={index}
              onClick={(e) => {
                e.target.addClass("active");
              }}
            >
              <a
                href={`#${section}`}
                className="px-2 py-1 bg-twhite rounded-full opacity-70"
              ></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
