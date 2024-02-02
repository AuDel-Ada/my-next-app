import React from 'react';

interface ProductCardProps {
  title: string;
  url: string;
}
const ProductCard = ({ title, url }: ProductCardProps) => {
  return (
    <div className="card w-80 bg-sky-700 shadow-xl m-5">
      <figure>
        <img src={url} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
