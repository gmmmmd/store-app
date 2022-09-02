import React from 'react';

import Button, { ButtonColor } from '@components/Button/Button';
import { IProduct } from 'src/types/productType';

import styles from './ProductFullCard.module.scss';

export type ProductFullCardProps = {
  product: IProduct;
};

const ProductFullCard: React.FC<ProductFullCardProps> = ({ product }) => {
  const { id, image, category, title, description, price, rating } = product;
  return (
    <section className={styles.Block}>
      <div key={id} className={styles.Block__container}>
        <img
          src={image}
          alt=""
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
          className={styles.Block__img}
        />
        <div className={styles.Block__info}>
          <div className={styles.Block__titleWrapper}>
            <h2 className={`${styles.Block__title} title-h2`}>{title}</h2>
            <span className={`${styles.Block__category} text-style`}>
              {category}
            </span>
          </div>
          <div className={styles.Block__ratingWrapper}>
            <span className={styles.Block__ratingTitle}>Rating</span>
            {rating && (
              <div className={styles.Block__ratingInner}>
                <span>stars: {rating.rate}</span>
                <span>count: {rating.count}</span>
              </div>
            )}
          </div>
          <div className={`${styles.Block__description} text-style`}>
            {description}
          </div>
          <div className={`${styles.Block__price} title-h2`}>${price}</div>
          <div className={styles.Block__buttonWrapper}>
            <Button
              className={styles.Block__button}
              color={ButtonColor.primary}
            >
              Buy Now
            </Button>
            <Button
              className={styles.Block__button}
              color={ButtonColor.secondary}
            >
              Add to Chart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFullCard;
