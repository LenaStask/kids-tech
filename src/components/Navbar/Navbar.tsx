import { useState } from "react";
import { Course } from "../../api/KidsTech/types";
import "./Navbar.scss";
import React from 'react';

interface ChildProps {
  tags: string[];
  onChange: (value: string) => void;
}

const Navbar = ({ tags, onChange }: ChildProps) => {
  const [active, setActive] = useState("");

  const handleClick = (value: string) => {
    setActive(value);
    onChange(value);
  };

  
  const links = tags.map((tag) => (
    <a
      className={tag === active ? "link active" : "link"}
      href="/"
      onClick={(e) => {
        e.preventDefault();
        handleClick(tag);
      }}
      key={tag}
    >
      {tag}
    </a>
  ));

  return (
    <nav className="navbar">
      <a
        className={active === "" ? "link active" : "link"}
        href="/"
        onClick={() => handleClick("")}
      >
        Все темы
      </a>
      {links}
    </nav>
  );
};

export default React.memo(Navbar);
