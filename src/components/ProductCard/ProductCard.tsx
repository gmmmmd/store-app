import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ProductCard.module.scss';

export type ProductCardProps = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  price: number;
  rate?: number;
  count?: number;
  onClick?: React.MouseEventHandler;
};

export type Product = {
  product: ProductCardProps[];
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) return null;
  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      onClick={product.onClick}
      className={styles.Card}
    >
      <img
        src={product.image}
        alt=""
        width={394}
        height={360}
        className={styles.Card__image}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.Card__textContent}>
        <span className={`text-style ${styles.Card__category}`}>
          {product.category}
        </span>
        <h3 className={`${styles.Card__title} title-h3`}>{product.title}</h3>
        <p className={`text-style ${styles.Card__description}`}>
          {product.description}
        </p>
      </div>
      <span className={styles.Card__price}>${product.price}</span>
    </Link>
  );
};

export default ProductCard;
