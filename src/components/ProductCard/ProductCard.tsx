import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';

export type ProductCardProps = {
  id: number | null;
  image: string;
  category: string;
  title: string;
  description: string;
  price: number | null;
  rate?: number | null;
  count?: number | null;
  onClick?: React.MouseEventHandler;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  category,
  title,
  description,
  price,
  onClick,
  id,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      key={id}
      onClick={onClick}
      className={styles.Card}
    >
      <img
        src={image}
        alt=""
        width={394}
        height={360}
        className={styles.Card__image}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.Card__textContent}>
        <span className={`text-style ${styles.Card__category}`}>
          {category}
        </span>
        <h3 className={`${styles.Card__title} title-h3`}>{title}</h3>
        <p className={`text-style ${styles.Card__description}`}>
          {description}
        </p>
      </div>
      <span className={styles.Card__price}>${price}</span>
    </Link>
  );
};

export default ProductCard;
