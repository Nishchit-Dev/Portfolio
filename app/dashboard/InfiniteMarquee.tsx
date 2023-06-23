"use client";
import { Icon } from "@chakra-ui/react";
import "./Marquee.css";

const Marquee = () => {
  return (
    <>
      <div className="marquee-container">
        <div className="marquee-content">
          <span>"marquee-content marquee-content marquee-content"</span>
          <span>"marquee-content marquee-content marquee-content"</span>
          <span>"marquee-content marquee-content marquee-content"</span>

          <span>"marquee-content marquee-content marquee-content"</span>
        </div>

        <div className="marquee-content" aria-hidden={true}>
          <span>"marquee-content marquee-content marquee-content"</span>

          <span>"marquee-content marquee-content marquee-content"</span>
          <span>"marquee-content marquee-content marquee-content"</span>
          <span>"marquee-content marquee-content marquee-content"</span>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__group">
          <span>hello there ➺</span>
          <span>hello there ➺</span>
          <span>hello there ➺</span>
        </div>
        <div className="marquee__group" aria-hidden="true">
          <span>hello there ➺</span>
          <span>hello there ➺</span>
          <span>hello there ➺</span>
        </div>
      </div>
    </>
  );
};

export default Marquee;
