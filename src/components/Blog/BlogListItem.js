import React from "react";
import { MdQueryBuilder } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import "styles/Style.scss";
import PropTypes from "prop-types";

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
          <div className="blog-p">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

BlogListItem.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

BlogListItem.defaultProps = {
  image: "images/noimage.png",
};
