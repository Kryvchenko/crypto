import React from "react";
import "styles/Style.scss";
import { blogArray } from "./blogArray";
import { BlogListItem } from "./BlogListItem";

export const BlogList = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="flex-container">
          {blogArray.map(({ id, image, date, title, text }) => (
            <BlogListItem
              key={id}
              image={image}
              date={date}
              title={title}
              text={text}
            />
          ))}
        </div>
      </div>
    </>
  );
};
