import React from "react";
import { MdQueryBuilder } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import "styles/Style.scss";

export const BlogListItem = ({ image, date, title, text }) => {
  return (
    <>
      <div className="blog-card">
        <div className="blog-image">
          <img src={image} alt={image} />
        </div>
        <div className="card-content">
          <MdPermIdentity className="react-icons" />
          <a href="#"> Muffin Group </a>
          <MdQueryBuilder className="react-icons" />
          {date}
          <div>
            <h2 className="title">{title}</h2>
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
