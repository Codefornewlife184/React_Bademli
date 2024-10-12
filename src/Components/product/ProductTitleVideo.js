import React from "react";

const ProductTitleVideo = (props) => {
  const { title, video } = props;
  
  return (
    <>
      <div className="product-details__top">
        <div className="product-details__top__left">
          <h3 className="product-details__name">{title}</h3>
        </div>
        <a href={video} className="product-details__video video-button video-popup">
          <span className="icon-play"></span>
          <i className="video-button__ripple"></i>
        </a>
      </div>
      <div className="product-details__review">
        <div className="boskery-ratings">
          <span className="icon-star"></span>
          <span className="icon-star"></span>
          <span className="icon-star"></span>
          <span className="icon-star"></span>
          <span className="icon-star"></span>
        </div>
      </div>
    </>
  );
};

export default ProductTitleVideo;
